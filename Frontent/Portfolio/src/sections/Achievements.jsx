import React from "react";
import { achievements } from "../data/achievements";
import { certifications } from "../data/certifications";
import { portfolioData } from "../data/portfolioData";
import { Trophy, Award, ExternalLink, Code2, Github, BarChart3 } from "lucide-react";

export const Achievements = () => {
  const profileStats = [
    {
      platform: "LeetCode",
      value: portfolioData.stats.leetcode,
      label: "Problems Solved",
      url: portfolioData.leetcode,
      icon: Code2
    },
    {
      platform: "GeeksforGeeks",
      value: portfolioData.stats.gfg,
      label: "Coding Score",
      url: portfolioData.geeksforgeeks,
      icon: BarChart3
    },
    {
      platform: "GitHub Contributions",
      value: portfolioData.stats.githubCommits,
      label: "Yearly Commits",
      url: portfolioData.github,
      icon: Github
    }
  ];

  return (
    <section id="achievements" className="w-full bg-[#FEFBF0] py-24 border-b border-[#E0DCBA] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-3 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-semibold block">
              06
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
              Achievements
            </h2>
            <p className="text-slate-500 max-w-xl text-xs md:text-sm leading-relaxed pt-1">
              Verified proof of programmatic problem-solving capabilities and industry credentials.
            </p>
          </div>
          
          {/* Ornamental Accent */}
          <div className="flex items-center justify-center shrink-0 md:pt-4">
            <div className="w-10 h-10 rounded-full border border-[#B45309]/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]" />
            </div>
          </div>
        </div>

        {/* Part A: Algorithmic KPI Metrics Grid (COMPETITIVE STATISTICS Folder Card) */}
        <div className="flex flex-col text-left mb-16">
          {/* Folder Tab */}
          <div className="flex">
            <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none uppercase">
              Competitive Statistics
            </div>
          </div>
          {/* Double-bordered Frame Container */}
          <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5">
            <div className="border border-slate-800 rounded-xl bg-white p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {profileStats.map((stat, sIdx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={sIdx}
                    className="p-5 border border-slate-200/60 rounded-lg hover:bg-slate-50/50 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                        {stat.platform}
                      </span>
                      <Icon size={16} className="text-[#B45309]" />
                    </div>

                    <div className="mt-4">
                      <div className="font-mono text-2xl lg:text-3xl font-bold text-slate-900 leading-none">
                        {stat.value}
                      </div>
                      <span className="font-sans text-[11px] text-slate-500 block mt-1 font-normal">
                        {stat.label}
                      </span>
                    </div>

                    <a
                      href={stat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-[#B45309] font-bold hover:underline mt-4 self-start tracking-wider"
                    >
                      Verify Profile <ExternalLink size={10} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Part B: Certifications & Competitive Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Timeline of Achievements (COMPETITIVE AWARDS Folder Card) */}
          <div className="flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none uppercase">
                Competitive Awards
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
              <div className="border border-slate-800 rounded-xl bg-white p-6 md:p-8 h-full">
                
                <h3 className="font-mono text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-8 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Trophy size={15} className="text-[#B45309]" />
                  Competitive Milestones
                </h3>

                <div className="space-y-6">
                  {achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-start pb-6 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="p-2 border border-slate-200 bg-slate-50 text-slate-800 shrink-0 rounded">
                        <Trophy size={14} className="text-[#B45309]" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <h4 className="text-sm font-bold text-slate-900 tracking-tight">{item.title}</h4>
                          <span className="font-mono text-[10px] text-slate-500 bg-slate-50 border border-slate-150 px-2 py-0.5 rounded">
                            {item.date}
                          </span>
                        </div>
                        <span className="font-mono text-[9px] text-[#B45309] uppercase tracking-wider block font-bold">
                          Platform: {item.issuer}
                        </span>
                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Professional Credentials list (TECHNICAL CREDENTIALS Folder Card) */}
          <div className="flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none uppercase">
                Technical Credentials
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
              <div className="border border-slate-800 rounded-xl bg-white p-6 md:p-8 h-full">
                
                <h3 className="font-mono text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-8 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Award size={15} className="text-[#B45309]" />
                  Technical Certifications
                </h3>

                <div className="space-y-6">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-start pb-6 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="p-2 border border-slate-200 bg-slate-50 text-slate-800 shrink-0 rounded">
                        <Award size={14} className="text-[#B45309]" />
                      </div>
                      <div className="space-y-1 w-full flex-1">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <h4 className="text-sm font-bold text-slate-900 tracking-tight">{cert.title}</h4>
                          <span className="font-mono text-[10px] text-slate-500 bg-slate-50 border border-slate-150 px-2.5 py-0.5 rounded">
                            {cert.date}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
                          <span className="font-mono text-[10px] text-slate-500 font-semibold">
                            Issuer: {cert.issuer}
                          </span>

                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[#B45309] font-bold hover:underline"
                          >
                            Verify <ExternalLink size={10} />
                          </a>
                        </div>
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

export default Achievements;
