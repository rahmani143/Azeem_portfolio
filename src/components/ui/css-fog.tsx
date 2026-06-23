"use client";

import React from "react";

export const CssFog = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-80 mix-blend-screen">
      {/* Fog Layer 1 - Moves left to right slowly */}
      <div 
        className="absolute w-[200vw] h-full top-0 left-0 bg-repeat-x opacity-80 animate-fog-1"
        style={{
          backgroundImage: 'url("/fog1.png")',
          backgroundSize: '100vw 100%',
        }}
      />
      {/* Fog Layer 2 - Moves left to right slightly faster */}
      <div 
        className="absolute w-[200vw] h-full top-0 left-0 bg-repeat-x opacity-60 animate-fog-2"
        style={{
          backgroundImage: 'url("/fog2.png")',
          backgroundSize: '100vw 100%',
        }}
      />
      
      {/* Add a subtle cyan tint to match the 3D mode */}
      <div className="absolute inset-0 bg-[#00f0ff] opacity-10 mix-blend-overlay"></div>
    </div>
  );
};
