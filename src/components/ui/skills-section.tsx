"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["Google Agent Development Kit (ADK)", "Google AI SDK (Gemini)", "Scikit-learn", "OpenCV", "YOLOv8", "ArcFace", "OCR and ANPR", "NLP and Neural Networks"],
    className: "lg:col-span-2",
  },
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Micro Python", "SQL", "HTML and CSS", "JavaScript"],
    className: "lg:col-span-1",
  },
  {
    title: "Backend & Web Frameworks",
    skills: ["Next.js", "Tailwind CSS", "Asyncio", "Pathway"],
    className: "lg:col-span-1",
  },
  {
    title: "Databases & Cloud",
    skills: ["SQL", "Firebase"],
    className: "lg:col-span-1",
  },
  {
    title: "Tools & Practices",
    skills: ["Git and GitHub", "Linux and Ubuntu", "CI/CD pipelines", "Test-Driven Development (TDD)", "Agile Methodology"],
    className: "lg:col-span-1",
  }
];

export const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-[#222] p-8 hover:border-[#0080ff] dark:hover:border-[#00f0ff]/50 transition-all group ${category.className}`}
        >
          <h3 className="text-xl font-bold text-black dark:text-white mb-6 font-mono border-b border-gray-200 dark:border-[#222] pb-4">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-4 py-2 bg-white dark:bg-[#111] text-sm font-semibold text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-[#333] hover:border-[#0080ff] dark:hover:border-[#00f0ff] hover:text-[#0080ff] dark:hover:text-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,128,255,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all cursor-default transform hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
