import React from "react";
import { Terminal, Globe } from "lucide-react";

export const Header = () => {
  return (
    <header className="hidden lg:flex h-14 bg-white border-b border-slate-200 items-center justify-between px-12 relative z-30">
      {/* Grid line indicator */}
      <div className="flex items-center gap-2">
        <Globe size={13} className="text-slate-400 animate-spin-slow" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
          Location: India (GMT+5:30)
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Availability tag */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-medium">
            Available for Summer/Fall 2026 Internships
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
