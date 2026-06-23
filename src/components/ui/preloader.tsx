"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the window to completely load, or use a minimum timeout to ensure it shows beautifully
    const handleLoad = () => {
      // Add a slight delay to ensure all assets (like 3D canvas) have breathing room
      setTimeout(() => setIsLoading(false), 800);
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
          {/* Rotating Logo Container */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            className="relative h-24 w-24 rounded-2xl bg-[#0080ff] dark:bg-[#00f0ff] flex items-center justify-center shadow-2xl shadow-[#0080ff]/40 dark:shadow-[#00f0ff]/40"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 100 100"
              fill="none"
              stroke="#fff"
              className="dark:stroke-black"
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <polygon points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" />
              <polygon points="50,28 72,40.5 72,59.5 50,72 28,59.5 28,40.5" />
              <line x1="50" y1="5" x2="50" y2="28" />
              <line x1="89" y1="27.5" x2="72" y2="40.5" />
              <line x1="89" y1="72.5" x2="72" y2="59.5" />
              <line x1="50" y1="95" x2="50" y2="72" />
              <line x1="11" y1="72.5" x2="28" y2="59.5" />
              <line x1="11" y1="27.5" x2="28" y2="40.5" />
            </svg>
          </motion.div>
          
          {/* Subtle loading text (optional, but looks premium) */}
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 font-mono text-sm tracking-[0.3em] text-[#0080ff] dark:text-[#00f0ff] uppercase"
          >
            Initializing
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
