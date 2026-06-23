"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ScrollMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out if scrolled past 50px
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      {/* Floating pill styling with a gentle bounce and pulse */}
      <div className="bg-white/70 dark:bg-black/60 backdrop-blur-lg border border-[#0080ff]/30 dark:border-[#00f0ff]/30 px-6 py-3 rounded-full shadow-[0_4px_30px_rgba(0,128,255,0.2)] dark:shadow-[0_4px_30px_rgba(0,240,255,0.2)] animate-bounce hover:scale-105 transition-transform duration-300 cursor-default flex items-center gap-3 group">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0080ff] dark:bg-[#00f0ff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0080ff] dark:bg-[#00f0ff]"></span>
        </span>
        <p className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 group-hover:text-[#0080ff] dark:group-hover:text-[#00f0ff] transition-colors duration-300">
          Looking forward to making it better..
        </p>
      </div>
    </div>
  );
};
