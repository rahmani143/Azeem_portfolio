"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the window to completely load, or use a minimum timeout to ensure it shows beautifully
    const handleLoad = () => {
      // Add a slight delay to ensure all assets have breathing room
      setTimeout(() => setIsLoading(false), 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback just in case load event fails or already fired
    const fallbackTimer = setTimeout(handleLoad, 2500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
        >
          {/* Static Glowing Background Aura to replace laggy drop-shadow */}
          <div className="absolute inset-0 m-auto w-[40vw] max-w-[300px] aspect-square bg-[#0080ff] dark:bg-[#00f0ff] rounded-full blur-[100px] opacity-40 dark:opacity-30"></div>

          {/* Rotating Logo Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            className="absolute flex items-center justify-center w-[90vw] max-w-[700px] aspect-square will-change-transform"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="w-full h-full opacity-80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M47.5 4.44337C49.047 3.55021 50.953 3.55021 52.5 4.44338L87.3372 24.5566C88.8842 25.4498 89.8372 27.1004 89.8372 28.8868V69.1132C89.8372 70.8996 88.8842 72.5502 87.3372 73.4434L52.5 93.5566C50.953 94.4498 49.047 94.4498 47.5 93.5566L12.6628 73.4434C11.1158 72.5502 10.1628 70.8996 10.1628 69.1132V28.8867C10.1628 27.1004 11.1158 25.4498 12.6628 24.5566L47.5 4.44337Z" fill="currentColor" className="text-[#0080ff] dark:text-[#00f0ff]"/>
              <path d="M50.2 13L81.4 31V67L50.2 85L19 67V31L50.2 13Z" stroke="white" className="dark:stroke-black" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M50.2 31.4L67.8 41.4V56.6L50.2 66.6L32.6 56.6V41.4L50.2 31.4Z" stroke="white" className="dark:stroke-black" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M50.2 13V31.4" stroke="white" className="dark:stroke-black" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M81.4 31L67.8 41.4" stroke="white" className="dark:stroke-black" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M81.4 67L67.8 56.6" stroke="white" className="dark:stroke-black" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M50.2 85V66.6" stroke="white" className="dark:stroke-black" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 67L32.6 56.6" stroke="white" className="dark:stroke-black" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 31L32.6 41.4" stroke="white" className="dark:stroke-black" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          
          {/* Centered text over the spinning logo */}
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 bg-[#050505]/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#0080ff]/30 dark:border-[#00f0ff]/30 font-mono text-sm md:text-xl font-bold tracking-[0.4em] text-[#0080ff] dark:text-[#00f0ff] uppercase shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          >
            INITIALIZATION
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
