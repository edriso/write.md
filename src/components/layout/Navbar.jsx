import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";

const homeLinks = [
  { href: "#lessons", label: "Lessons" },
  { href: "#cheatsheet", label: "Cheat Sheet" },
  { href: "#git-tips", label: "Git Tips" },
  { to: "/technical-writing", label: "Technical Writing" },
];

const writingLinks = [
  { href: "#golden-rules", label: "Golden Rules" },
  { href: "#templates", label: "Templates" },
  { href: "#language-tips", label: "Language Tips" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const links = isHome ? homeLinks : writingLinks;

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold">
          <FileText className="h-5 w-5 text-primary-400" />
          write.md
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 sm:flex">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-accent-400 font-medium transition-colors hover:text-accent-500"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {l.label}
              </a>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-text-secondary hover:text-text-primary cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border sm:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4">
            {links.map((l) =>
              l.to ? (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-accent-400 font-medium transition-colors hover:text-accent-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
