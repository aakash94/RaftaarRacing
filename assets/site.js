/* Raftaar Racing site loader.
   GROWN-UP FILE — kids don't edit this. It reads the files in /content
   and the pictures in /images and builds the page. */

// ---------- tiny helpers ----------
function $(id) { return document.getElementById(id); }

async function loadText(path) {
  try {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) return "";
    return await res.text();
  } catch (e) { return ""; }
}

// "Aryahi Shah" -> "aryahi-shah"
function slugify(name) {
  return name.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// strip simple <!-- comments --> from a markdown file
function stripComments(text) { return text.replace(/<!--[\s\S]*?-->/g, ""); }

// an <img> that swaps to a styled placeholder if the file is missing
function imageOrPlaceholder(src, label, extraClass) {
  const wrap = document.createElement("div");
  wrap.style.width = "100%"; wrap.style.height = "100%";
  const img = new Image();
  img.src = src; img.alt = label; img.loading = "lazy";
  if (extraClass) img.className = extraClass;
  img.style.width = "100%"; img.style.height = "100%"; img.style.objectFit = "cover";
  img.onerror = function () {
    const ph = document.createElement("div");
    ph.className = "img-placeholder" + (extraClass ? " " + extraClass : "");
    ph.textContent = label;
    wrap.replaceChildren(ph);
  };
  wrap.replaceChildren(img);
  return wrap;
}

// ---------- parsers (pure) ----------
// "key: value" lines -> { key: value }
function parseSettings(text) {
  const out = {};
  text.split(/\r?\n/).forEach(line => {
    const t = line.trim();
    if (!t || t.startsWith("#")) return;
    const i = t.indexOf(":");
    if (i === -1) return;
    out[t.slice(0, i).trim()] = t.slice(i + 1).trim();
  });
  return out;
}

// "label: value" single line out of a markdown file
function lineValue(text, key) {
  const re = new RegExp("^\\s*" + key + "\\s*:\\s*(.*)$", "im");
  const m = text.match(re);
  return m ? m[1].trim() : "";
}

// all "button: text | link" lines
function parseButtons(text) {
  const out = [];
  text.split(/\r?\n/).forEach(line => {
    const m = line.match(/^\s*button\s*:\s*(.*)$/i);
    if (!m) return;
    const parts = m[1].split("|");
    const label = (parts[0] || "").trim();
    const href = (parts[1] || "").trim();
    if (label) out.push({ label, href });
  });
  return out;
}

// "- big | small" lines -> [{value, label}]
function parseSpecs(text) {
  const out = [];
  text.split(/\r?\n/).forEach(line => {
    const m = line.match(/^\s*-\s+(.*)$/);
    if (!m) return;
    const parts = m[1].split("|");
    out.push({ value: (parts[0] || "").trim(), label: (parts[1] || "").trim() });
  });
  return out;
}

// team.md -> [{name, role}]
function parseTeam(text) {
  const clean = stripComments(text);
  const people = [];
  let current = null;
  clean.split(/\r?\n/).forEach(line => {
    const h = line.match(/^\s*##\s+(.*)$/);
    if (h) { current = { name: h[1].trim(), role: "" }; people.push(current); return; }
    if (current && !current.role && line.trim()) current.role = line.trim();
  });
  return people.filter(p => p.name);
}

// remove "key: value" config lines + buttons from a markdown body before rendering prose
function bodyOnly(text) {
  return stripComments(text)
    .split(/\r?\n/)
    .filter(l => !/^\s*(eyebrow|button)\s*:/i.test(l))
    .join("\n");
}

// ---------- section renderers ----------
function applyColors(s) {
  const root = document.documentElement.style;
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s["color-yellow"] || ""))
    root.setProperty("--primary-yellow", s["color-yellow"]);
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s["color-purple"] || ""))
    root.setProperty("--primary-purple", s["color-purple"]);
}

function renderHeaderFooter(s) {
  const name = s["team-name"] || "Raftaar Racing";
  $("nav-team-name").textContent = name;
  $("footer-team-name").textContent = name;
  $("copyright").textContent =
    "© " + new Date().getFullYear() + " " + name.toUpperCase() + ". ALL RIGHTS RESERVED.";
  const email = s["contact-email"] || "";
  const contact = $("nav-contact");
  if (email) contact.href = "mailto:" + email; else contact.style.display = "none";
}

function renderSocial(s) {
  const wrap = $("social-links");
  [["Instagram", "instagram"], ["LinkedIn", "linkedin"],
   ["YouTube", "youtube"], ["Twitter", "twitter"]].forEach(([label, key]) => {
    const url = (s[key] || "").trim();
    if (!url) return;
    const a = document.createElement("a");
    a.href = url; a.textContent = label; a.target = "_blank"; a.rel = "noopener";
    wrap.appendChild(a);
  });
}

function renderStats(s) {
  const bar = $("stats-bar");
  for (let i = 1; i <= 4; i++) {
    const num = s["stat-" + i + "-number"], lab = s["stat-" + i + "-label"];
    if (!num && !lab) continue;
    const item = document.createElement("div");
    item.className = "stat-item";
    item.innerHTML =
      '<div class="stat-number" data-target="' + (num || "") + '">' + (num || "") +
      '</div><div class="stat-label">' + (lab || "") + "</div>";
    bar.appendChild(item);
  }
}

function renderHero(text, s) {
  $("hero-eyebrow").textContent = lineValue(text, "eyebrow");
  $("hero-title").textContent = s["team-name"] || "Raftaar Racing";
  $("hero-tagline").textContent = s["tagline"] || "";
  const wrap = $("hero-buttons");
  parseButtons(text).forEach((b, idx) => {
    if (!b.href) return;
    const a = document.createElement("a");
    a.className = "contact-btn";
    if (idx > 0) { a.style.background = "transparent"; a.style.border = "2px solid #fff"; a.style.color = "#fff"; }
    a.style.padding = "12px 30px";
    a.href = b.href; a.textContent = b.label;
    if (/^https?:/i.test(b.href)) { a.target = "_blank"; a.rel = "noopener"; }
    wrap.appendChild(a);
  });
}

function renderAbout(text) {
  const body = bodyOnly(text).trim();
  $("about-text").innerHTML = body ? marked.parse(body)
    : "<p>Tell everyone about your team here (edit content/about.md).</p>";
}

function renderCar(text) {
  const specs = parseSpecs(text);
  // prose = everything that's not a spec bullet
  const prose = bodyOnly(text).split(/\r?\n/).filter(l => !/^\s*-\s+/.test(l)).join("\n").trim();
  let html = prose ? marked.parse(prose) : "<p>Describe your car here (edit content/car.md).</p>";
  if (specs.length) {
    html += '<div class="spec-grid">' + specs.map(sp =>
      '<div class="spec-card"><div class="spec-value">' + sp.value +
      '</div><div class="spec-label">' + sp.label + "</div></div>").join("") + "</div>";
  }
  $("car-text").innerHTML = html;
}

function renderTeam(text) {
  const grid = $("team-grid");
  const people = parseTeam(text);
  if (!people.length) { grid.innerHTML = '<p class="gallery-empty">Add your team in content/team.md</p>'; return; }
  people.forEach(p => {
    const card = document.createElement("div");
    card.className = "team-card reveal";
    const photo = document.createElement("div");
    photo.className = "member-photo";
    const initials = p.name.split(/\s+/).map(w => w[0] || "").join("").slice(0, 2).toUpperCase();
    photo.appendChild(imageOrPlaceholder("images/team/" + slugify(p.name) + ".jpg", initials));
    const info = document.createElement("div");
    info.className = "member-info";
    info.innerHTML = '<div class="member-name">' + p.name +
      '</div><div class="member-role">' + (p.role || "") + "</div>";
    card.appendChild(photo); card.appendChild(info);
    grid.appendChild(card);
  });
}

function renderGallery(listText) {
  const grid = $("gallery-grid");
  const files = listText.split(/\r?\n/).map(l => l.trim())
    .filter(l => l && !l.startsWith("#"));
  if (!files.length) {
    grid.innerHTML = '<p class="gallery-empty">No photos yet. Add some in images/gallery and list them in images/gallery/list.txt</p>';
    return;
  }
  files.forEach(f => grid.appendChild(imageOrPlaceholder("images/gallery/" + f, "photo")));
}

// ---------- effects (from the original sample) ----------
function wireEffects() {
  function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 150) el.classList.add("active");
    });
  }
  window.addEventListener("scroll", reveal); reveal();

  const statsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = parseFloat(entry.target.getAttribute("data-target"));
      if (isNaN(target)) { obs.unobserve(entry.target); return; }
      const decimals = (entry.target.getAttribute("data-target").split(".")[1] || "").length;
      let current = 0; const inc = target / 60;
      const tick = () => {
        current += inc;
        if (current < target) { entry.target.textContent = current.toFixed(decimals); requestAnimationFrame(tick); }
        else entry.target.textContent = target.toFixed(decimals);
      };
      tick(); obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".stat-number").forEach(s => statsObserver.observe(s));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function (e) {
      const el = document.querySelector(this.getAttribute("href"));
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
    });
  });
}

// ---------- boot ----------
async function main() {
  const [settingsTxt, heroMd, aboutMd, carMd, teamMd, galleryTxt] = await Promise.all([
    loadText("content/settings.txt"),
    loadText("content/hero.md"),
    loadText("content/about.md"),
    loadText("content/car.md"),
    loadText("content/team.md"),
    loadText("images/gallery/list.txt"),
  ]);
  const s = parseSettings(settingsTxt);
  applyColors(s);
  renderHeaderFooter(s);
  renderSocial(s);
  renderStats(s);
  renderHero(heroMd, s);
  renderAbout(aboutMd);
  renderCar(carMd);
  renderTeam(teamMd);
  renderGallery(galleryTxt);
  wireEffects();
}
document.addEventListener("DOMContentLoaded", main);
