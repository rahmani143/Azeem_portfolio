"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { BubbleBackground } from "@/components/ui/bubble-background";
import { ScrollVideoBackground } from "@/components/ui/scroll-video-background";

export const BackgroundLayer = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a default dark background during SSR to prevent flashing
    return (
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#030303]"></div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {theme === "glsl" ? (
        <ScrollVideoBackground />
      ) : resolvedTheme === "light" ? (
        <div className="w-full h-full bg-slate-50">
          <BubbleBackground />
        </div>
      ) : (
        <div className="w-full h-full bg-[#030303]">
          <FallingPattern 
            color="rgba(0, 240, 255, 0.15)" 
            backgroundColor="transparent"
            duration={30} 
            blurIntensity="0px" 
          />
        </div>
      )}
    </div>
  );
};
