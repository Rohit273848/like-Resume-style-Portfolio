import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Technical Skills" subtitle="My Competencies" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const isBackend = skillGroup.category.toLowerCase().includes("backend");
            const isAI = skillGroup.category.toLowerCase().includes("ai");
            
            let badgeVariant = "default";
            if (isBackend) badgeVariant = "default"; // blue
            else if (isAI) badgeVariant = "accent";   // purple
            else badgeVariant = "outline";           // slate outline

            return (
              <Card key={index} className="flex flex-col h-full bg-white hover:border-blue-500/20">
                <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    isBackend ? "bg-blue-600" : isAI ? "bg-purple-600" : "bg-slate-400"
                  }`} />
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skillGroup.items.map((skill, sIdx) => (
                    <Badge key={sIdx} variant={badgeVariant} className="text-xs font-semibold py-1">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
