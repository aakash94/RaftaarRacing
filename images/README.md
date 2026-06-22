# 🖼️ The Images Folder

This folder holds all the pictures on your website. Here's how everything is organised:

---

## Single pictures (swap by same name)

These four photos each appear in one specific spot on the site:

| File | Where it appears |
|---|---|
| `logo.jpg` | The team logo in the navigation bar and footer |
| `hero-car.jpg` | The big car photo in the top banner |
| `about-team.jpg` | The team photo in the "About" section |
| `car.jpg` | The car photo in the "The Car" section |

**To swap any of these:** upload a new file with the **exact same name**. The site will automatically use your new photo. You don't need to change any settings — same file name = instant swap!

---

## Team photos (`team/` folder)

Each team member's photo goes in the `team/` folder. The file must be named after the person using **all lowercase letters** with **dashes instead of spaces**.

Examples:
- "Aryahi Shah" → `aryahi-shah.jpg`
- "Neil Nahata" → `neil-nahata.jpg`
- "Hriday Tibrewala" → `hriday-tibrewala.jpg`

The name in the file must match the name written in `content/team.md`. If the names match, the photo appears automatically on their team card.

> ✅ **No stress if a photo is missing!** If a team member's photo hasn't been uploaded yet, the site shows a neat placeholder with their initials instead. The page never breaks — it just waits patiently for the photo.

---

## Gallery photos (`gallery/` folder)

Gallery photos go in the `gallery/` folder. But there's one extra step — you also need to add the filename to `gallery/list.txt`.

**How to add a gallery photo:**
1. Upload your photo into the `gallery/` folder (use a lowercase name with dashes, like `race-day.jpg`).
2. Open `gallery/list.txt` and add one line with just the filename:
   ```
   race-day.jpg
   ```

The site reads `list.txt` to know which photos to show. If a filename is in the list but the photo isn't uploaded (or the name doesn't match), the site shows a placeholder instead of breaking.

---

## Tips for great photos

- **Keep photos smallish** — aim for under **1–2 MB** per photo. Smaller files load faster, which means visitors see your site sooner. You can use a free site like [squoosh.app](https://squoosh.app) to shrink a photo before uploading.
- **Use `.jpg` files** — they work best with this site.
- **Lowercase names with dashes only** — no spaces, no capital letters, no special characters. Good: `award-2024.jpg`. Bad: `Award 2024!.JPG`.
