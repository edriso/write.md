# write.md - Implementation Plan

## What is this?

A beginner-friendly markdown learning app. Dark theme, purple accents, single page with smooth-scrolling sections.

## Architecture Decisions

- **Single page** with anchor-based smooth scrolling (no router needed)
- **react-markdown** for live preview in the Try modal
- **lucide-react** for icons
- **Tailwind v4 @theme** for all colors and design tokens
- **React useState** for state (no extra libraries)

## File Structure

```
src/
  index.css                         # Theme variables, global styles, .prose
  App.jsx                           # Root: Nav + sections + modal state
  main.jsx                          # Entry point (unchanged)
  components/
    ui/Button.jsx                   # Reusable button (primary/secondary/ghost)
    ui/SectionHeading.jsx           # Section title + subtitle
    ui/CodeBlock.jsx                # Styled code display
    layout/Navbar.jsx               # Sticky nav + mobile hamburger menu
    layout/Hero.jsx                 # Landing: title, tagline, CTA
    layout/Footer.jsx               # Minimal footer
    sections/LessonsSection.jsx     # Grid of lesson cards
    sections/CheatSheetSection.jsx  # Quick-reference syntax table
    sections/GitTipsSection.jsx     # Git commit tips + example
    lessons/LessonCard.jsx          # Individual lesson card with "Try it"
    modal/TryModal.jsx              # Split editor/preview modal + copy
    modal/MarkdownPreview.jsx       # react-markdown wrapper with .prose
  data/
    lessons.js                      # 6 lessons with example markdown
    cheatsheet.js                   # Syntax reference entries
    gitTips.js                      # Git commit tips + example
```

## Sections

1. **Hero** - App title, tagline, "Start Learning" CTA
2. **Lessons** - 6 cards: Headings, Text Formatting, Lists, Links & Images, Code, Blockquotes & HRs
3. **Cheat Sheet** - Quick-reference syntax table
4. **Git Tips** - Commit message best practices with example

## Try Modal

- Opens via `createPortal` to `document.body`
- Split layout: textarea (left) + live preview (right), stacked on mobile
- Copy button with "Copied!" feedback (2s)
- Closes on: X button, backdrop click, Escape key
- Locks body scroll while open

## Implementation Order

1. Google Fonts (Inter + JetBrains Mono) in `index.html`
2. Theme + global styles + `.prose` in `index.css`
3. Install `react-markdown` and `lucide-react`
4. UI components: Button, SectionHeading, CodeBlock
5. Layout: Navbar, Hero, Footer
6. Data files: lessons, cheatsheet, gitTips
7. Sections: LessonsSection, CheatSheetSection, GitTipsSection + LessonCard
8. Modal: MarkdownPreview, TryModal
9. App.jsx - wire everything together
