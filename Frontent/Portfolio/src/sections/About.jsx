import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { portfolioData } from "../data/portfolioData";
import { MapPin, Mail, Briefcase, Calendar } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" subtitle="Biography" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Main Description */}
          <div className="md:col-span-2 space-y-6 text-slate-400 text-base leading-relaxed">
            <p>
              Hello! I'm a Computer Engineering student dedicated to learning how things work under the hood. My journey in software began when I wanted to build custom modifications for my favorite games, which rapidly pivoted into web application engineering.
            </p>
            <p>
              Currently, I focus on building accessible, premium web experiences and writing clean, scalable backend systems. I am continuously exploring devops pipelines, containerized deployments, and cloud native architectures.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-indigo-500" />
                <span>{portfolioData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-indigo-500" />
                <span>{portfolioData.email}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Briefcase size={18} className="text-indigo-500" />
                <span>Open to Internships</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar size={18} className="text-indigo-500" />
                <span>Available Fall 2026</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 gap-4 w-full">
            <Card className="flex flex-col items-center justify-center text-center p-6 bg-slate-900/40">
              <span className="text-3xl font-extrabold text-indigo-500">{portfolioData.stats.experience}</span>
              <span className="text-sm text-slate-400 font-medium mt-1">Experience</span>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center p-6 bg-slate-900/40">
              <span className="text-3xl font-extrabold text-emerald-400">{portfolioData.stats.projects}</span>
              <span className="text-sm text-slate-400 font-medium mt-1">Projects Completed</span>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center p-6 bg-slate-900/40">
              <span className="text-3xl font-extrabold text-purple-400">{portfolioData.stats.commits}</span>
              <span className="text-sm text-slate-400 font-medium mt-1">GitHub Commits</span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
