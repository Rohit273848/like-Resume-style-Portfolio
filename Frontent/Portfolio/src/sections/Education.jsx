import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { education } from "../data/education";
import { Calendar, GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-16 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic Credentials" />

        <div className="relative border-l border-slate-200 ml-4 md:ml-6 space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline marker */}
              <span className="absolute left-[-17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-blue-600 text-blue-600 shadow-sm">
                <GraduationCap size={14} />
              </span>

              <Card className="bg-white hover:border-blue-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <h4 className="text-sm font-semibold text-blue-600 mt-0.5">{edu.institution}</h4>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Calendar size={12} /> {edu.period}
                    </span>
                    <Badge variant="secondary" className="text-[10px] font-semibold">
                      {edu.gpa}
                    </Badge>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-600 mb-4 leading-relaxed font-light">
                  {edu.description}
                </p>

                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-2">Relevant Core Coursework:</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <Badge key={cIdx} variant="outline" className="text-xs py-0.5 text-slate-600">
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
export default Education;
