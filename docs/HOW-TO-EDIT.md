# How to Edit Your Website

This guide walks you through every common task, step by step — exactly what you'll see and click on **github.com**. No experience needed!

> ✅ **Remember: nothing is permanent.** Every change you make is saved in the history. If something goes wrong, you can always go back. You literally cannot break the site forever.

---

## ✏️ Change some words

All the words on your site live in the `content/` folder. Here's how to change them:

1. On your repository page, click the **`content`** folder.
2. Click the file you want to edit (for example, `about.md`).
3. Click the **pencil icon ✏️** in the top-right corner of the file view. (It might say "Edit this file" if you hover over it.)
4. Make your changes in the text box. Don't worry about making it perfect — you can always edit again!
5. When you're happy, scroll down and click the green **"Commit changes"** button.
6. In the little pop-up, just click **"Commit changes"** again.
7. Wait about **one minute**, then refresh your website. Your new words should appear!

> ⚠️ **Tip:** In `.md` files, a line starting with `#` is a heading. Two `**stars**` around a word make it **bold**. A blank line starts a new paragraph. That's all you need to know!

---

## 🖼️ Swap a picture

The single pictures (the hero car photo, the about-team photo, and the car photo) are swapped by uploading a new file with the **exact same name**. Here's how:

1. On your repository page, click the **`images`** folder.
2. Click on the image you want to replace (for example, `hero-car.jpg`).
3. On the file page, click the **"..." menu** (three dots) in the top-right area, then choose **"Upload files"**. *(Or go back to the `images/` folder and use the "Upload files" button there — just make sure to name your new file identically.)*
4. Drag your new photo in, or click "choose your files" to pick it.
5. **Important:** Make sure the new file has the **exact same name** as the old one (for example, `hero-car.jpg`). Same name = automatic swap!
6. Click the green **"Commit changes"** button.
7. Wait about **one minute**, then refresh your website.

> ⚠️ **Photo names matter!** Keep them all lowercase with dashes instead of spaces (for example: `race-day.jpg`, not `Race Day.jpg`). This helps the site find them reliably.

---

## 👤 Add a team member

Each person on your team has a small block in `content/team.md`. Adding someone is just copying that block and changing the words.

**Step 1 — Add them to the team list:**

1. Click the `content` folder, then click `team.md`.
2. Click the pencil ✏️ icon to edit it.
3. Find an existing person's block — it looks like this:

```
## Aryahi Shah
Project Manager & Media Manager
```

4. Copy those two lines and paste them at the bottom of the file (after the last person).
5. Change the name and the role to your new teammate's info. For example:

```
## Priya Sharma
Engineering Manager
```

6. Click **"Commit changes"**.

**Step 2 — Upload their photo:**

1. Go to the `images/team/` folder.
2. Click **"Upload files"**.
3. Upload their photo. Name it using their name in **all lowercase letters, with dashes instead of spaces**.

   For example:
   - "Priya Sharma" → `priya-sharma.jpg`
   - "Aryahi Shah" → `aryahi-shah.jpg`
   - "Hriday Tibrewala" → `hriday-tibrewala.jpg`

4. Click **"Commit changes"**.

> ✅ **That's it!** If the photo name matches, their picture will appear on the site automatically. If you haven't uploaded the photo yet, the site shows a neat placeholder with their initials instead — so the page never breaks.

---

## 👤 Remove a team member

1. Click the `content` folder, then click `team.md`.
2. Click the pencil ✏️ icon to edit it.
3. Find the person's block — those two lines starting with `##` and their name, plus the role line below it.
4. Select and delete those lines.
5. Click **"Commit changes"**.

> ✅ That's all! Their card will disappear from the site. Their photo in `images/team/` can stay there — it won't show up if their name isn't in `team.md`.

---

## 📸 Add a gallery photo

Adding a gallery photo has **two parts** — you need to do both for the photo to appear.

**Part 1 — Upload the photo:**

1. Go to the `images/gallery/` folder.
2. Click **"Upload files"**.
3. Upload your photo. Use a name that's all lowercase with dashes (for example: `race-day.jpg` or `award-ceremony.jpg`).
4. Click **"Commit changes"**.

**Part 2 — Add the filename to the list:**

> ✏️ **This is the one place you type a file name.** The site won't show a photo unless it's listed here!

1. Go to `images/gallery/list.txt`.
2. Click the pencil ✏️ icon to edit it.
3. Add one new line at the bottom with just the photo's filename. For example:

   **Before:**
   ```
   # PHOTO GALLERY LIST
   # Put your photo files in this folder (images/gallery), then add ONE line
   # here with each file's name. Lines starting with # are ignored.
   ```

   **After:**
   ```
   # PHOTO GALLERY LIST
   # Put your photo files in this folder (images/gallery), then add ONE line
   # here with each file's name. Lines starting with # are ignored.
   race-day.jpg
   ```

4. Click **"Commit changes"**.
5. Wait about one minute, then refresh your website.

> ⚠️ **The filename must match exactly** — same spelling, same lowercase letters, same dashes. If it doesn't match, the site will show a placeholder instead of the photo.

---

## 🔢 Change a stat number or a social link

All the numbers (followers, engineers, awards) and social links live in `content/settings.txt`.

1. Click the `content` folder, then click `settings.txt`.
2. Click the pencil ✏️ icon to edit it.
3. Find the line you want to change. Each line looks like:

   ```
   stat-1-number: 500
   ```

   Change only the part **after the colon**. Keep the word before the colon exactly as it is.

4. For **social links**: type a full web address after the colon to show the link. Leave it blank (nothing after the colon) to hide it. For example:
   - `instagram: https://instagram.com/raftaarracing` — shows the Instagram link
   - `linkedin:` — hides the LinkedIn link (nothing after the colon)

5. Click **"Commit changes"**.

> ⚠️ **Keep the word before the colon!** For example, `stat-1-number:` must stay exactly as `stat-1-number:`. Only change what comes after.

---

## 😅 Oops, I made a mistake!

Don't panic! You cannot permanently break the site. Here's what to do:

**Option 1 — Just fix it:**
Go back to the file, click the pencil ✏️, fix what you changed, and commit again. Done!

**Option 2 — Use the commit history:**
Every change you've ever made is saved. You can go back in time!

1. On your repository page, click **"Commits"** (it's near the top, shows a clock icon and a number like "12 commits").
2. Find the commit just before your mistake (each commit has a short description and a time like "2 hours ago").
3. Click the commit to see what it looked like.
4. You can view the old file content and copy-paste it back manually.

> ✅ **You've got this.** The worst that can happen is a word is wrong or a photo doesn't show — and both of those are totally fixable. Take a breath and fix one small thing at a time.

---

## 🧰 For grown-ups: Turn the website on

When the repo is first created, GitHub Pages might not be switched on yet. Here's how to turn it on:

1. Go to your GitHub repository page.
2. Click the **"Settings"** tab (top menu of the repo).
3. In the left sidebar, click **"Pages"**.
4. Under **"Source"**, click the dropdown that says "None" and choose **"Deploy from a branch"**.
5. Set the branch to **`main`** and the folder to **`/ (root)`**.
6. Click **"Save"**.
7. Wait a minute or two. Refresh the Settings → Pages page. GitHub will show you the live URL for your site.

---

## 🌐 For grown-ups: Use your own web address

If you have a domain name (like `raftaarracing.com`), you can connect it to your GitHub Pages site.

**Step 1 — Add a CNAME file to your repo:**

1. In your repository, click **"Add file"** → **"Create new file"**.
2. Name the file exactly `CNAME` (no extension, all capitals).
3. In the file body, type just your domain name — nothing else. For example:
   ```
   raftaarracing.com
   ```
4. Click **"Commit changes"**.

**Step 2 — Set up DNS with your domain provider:**

Log in to wherever you bought your domain name and add these DNS records:

- **Type A** records pointing to GitHub's IP addresses:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- Or a **CNAME record** pointing `www` to `yourusername.github.io` (replace with your actual GitHub username).

**Step 3 — Tell GitHub Pages about your domain:**

1. Go to **Settings → Pages** in your repo.
2. Under **"Custom domain"**, type your domain name and click **"Save"**.
3. Tick the **"Enforce HTTPS"** checkbox once it becomes available (it may take a few minutes).

DNS changes can take up to 24 hours to fully work, but usually it's much faster.

---

## ✅ Rules so it never breaks

Follow these and you'll never have a problem:

- **Don't touch the `assets/` folder.** It contains the grown-up code that runs the site. You never need to go in there.
- **Always keep the word before the colon in `settings.txt`.** Change what's after the colon — never the key name itself.
- **Keep photo names lowercase with dashes.** No spaces, no capital letters, no special characters. Good: `team-photo.jpg`. Bad: `Team Photo.JPG`.
- **Keep photo file names the same when replacing a picture.** If the old file was `hero-car.jpg`, the new one must also be called `hero-car.jpg`.
- **In `gallery/list.txt`, one filename per line.** No extra spaces. Lines starting with `#` are ignored (they're just notes).
