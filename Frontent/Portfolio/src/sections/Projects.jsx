import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { projects } from "../data/projects";
import { Github, ExternalLink, AlertCircle, CheckCircle2 } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Technical Case Studies" subtitle="Portfolio Projects" />

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white p-6 lg:p-8 hover:border-blue-500/30">
              <div className="flex flex-col lg:flex-row gap-6 justify-between">
                
                {/* Project Details */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="default" className="text-[10px] font-semibold py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Problem & Solution Case Study */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-red-50/50 rounded-lg border border-red-100 flex gap-2.5 items-start">
                      <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                      <div>
                        <h4 className="text-xs font-bold text-red-800 uppercase tracking-wide">The Problem</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{project.problem}</p>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100 flex gap-2.5 items-start">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                      <div>
                        <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wide">The Solution</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Key Engineering Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 list-disc list-inside text-xs text-slate-600">
                      {project.keyFeatures.map((feature, fIdx) => (
                        <li key={fIdx} className="leading-relaxed">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase self-center mr-1">Stack:</span>
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-[10px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Case Study Actions Sidebar */}
                <div className="lg:w-44 flex flex-row lg:flex-col gap-3 justify-end shrink-0 pt-4 lg:pt-0 lg:border-l lg:border-slate-100 lg:pl-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:w-full"
                  >
                    <Button variant="secondary" size="sm" className="w-full text-xs font-semibold py-2">
                      <Github size={14} className="mr-1.5" /> Source Code
                    </Button>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:w-full"
                  >
                    <Button variant="outline" size="sm" className="w-full text-xs font-semibold py-2 border-slate-200 text-slate-700 hover:bg-slate-50">
                      <ExternalLink size={14} className="mr-1.5" /> Live Demo
                    </Button>
                  </a>
                </div>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
