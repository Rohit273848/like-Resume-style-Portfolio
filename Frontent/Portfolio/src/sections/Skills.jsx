import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="My Skills" subtitle="Abilities" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="flex flex-col h-full bg-slate-900/40">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-1">
                    <Badge variant="default" className="text-slate-200">
                      {skill.name}
                      <span className="text-[9px] text-indigo-400 font-semibold uppercase ml-1.5 opacity-80">
                        {skill.level}
                      </span>
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
