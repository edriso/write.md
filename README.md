# write.md

A simple, beginner-friendly app for learning Markdown. Dark theme, interactive examples, and a live preview editor.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

To build for production:

```bash
npm run build
```

## How It Works

- Single page with smooth-scrolling sections: **Lessons**, **Cheat Sheet**, and **Git Tips**
- Each lesson has a **"Try it"** button that opens a split editor/preview modal
- Type markdown on the left, see the rendered output on the right
- Copy your work with one click

## Modifying Content

All content lives in `src/data/`:

- `lessons.js` — the 6 lesson cards (title, description, example markdown)
- `cheatsheet.js` — syntax reference table entries
- `gitTips.js` — git commit message tips and example

To add a lesson, add an entry to the `lessons` array in `lessons.js`. Each entry needs an `id`, `title`, `description`, `icon` (must match a lucide-react icon name mapped in `LessonCard.jsx`), and `example` (the markdown string pre-filled in the modal).

## Theme Colors

All colors are defined in `src/index.css` inside the `@theme` block. Change them there and Tailwind picks them up automatically.

Key variables:

| Variable              | What it controls         | Default   |
| --------------------- | ------------------------ | --------- |
| `--color-primary-400` | Primary accent (light)   | `#c084fc` |
| `--color-primary-500` | Primary accent           | `#a855f7` |
| `--color-primary-600` | Primary accent (dark)    | `#9333ea` |
| `--color-bg`          | Page background          | `#0f0d17` |
| `--color-bg-card`     | Card background          | `#1e1b2e` |
| `--color-text-primary`| Main text color          | `#f1f0f5` |
| `--color-text-secondary`| Secondary text color   | `#a09cb2` |
| `--color-border`      | Border color             | `#2e2a45` |

Fonts are loaded from Google Fonts in `index.html` — **Inter** for body text and **JetBrains Mono** for code.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- react-markdown (live preview)
- lucide-react (icons)

## Notes

- This is a dark-theme-only app — no light mode toggle
- The Try modal uses `createPortal` and locks body scroll while open
- No routing — it's a single page with anchor links
