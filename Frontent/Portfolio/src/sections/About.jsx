import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { portfolioData } from "../data/portfolioData";
import { Cpu, Database, Award, ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 px-6 lg:px-12 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" subtitle="Career Objective & Focus" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Biography Column */}
          <div className="md:col-span-2 space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              I am a Computer Engineering student with a deep interest in backend engineering and intelligent systems. I believe that a solid software engineering foundation begins with understanding data structures, algorithm complexities, and reliable data modeling.
            </p>
            <p>
              My coding journey focuses heavily on backend development—writing high-throughput REST APIs, setting up relational and non-relational database structures, and managing background tasks. Additionally, I am exploring machine learning models to write intelligent web automation pipelines.
            </p>
            <p>
              Currently, I am looking for internship opportunities where I can apply my skills in Java, Node.js, and Python, contribute to production codebases, and collaborate with senior engineering teams.
            </p>
          </div>

          {/* Quick Focus Card Grid */}
          <div className="flex flex-col gap-4">
            <Card className="flex items-start gap-4 p-5 hover:border-blue-500/30">
              <span className="p-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg">
                <Database size={18} />
              </span>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Systems Architecture</h4>
                <p className="text-xs text-slate-500 mt-1">Focusing on REST APIs, microservices, and database performance tuning.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 p-5 hover:border-emerald-500/30">
              <span className="p-2 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-lg">
                <Cpu size={18} />
              </span>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">AI & Automation</h4>
                <p className="text-xs text-slate-500 mt-1">Applying Python, NumPy, and Pandas to write intelligent backend scripts.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 p-5 hover:border-purple-500/30">
              <span className="p-2 bg-purple-50 border border-purple-100 text-purple-600 rounded-lg">
                <Award size={18} />
              </span>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Problem Solving</h4>
                <p className="text-xs text-slate-500 mt-1">Engaging in competitive programming and continuous DSA research.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
