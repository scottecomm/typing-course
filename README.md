# Touch & Go Typing Trainer (Retro-Inspired)

This is a simple, retro-style touch typing trainer inspired by the **Touch and Go** program that ran on the **Amstrad PCW** in the 1980s.

In the 80s I learned how to type on an Amstrad PCW using a program called *Touch and Go*. More than 35 years later, technology has moved on so far that I’ve been able to use ChatGPT to help me recreate a similar experience from memory – mainly so I can encourage my 9-year-old son to learn how to touch type properly.

This project is a small tribute to those early typing tutors and a fun way to pass on the same skill to the next generation.

---

## What it does

- Provides a **100-lesson touch typing course**:
  - Starts with **single-key drills** on the home row (F, J, D, K, etc.)
  - Builds up to **simple words**, then **sentences**
  - Ends with **speed and accuracy test lessons**
- Forces **accuracy over speed**:
  - You can only unlock the next lesson by reaching **100% accuracy**
- Tracks a simple **learner profile**:
  - Name and age are stored in the browser
  - Feedback is personalised a little based on age
- Stores progress in the browser using **localStorage**, so lessons stay unlocked when you come back (on the same device/browser).

Everything runs entirely in the browser: no server, no backend, no tracking.

---

## How to use

You can either:

### Option 1: Open locally

1. Download or clone this repository.
2. Open `index.html` in your web browser (Chrome, Safari, Edge, Firefox, etc.).
3. Enter a **name** and **age** (optional, but recommended) and click **Save profile**.
4. Choose **Lesson 1** and click **Start lesson**.
5. Type the text exactly as shown.  
   - When your typed text reaches 100% accuracy, the next lesson unlocks.
   - If your accuracy is below 100%, repeat the lesson until it is perfect.

### Option 2: View via GitHub Pages

If this repo is published with GitHub Pages, you can visit the site directly in the browser using the GitHub Pages URL (for example: `https://<your-username>.github.io/<repo-name>/`).

---

## Tech details

- **HTML** – structure
- **CSS** – simple “green-on-black” retro styling
- **Vanilla JavaScript** – lesson logic, accuracy calculation, WPM estimation, and localStorage for:
  - Unlocked lessons
  - Learner profile (name & age)

No frameworks, build tools or dependencies are required.

---

## Limitations / Future ideas

This is a personal, nostalgic project, not a full-blown typing platform. Possible future improvements:

- Keyboard / finger-position diagrams
- Separate “practice” and “test” modes
- More detailed stats and charts over time

---

## Credits

- Original inspiration: **Touch and Go** typing tutor on the **Amstrad PCW**.
- Recreated from memory with lots of help from **ChatGPT**.
- Built so that my son can experience learning to type in a focused, distraction-free way – just like I did back in the 80s.
