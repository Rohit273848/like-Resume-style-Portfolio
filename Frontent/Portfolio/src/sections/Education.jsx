import React from "react";
import { education } from "../data/education";
import { GraduationCap, Briefcase } from "lucide-react";

export const Education = () => {
  // Experience timeline data
  const experience = [
    {
      role: "Backend & Systems Developer",
      organization: "Personal & Academic Projects",
      period: "2024 - Present",
      description: "Architected asynchronous queue systems, REST APIs, and microservices. Integrated cache strategies (Redis) and concurrency controls in Node.js/MongoDB databases. Developed semantic parsing tools using generative LLM integrations."
    },
    {
      role: "Open Source Contributor",
      organization: "GitHub / Developer Communities",
      period: "2024 - 2025",
      description: "Contributed to community packages and developer tooling. Optimized node script execution pipelines and assisted in database query tuning for local indexing libraries."
    }
  ];

  return (
    <section id="education" className="w-full bg-[#FEFBF0] py-24 border-b border-[#E0DCBA] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Editorial Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-3 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-semibold block">
              05
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
              Timeline
            </h2>
            <p className="text-slate-500 max-w-xl text-xs md:text-sm leading-relaxed pt-1">
              A comprehensive overview of my academic foundation and hands-on systems engineering practice.
            </p>
          </div>
          
          {/* Ornamental Accent */}
          <div className="flex items-center justify-center shrink-0 md:pt-4">
            <div className="w-10 h-10 rounded-full border border-[#B45309]/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]" />
            </div>
          </div>
        </div>

        {/* Split Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Column 1: Academic Credentials (ACADEMIC FOUNDATION Folder Card) */}
          <div className="flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none uppercase">
                Academic Foundation
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
              <div className="border border-slate-800 rounded-xl bg-white p-6 md:p-8 h-full">
                
                <h3 className="font-mono text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-8 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <GraduationCap size={15} className="text-[#B45309]" />
                  Degrees & Credentials
                </h3>

                <div className="relative border-l border-slate-200 pl-6 ml-2 space-y-10">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline point */}
                      <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#B45309] ring-4 ring-white" />

                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                            {edu.degree}
                          </h4>
                          <span className="font-mono text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-150 px-2 py-0.5 rounded self-start sm:self-center">
                            {edu.period}
                          </span>
                        </div>

                        <h5 className="text-xs font-bold text-[#B45309] tracking-wider uppercase">
                          {edu.institution}
                        </h5>

                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal mt-2">
                          {edu.description}
                        </p>

                        <div className="pt-2">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold block mb-1.5">
                            Relevant Coursework
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {edu.courses.map((course, cIdx) => (
                              <span
                                key={cIdx}
                                className="font-mono text-[9px] text-slate-600 bg-slate-50 border border-slate-200/50 py-0.5 px-2 rounded font-medium"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Column 2: Engineering Experience (PRACTICAL EXPERIENCE Folder Card) */}
          <div className="flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none uppercase">
                Practical Experience
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
              <div className="border border-slate-800 rounded-xl bg-white p-6 md:p-8 h-full">
                
                <h3 className="font-mono text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-8 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Briefcase size={15} className="text-[#B45309]" />
                  Engineering Practice
                </h3>

                <div className="relative border-l border-slate-200 pl-6 ml-2 space-y-10">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline point */}
                      <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#B45309] ring-4 ring-white" />

                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                            {exp.role}
                          </h4>
                          <span className="font-mono text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-150 px-2 py-0.5 rounded self-start sm:self-center">
                            {exp.period}
                          </span>
                        </div>

                        <h5 className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                          {exp.organization}
                        </h5>

                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal mt-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
