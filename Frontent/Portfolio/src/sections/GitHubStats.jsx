import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Github, Code2, Trophy, BarChart3, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const GitHubStats = () => {
  const profileCards = [
    {
      platform: "LeetCode",
      value: portfolioData.stats.leetcode,
      label: "Problems Solved",
      icon: Code2,
      url: portfolioData.leetcode,
      color: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      platform: "CodeChef",
      value: portfolioData.stats.codechef,
      label: "Max Rating",
      icon: Trophy,
      url: portfolioData.codechef,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      platform: "GeeksforGeeks",
      value: portfolioData.stats.gfg,
      label: "Overall Score",
      icon: BarChart3,
      url: portfolioData.geeksforgeeks,
      color: "text-green-600 bg-green-50 border-green-100"
    },
    {
      platform: "GitHub Commits",
      value: portfolioData.stats.githubCommits,
      label: "Contributions",
      icon: Github,
      url: portfolioData.github,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    }
  ];

  return (
    <section id="github-stats" className="py-16 px-6 lg:px-12 bg-transparent border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Coding Profiles & Ranks" subtitle="Problem Solving Metrics" />

        {/* Profiles Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {profileCards.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <Card key={index} className="flex flex-col items-center justify-center p-6 text-center bg-white hover:border-blue-500/20">
                <span className={`p-3 rounded-xl border mb-3 ${profile.color}`}>
                  <Icon size={18} />
                </span>
                <span className="text-xl md:text-2xl font-extrabold text-slate-800">{profile.value}</span>
                <span className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-wider">{profile.platform}</span>
                <span className="text-[10px] text-slate-500 font-medium mt-0.5">{profile.label}</span>
                
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full"
                >
                  <Button variant="ghost" size="sm" className="w-full text-[10px] py-1 border border-slate-100 hover:bg-slate-50 gap-1 text-slate-500 hover:text-slate-800">
                    Profile <ExternalLink size={10} />
                  </Button>
                </a>
              </Card>
            );
          })}
        </div>

        {/* Responsive GitHub Graph Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white p-4 flex justify-center items-center min-h-48 border-slate-200 shadow-xs">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=github&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=2563eb&text_color=475569&icon_color=2563eb`}
              alt="GitHub Stats"
              className="max-w-full h-auto rounded-lg"
              loading="lazy"
            />
          </Card>
          <Card className="bg-white p-4 flex justify-center items-center min-h-48 border-slate-200 shadow-xs">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=github&layout=compact&theme=default&hide_border=true&bg_color=ffffff&title_color=2563eb&text_color=475569&icon_color=2563eb`}
              alt="GitHub Top Languages"
              className="max-w-full h-auto rounded-lg"
              loading="lazy"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};
export default GitHubStats;
