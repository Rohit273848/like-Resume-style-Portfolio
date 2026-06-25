import React from "react";
import { Terminal, Globe, Menu, ChevronLeft } from "lucide-react";

export const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="hidden lg:flex h-14 bg-transparent items-center justify-between px-12 relative z-30">
      {/* Grid line indicator */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 border border-slate-200/80 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white/80 transition-colors cursor-pointer flex items-center justify-center shadow-sm"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <ChevronLeft size={16} /> : <Menu size={16} />}
        </button>
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-slate-400 animate-spin-slow" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">
            Location: India (GMT+5:30)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Availability tag */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-600 font-bold">
            Available for Summer/Fall 2026 Internships
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
