import React from "react";
import { portfolioData } from "../data/portfolioData";
import { Database, Cpu, Award } from "lucide-react";
import GridLine from "../components/ui/GridLine";

export const About = () => {
  return (
    <section id="about" className="w-full bg-transparent relative py-20 px-8 lg:px-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">

        {/* Editorial Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-sm uppercase tracking-widest text-slate-500 font-semibold block mb-2">
              02 // About Me
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              Engineering useful systems from the ground up.
            </h2>

            <ul className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                <span>
                  Computer Engineering student passionate about <strong className="font-semibold text-slate-900">Backend Development</strong> and <strong className="font-semibold text-slate-900">Artificial Intelligence</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                <span>
                  Building scalable applications using <strong className="font-semibold text-slate-900">Node.js, Express.js, MongoDB, and Java</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                <span>
                  Strengthening problem-solving skills through <strong className="font-semibold text-slate-900">Data Structures & Algorithms</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                <span>
                  Exploring <strong className="font-semibold text-slate-900">Machine Learning</strong> to build intelligent, real-world applications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                <span>
                  Always eager to learn, build meaningful projects, and grow as a software engineer.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: Focus Areas (Divided by borders instead of cards) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-sm uppercase tracking-widest text-slate-500 font-semibold block mb-6">
              What I Enjoy Working On
            </span>

            <div className="flex flex-col border-t border-slate-200">

              {/* Focus Item 1 */}
              <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                <Database size={16} className="text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base uppercase tracking-wide">
                    Backend Development
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                    Building REST APIs, authentication systems, databases, and scalable server-side applications.
                  </p>
                </div>
              </div>

              {/* Focus Item 2 */}
              <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                <Award size={16} className="text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base uppercase tracking-wide">
                    Data Structures & Algorithms
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                    Writing efficient solutions and improving problem-solving through consistent coding practice.
                  </p>
                </div>
              </div>

              {/* Focus Item 3 */}
              <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                <Cpu size={16} className="text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base uppercase tracking-wide">
                    AI & Machine Learning
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                    Exploring NLP, predictive models, and AI-powered applications that solve practical problems.
                  </p>
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
