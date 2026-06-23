import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { achievements } from "../data/achievements";
import { Trophy, Calendar } from "lucide-react";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Competitive Milestones" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <Card key={index} className="flex gap-4 items-start bg-white hover:border-blue-500/20">
              <span className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 shrink-0">
                <Trophy size={18} />
              </span>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-base font-bold text-slate-900 leading-tight">{item.title}</h3>
                  <span className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold tracking-wide uppercase">
                    <Calendar size={10} /> {item.date}
                  </span>
                </div>
                <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{item.issuer}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
