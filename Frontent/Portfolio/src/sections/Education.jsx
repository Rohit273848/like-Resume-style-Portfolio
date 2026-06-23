import React from "react";
import { education } from "../data/education";
import { Calendar, GraduationCap, Briefcase, ChevronRight } from "lucide-react";

export const Education = () => {
  // Experience timeline data appropriate for a senior student
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
    <section id="education" className="w-full bg-white relative py-20 px-8 lg:px-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">
            05 // Education & Experience
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Academic & Professional Timelines
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            A comprehensive overview of my academic foundation and hands-on systems engineering practice.
          </p>
        </div>

        {/* Split Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Column 1: Academic Credentials */}
          <div>
            <h3 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
              <GraduationCap size={14} className="text-blue-600" />
              Academic Foundation
            </h3>

            <div className="relative border-l border-slate-200 pl-6 ml-2 space-y-10">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline point */}
                  <div className="absolute -left-[30px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white" />

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded self-start sm:self-center">
                        {edu.period}
                      </span>
                    </div>

                    <h5 className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
                      {edu.institution}
                    </h5>

                    <div className="inline-block bg-slate-50 border border-slate-100 text-[10px] font-mono text-slate-700 px-2 py-0.5 mt-1">
                      {/* Score: {edu.gpa} */}
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed font-light mt-2">
                      {edu.description}
                    </p>

                    <div className="pt-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1">
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="font-mono text-[9px] text-slate-600 bg-slate-50 border border-slate-200 py-0.5 px-2 rounded"
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

          {/* Column 2: Engineering Experience */}
          <div>
            <h3 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Briefcase size={14} className="text-blue-600" />
              Engineering Practice
            </h3>

            <div className="relative border-l border-slate-200 pl-6 ml-2 space-y-10">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline point */}
                  <div className="absolute -left-[30px] top-1 w-2.5 h-2.5 bg-slate-900 rounded-full ring-4 ring-white" />

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                        {exp.role}
                      </h4>
                      <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded self-start sm:self-center">
                        {exp.period}
                      </span>
                    </div>

                    <h5 className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                      {exp.organization}
                    </h5>

                    <p className="text-slate-600 text-xs leading-relaxed font-light mt-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
