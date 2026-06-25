import React from "react";
import { portfolioData } from "../data/portfolioData";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-transparent border-t border-slate-200 text-center text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p className="flex gap-4">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
