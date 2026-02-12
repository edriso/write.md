export default function CodeBlock({ children }) {
  return (
    <pre className="rounded-lg border border-border bg-bg-card p-4 overflow-x-auto">
      <code className="font-mono text-sm text-text-secondary">{children}</code>
    </pre>
  );
}
