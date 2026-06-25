import React, { useState, useEffect } from "react";
import { Sidebar } from "./sections/Sidebar";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024;
    }
    return false;
  });

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "projects",
      "education",
      "achievements",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col lg:flex-row antialiased selection:bg-blue-100 selection:text-blue-900">

      {/* Fixed Profile Sidebar Panel */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content viewport scroll area */}
      <main className={`flex-1 min-w-0 flex flex-col min-h-screen pt-16 lg:pt-0 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "lg:pl-80" : "lg:pl-0"
      }`}>

        {/* Top Header metadata bar */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dynamic Editorial Sections */}
        <Hero activeSection={activeSection} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>

      {/* Back to top utility indicator */}
      <ScrollToTop />
    </div>
  );
}

export default App;
