import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Copy, Check } from "lucide-react";
import MarkdownPreview from "./MarkdownPreview";

export default function TryModal({ title, initialMarkdown, onClose }) {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [copied, setCopied] = useState(false);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-4xl max-h-[85vh] flex-col rounded-xl border border-border bg-bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <h2 className="font-semibold">{title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-text-secondary transition-colors hover:bg-bg-card-hover hover:text-text-primary cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-text-secondary transition-colors hover:bg-bg-card-hover hover:text-text-primary cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Split editor / preview */}
        <div className="grid flex-1 overflow-hidden md:grid-cols-2">
          {/* Editor */}
          <div className="flex flex-col border-b border-border md:border-b-0 md:border-r">
            <div className="px-5 py-2 text-xs font-medium text-text-muted uppercase tracking-wide">
              Markdown
            </div>
            <textarea
              className="flex-1 resize-none bg-transparent px-5 py-3 font-mono text-sm text-text-primary outline-none min-h-[200px] md:min-h-0"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              spellCheck={false}
            />
          </div>

          {/* Preview */}
          <div className="flex flex-col overflow-hidden">
            <div className="px-5 py-2 text-xs font-medium text-text-muted uppercase tracking-wide">
              Preview
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-3">
              <MarkdownPreview markdown={markdown} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
