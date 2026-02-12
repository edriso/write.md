import {
  Heading,
  Type,
  List,
  Link,
  Code,
  Quote,
} from "lucide-react";
import Button from "../ui/Button";

const iconMap = {
  Heading,
  Type,
  List,
  Link,
  Code,
  Quote,
};

export default function LessonCard({ lesson, onTry }) {
  const Icon = iconMap[lesson.icon];

  return (
    <div className="flex flex-col rounded-xl border border-border bg-bg-card p-4 sm:p-6 transition-colors hover:bg-bg-card-hover">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/15">
        {Icon && <Icon className="h-5 w-5 text-primary-400" />}
      </div>
      <h3 className="text-lg font-semibold">{lesson.title}</h3>
      <p className="mt-1 flex-1 text-sm text-text-secondary">
        {lesson.description}
      </p>
      <Button
        variant="secondary"
        className="mt-5 w-full text-sm"
        onClick={() => onTry(lesson)}
      >
        Try it
      </Button>
    </div>
  );
}
