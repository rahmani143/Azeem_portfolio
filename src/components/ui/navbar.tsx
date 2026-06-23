"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 py-6 pointer-events-none">
      {/* Centered flex container with gap spacing */}
      <div className="w-full px-4 flex justify-center items-center gap-3 md:gap-4 flex-wrap">
        
        {/* Pill 1: Brand Logo */}
        <a href="#hero" className="pointer-events-auto h-12 w-12 rounded-xl bg-[#0080ff] dark:bg-[#00f0ff] flex items-center justify-center shadow-lg shadow-[#0080ff]/20 dark:shadow-[#00f0ff]/20 group">
          {/* 3D Hexagon Logo */}
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="#fff" 
            className="dark:stroke-black transition-transform duration-700 ease-in-out group-hover:rotate-180" 
            strokeWidth="6" 
            strokeLinejoin="round" 
            strokeLinecap="round"
          >
            {/* Outer Hexagon */}
            <polygon points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" />
            {/* Inner Hexagon */}
            <polygon points="50,28 72,40.5 72,59.5 50,72 28,59.5 28,40.5" />
            {/* Connecting lines */}
            <line x1="50" y1="5" x2="50" y2="28" />
            <line x1="89" y1="27.5" x2="72" y2="40.5" />
            <line x1="89" y1="72.5" x2="72" y2="59.5" />
            <line x1="50" y1="95" x2="50" y2="72" />
            <line x1="11" y1="72.5" x2="28" y2="59.5" />
            <line x1="11" y1="27.5" x2="28" y2="40.5" />
          </svg>
        </a>

        {/* Pill 2: Navigation Menu */}
        <div className="hidden md:flex pointer-events-auto h-12 bg-white/70 dark:bg-black/40 backdrop-blur-md border border-gray-200/50 dark:border-white/10 rounded-full px-8 items-center space-x-8 shadow-lg">
          <a href="#about" className="text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-[#0080ff] dark:hover:text-[#00f0ff] transition-colors tracking-widest uppercase">
            About
          </a>
          <a href="#work" className="text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-[#0080ff] dark:hover:text-[#00f0ff] transition-colors tracking-widest uppercase">
            Work
          </a>
          <a href="#education" className="text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-[#0080ff] dark:hover:text-[#00f0ff] transition-colors tracking-widest uppercase">
            Education
          </a>
          <a href="#contact" className="relative text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-[#0080ff] dark:hover:text-[#00f0ff] transition-colors tracking-widest uppercase">
            Contact
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-[#0080ff] dark:bg-[#00f0ff] rounded-full shadow-[0_0_8px_rgba(0,128,255,0.8)] dark:shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
          </a>
        </div>

        {/* Pill 3: Theme Toggle */}
        <div className="hidden lg:block pointer-events-auto shadow-lg rounded-full">
          <ThemeToggle />
        </div>

        {/* Pill 4: Resume */}
        <div className="hidden sm:block pointer-events-auto shadow-lg rounded-full overflow-hidden">
          <FlowHoverButton onClick={() => window.open('/resume.pdf', '_blank')}>
            Resume
          </FlowHoverButton>
        </div>

      </div>
    </header>
  );
};
