import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-28 text-center">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
        write<span className="text-primary-400">.md</span>
      </h1>
      <p className="mt-4 max-w-lg text-lg text-text-secondary">
        Learn Markdown, one step at a time.
      </p>
      <a href="#lessons" className="mt-8">
        <Button>
          Start Learning
          <ArrowDown className="h-4 w-4" />
        </Button>
      </a>
    </section>
  );
}
