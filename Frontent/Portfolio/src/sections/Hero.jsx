import React from "react";
import { Button } from "../components/ui/Button";
import { ArrowRight, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import rohitAvatar from "../assets/images/rohit-avatar.png";

export const Hero = () => {
  return (
    <section id="hero" className="w-full bg-slate-50 flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-200">
        
        {/* Left Side: Large Portrait Image */}
        <div className="relative w-full h-80 md:h-[450px] bg-slate-200">
          <img
            src={rohitAvatar}
            alt={portfolioData.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Slate Professional Info Card */}
        <div className="bg-slate-900 text-white flex flex-col justify-center p-8 lg:p-12 gap-5">
          <div>
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-blue-400 uppercase">
              {portfolioData.title}
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mt-2 tracking-tight">
              {portfolioData.name}
            </h1>
            <h2 className="text-sm md:text-base text-slate-300 font-medium mt-1 uppercase tracking-wide">
              {portfolioData.specialization}
            </h2>
          </div>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
            Building scalable backend architectures, designing robust database schemas, and exploring AI-driven solutions to automate real-world processes.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs tracking-wider uppercase font-semibold gap-1.5"
            >
              Contact Me <ArrowRight size={14} />
            </Button>
            
            {/* Outline CV Download, matching the reference outline block */}
            <a href="#" className="inline-block">
              <Button
                variant="outline"
                size="md"
                className="text-xs tracking-wider uppercase font-semibold border-slate-700 text-white hover:bg-slate-800 hover:border-blue-500 hover:text-white"
              >
                Download CV <FileText className="ml-1.5" size={14} />
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Hero;
