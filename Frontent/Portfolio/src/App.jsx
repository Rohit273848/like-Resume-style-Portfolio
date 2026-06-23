import React, { useState, useEffect } from "react";
import { Sidebar } from "./sections/Sidebar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Achievements } from "./sections/Achievements";
import { Certifications } from "./sections/Certifications";
import { GitHubStats } from "./sections/GitHubStats";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "education",
      "achievements",
      "certifications",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Main content viewport */}
      <main className="flex-1 lg:pl-64 min-w-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <GitHubStats />
        <Contact />
        <Footer />
      </main>

      {/* Floating utility */}
      <ScrollToTop />
    </div>
  );
}

export default App;
