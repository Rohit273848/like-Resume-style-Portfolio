import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Database, Cpu, Award } from "lucide-react";
import GridLine from "../components/ui/GridLine";

export const About = () => {
  return (
    <section id="about" className="w-full bg-slate-50 relative py-20 px-8 lg:px-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">
              02 // Introduction
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              Engineering useful systems from the ground up.
            </h2>
            
            <div className="space-y-5 text-slate-600 text-sm leading-relaxed font-light">
              <p>
                I am a Computer Engineering student specializing in backend architectures and predictive modeling. 
                I believe that reliable software starts with clean data modeling, robust caching strategies, 
                and a deep understanding of algorithmic complexities.
              </p>
              <p>
                My engineering efforts focus on building high-throughput APIs, asynchronous job task processes, 
                and relational database schemas. I enjoy analyzing performance bottlenecks, reducing query 
                latencies, and designing fail-safe distributed components.
              </p>
              <p>
                Currently, I am looking to apply these skills through hands-on software development internships. 
                I look forward to contributing to mission-critical code bases and collaborating with senior engineering teams.
              </p>
            </div>
          </div>

          {/* Right Column: Focus Areas (Divided by borders instead of cards) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-6">
              Core Technical Focus
            </span>
            
            <div className="flex flex-col border-t border-slate-200">
              
              {/* Focus Item 1 */}
              <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                <Database size={16} className="text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                    Systems & Architecture
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Designing structured RESTful APIs, distributed queue workers, and caching layers with Express and Redis.
                  </p>
                </div>
              </div>

              {/* Focus Item 2 */}
              <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                <Cpu size={16} className="text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                    Machine Learning & AI
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Leveraging NLP methods and the Gemini API to build intelligent resume processors, parsing microservices, and classifiers.
                  </p>
                </div>
              </div>

              {/* Focus Item 3 */}
              <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                <Award size={16} className="text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                    Algorithmic Logic
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Applying mathematical optimization, graph algorithms, and clean tree architectures to solve computational problems.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
