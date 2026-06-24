import React from "react";
import { Button } from "../components/ui/Button";
import { ArrowRight, FileText, Github, ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import GridLine from "../components/ui/GridLine";
import PlusNode from "../components/ui/PlusNode";

// Coordinates are scaled out of 100 to map perfectly to the 100% SVG view box & left/top percentages.
const NODES = {
  react: { name: "React", x: 15, y: 18, duration: 6, delay: 0, icon: "react" },
  express: { name: "Express.js", x: 38, y: 35, duration: 7, delay: 1, icon: "express" },
  node: { name: "Node.js", x: 18, y: 52, duration: 5.5, delay: 0.5, icon: "node" },
  mongodb: { name: "MongoDB", x: 12, y: 82, duration: 8, delay: 2, icon: "mongodb" },
  docker: { name: "Docker", x: 42, y: 72, duration: 6.5, delay: 1.5, icon: "docker" },
  github: { name: "GitHub", x: 50, y: 15, duration: 7.5, delay: 0.2, icon: "github" },
  langchain: { name: "LangChain", x: 62, y: 48, duration: 6, delay: 1.2, icon: "langchain" },
  python: { name: "Python", x: 78, y: 20, duration: 7, delay: 0.8, icon: "python" },
  tensorflow: { name: "TensorFlow", x: 88, y: 40, duration: 5.8, delay: 2.5, icon: "tensorflow" },
  openai: { name: "OpenAI GPT", x: 85, y: 68, duration: 6.8, delay: 0.3, icon: "openai" },
  gemini: { name: "Google Gemini", x: 78, y: 88, duration: 7.2, delay: 1.7, icon: "gemini" },
  mistral: { name: "Mistral AI", x: 55, y: 85, duration: 8.5, delay: 0.9, icon: "mistral" }
};

const CONNECTIONS = [
  ["react", "express"],
  ["node", "express"],
  ["mongodb", "node"],
  ["express", "docker"],
  ["express", "github"],
  ["github", "python"],
  ["docker", "langchain"],
  ["langchain", "python"],
  ["python", "tensorflow"],
  ["langchain", "openai"],
  ["langchain", "gemini"],
  ["langchain", "mistral"],
  ["docker", "gemini"],
  ["mistral", "openai"]
];

const renderTechIcon = (iconKey) => {
  switch (iconKey) {
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#47A248]">
          <path d="M12 2C11.5 2 6 7 6 12C6 17 12 22 12 22S18 17 18 12C18 7 12.5 2 12 2M12 4C12.5 4.5 15.5 8.5 15.5 12C15.5 15.5 12.5 19.5 12 20C11.5 19.5 8.5 15.5 8.5 12C8.5 8.5 11.5 4.5 12 4Z" />
        </svg>
      );
    case "express":
      return (
        <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-slate-900 text-white font-mono font-extrabold text-[9px] uppercase tracking-tighter select-none leading-none">
          ex
        </div>
      );
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 stroke-[#61DAFB] fill-none" strokeWidth="1.5">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g>
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#339933]">
          <path d="M12 2L4.27 6.46v9.08L12 22l7.73-4.46V6.46L12 2zm5.73 12.87l-5.73 3.3-5.73-3.3V8.67l5.73-3.3 5.73 3.3v6.2z"/>
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3776AB]">
          <path d="M12.12 2c-3.15 0-2.94 1.36-2.94 1.36v1.44h3v.44h-4.3s-1.84-.2-1.84 2.18c0 2.37 1.6 2.27 1.6 2.27h.95v-1.34s-.06-1.6 1.57-1.6h2.89s1.58.07 1.58-1.5V3.82c0-1.82-1.46-1.82-1.46-1.82zm-1.62 1.1a.57.57 0 1 1 0 1.14.57.57 0 0 1 0-1.14zm4.38 5.46v1.34s.06 1.6-1.57 1.6h-2.89s-1.58-.07-1.58 1.5v1.46c0 1.82 1.46 1.82 1.46 1.82h3.15c3.15 0 2.94-1.36 2.94-1.36V13.5h-3v-.44h4.3s1.84.2 1.84-2.18c0-2.37-1.6-2.27-1.6-2.27zM13.5 20.9a.57.57 0 1 1 0-1.14.57.57 0 0 1 0 1.14z"/>
        </svg>
      );
    case "tensorflow":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF6F00]">
          <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm0 3.3L17.5 8.5v7L12 18.7l-5.5-3.2v-7L12 5.3z" />
        </svg>
      );
    case "openai":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#10a37f]">
          <path d="M21.74 11.45a3.86 3.86 0 0 0-1.28-3.04 3.88 3.88 0 0 0-.25-.19 3.85 3.85 0 0 0-2.31-.77h-.82a4.42 4.42 0 0 0-.17-.79 3.89 3.89 0 0 0-2.35-2.39 3.85 3.85 0 0 0-3.69.58c-.14.11-.27.22-.4.35l-.47.46V3.86a3.89 3.89 0 0 0-2.73-3.7 3.85 3.85 0 0 0-3.56 1.15c-.12.13-.23.27-.33.4a3.86 3.86 0 0 0-.68 2.34v.85c-.27.05-.53.15-.79.28a3.89 3.89 0 0 0-2.39 2.35 3.85 3.85 0 0 0 .58 3.69c.11.14.22.27.35.4l.46.47H2.26a3.89 3.89 0 0 0-3.7 2.73 3.85 3.85 0 0 0 1.15 3.56c.13.12.27.23.4.33a3.86 3.86 0 0 0 2.34.68h.85c.05.27.15.53.28.79a3.89 3.89 0 0 0 2.35 2.39 3.85 3.85 0 0 0 3.69-.58c.14-.11.27-.22.4-.35l.47-.46v1.81a3.89 3.89 0 0 0 2.73 3.7 3.85 3.85 0 0 0 3.56-1.15c.12-.13.23-.27.33-.4a3.86 3.86 0 0 0 .68-2.34v-.85c.27-.05.53-.15.79-.28a3.89 3.89 0 0 0 2.39-2.35 3.85 3.85 0 0 0-.58-3.69c-.11-.14-.22-.27-.35-.4l-.46-.47h1.81a3.89 3.89 0 0 0 3.7-2.73 3.85 3.85 0 0 0-1.15-3.56z" />
        </svg>
      );
    case "gemini":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1A73E8]">
          <path d="M12 2c-.1 2.9-2.1 5-5 5.1 2.9.1 5 2.1 5.1 5 .1-2.9 2.1-5 5-5.1-2.9-.1-5-2.1-5.1-5zm-5 10c0 1.9-1.4 3.4-3.3 3.4 1.9 0 3.3 1.5 3.3 3.4 0-1.9 1.5-3.4 3.4-3.4-1.9 0-3.4-1.5-3.4-3.4z" />
        </svg>
      );
    case "mistral":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FD5E30]">
          <path d="M3 4l9 7 9-7v16h-4v-7.5l-5 3.8-5-3.8v7.5h-4z" />
        </svg>
      );
    case "langchain":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#1C3C3A]" strokeWidth="2" strokeLinecap="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#2496ED]">
          <path d="M13.962 6.075h-2.43v2.339h2.43V6.075zm2.71 0h-2.437v2.339h2.438V6.075zm-8.15 2.585h-2.436v2.34h2.437v-2.34zm2.71 0h-2.43v2.34h2.43v-2.34zm2.73 0h-2.437v2.34h2.438v-2.34zm2.71 0h-2.43v2.34h2.43v-2.34zm-10.87 2.593H3.633v2.34h2.438v-2.34zm2.72 0h-2.43v2.34h2.43v-2.34zm2.71 0h-2.437v2.34h2.438v-2.34zm2.73 0h-2.43v2.34h2.43v-2.34zM22.38 12.5c-.326-.062-.656-.1-.986-.112a2.38 2.38 0 0 0-2.072 1.155c-.244-.143-.53-.223-.824-.223-.427 0-.825.17-1.127.464-.176-.412-.518-.737-.942-.9-.126-.05-.262-.075-.4-.075-.583 0-1.1.346-1.32.883-.178-.293-.456-.516-.79-.628-.158-.052-.326-.08-.497-.08a2.378 2.378 0 0 0-1.52.553v-6.19H1.282v7.7c0 4.14 3.36 7.5 7.5 7.5h7.1c3.812 0 7.02-2.825 7.458-6.554a3.17 3.17 0 0 0-.958-.095z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-800">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    default:
      return null;
  }
};

export const Hero = () => {
  return (
    <section 
      id="hero" 
      className="w-full bg-white relative py-16 px-6 lg:py-0 lg:px-16 border-b border-slate-200 overflow-hidden flex items-center min-h-[85vh] lg:h-[85vh] lg:min-h-[640px] z-20"
    >
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

      {/* Subtle Technical Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 select-none">
        {/* Dotted Grid Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, #3B82F6 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(circle at 60% 50%, black 20%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 20%, transparent 60%)'
          }}
        />
        {/* Technical Diagram Overlay */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Neural net left top */}
          <g transform="translate(60, 90)">
            <circle cx="10" cy="10" r="3" fill="#3B82F6" />
            <circle cx="10" cy="50" r="3" fill="#3B82F6" />
            <circle cx="10" cy="90" r="3" fill="#3B82F6" />
            <circle cx="50" cy="30" r="3" fill="#3B82F6" />
            <circle cx="50" cy="70" r="3" fill="#3B82F6" />
            <circle cx="90" cy="50" r="3" fill="#3B82F6" />
            <line x1="10" y1="10" x2="50" y2="30" stroke="#3B82F6" strokeWidth="1" />
            <line x1="10" y1="50" x2="50" y2="30" stroke="#3B82F6" strokeWidth="1" />
            <line x1="10" y1="50" x2="50" y2="70" stroke="#3B82F6" strokeWidth="1" />
            <line x1="10" y1="90" x2="50" y2="70" stroke="#3B82F6" strokeWidth="1" />
            <line x1="50" y1="30" x2="90" y2="50" stroke="#3B82F6" strokeWidth="1" />
            <line x1="50" y1="70" x2="90" y2="50" stroke="#3B82F6" strokeWidth="1" />
          </g>
          {/* API / DB connection left bottom */}
          <g transform="translate(80, 440)">
            {/* Db cylinder */}
            <path d="M10,15 C10,10 30,10 30,15 C30,20 10,20 10,15" stroke="#3B82F6" strokeWidth="1" fill="none" />
            <path d="M10,15 L10,35 C10,40 30,40 30,35 L30,15" stroke="#3B82F6" strokeWidth="1" fill="none" />
            <path d="M10,25 C10,30 30,30 30,25" stroke="#3B82F6" strokeWidth="1" fill="none" />
            {/* Server block */}
            <rect x="70" y="15" width="40" height="25" rx="3" stroke="#3B82F6" strokeWidth="1" fill="none" />
            <line x1="75" y1="23" x2="85" y2="23" stroke="#3B82F6" strokeWidth="1" />
            <line x1="75" y1="31" x2="95" y2="31" stroke="#3B82F6" strokeWidth="1" />
            {/* Connecting line */}
            <path d="M30,25 L70,27" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        {/* Left Side Details (60%) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-[10px] uppercase font-mono tracking-widest text-blue-600 font-bold mb-6 w-fit select-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            System Spec v2026.1 // MERN & AI Systems
          </div>

          {/* Large Bold Heading */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tighter leading-none mb-6">
            ROHIT MAHAJAN
          </h1>

          {/* Professional Subtitle */}
          <p className="text-2xl lg:text-4xl text-slate-800 font-light leading-snug mb-8 max-w-2xl">
            Building scalable <span className="text-blue-600 font-semibold">MERN</span> applications, distributed <span className="text-blue-600 font-semibold">Backend Systems</span>, and AI-powered software.
          </p>

          {/* Short Description */}
          <div className="border-l-2 border-slate-200 pl-6 mb-10 max-w-xl">
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              Computer Engineering student focused on backend architecture, <span className="text-blue-600 font-medium">Machine Learning</span>, APIs, distributed systems, and modern web technologies including <span className="text-blue-600 font-medium">LLM Applications</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs uppercase font-mono tracking-wider gap-2 bg-[#0F172A] hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 text-white rounded-lg transition-all duration-300"
            >
              View Projects <ArrowRight size={14} />
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
                className="text-xs uppercase font-mono tracking-wider gap-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-850 rounded-lg transition-all duration-300"
              >
                Resume <FileText size={14} />
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
                className="text-xs uppercase font-mono tracking-wider gap-2 text-slate-500 hover:text-[#0F172A] hover:bg-slate-100/50 rounded-lg transition-all duration-300"
              >
                <Github size={14} /> GitHub
              </Button>
            </a>
          </div>
        </div>

        {/* Right Side Technology Ecosystem (40%) */}
        <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
          {/* Soft ambient blue glow in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none z-0" />
          
          {/* Constellation Canvas wrapper */}
          <div className="relative w-full h-full max-w-[420px] max-h-[420px]">
            {/* SVG Lines Connector layer */}
            <svg 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none" 
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            >
              <defs>
                <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {CONNECTIONS.map(([from, to], idx) => {
                const fromNode = NODES[from];
                const toNode = NODES[to];
                if (!fromNode || !toNode) return null;
                return (
                  <g key={idx}>
                    {/* Background glow line */}
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      className="opacity-20 animate-pulse-slow"
                    />
                    {/* Glowing flow dashed line */}
                    <line
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="url(#line-glow)"
                      strokeWidth="1.2"
                      strokeDasharray="4 6"
                      className="animate-dash"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Constellation Nodes (Floating Glassmorphism cards) */}
            {Object.entries(NODES).map(([key, node], idx) => {
              const animClass = idx % 3 === 0 
                ? "animate-float-1" 
                : idx % 3 === 1 
                  ? "animate-float-2" 
                  : "animate-float-3";
              
              return (
                <div
                  key={key}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    animationDelay: `${node.delay}s`
                  }}
                  className={`absolute z-20 group hover:z-30 transition-all duration-300 ${animClass}`}
                >
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/80 backdrop-blur-md border border-slate-200/60 hover:border-blue-500/50 shadow-[0_4px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.1)] hover:-translate-y-0.5 rounded-xl transition-all duration-300 cursor-default">
                    <div className="w-5 h-5 flex items-center justify-center">
                      {renderTechIcon(node.icon)}
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-600 select-none whitespace-nowrap group-hover:text-blue-600 transition-colors">
                      {node.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
