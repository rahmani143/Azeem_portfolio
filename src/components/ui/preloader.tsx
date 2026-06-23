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
          {/* Rotating Logo Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            className="relative flex items-center justify-center text-[#0080ff] dark:text-[#00f0ff] w-[70vw] max-w-[500px] aspect-square"
          >
            <svg
              className="w-full h-full drop-shadow-[0_0_50px_rgba(0,128,255,0.6)] dark:drop-shadow-[0_0_50px_rgba(0,240,255,0.6)]"
              viewBox="0 0 100 100"
              stroke="#fff"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              {/* Outer Hexagon - filled with blue */}
              <polygon points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" fill="currentColor" />
              {/* Inner Hexagon - 'hole' matching the background color */}
              <polygon points="50,28 72,40.5 72,59.5 50,72 28,59.5 28,40.5" fill="#050505" />
              
              {/* 3D Structure Lines */}
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
