import { Link } from "react-router-dom";
import {
  Target,
  MessageCircle,
  AlignLeft,
  Code,
  Map,
  Scissors,
  Heart,
  Rocket,
  BookOpen,
  Lightbulb,
  Bug,
  FolderOpen,
  PenLine,
  ArrowLeft,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import {
  writingTips,
  templates,
  wordBank,
  grammarTips,
} from "../data/technicalWriting";

const tipIconMap = {
  Target,
  MessageCircle,
  AlignLeft,
  Code,
  Map,
  Scissors,
  Heart,
  Rocket,
};

const templateIconMap = {
  BookOpen,
  Lightbulb,
  Bug,
  FolderOpen,
};

function TipCard({ tip, onTry }) {
  const Icon = tipIconMap[tip.icon];

  return (
    <div className="flex flex-col rounded-xl border border-border bg-bg-card p-4 sm:p-6 transition-colors hover:bg-bg-card-hover">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/15">
        {Icon && <Icon className="h-5 w-5 text-accent-400" />}
      </div>
      <h3 className="text-lg font-semibold">{tip.title}</h3>
      <p className="mt-1 flex-1 text-sm text-text-secondary">
        {tip.description}
      </p>
      <Button
        variant="secondary"
        className="mt-5 w-full text-sm"
        onClick={() => onTry({ title: tip.title, example: tip.example })}
      >
        See Example
      </Button>
    </div>
  );
}

function TemplateCard({ template, onTry }) {
  const Icon = templateIconMap[template.icon];

  return (
    <div className="flex flex-col rounded-xl border border-border bg-bg-card p-4 sm:p-6 transition-colors hover:bg-bg-card-hover">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/15">
        {Icon && <Icon className="h-5 w-5 text-primary-400" />}
      </div>
      <h3 className="text-lg font-semibold">{template.title}</h3>
      <p className="mt-1 flex-1 text-sm text-text-secondary">
        {template.description}
      </p>
      <Button
        variant="secondary"
        className="mt-5 w-full text-sm"
        onClick={() =>
          onTry({ title: template.title, example: template.template })
        }
      >
        Use Template
      </Button>
    </div>
  );
}

export default function TechnicalWriting({ onTry }) {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-16 sm:py-28 text-center">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Markdown
        </Link>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/15">
          <PenLine className="h-7 w-7 text-accent-400" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Technical<span className="text-accent-400"> Writing</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-text-secondary">
          Write dev posts that people actually want to read.
          <br />
          <span className="text-text-muted">
            You do not need perfect English — you need clear thinking, good
            structure, and the confidence to share what you know.
          </span>
        </p>
        <a href="#golden-rules" className="mt-8">
          <Button>
            Read the Golden Rules
            <ArrowLeft className="h-4 w-4 rotate-[-90deg]" />
          </Button>
        </a>
      </section>

      {/* Golden Rules */}
      <section
        id="golden-rules"
        className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20"
      >
        <SectionHeading
          title="The Golden Rules"
          subtitle="Eight principles that turn an okay post into a great one."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {writingTips.map((tip) => (
            <TipCard key={tip.id} tip={tip} onTry={onTry} />
          ))}
        </div>
      </section>

      {/* Templates */}
      <section
        id="templates"
        className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20"
      >
        <SectionHeading
          title="Ready-to-Use Templates"
          subtitle="Copy a template, fill in the blanks, and publish. No more blank-page anxiety."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} onTry={onTry} />
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section
        id="language-tips"
        className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20"
      >
        <SectionHeading
          title="Level Up Your Language"
          subtitle="Quick reference for stronger, clearer writing — especially if English is not your first language."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Word Bank */}
          <div className="rounded-xl border border-border bg-bg-card p-4 sm:p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Word Bank: Say It Simply
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 pr-4 font-medium text-text-muted">
                      Instead of...
                    </th>
                    <th className="pb-3 font-medium text-accent-400">
                      Write...
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wordBank.map((entry, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2.5 pr-4 text-text-secondary line-through decoration-text-muted/40">
                        {entry.weak}
                      </td>
                      <td className="py-2.5 text-text-primary font-medium">
                        {entry.strong}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Grammar Tips */}
          <div className="space-y-6">
            {grammarTips.map((section, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-bg-card p-4 sm:p-6"
              >
                <h3 className="mb-3 text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400/60" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
