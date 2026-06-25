import React from "react";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <section id="skills" className="w-full bg-white relative py-20 px-8 lg:px-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-sm uppercase tracking-widest text-slate-500 font-semibold block mb-2">
            03 // Skills Matrix
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Technical Competencies
          </h2>
          <p className="text-base text-slate-600 mt-2">
            A precise mapping of my software engineering capabilities and focus areas.
          </p>
        </div>

        {/* Matrix Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
          {skills.map((group, index) => {
            const indexNumber = String(index + 1).padStart(2, "0");
            return (
              <div 
                key={index}
                className="p-6 border-r border-b border-slate-200 bg-white hover:bg-slate-50/50 transition-colors duration-200"
              >
                {/* Category Header */}
                <h3 className="font-mono text-sm font-bold text-slate-800 uppercase tracking-widest mb-4 flex items-center justify-between">
                  <span>{indexNumber} // {group.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {group.items.map((skill, sIdx) => (
                    <div key={sIdx} className="group/item">
                      <div className="flex items-baseline justify-between">
                        <span className="text-base font-bold text-slate-950 font-sans tracking-tight group-hover/item:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-slate-600 mt-1 tracking-wide leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>
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

export default Skills;
