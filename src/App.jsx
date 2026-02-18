import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TryModal from "./components/modal/TryModal";
import Home from "./pages/Home";
import TechnicalWriting from "./pages/TechnicalWriting";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [modal, setModal] = useState(null);

  const openModal = (lesson) => {
    setModal({ title: lesson.title, markdown: lesson.example });
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home onTry={openModal} />} />
          <Route
            path="/technical-writing"
            element={<TechnicalWriting onTry={openModal} />}
          />
        </Routes>
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
