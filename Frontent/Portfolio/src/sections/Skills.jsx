import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/skills";
import { Cpu, Terminal, Sparkles, Wrench, Globe, Database } from "lucide-react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18
      }
    }
  };

  const rightColumnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16
      }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Helper to map category names to clean minimal icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming":
        return <Terminal size={14} className="shrink-0" />;
      case "Backend":
        return <Cpu size={14} className="shrink-0" />;
      case "Databases":
        return <Database size={14} className="shrink-0" />;
      case "AI/ML":
        return <Sparkles size={14} className="shrink-0" />;
      case "Tools":
        return <Wrench size={14} className="shrink-0" />;
      case "Cloud":
        return <Globe size={14} className="shrink-0" />;
      default:
        return <Cpu size={14} className="shrink-0" />;
    }
  };

  return (
    <section id="skills" className="w-full bg-white relative py-24 px-8 lg:px-20 border-b border-slate-200 overflow-hidden">
      {/* Editorial aesthetic guide lines */}
      <div className="absolute top-0 bottom-0 left-12 lg:left-24 w-[1px] bg-slate-100/60 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-12 lg:right-24 w-[1px] bg-slate-100/60 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
      >
        
        {/* Left Column: Heading and Narrative */}
        <motion.div variants={leftColumnVariants} className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs tracking-widest text-slate-400 font-semibold">
              03 //
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold">
              Skills Matrix
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            Technical<br />
            Competencies
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal max-w-sm">
            A precise mapping of my software engineering capabilities, architectural specialties, and developer workflows. Hover over any pill to inspect core concepts.
          </p>

          {/* Decorative system schematic element */}
          <div className="hidden lg:block pt-10 border-t border-slate-100">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-4">
              [ENVIRONMENT SCHEMATIC]
            </span>
            <div className="font-mono text-xs text-slate-500 space-y-2.5 bg-slate-50/50 p-4 rounded-xl border border-slate-100/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>SYSTEM: READY // STABLE</span>
              </div>
              <div className="flex justify-between border-b border-slate-100/80 pb-1.5">
                <span>FRONTEND:</span>
                <span className="text-slate-700">React 19 / Tailwind v4</span>
              </div>
              <div className="flex justify-between border-b border-slate-100/80 pb-1.5">
                <span>ANIMATION:</span>
                <span className="text-slate-700">Framer Motion 12</span>
              </div>
              <div className="flex justify-between">
                <span>PARSING:</span>
                <span className="text-slate-700">Semantic & RESTful</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Skills Grouped into Categories */}
        <motion.div variants={rightColumnVariants} className="lg:col-span-7 space-y-12">
          {skills.map((group, groupIdx) => {
            const isCategoryActive = activeCategory === groupIdx;
            const categoryIndex = String(groupIdx + 1).padStart(2, "0");
            
            return (
              <motion.div
                key={groupIdx}
                variants={categoryVariants}
                className="space-y-4 group/category"
                onMouseEnter={() => setActiveCategory(groupIdx)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all duration-300">
                    <span 
                      className={`transition-all duration-300 ${
                        isCategoryActive ? "text-blue-600 scale-110" : "text-slate-400"
                      }`}
                    >
                      {getCategoryIcon(group.category)}
                    </span>
                    <span 
                      className={`transition-colors duration-300 ${
                        isCategoryActive ? "text-blue-600" : "text-slate-500"
                      }`}
                    >
                      {group.category}
                    </span>
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                    SYS_MOD.{categoryIndex}
                  </span>
                </div>

                {/* Skill Pills list */}
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, skillIdx) => {
                    const uniqueKey = `${groupIdx}-${skillIdx}`;
                    const isHovered = hoveredSkill === uniqueKey;

                    return (
                      <div
                        key={skillIdx}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(uniqueKey)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onFocus={() => setHoveredSkill(uniqueKey)}
                        onBlur={() => setHoveredSkill(null)}
                      >
                        {/* Interactive Pill */}
                        <motion.button
                          variants={pillVariants}
                          whileHover={{ y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer ${
                            isHovered 
                              ? "bg-white border-blue-600/40 text-blue-600 shadow-sm"
                              : "bg-slate-50/70 border-slate-200/50 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          {skill.name}
                        </motion.button>

                        {/* Tooltip detail description */}
                        <AnimatePresence>
                          {isHovered && skill.detail && (
                            <motion.div
                              initial={{ opacity: 0, y: 6, scale: 0.95, x: "-50%" }}
                              animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                              exit={{ opacity: 0, y: 6, scale: 0.95, x: "-50%" }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute z-50 bottom-full left-1/2 mb-2.5 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-mono rounded shadow-lg pointer-events-none whitespace-nowrap"
                            >
                              {skill.detail}
                              {/* Pointer Arrow */}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-1.5 h-1.5 bg-slate-900 rotate-45" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Skills;
