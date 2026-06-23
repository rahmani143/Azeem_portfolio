"use client";

import { motion } from "framer-motion";

export const BubbleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-50 pointer-events-none">
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#e9d5ff] mix-blend-multiply filter blur-[100px] opacity-70"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 150, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#d8b4fe] mix-blend-multiply filter blur-[120px] opacity-50"
      />

      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -50, 150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[#f3e8ff] mix-blend-multiply filter blur-[80px] opacity-80"
      />
    </div>
  );
};
