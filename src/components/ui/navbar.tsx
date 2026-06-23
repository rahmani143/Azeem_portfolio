"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";

const NavLink = ({ href, children, hasNotification = false }: { href: string, children: React.ReactNode, hasNotification?: boolean }) => (
  <a href={href} className="pointer-events-auto h-12 bg-white/70 dark:bg-black/40 backdrop-blur-md border border-gray-200/50 dark:border-white/10 rounded-full px-6 flex items-center justify-center shadow-lg hover:shadow-xl hover:border-[#0080ff]/30 dark:hover:border-[#00f0ff]/30 transition-all duration-300 group transform hover:-translate-y-1">
    <span className="relative text-xs font-semibold text-gray-600 dark:text-gray-300 group-hover:text-[#0080ff] dark:group-hover:text-[#00f0ff] transition-all duration-300 group-hover:scale-110 tracking-widest uppercase inline-block">
      {children}
      {hasNotification && (
        <span className="absolute -top-1 -right-3 w-2 h-2 bg-[#0080ff] dark:bg-[#00f0ff] rounded-full shadow-[0_0_8px_rgba(0,128,255,0.8)] dark:shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse"></span>
      )}
    </span>
  </a>
);

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 py-6 pointer-events-none">
      {/* Container with space-between to push logo left and resume right */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center gap-4 flex-wrap">
        
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <a href="#hero" className="pointer-events-auto h-12 w-12 rounded-xl bg-[#0080ff] dark:bg-[#00f0ff] flex items-center justify-center shadow-lg shadow-[#0080ff]/20 dark:shadow-[#00f0ff]/20 group hover:scale-105 transition-transform duration-300">
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
              <polygon points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5" />
              <polygon points="50,28 72,40.5 72,59.5 50,72 28,59.5 28,40.5" />
              <line x1="50" y1="5" x2="50" y2="28" />
              <line x1="89" y1="27.5" x2="72" y2="40.5" />
              <line x1="89" y1="72.5" x2="72" y2="59.5" />
              <line x1="50" y1="95" x2="50" y2="72" />
              <line x1="11" y1="72.5" x2="28" y2="59.5" />
              <line x1="11" y1="27.5" x2="28" y2="40.5" />
            </svg>
          </a>
        </div>

        {/* Center: Navigation Menu (Separate Pills) */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact" hasNotification={true}>Contact</NavLink>
        </div>

        {/* Right: Actions (Theme Toggle & Resume) */}
        <div className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
          {/* Theme Toggle */}
          <div className="hidden lg:block pointer-events-auto shadow-lg rounded-full">
            <ThemeToggle />
          </div>

          {/* Resume */}
          <div className="hidden sm:block pointer-events-auto shadow-lg rounded-full overflow-hidden">
            <FlowHoverButton onClick={() => window.open('/resume.pdf', '_blank')}>
              Resume
            </FlowHoverButton>
          </div>
        </div>

      </div>
    </header>
  );
};
