import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Recent Projects" subtitle="My Works" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full bg-slate-900/40">
              {/* Project Mock Thumbnail */}
              <div className="relative w-full h-44 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden mb-5">
                <span className="text-xs text-slate-500 font-mono">[{project.image}]</span>
                <div className="absolute inset-0 bg-indigo-600/5 transition-opacity duration-300 hover:opacity-0" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-5 flex-grow line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <Badge key={tIdx} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="secondary" size="sm" className="w-full text-xs">
                    <Github size={14} className="mr-1.5" /> Code
                  </Button>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="primary" size="sm" className="w-full text-xs">
                    <ExternalLink size={14} className="mr-1.5" /> Live
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
