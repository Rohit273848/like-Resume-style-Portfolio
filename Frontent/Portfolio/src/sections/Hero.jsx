import React from "react";
import { Button } from "../components/ui/Button";
import { ArrowRight, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-16 bg-radial from-slate-900 via-slate-950 to-slate-950"
    >
      <div className="max-w-3xl">
        <span className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">
          Welcome to my portfolio
        </span>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
          Hi, I'm <span className="text-indigo-500">{portfolioData.name}</span>
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl text-slate-300 font-medium">
          {portfolioData.title}
        </h2>
        <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
          {portfolioData.bio}
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects <ArrowRight className="ml-2" size={16} />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open("#", "_blank")}
          >
            Resume <FileText className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};
