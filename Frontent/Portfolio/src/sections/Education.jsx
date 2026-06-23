import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { education } from "../data/education";
import { Calendar, GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6 lg:px-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic Background" />

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <span className="absolute left-[-17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 text-indigo-400">
                <GraduationCap size={14} />
              </span>

              <Card className="bg-slate-900/40">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <h4 className="text-sm font-semibold text-indigo-400 mt-0.5">{edu.institution}</h4>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar size={12} /> {edu.period}
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Key Coursework:</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <Badge key={cIdx} variant="outline" className="text-xs py-0.5">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
