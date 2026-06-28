import React from "react";
import { projects } from "../data/projects";
import { Github, ArrowUpRight } from "lucide-react";

// ─── Custom UI Mockups representing each project ─────────────────────────────

// Mockup 1: AI-Powered Resume Screen & ATS Analyzer (Dark Dashboard)
const ResumeScreenerMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 p-4 md:p-5 flex flex-col justify-between select-none relative overflow-hidden font-sans text-left">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_50%)] pointer-events-none" />
      
      {/* Top Header */}
      <div className="flex justify-between items-center z-10">
        <span className="text-white font-bold tracking-tight text-sm">ResuScan ATS</span>
        <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold tracking-wider uppercase">
          Analysis
        </span>
      </div>

      {/* Middle Layout */}
      <div className="grid grid-cols-5 gap-4 items-center z-10 my-auto">
        {/* Left Column stats */}
        <div className="col-span-3 space-y-2.5">
          {/* Stat Box 1 */}
          <div className="bg-zinc-900/80 border border-zinc-800/80 p-2.5 rounded-lg">
            <div className="text-rose-400 font-serif text-lg leading-none font-bold">87%</div>
            <div className="text-[9px] text-zinc-500 uppercase tracking-wider mt-1">Match Rate</div>
          </div>
          {/* Stat Box 2 */}
          <div className="bg-zinc-900/80 border border-zinc-800/80 p-2.5 rounded-lg">
            <div className="text-emerald-400 font-mono text-xs font-bold">1.24s</div>
            <div className="text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">Latency</div>
          </div>
        </div>

        {/* Right Column circular progress */}
        <div className="col-span-2 flex justify-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            {/* SVG circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="36%"
                stroke="#1f2937"
                strokeWidth="6"
                fill="transparent"
              />
              <circle
                cx="50%"
                cy="50%"
                r="36%"
                stroke="#e11d48"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray="226"
                strokeDashoffset="72"
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <circle
                cx="50%"
                cy="50%"
                r="36%"
                stroke="#f59e0b"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray="226"
                strokeDashoffset="180"
                strokeLinecap="round"
                className="opacity-70"
              />
            </svg>
            <div className="absolute text-center flex flex-col justify-center">
              <span className="text-white font-serif text-base md:text-lg font-bold">87%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mockup 2: AI Powered Customer Support Platform (Support Desk) (Light Dashboard)
const SupportSaaSMockup = () => {
  return (
    <div className="w-full h-full bg-slate-50 p-4 md:p-5 flex flex-col justify-between select-none font-sans text-left border-t border-slate-100/30">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200/50">
        <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse shrink-0" />
        <span className="text-slate-800 font-bold text-xs">Support Desk AI</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-3 flex-1 items-stretch mt-1">
        {/* Left Side: Chart */}
        <div className="col-span-7 bg-white border border-slate-200/60 rounded-xl p-3 flex flex-col justify-between shadow-xs">
          {/* Mock Search/Title bar */}
          <div className="h-2 w-16 bg-slate-200 rounded-full mb-3" />
          
          {/* Bars */}
          <div className="flex items-end justify-between h-14 md:h-16 px-1">
            <div className="w-2.5 bg-indigo-500/80 rounded-t-sm h-[30%] transition-all duration-300 hover:h-[45%]" />
            <div className="w-2.5 bg-indigo-500/80 rounded-t-sm h-[75%] transition-all duration-300 hover:h-[90%]" />
            <div className="w-2.5 bg-indigo-500/80 rounded-t-sm h-[50%] transition-all duration-300 hover:h-[65%]" />
            <div className="w-2.5 bg-indigo-500/80 rounded-t-sm h-[90%] transition-all duration-300 hover:h-[100%]" />
          </div>
        </div>

        {/* Right Side: Insights */}
        <div className="col-span-5 flex flex-col gap-2">
          {/* Insight Card */}
          <div className="bg-indigo-600/90 text-white rounded-xl p-2.5 flex-1 flex flex-col justify-between shadow-xs">
            <span className="text-[9px] font-semibold tracking-wider uppercase text-indigo-100">AI insight</span>
            <div className="h-1 bg-white/30 rounded-full w-full mt-2 overflow-hidden">
              <div className="h-full bg-white w-2/3 rounded-full" />
            </div>
          </div>
          {/* Summary Box */}
          <div className="bg-white border border-slate-200/60 rounded-xl p-2 flex flex-col gap-1.5 justify-center shadow-xs">
            <div className="h-1.5 bg-slate-200 rounded-full w-3/4" />
            <div className="h-1.5 bg-slate-200 rounded-full w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Mockup 3: QuickMind – AI Powered Search Engine (Dark/Neural Dashboard)
const QuickMindMockup = () => {
  return (
    <div className="w-full h-full bg-slate-900 p-4 md:p-5 flex flex-col justify-between select-none relative overflow-hidden font-sans text-left">
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.18),transparent_40%)] pointer-events-none" />
      
      {/* Search Bar */}
      <div className="w-full bg-slate-800/80 border border-slate-700/60 rounded-lg px-2.5 py-1.5 flex items-center gap-2 z-10 shadow-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
        <span className="text-[9px] font-mono text-indigo-200">vector_search(query)</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1 items-center z-10 mt-3">
        {/* Left Panel: typed results */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-2.5 space-y-2 h-full flex flex-col justify-center">
          <div className="h-1 bg-indigo-400/80 rounded-full w-5/6" />
          <div className="h-1 bg-slate-800 rounded-full w-full" />
          <div className="h-1 bg-slate-800 rounded-full w-4/6" />
          <div className="h-1 bg-slate-800 rounded-full w-3/4" />
        </div>

        {/* Right Panel: network visual */}
        <div className="h-full flex items-center justify-center relative bg-slate-950/40 rounded-lg border border-slate-800/40">
          <svg className="w-full h-full opacity-70">
            {/* Grid lines */}
            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
            {/* Network edges */}
            <line x1="30%" y1="30%" x2="50%" y2="65%" stroke="#4f46e5" strokeWidth="1" />
            <line x1="50%" y1="65%" x2="75%" y2="35%" stroke="#4f46e5" strokeWidth="1" />
            <line x1="30%" y1="30%" x2="75%" y2="35%" stroke="#4f46e5" strokeWidth="0.75" strokeDasharray="2 2" />
            {/* Nodes */}
            <circle cx="30%" cy="30%" r="4" fill="#818cf8" className="animate-pulse" />
            <circle cx="30%" cy="30%" r="2.5" fill="#4f46e5" />
            <circle cx="50%" cy="65%" r="2.5" fill="#4f46e5" />
            <circle cx="75%" cy="35%" r="3.5" fill="#a5b4fc" />
          </svg>
          <span className="absolute bottom-1 right-2 text-[7px] font-mono text-slate-500 uppercase tracking-widest">RAG ENGINE</span>
        </div>
      </div>
    </div>
  );
};

// Dispatch function to render appropriate mockup
const renderMockup = (projectId) => {
  switch (projectId) {
    case 1:
      return <ResumeScreenerMockup />;
    case 2:
      return <SupportSaaSMockup />;
    case 3:
      return <QuickMindMockup />;
    default:
      return null;
  }
};

// Map each project ID to its custom uppercase category label matching screenshot style
const getProjectCategory = (projectId) => {
  switch (projectId) {
    case 1:
      return "AI AGENT INTEGRATION · PDF DATA PIPELINE · PYTHON & REACT";
    case 2:
      return "SAAS PLATFORM · MULTI-TENANT BACKEND · MONGO & NODE";
    case 3:
      return "SEARCH ARCHITECTURE · VECTOR DATABASE · OPENAI & LANGCHAIN";
    default:
      return "CASE STUDY · WORK IN PROGRESS";
  }
};

// ─── Main Projects Section ──────────────────────────────────────────────────
export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-[#FEFBF0] py-24 border-b border-[#E0DCBA] relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Editorial Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-semibold block">
              02
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
              Work
            </h2>
            <p className="text-slate-500 max-w-xl text-xs md:text-sm leading-relaxed pt-1">
              A few projects from the last couple of years, from first sketch to shipped screen.
            </p>
          </div>
          
          {/* Ornamental Accent (Beige circle with orange/brown center dot) */}
          <div className="flex items-center justify-center shrink-0 md:pt-4">
            <div className="w-10 h-10 rounded-full border border-[#B45309]/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]" />
            </div>
          </div>
        </div>

        {/* Dossier Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project) => {
            const category = getProjectCategory(project.id);
            return (
              <div key={project.id} className="flex flex-col group text-left">
                {/* 1. Case Study Folder Tab */}
                <div className="flex">
                  <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none">
                    CASE STUDY
                  </div>
                </div>

                {/* 2. Double-bordered Frame Container */}
                <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]">
                  <div className="border border-slate-800 rounded-xl overflow-hidden aspect-[1.5] relative bg-white">
                    {/* Render specific CSS UI Mockup */}
                    {renderMockup(project.id)}
                  </div>
                </div>

                {/* 3. Below Card Metadata & Links */}
                <div className="mt-5 space-y-2">
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-slate-500 block">
                    {category}
                  </span>
                  
                  {/* Hover-animated Title with Arrow */}
                  <h3 className="font-serif text-2xl text-slate-900 leading-tight flex items-center gap-1.5 transition-colors duration-300">
                    <span className="font-serif italic font-medium">{project.title.split("–")[0].trim()}</span>
                    <span className="font-sans font-bold text-xl inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </h3>

                  {/* Description text */}
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                    {project.solution}
                  </p>

                  {/* Modern Minimalist Project Links */}
                  <div className="flex items-center gap-5 pt-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#B45309] font-bold hover:underline transition-all duration-300"
                    >
                      <span>Demo</span>
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-500 hover:text-slate-955 font-bold transition-colors duration-300"
                    >
                      <Github size={13} />
                      <span>Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
