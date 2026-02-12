import SectionHeading from "../ui/SectionHeading";
import { cheatsheet } from "../../data/cheatsheet";

export default function CheatSheetSection() {
  return (
    <section id="cheatsheet" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Cheat Sheet"
        subtitle="Quick-reference syntax at a glance."
      />
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-bg-card">
              <th className="px-6 py-3 font-semibold">Syntax</th>
              <th className="px-6 py-3 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {cheatsheet.map((row, i) => (
              <tr
                key={i}
                className="border-b border-border last:border-none hover:bg-bg-card/50 transition-colors"
              >
                <td className="px-6 py-3">
                  <code className="rounded bg-bg-card px-2 py-0.5 font-mono text-primary-400">
                    {row.syntax}
                  </code>
                </td>
                <td className="px-6 py-3 text-text-secondary">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
