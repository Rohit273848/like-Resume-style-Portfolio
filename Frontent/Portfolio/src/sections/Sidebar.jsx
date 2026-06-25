import React from "react";
import {
  User,
  Code,
  FolderGit2,
  GraduationCap,
  Trophy,
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
  Home,
  ExternalLink,
  Terminal
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import rohitAvatar from "../assets/images/profile.jpeg";

export const Sidebar = ({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { id: "hero", label: "01 // Home", icon: Home },
    { id: "about", label: "02 // About Me", icon: User },
    { id: "skills", label: "03 // Skills Matrix", icon: Code },
    { id: "projects", label: "04 // Case Studies", icon: FolderGit2 },
    { id: "education", label: "05 // Education & Exp", icon: GraduationCap },
    { id: "achievements", label: "06 // Achievements", icon: Trophy },
    { id: "contact", label: "07 // Contact", icon: Mail },
  ];

  const handleNavClick = (id) => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sticky Header Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 flex items-center justify-between px-6 lg:hidden">
        <span className="font-mono text-sm font-bold uppercase tracking-widest text-slate-900">
          rohit.dev
        </span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 border border-slate-200 text-slate-800 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Sidebar Panel Container */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white border-r border-slate-200 z-40 flex flex-col justify-between pt-24 pb-8 transition-transform duration-300 lg:pt-10 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Branding & Avatar Info */}
        <div className="flex flex-col gap-6">
          {/* Header Brand for large screens */}
          <div className="hidden lg:flex items-center justify-between px-8 mb-2">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-blue-600" />
              <span className="font-mono text-sm font-extrabold uppercase tracking-widest text-slate-900">
                rohitmahajan.dev
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1.5 border border-slate-200 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Collapse sidebar"
            >
              <X size={16} />
            </button>
          </div>

          {/* Profile Grayscale Photo Frame */}
          <div className="flex flex-col items-center px-8 text-center">
            <div className="relative group w-24 h-24 bg-slate-50 border border-slate-200 p-1 mb-4">
              {/* Technical Layout Guides on Image Box */}
              <div className="absolute -top-1.5 -left-1.5 text-[8px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-[8px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 text-[8px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-[8px] font-mono text-slate-300 select-none">+</div>

              <img
                src={rohitAvatar}
                alt={portfolioData.name}
                className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
            </div>

            <h1 className="font-sans font-bold text-slate-900 text-lg tracking-tight mt-1">
              {portfolioData.name}
            </h1>
            <span className="font-mono text-xs text-slate-650 uppercase tracking-wider font-semibold mt-0.5">
              Backend & AI Engineer
            </span>

            {/* Pulsing Status Dot */}
            <div className="inline-flex items-center gap-1.5 bg-blue-50/50 border border-blue-100 rounded-full px-3 py-1 mt-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-xs text-blue-700 font-bold tracking-wider uppercase">
                Open to Internship
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col w-full mt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group flex items-center justify-between w-full px-8 py-3 text-sm font-mono tracking-wider uppercase transition-all duration-200 border-r-2 ${isActive
                    ? "bg-slate-50 text-blue-600 border-blue-600 font-bold"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50/50 border-transparent"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={15} className={isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"} />
                    <span>{item.label}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Panel Actions & Links */}
        <div className="px-8 flex flex-col gap-4">
          {/* Minimal Resume Download CTA */}
          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-mono text-sm uppercase tracking-wider py-2.5 px-4 transition-all duration-300"
          >
            <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
            View CV
          </a>

          {/* Social Row */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all rounded-md"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all rounded-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="p-1.5 border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all rounded-md"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>

          <p className="font-mono text-xs text-slate-450 text-center uppercase tracking-widest mt-1">
            &copy; {new Date().getFullYear()} ROHIT.MAHAJAN
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
