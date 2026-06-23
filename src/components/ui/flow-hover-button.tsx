"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const FlowHoverButton: React.FC<{
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = ({ icon, children, className, as: Component = "button", ...props }) => (
  <Component
    className={cn(
      `relative cursor-pointer z-0 flex items-center justify-center gap-2 overflow-hidden rounded-full 
      border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 
      px-6 py-3 font-bold text-black dark:text-zinc-200 transition-all duration-500
      before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
      before:rounded-[100%] before:bg-[#0080ff] dark:before:bg-[#00f0ff] before:transition-transform before:duration-1000 before:content-[""]
      hover:scale-105 hover:text-white dark:hover:text-black hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 uppercase tracking-wider text-xs`,
      className
    )}
    {...props}
  >
    {icon}
    <span>{children}</span>
  </Component>
);
