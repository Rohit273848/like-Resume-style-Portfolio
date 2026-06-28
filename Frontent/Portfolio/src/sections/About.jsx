import React from "react";
import { Database, Cpu, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="w-full bg-[#FEFBF0] py-24 border-b border-[#E0DCBA] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Editorial Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-semibold block">
              03
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
              About
            </h2>
            <p className="text-slate-500 max-w-xl text-xs md:text-sm leading-relaxed pt-1">
              Engineering useful systems from the ground up.
            </p>
          </div>
          
          {/* Ornamental Accent */}
          <div className="flex items-center justify-center shrink-0 md:pt-4">
            <div className="w-10 h-10 rounded-full border border-[#B45309]/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]" />
            </div>
          </div>
        </div>

        {/* Editorial Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Heading and Narrative (PROFILE SUMMARY Folder Card) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none">
                PROFILE SUMMARY
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
              <div className="border border-slate-800 rounded-xl bg-white p-6 md:p-8 h-full flex flex-col justify-center">
                <ul className="space-y-5 text-slate-755 text-sm md:text-base leading-relaxed font-normal">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#B45309] mt-2 shrink-0" />
                    <span>
                      Computer Engineering student passionate about <strong className="font-semibold text-slate-950">Backend Development</strong> and <strong className="font-semibold text-slate-955">Artificial Intelligence</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#B45309] mt-2 shrink-0" />
                    <span>
                      Building scalable applications using <strong className="font-semibold text-slate-955">Node.js, Express.js, MongoDB, and Java</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#B45309] mt-2 shrink-0" />
                    <span>
                      Strengthening problem-solving skills through <strong className="font-semibold text-slate-955">Data Structures & Algorithms</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#B45309] mt-2 shrink-0" />
                    <span>
                      Exploring <strong className="font-semibold text-slate-955">Machine Learning</strong> to build intelligent, real-world applications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#B45309] mt-2 shrink-0" />
                    <span>
                      Always eager to learn, build meaningful projects, and grow as a software engineer.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas (CORE FOCUS Folder Card) */}
          <div className="lg:col-span-5 flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none">
                CORE FOCUS
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
              <div className="border border-slate-800 rounded-xl bg-white p-6 h-full flex flex-col justify-between divide-y divide-slate-100">

                {/* Focus Item 1 */}
                <div className="pb-5 flex gap-4 items-start">
                  <Database size={16} className="text-[#B45309] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-955 text-sm uppercase tracking-wider">
                      Backend Development
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                      Building REST APIs, authentication systems, databases, and scalable server-side applications.
                    </p>
                  </div>
                </div>

                {/* Focus Item 2 */}
                <div className="py-5 flex gap-4 items-start">
                  <Award size={16} className="text-[#B45309] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-955 text-sm uppercase tracking-wider">
                      Data Structures & Algorithms
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                      Writing efficient solutions and improving problem-solving through consistent coding practice.
                    </p>
                  </div>
                </div>

                {/* Focus Item 3 */}
                <div className="pt-5 flex gap-4 items-start">
                  <Cpu size={16} className="text-[#B45309] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-955 text-sm uppercase tracking-wider">
                      AI & Machine Learning
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                      Exploring NLP, predictive models, and AI-powered applications that solve practical problems.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
