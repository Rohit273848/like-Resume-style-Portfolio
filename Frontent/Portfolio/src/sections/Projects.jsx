import React from "react";
import { projects } from "../data/projects";
import { Github, ExternalLink, Cpu, Terminal, CheckCircle2 } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-50 relative py-20 px-8 lg:px-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-slate-500 font-semibold block mb-2">
            04 // Case Studies
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Featured Projects & Products
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Case studies detailing system problems, approaches, architectures, and performance outcomes.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            return (
              <div 
                key={project.id}
                className="relative group border-t border-slate-200 pt-8"
              >
                {/* Horizontal Blueprint guide */}
                <div className="absolute -top-1.5 left-0 text-[8px] font-mono text-slate-300 select-none">
                  + P.{indexStr} // ARCH_SPEC
                </div>

                {/* Project Header Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold block mb-1">
                      System Case Study #{indexStr}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Actions Links */}
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-600 bg-white py-1.5 px-3 rounded-md transition-all font-medium"
                    >
                      <Github size={13} /> Source
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-600 bg-white py-1.5 px-3 rounded-md transition-all font-medium"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  </div>
                </div>

                {/* Technical Architecture Box */}
                {project.architecture && (
                  <div className="mb-6 bg-slate-900 border border-slate-800 p-4 rounded-md relative overflow-hidden group">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Terminal size={13} className="text-blue-400" />
                        <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                          Dataflow & Topology Schematic
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-slate-500">
                        STATUS: COMPILED // STABLE
                      </span>
                    </div>
                    <div className="font-mono text-xs text-emerald-400 overflow-x-auto whitespace-nowrap py-1 scrollbar-thin">
                      {project.architecture}
                    </div>
                  </div>
                )}

                {/* Case Study Grid details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
                  
                  {/* Problem & Approach */}
                  <div className="space-y-4">
                    <div className="border-l border-red-200 pl-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold block mb-1.5">
                        [01] The Bottleneck
                      </span>
                      <p className="text-slate-700 text-sm leading-relaxed font-normal">
                        {project.problem}
                      </p>
                    </div>

                    <div className="border-l border-blue-200 pl-4">
                      <span className="font-mono text-xs uppercase tracking-widest text-blue-500 font-bold block mb-1.5">
                        [02] System Design Approach
                      </span>
                      <p className="text-slate-700 text-sm leading-relaxed font-normal">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Features & Outcomes */}
                  <div className="border-l border-emerald-200 pl-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold block mb-2.5">
                      [03] Key Implementation Features
                    </span>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex gap-2 text-slate-700 text-sm leading-relaxed font-normal">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap items-center gap-1.5 border-t border-slate-200/60 pt-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-medium mr-2">
                    Tech Stack:
                  </span>
                  {project.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="font-mono text-[10px] uppercase tracking-wider text-slate-600 bg-white border border-slate-200 py-0.5 px-2 rounded font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
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
