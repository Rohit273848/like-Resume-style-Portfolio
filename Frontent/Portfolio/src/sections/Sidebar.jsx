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
  FileDown
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import rohitAvatar from "../assets/images/rohit-avatar.png";

export const Sidebar = ({ activeSection, setActiveSection, menuOpen, setMenuOpen }) => {
  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "github-stats", label: "Profiles & Stats", icon: Github },
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
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-900 z-40 flex flex-col justify-between pt-8 pb-6 transition-transform duration-300 lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Section */}
        <div className="flex flex-col gap-6">
          {/* Avatar and Name */}
          <div className="flex flex-col items-center text-center px-6 mb-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-blue-600/30 p-0.5 bg-slate-900 mb-3 shadow-md shadow-blue-500/10">
              <img 
                src={rohitAvatar} 
                alt={portfolioData.name} 
                className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <h1 className="font-bold text-white text-lg tracking-tight">{portfolioData.name}</h1>
            <span className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase mt-1">
              Backend Developer
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col w-full">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group flex items-center justify-between w-full px-6 py-3.5 text-sm font-medium transition-all duration-300 border-r-4 ${
                    isActive
                      ? "bg-slate-900 text-white border-blue-600"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/40 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className={isActive ? "text-blue-500" : "text-slate-400 group-hover:text-white"} />
                    <span>{item.label}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="px-6 flex flex-col gap-4">
          {/* Resume Download CTA */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-blue-600/20 active:translate-y-0.5"
          >
            <FileDown size={14} /> Download CV
          </a>

          {/* Socials Grid */}
          <div className="flex items-center justify-center gap-4 bg-slate-900/40 py-2.5 rounded-xl border border-slate-900">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>
          <p className="text-[9px] text-slate-600 text-center tracking-wide">
            &copy; {new Date().getFullYear()} {portfolioData.name}
          </p>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
