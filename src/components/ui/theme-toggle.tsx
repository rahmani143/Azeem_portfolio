"use client";

import { Sun, Moon, Settings, Mountain } from 'lucide-react';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[280px] h-10"></div>;
  }

  return (
    <div
      className="
        pointer-events-auto
        inline-flex h-12 rounded-full overflow-hidden relative
        bg-white/70 dark:bg-black/40
        backdrop-blur-md
        border border-gray-200/50 dark:border-white/10
        transition-colors duration-500 shadow-lg
      "
    >
      <button
        onClick={() => setTheme("light")}
        className={cn(`
          px-4 h-full
          flex items-center gap-2
          transition-colors duration-300
          focus:outline-none focus:ring-0
          border-r border-gray-200/50 dark:border-white/10
          group
        `, theme === 'light' ? "bg-black/10 dark:bg-white/10 text-black dark:text-white" : "bg-transparent text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white")}
        aria-label="Toggle Light Mode"
      >
        <Sun
          className="
            w-4 h-4
            text-current
            transition-transform duration-300
            group-hover:scale-110
          "
          aria-hidden="true"
        />
        <span className="select-none text-xs font-semibold">Light</span>
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={cn(`
          px-4 h-full
          flex items-center gap-2
          transition-colors duration-300
          focus:outline-none focus:ring-0
          border-r border-gray-200/50 dark:border-white/10
          group
        `, theme === 'dark' ? "bg-black/10 dark:bg-white/10 text-black dark:text-white" : "bg-transparent text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white")}
        aria-label="Toggle Dark Mode"
      >
        <Moon
          className="
            w-4 h-4
            text-current
            transition-transform duration-300
            group-hover:scale-110
          "
          aria-hidden="true"
        />
        <span className="select-none text-xs font-semibold">Dark</span>
      </button>

      <button
        onClick={() => setTheme("glsl")}
        className={cn(`
          px-4 h-full
          flex items-center gap-2
          transition-colors duration-300
          focus:outline-none focus:ring-0
          group
        `, theme === 'glsl' ? "bg-black/10 dark:bg-white/10 text-black dark:text-white" : "bg-transparent text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white")}
        aria-label="Toggle 3D GLSL Mode"
      >
        <Mountain
          className="
            w-4 h-4
            text-current
            transition-transform duration-300
            group-hover:scale-110
          "
          aria-hidden="true"
        />
        <span className="select-none text-xs font-semibold">3D</span>
      </button>
    </div>
  );
};
