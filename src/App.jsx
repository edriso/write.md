import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import LessonsSection from "./components/sections/LessonsSection";
import CheatSheetSection from "./components/sections/CheatSheetSection";
import GitTipsSection from "./components/sections/GitTipsSection";
import TryModal from "./components/modal/TryModal";

function App() {
  const [modal, setModal] = useState(null);

  const openModal = (lesson) => {
    setModal({ title: lesson.title, markdown: lesson.example });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LessonsSection onTry={openModal} />
        <CheatSheetSection />
        <GitTipsSection onTry={openModal} />
      </main>
      <Footer />

      {modal && (
        <TryModal
          title={modal.title}
          initialMarkdown={modal.markdown}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}

export default App;
