import React from "react";
import { 
  User, 
  Code, 
  FolderGit2, 
  GraduationCap, 
  Trophy, 
  Award, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Home
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Sidebar = ({ activeSection, setActiveSection, menuOpen, setMenuOpen }) => {
  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 p-2.5 bg-slate-900 border border-slate-800 text-white rounded-lg lg:hidden focus:outline-none"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-900 z-40 flex flex-col justify-between p-6 transition-transform duration-300 lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Section */}
        <div className="flex flex-col gap-8">
          {/* Logo / Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-indigo-600/30">
              {portfolioData.name[0]}
            </div>
            <div>
              <h1 className="font-bold text-white leading-none">{portfolioData.name}</h1>
              <span className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">Portfolio</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-white" : "text-slate-400 group-hover:text-white"} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer / Socials */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4 bg-slate-900/50 py-3 rounded-xl border border-slate-900">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-[10px] text-slate-500 text-center">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
};
