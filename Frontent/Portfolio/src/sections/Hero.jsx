import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export const Hero = ({ activeSection }) => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="hero"
      className="w-full bg-[#f8fafc] relative py-20 lg:py-28 px-6 lg:px-16 overflow-hidden flex flex-col justify-center items-center min-h-screen z-20"
    >
      {/* Background & Grain */}
      <div className="absolute inset-0 pointer-events-none z-0 select-none">
        {/* Soft Radial Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.04) 0%, transparent 70%)'
          }}
        />
        {/* Subtle Blurred Breathing Glow */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/[0.03] blur-[100px]"
        />
        {/* Tiny Grain Texture Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        {/* Very light watermark behind headline */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] lg:text-[12vw] font-serif font-black text-slate-900/[0.015] select-none pointer-events-none uppercase tracking-widest whitespace-nowrap">
          SYSTEMS
        </div>
      </div>

      {/* Main Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center justify-center text-center"
      >
        {/* 1. Small Decorative Accent */}
        <motion.div variants={itemVariants} className="mb-6 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-7 h-7 rounded-full border border-blue-600/30 flex items-center justify-center bg-white/40 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          </motion.div>
        </motion.div>

        {/* 2. My Name */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-7xl sm:text-8xl lg:text-9xl text-slate-900 tracking-tight leading-none uppercase font-normal mb-3 select-none"
        >
          ROHIT
        </motion.h1>

        {/* 3. Professional Title */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-[0.2em] font-semibold mb-8 text-center px-4"
        >
          Full Stack Developer <span className="text-blue-500 mx-2">•</span>Generative AI & Machine Learning
        </motion.p>

        {/* 4. Minimal Navigation */}
        <motion.nav
          variants={itemVariants}
          className="mb-12 flex flex-wrap justify-center items-center gap-1.5 p-1 border border-slate-200/50 bg-white/40 backdrop-blur-md rounded-full max-w-fit mx-auto shadow-sm"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="relative px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-300 focus:outline-none cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-blue-50/50 border border-blue-500/10 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 font-bold ${isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </motion.nav>





        {/* 7. Primary CTA + Secondary CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-mono uppercase tracking-wider font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            View Projects <ArrowRight size={14} />
          </motion.button>

          <motion.a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-3.5 border border-slate-200 hover:border-slate-800 bg-white/50 backdrop-blur-sm text-slate-700 hover:text-slate-900 rounded-full text-xs font-mono uppercase tracking-wider font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            Download Resume <FileText size={14} />
          </motion.a>
        </motion.div>

        {/* 8. Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-12 lg:mt-16 flex flex-col items-center gap-2 pointer-events-none select-none z-10"
        >
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-blue-600"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
