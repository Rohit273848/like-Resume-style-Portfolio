import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Github, Star, GitFork, Activity } from "lucide-react";

export const GitHubStats = () => {
  // Replace this with your actual GitHub username
  const githubUsername = "github"; 

  const statsCards = [
    {
      title: "Public Repositories",
      value: "42",
      icon: Github,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "Total Stars Earned",
      value: "284",
      icon: Star,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Repositories Forked",
      value: "18",
      icon: GitFork,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Total Contributions",
      value: "1,452",
      icon: Activity,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    }
  ];

  return (
    <section id="github-stats" className="py-20 px-6 lg:px-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="GitHub Statistics" subtitle="Open Source Contributions" />

        {/* Numeric Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="flex flex-col items-center justify-center p-6 text-center bg-slate-900/40">
                <span className={`p-3 rounded-xl border mb-3 ${stat.color}`}>
                  <Icon size={20} />
                </span>
                <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                <span className="text-xs text-slate-400 font-semibold mt-1 uppercase tracking-wider">{stat.title}</span>
              </Card>
            );
          })}
        </div>

        {/* GitHub Graph Cards (Responsive Embedded SVG cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/40 p-4 flex justify-center items-center min-h-48 border-slate-800">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a`}
              alt="GitHub Stats"
              className="max-w-full h-auto rounded-lg"
              loading="lazy"
            />
          </Card>
          <Card className="bg-slate-900/40 p-4 flex justify-center items-center min-h-48 border-slate-800">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a`}
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
