"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "00. Intro" },
  { id: "about", label: "01. About" },
  { id: "work", label: "02. Work" },
  { id: "achievements", label: "03. Achievements" },
  { id: "career", label: "04. Career" },
  { id: "education", label: "05. Education" },
  { id: "certifications", label: "06. Certifications" },
  { id: "skills", label: "07. Skills" },
  { id: "contact", label: "08. Contact" },
];

export const ScrollNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Find the center line of the screen relative to the whole document
      const triggerLine = window.scrollY + window.innerHeight / 2;
      
      let current = sections[0].id;
      
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          // Calculate the true absolute top of the element relative to the document
          const rect = el.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          
          if (absoluteTop <= triggerLine) {
            current = s.id;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount after a tiny delay
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4 pl-4 pointer-events-auto">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <div 
            key={id} 
            className="relative flex items-center group cursor-pointer" 
            onClick={() => handleClick(id)}
          >
            {/* Diamond Indicator */}
            <div className="relative flex items-center justify-center w-6 h-10">
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? 40 : 8,
                  width: isActive ? 3 : 8,
                  rotate: isActive ? 0 : 45,
                  borderRadius: isActive ? 4 : 1,
                }}
                className={`transition-colors duration-300 ${
                  isActive 
                    ? 'bg-[#0080ff] dark:bg-[#00f0ff] shadow-[0_0_12px_rgba(0,128,255,0.8)] dark:shadow-[0_0_12px_rgba(0,240,255,0.8)]' 
                    : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-500 dark:group-hover:bg-gray-400'
                }`}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
            
            {/* Text Label */}
            <motion.div
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -10,
                filter: isActive ? "blur(0px)" : "blur(4px)"
              }}
              transition={{ duration: 0.3 }}
              className={`absolute left-10 whitespace-nowrap text-[10px] lg:text-xs font-mono font-bold tracking-widest pointer-events-none ${
                isActive ? 'text-[#0080ff] dark:text-[#00f0ff]' : 'text-transparent'
              }`}
            >
              {label}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
