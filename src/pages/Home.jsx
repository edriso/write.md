import Hero from "../components/layout/Hero";
import LessonsSection from "../components/sections/LessonsSection";
import CheatSheetSection from "../components/sections/CheatSheetSection";
import GitTipsSection from "../components/sections/GitTipsSection";

export default function Home({ onTry }) {
  return (
    <>
      <Hero />
      <LessonsSection onTry={onTry} />
      <CheatSheetSection />
      <GitTipsSection onTry={onTry} />
    </>
  );
}
