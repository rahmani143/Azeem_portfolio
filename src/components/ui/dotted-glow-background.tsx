"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DottedGlowBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full bg-black min-h-screen",
        className
      )}
    >
      {/* Animated dotted layer */}
      <motion.div
        initial={{ opacity: 0.05 }}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #222222 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Content wrapper */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
