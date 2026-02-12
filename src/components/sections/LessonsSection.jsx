import SectionHeading from "../ui/SectionHeading";
import LessonCard from "../lessons/LessonCard";
import { lessons } from "../../data/lessons";

export default function LessonsSection({ onTry }) {
  return (
    <section id="lessons" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Lessons"
        subtitle="Learn the building blocks of Markdown."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} onTry={onTry} />
        ))}
      </div>
    </section>
  );
}
