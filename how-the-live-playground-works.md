# How the Live Markdown Playground Works

The "Try it" modal is the core interactive feature of write.md. You type markdown on the left and see the rendered output update on the right, instantly. Here is how it is built.

## Architecture Overview

```
User clicks "Try it"
      │
      ▼
App.jsx sets modal state ──► TryModal renders via createPortal
                                    │
                              ┌─────┴─────┐
                              │           │
                           Textarea   MarkdownPreview
                           (input)    (output)
                              │           ▲
                              │           │
                              └───────────┘
                           React state connects them
```

Three files make it work:

- `src/App.jsx` — owns the modal state (what to show and when)
- `src/components/modal/TryModal.jsx` — the split editor/preview UI
- `src/components/modal/MarkdownPreview.jsx` — renders markdown to HTML

## Step 1: Opening the Modal

The modal state lives in `App.jsx`:

```jsx
const [modal, setModal] = useState(null);

const openModal = (lesson) => {
  setModal({ title: lesson.title, markdown: lesson.example });
};
```

`modal` is either `null` (closed) or an object with `title` and `markdown`. When a user clicks "Try it" on any lesson card, `openModal` receives that lesson's data and stores it.

The modal renders conditionally:

```jsx
{modal && (
  <TryModal
    title={modal.title}
    initialMarkdown={modal.markdown}
    onClose={() => setModal(null)}
  />
)}
```

Setting `modal` back to `null` closes it.

## Step 2: The TryModal Component

This is where the editor and preview live. The key concept is **lifting the markdown text into local state** so both panels share it.

```jsx
export default function TryModal({ title, initialMarkdown, onClose }) {
  const [markdown, setMarkdown] = useState(initialMarkdown);
```

`initialMarkdown` seeds the textarea with the lesson's example. From that point, `markdown` is the single source of truth.

### The Split Layout

The modal uses a CSS grid that stacks on mobile and goes side-by-side on desktop:

```jsx
<div className="grid md:grid-cols-2">
  {/* Left: editor */}
  <textarea
    value={markdown}
    onChange={(e) => setMarkdown(e.target.value)}
  />

  {/* Right: preview */}
  <MarkdownPreview markdown={markdown} />
</div>
```

Every keystroke in the textarea calls `setMarkdown`, which triggers a re-render, which passes the new text to `MarkdownPreview`. React handles the rest — no debounce needed because `react-markdown` is fast enough for this use case.

### Portal Rendering

The modal renders outside the normal component tree using `createPortal`:

```jsx
return createPortal(
  <div className="fixed inset-0 z-50 ...">
    {/* modal content */}
  </div>,
  document.body
);
```

Why a portal? Two reasons:

1. **Z-index isolation** — the modal sits above everything regardless of parent stacking contexts
2. **Scroll locking** — easier to manage body overflow when the modal is a direct child of `<body>`

### Body Scroll Lock

When the modal opens, page scrolling is disabled:

```jsx
useEffect(() => {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = "";
  };
}, []);
```

The cleanup function restores scrolling when the modal unmounts.

### Keyboard Support

Pressing Escape closes the modal:

```jsx
useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "Escape") onClose();
  };
  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [onClose]);
```

Clicking the backdrop (the dark overlay) also closes it. The inner modal card stops event propagation so clicks inside do not close anything:

```jsx
<div className="fixed inset-0 ..." onClick={onClose}>
  <div className="..." onClick={(e) => e.stopPropagation()}>
    {/* modal content */}
  </div>
</div>
```

### Copy to Clipboard

The copy button uses the Clipboard API with visual feedback:

```jsx
const [copied, setCopied] = useState(false);

const handleCopy = async () => {
  await navigator.clipboard.writeText(markdown);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};
```

The button icon swaps from a copy icon to a checkmark for 2 seconds, then resets.

## Step 3: The MarkdownPreview Component

This is the simplest piece — a thin wrapper around `react-markdown`:

```jsx
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview({ markdown }) {
  return (
    <div className="prose">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
```

`react-markdown` parses the markdown string and returns React elements. No `dangerouslySetInnerHTML` — it builds a safe virtual DOM tree from the parsed markdown AST.

The `.prose` class applies all the typography styles defined in `src/index.css`: heading sizes, list styles, code block formatting, blockquote borders, table layouts, and link colors.

## How the Live Update Actually Works

Here is the data flow for a single keystroke:

```
1. User types in textarea
2. onChange fires → setMarkdown(newValue)
3. React re-renders TryModal
4. New markdown string flows to MarkdownPreview as a prop
5. react-markdown parses the string into an AST
6. AST is converted to React elements
7. React diffs and updates only the changed DOM nodes
8. User sees the preview update
```

This all happens synchronously in one render cycle. There is no API call, no web worker, no separate build step. The `react-markdown` library does the parsing and rendering inline.

## Styling the Rendered Output

The rendered markdown needs its own styles because Tailwind's CSS reset strips default browser styles (no margins on headings, no bullets on lists, etc). The `.prose` class in `src/index.css` adds them back:

```css
.prose h1 { @apply text-[2em] font-semibold; }
.prose ul { @apply list-disc pl-[1.5em]; }
.prose code { @apply bg-bg-card border rounded font-mono text-[0.875em]; }
.prose blockquote { @apply border-l-[3px] border-primary-500 pl-[1em] italic; }
```

These are custom prose styles scoped to the `.prose` wrapper so they only affect rendered markdown, not the rest of the app.

## Responsive Behavior

The modal adapts to screen size:

- **Desktop** — side-by-side editor and preview (`md:grid-cols-2`)
- **Mobile** — stacked vertically, editor on top, preview below
- **Max height** — capped at `85vh` on desktop, `95vh` on mobile, with internal scrolling
- **Min height** — both panels have a `min-h-[180px]` so neither collapses too small

## Summary

The playground is built from three simple ideas:

1. **Shared state** — one `useState` hook connects the textarea to the preview
2. **react-markdown** — converts markdown strings to React elements safely and fast
3. **Portal + scroll lock** — keeps the modal above everything and prevents background scrolling

No external editor library, no syntax highlighting engine, no complex state management. Just React fundamentals doing what they do best.
