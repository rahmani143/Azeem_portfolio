"use client";

import React from "react";

type TechItem = { id: string; name: string; image: string; className?: string };

const techStacks: TechItem[] = [
  { id: "html5", name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { id: "css3", name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { id: "python", name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { id: "numpy", name: "NumPy", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { id: "tensorflow", name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { id: "opencv", name: "OpenCV", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { id: "nextjs", name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", className: "dark:invert" },
  { id: "tailwindcss", name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { id: "yolov8", name: "YOLOv8", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
];

export const TechStackMarquee = () => {
  return (
    <div className="w-full relative overflow-hidden pt-[110px] pb-8 border-b border-black/5 dark:border-white/5 z-20 bg-transparent">
      <div className="relative flex w-full overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {techStacks.map((tech) => (
            <div key={tech.id} className="mx-12 flex shrink-0 items-center justify-center space-x-4">
              <img src={tech.image} alt={tech.name} className={`h-12 w-auto ${tech.className || ""}`} />
              <span className="text-gray-600 dark:text-gray-400 font-mono text-xl font-bold tracking-wider">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate for infinite effect */}
          {techStacks.map((tech) => (
            <div key={`${tech.id}-dup`} className="mx-12 flex shrink-0 items-center justify-center space-x-4">
              <img src={tech.image} alt={tech.name} className={`h-12 w-auto ${tech.className || ""}`} />
              <span className="text-gray-600 dark:text-gray-400 font-mono text-xl font-bold tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Removed Gradients */}
      </div>
    </div>
  );
};
