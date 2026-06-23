import React from "react";
import { achievements } from "../data/achievements";
import { certifications } from "../data/certifications";
import { portfolioData } from "../data/portfolioData";
import { Trophy, Calendar, Award, ExternalLink, Code2, Github, BarChart3 } from "lucide-react";

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
    <section id="achievements" className="w-full bg-slate-50 relative py-20 px-8 lg:px-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">
            06 // Achievements & Profiles
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Competitive Coding & Credentials
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Verified proof of programmatic problem-solving capabilities and industry certifications.
          </p>
        </div>

        {/* Part A: Algorithmic KPI Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 mb-16">
          {profileStats.map((stat, sIdx) => {
            const Icon = stat.icon;
            return (
              <div
                key={sIdx}
                className="p-6 border-r border-b border-slate-200 bg-white hover:bg-slate-50/50 transition-colors duration-200 flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    {stat.platform}
                  </span>
                  <Icon size={14} className="text-blue-600" />
                </div>

                <div className="mt-4">
                  <div className="font-mono text-2xl lg:text-3xl font-bold text-slate-900 leading-none">
                    {stat.value}
                  </div>
                  <span className="font-sans text-[10px] text-slate-500 block mt-1">
                    {stat.label}
                  </span>
                </div>

                <a
                  href={stat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[9px] uppercase text-blue-600 hover:text-slate-950 mt-4 self-start tracking-wider"
                >
                  Verify Profile <ExternalLink size={8} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Part B: Certifications & Competitive Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Timeline of Achievements */}
          <div>
            <h3 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
              <Trophy size={14} className="text-blue-600" />
              Competitive Achievements
            </h3>

            <div className="space-y-6">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start pb-6 border-b border-slate-100 last:border-0"
                >
                  <div className="p-2 border border-slate-200 bg-white text-slate-800 shrink-0 rounded">
                    <Trophy size={14} className="text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">{item.title}</h4>
                      <span className="font-mono text-[9px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {item.date}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-blue-600 uppercase tracking-wider block">
                      Platform: {item.issuer}
                    </span>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Credentials list */}
          <div>
            <h3 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
              <Award size={14} className="text-blue-600" />
              Technical Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start pb-6 border-b border-slate-100 last:border-0"
                >
                  <div className="p-2 border border-slate-200 bg-white text-slate-800 shrink-0 rounded">
                    <Award size={14} className="text-blue-600" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">{cert.title}</h4>
                      <span className="font-mono text-[9px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        {cert.date}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
                      <span className="font-mono text-[9px] text-slate-500">
                        Issuer: {cert.issuer} | ID: {cert.credentialId}
                      </span>

                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-blue-600 hover:text-slate-950"
                      >
                        Verify <ExternalLink size={8} />
                      </a>
                    </div>
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

export default Achievements;
