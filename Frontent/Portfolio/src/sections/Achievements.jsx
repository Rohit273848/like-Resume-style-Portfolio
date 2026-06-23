import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { achievements } from "../data/achievements";
import { Award, Calendar } from "lucide-react";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 lg:px-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Awards & Milestones" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <Card key={index} className="flex gap-4 items-start bg-slate-900/40">
              <span className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                <Award size={20} />
              </span>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Calendar size={10} /> {item.date}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{item.issuer}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
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
