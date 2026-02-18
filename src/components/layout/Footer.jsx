import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
        >
          <FileText className="h-4 w-4 text-primary-400" />
          write.md
        </Link>
        <p className="text-xs text-text-muted">
          Learn Markdown. Write better technical posts.
        </p>
      </div>
    </footer>
  );
}
