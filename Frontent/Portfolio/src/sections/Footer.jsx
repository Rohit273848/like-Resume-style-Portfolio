import React from "react";
import { portfolioData } from "../data/portfolioData";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p className="flex gap-4">
          <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};
