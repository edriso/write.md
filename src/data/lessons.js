export const lessons = [
  {
    id: "headings",
    title: "Headings",
    description: "Structure your document with heading levels 1 through 6.",
    icon: "Heading",
    example: `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`,
  },
  {
    id: "formatting",
    title: "Text Formatting",
    description: "Make text bold, italic, or both to add emphasis.",
    icon: "Type",
    example: `This is **bold** text.

This is *italic* text.

This is ***bold and italic*** text.

This is ~~strikethrough~~ text.`,
  },
  {
    id: "lists",
    title: "Lists",
    description: "Organize information with ordered and unordered lists.",
    icon: "List",
    example: `Unordered list:
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

Ordered list:
1. First step
2. Second step
3. Third step`,
  },
  {
    id: "links",
    title: "Links & Images",
    description: "Add hyperlinks and embed images in your documents.",
    icon: "Link",
    example: `[Visit Google](https://google.com)

[Link with title](https://google.com "Google Homepage")

![Alt text for an image](https://via.placeholder.com/200x100)`,
  },
  {
    id: "code",
    title: "Code",
    description: "Display inline code and fenced code blocks.",
    icon: "Code",
    example: `Inline code: \`const x = 42;\`

Fenced code block:
\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\``,
  },
  {
    id: "blockquotes",
    title: "Blockquotes & HRs",
    description: "Quote text and separate sections with horizontal rules.",
    icon: "Quote",
    example: `> This is a blockquote.
>
> It can span multiple lines.

---

Horizontal rules create a visual break between sections.

---

Use three dashes, asterisks, or underscores.`,
  },
];
