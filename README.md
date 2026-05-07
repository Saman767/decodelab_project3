
# Project 3 — Interactive Web Elements ⚡
**DecodeLabs Industrial Training Kit | Batch 2026**

---

## 📌 Overview

This project is part of the **DecodeLabs Frontend Development Training Program**. The goal was to add real interactivity to a webpage using **vanilla JavaScript** — no frameworks, no libraries. Just pure DOM manipulation and event-driven logic.

---

## 🎯 Objective

Build a webpage that responds to user actions in real time by implementing:
- Buttons / toggles
- Basic user interaction
- Dynamic content updates without page reload

---

## ✨ Features

### 🌗 Dark / Light Mode Toggle
- A toggle switch in the header switches between dark and light themes
- Theme state is tracked using a JavaScript boolean variable (`isDark`)
- All colors update instantly via **CSS custom properties (variables)**
- Keyboard accessible (`Enter` / `Space` supported)

### 📂 FAQ Accordion
- Five expandable question cards
- Clicking a card opens it and **automatically closes** any previously open card
- The icon switches between `✳` (closed) and `✕` (open) with a smooth rotation animation
- Smooth expand/collapse animation using `max-height` transition

---

## 🧠 Concepts Applied

| Concept | Usage |
|---|---|
| `addEventListener` | Click events on toggle and accordion buttons |
| `classList.toggle / add / remove` | Managing open/closed state |
| `setAttribute` | Updating `aria-expanded` for accessibility |
| CSS Custom Properties | Theme switching (light ↔ dark) |
| `const` / `let` | Proper variable declarations |
| IPO Loop | Input → Process → Output pattern throughout |
| Decoupled Classes | `js-` prefix for JS hooks, `is-` prefix for state |

---

## 🗂️ File Structure

```
project3/
│
├── project3_interactive.html   # Main file (HTML + CSS + JS in one)
└── README.md                   # Project documentation
```

---

## 🚀 How to Run

1. Download `project3_interactive.html`
2. Open it in any modern browser (Chrome, Firefox, Edge)
3. No installation or dependencies required

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, transitions, animations
- **Vanilla JavaScript** — DOM manipulation, event listeners, state management
- **Google Fonts** — Playfair Display + DM Sans

---

## 📐 Design Decisions

- Used **CSS variables** for theming instead of inline style changes — cleaner and scalable
- Used `max-height` transition for accordion instead of `display: none` — enables smooth animation
- Followed the **decoupling standard**: `js-` classes are never styled, `is-` classes are never used for JS targeting
- Avoided `innerHTML` for security — content is static HTML, no user input injected

---

## 👩‍💻 Author

**Saman**
Frontend Developer (in progress) | Virtual University of Pakistan
DecodeLabs Internship — Batch 2026
