# ✏️ The Content Folder

Everything in this folder controls the **words** on your website. Here's what each file does:

---

**`settings.txt`** — The control panel for your whole site. This is where you set the team name, the big numbers in the stats bar, the social media links, and the contact email. Each line follows the pattern `key: value` — for example:
```
team-name: Raftaar Racing
stat-1-number: 500
instagram: https://instagram.com/raftaarracing
```

---

**`hero.md`** — Controls the big banner at the top of your page. This is where you set the small "eyebrow" text (like "F1 in Schools — National Champions") and the buttons. For example:
```
eyebrow: F1 in Schools — National Champions
button: Our Journey | #about
```

---

**`about.md`** — The "About" section of your site. Write your team's story here. Use `#` for the heading, leave a blank line between paragraphs, and put `**stars**` around words to make them **bold**. For example:
```
# About The Team

We are a student-led racing team obsessed with speed.
```

---

**`car.md`** — The section about your car. Start with `#` for the car's name, then write a description. Each line starting with `- big | small` becomes a spec card on the page. For example:
```
# Garuda V2

Named after the mythical bird of speed.

- CFD | Simulation Tested
- CNC | Precision Machined
```

---

**`team.md`** — Your team roster. Each person gets a small two-line block: their name on one line (starting with `##`) and their role on the next. For example:
```
## Aryahi Shah
Project Manager & Media Manager
```
To add someone, copy a block and change the two lines. To remove someone, delete their block.

---

> 💡 **Good to know:** Lines starting with `#` are just **notes** — they don't appear on the website. Text inside `<!-- -->` is also a note and is invisible to visitors. Feel free to read them; they're there to help you!
