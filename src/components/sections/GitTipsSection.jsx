import { GitCommitHorizontal } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import CodeBlock from "../ui/CodeBlock";
import Button from "../ui/Button";
import { gitTips, gitExample } from "../../data/gitTips";

export default function GitTipsSection({ onTry }) {
  return (
    <section id="git-tips" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Git Commit Tips"
        subtitle="Write clear, consistent commit messages."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Tips list */}
        <div>
          <ul className="space-y-3">
            {gitTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <GitCommitHorizontal className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" />
                <span className="text-text-secondary">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Example commit */}
        <div>
          <CodeBlock>{gitExample}</CodeBlock>
          <Button
            variant="secondary"
            className="mt-4 w-full text-sm"
            onClick={() =>
              onTry({
                title: "Git Commit Message",
                example: gitExample,
              })
            }
          >
            Try it
          </Button>
        </div>
      </div>
    </section>
  );
}
