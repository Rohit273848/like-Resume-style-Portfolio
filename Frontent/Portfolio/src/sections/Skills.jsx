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
        staggerChildren: 0.1
      }
    }
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18
      }
    }
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18
      }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.95 },
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
    <section id="skills" className="w-full bg-[#FEFBF0] py-24 border-b border-[#E0DCBA] relative z-10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10"
      >
        
        {/* Editorial Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-3 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-semibold block">
              04
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
              Skills
            </h2>
            <p className="text-slate-500 max-w-xl text-xs md:text-sm leading-relaxed pt-1">
              A precise mapping of my software engineering capabilities, architectural specialties, and developer workflows.
            </p>
          </div>
          
          {/* Ornamental Accent */}
          <div className="flex items-center justify-center shrink-0 md:pt-4">
            <div className="w-10 h-10 rounded-full border border-[#B45309]/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]" />
            </div>
          </div>
        </div>

        {/* main columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Narrative and Environment Schematic (ENVIRONMENT Folder Card) */}
          <motion.div variants={leftColumnVariants} className="lg:col-span-5 flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none">
                ENVIRONMENT
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1 flex flex-col justify-between">
              <div className="border border-slate-800 rounded-xl bg-white p-6 h-full flex flex-col justify-between">
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal mb-8">
                  Hover over any competency block to inspect sub-disciplines and structural system integrations.
                </p>

                {/* Decorative environment schematic element */}
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block mb-3">
                    [ENVIRONMENT SCHEMATIC]
                  </span>
                  <div className="font-mono text-xs text-slate-500 space-y-2.5 bg-slate-50/50 p-4 rounded-xl border border-slate-200/50">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>SYSTEM: READY // STABLE</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-150 pb-1.5">
                      <span>FRONTEND:</span>
                      <span className="text-slate-850">React 19 / Tailwind v4</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-150 pb-1.5">
                      <span>ANIMATION:</span>
                      <span className="text-slate-855">Framer Motion / GSAP</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PARSING:</span>
                      <span className="text-slate-855">Semantic & RESTful</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills Grouped into Categories (COMPETENCY MATRIX Folder Card) */}
          <motion.div variants={rightColumnVariants} className="lg:col-span-7 flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none">
                COMPETENCY MATRIX
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
              <div className="border border-slate-800 rounded-xl bg-white p-6 md:p-8 h-full space-y-8">
                {skills.map((group, groupIdx) => {
                  const isCategoryActive = activeCategory === groupIdx;
                  const categoryIndex = String(groupIdx + 1).padStart(2, "0");
                  
                  return (
                    <div
                      key={groupIdx}
                      className="space-y-3 group/category pb-6 border-b border-slate-100 last:border-0 last:pb-0"
                      onMouseEnter={() => setActiveCategory(groupIdx)}
                      onMouseLeave={() => setActiveCategory(null)}
                    >
                      {/* Category Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="font-mono text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 transition-all duration-300">
                          <span 
                            className={`transition-all duration-300 ${
                              isCategoryActive ? "text-[#B45309] scale-110" : "text-slate-400"
                            }`}
                          >
                            {getCategoryIcon(group.category)}
                          </span>
                          <span 
                            className={`transition-colors duration-300 ${
                              isCategoryActive ? "text-[#B45309]" : "text-slate-750"
                            }`}
                          >
                            {group.category}
                          </span>
                        </h3>
                        <span className="font-mono text-[9px] text-slate-400 tracking-wider">
                          SYS_MOD.{categoryIndex}
                        </span>
                      </div>

                      {/* Skill Pills list */}
                      <div className="flex flex-wrap gap-2">
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
                                whileHover={{ y: -1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B45309]/10 cursor-pointer ${
                                  isHovered 
                                    ? "bg-white border-[#B45309]/50 text-[#B45309] shadow-xs"
                                    : "bg-slate-50/60 border-slate-200/60 text-slate-650 hover:border-slate-300 hover:bg-slate-50"
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
                                    className="absolute bottom-full left-1/2 mb-2.5 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-mono rounded shadow-lg pointer-events-none whitespace-nowrap z-50"
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
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
        </div>

      </motion.div>
    </section>
  );
};

export default Skills;
