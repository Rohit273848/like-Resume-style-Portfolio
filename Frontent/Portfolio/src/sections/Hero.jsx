import React from "react";
import { Button } from "../components/ui/Button";
import { ArrowRight, FileText, Github, ChevronRight, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import GridLine from "../components/ui/GridLine";
import PlusNode from "../components/ui/PlusNode";

export const Hero = () => {
  return (
    <section id="hero" className="w-full bg-white relative py-20 px-8 lg:py-32 lg:px-20 border-b border-slate-200 overflow-hidden">
      {/* Decorative Blueprint Guide Lines */}
      <GridLine orientation="horizontal" className="top-8 left-0" />
      <GridLine orientation="horizontal" className="bottom-8 left-0" />
      <GridLine orientation="vertical" className="left-8 top-0" />
      <GridLine orientation="vertical" className="right-8 top-0" />
      
      {/* Intersections */}
      <PlusNode className="top-8 left-8" />
      <PlusNode className="top-8 right-8" />
      <PlusNode className="bottom-8 left-8" />
      <PlusNode className="bottom-8 right-8" />

      <div className="max-w-4xl mx-auto py-6 relative z-20">
        {/* Editorial Subtitle */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">
            Engineering Portfolio
          </span>
          <ChevronRight size={12} className="text-slate-300" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            System Spec v2026.1
          </span>
        </div>

        {/* Large Editorial Title */}
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-8">
          ROHIT MAHAJAN
        </h1>

        {/* Big Statement with Serif Italic details */}
        <p className="text-2xl lg:text-4xl text-slate-800 font-light leading-relaxed mb-10 max-w-3xl">
          Building scalable <span className="font-serif italic font-normal text-blue-600">backend systems</span> and 
          exploring <span className="font-serif italic font-normal text-blue-600">intelligent software</span> powered 
          by <span className="font-serif italic font-normal text-blue-600">artificial intelligence</span>.
        </p>

        {/* Short context */}
        <div className="border-l-2 border-slate-200 pl-6 mb-12 max-w-2xl">
          <p className="text-slate-600 text-sm leading-relaxed">
            Computer Engineering student specializing in backend architecture, distributed jobs coordination, 
            algorithmic optimization, and machine learning pipelines. Designing clear, performance-driven web products.
          </p>
        </div>

        {/* Button CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-xs uppercase font-mono tracking-wider gap-2 bg-slate-900 hover:bg-blue-600 hover:-translate-y-0.5"
          >
            Get In Touch <ArrowRight size={14} />
          </Button>

          <a 
            href={portfolioData.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-xs uppercase font-mono tracking-wider gap-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-800"
            >
              View CV <ExternalLink size={14} />
            </Button>
          </a>

          <a 
            href={portfolioData.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block"
          >
            <Button
              variant="ghost"
              size="lg"
              className="text-xs uppercase font-mono tracking-wider gap-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
            >
              <Github size={14} /> GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
