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
      <main className={`relative flex-1 min-w-0 flex flex-col min-h-screen pt-16 lg:pt-0 transition-all duration-300 ease-in-out ${sidebarOpen ? "lg:pl-80" : "lg:pl-0"
        }`}>

        {/* Global Editorial Background Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden">
          {/* Subtle dot-grid pattern */}
          <div className="absolute inset-0 bg-dot-pattern opacity-75" />

          {/* Left Vertical Layout Guide Line */}
          <div className="absolute top-0 bottom-0 left-8 lg:left-20 w-[1px] bg-slate-200/40" />
          {/* Right Vertical Layout Guide Line */}
          <div className="absolute top-0 bottom-0 right-8 lg:right-20 w-[1px] bg-slate-200/40" />

          {/* Floating glowing color auroras / blur circles */}
          {/* Aurora 1 (Hero/About top region) */}
          <div className="absolute top-[3%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[120px] animate-pulse-slow" />

          {/* Aurora 2 (Skills middle-top region) */}
          <div className="absolute top-[22%] left-[8%] w-[600px] h-[600px] rounded-full bg-indigo-500/[0.05] blur-[130px]" />

          {/* Aurora 3 (Projects middle region) */}
          <div className="absolute top-[45%] right-[5%] w-[550px] h-[550px] rounded-full bg-blue-500/[0.035] blur-[110px]" />

          {/* Aurora 4 (Education/Achievements middle-bottom region) */}
          <div className="absolute top-[68%] left-[5%] w-[600px] h-[600px] rounded-full bg-indigo-500/[0.04] blur-[125px]" />

          {/* Aurora 5 (Contact/Footer bottom region) */}
          <div className="absolute top-[88%] right-[8%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[110px] animate-pulse-slow" />
        </div>

        {/* Top Header metadata bar */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Dynamic Editorial Sections */}
        <Hero activeSection={activeSection} />
        <Projects />
        <About />
        <Skills />

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
