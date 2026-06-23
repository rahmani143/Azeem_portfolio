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
  { id: "skills", label: "06. Skills" },
  { id: "contact", label: "07. Contact" },
];

export const ScrollNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is currently intersecting the center viewport band
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // The intersection band is the middle 20% of the screen
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );

    // Observe all section elements
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-20 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 pl-4">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <div 
            key={id} 
            className="relative flex items-center group cursor-pointer" 
            onClick={() => handleClick(id)}
          >
            {/* Diamond or Line Container */}
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
                    ? 'bg-[#0080ff] dark:bg-[#00f0ff] shadow-[0_0_10px_rgba(0,128,255,0.5)] dark:shadow-[0_0_10px_rgba(0,240,255,0.5)]' 
                    : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-gray-500 dark:group-hover:bg-gray-400'
                }`}
                transition={{ duration: 0.4, ease: "backOut" }}
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
              className={`absolute left-10 whitespace-nowrap text-xs font-mono font-bold tracking-widest pointer-events-none ${
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
