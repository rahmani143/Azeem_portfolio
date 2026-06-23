"use client";

import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Machine Learning Beginner",
    issuer: "Kaggle",
    date: "Sep 2024",
    skills: ["Machine Learning"],
  },
  {
    title: "Certified in Pandas (Python Data Analysis Library)",
    issuer: "Kaggle",
    date: "Jul 2025",
    skills: ["Pandas", "Python", "Data Analysis"],
  },
  {
    title: "Machine Learning",
    issuer: "Kaggle",
    date: "Sep 2025",
    skills: ["Machine Learning", "XGBoost"],
  },
  {
    title: "Autonomous Systems and Computer Vision",
    issuer: "RoboLearn",
    date: "Aug 2025",
    skills: ["Automated Systems", "Computer Vision"],
  },
  {
    title: "Summer Analytics 2025",
    issuer: "Consulting & Analytics Club, IIT Guwahati",
    date: "May 2025 - Jul 2025",
    skills: ["Machine Learning", "Jupyter"],
  },
  {
    title: "Finance Essentials for Small Business",
    issuer: "LinkedIn",
    date: "Apr 2025",
    skills: ["Small Business Financial Management"],
  },
  {
    title: "Certified Digital Circuit Designer",
    issuer: "National Institute of Technology, Tiruchirappalli",
    date: "Feb 2025",
    skills: ["Digital Circuit Design"],
  },
];

export const CertificationsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative border-t md:border-t-0 md:border-l border-gray-200 dark:border-[#333] pt-8 md:pt-0 md:pl-8 mt-8 md:mt-0">
      {certifications.map((cert, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-[#222] p-6 rounded-xl hover:border-[#0080ff] dark:hover:border-[#00f0ff]/50 transition-colors duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-black dark:text-white leading-tight">
              {cert.title}
            </h3>
            <span className="text-xs font-mono text-[#0080ff] dark:text-[#00f0ff] bg-[#0080ff]/10 dark:bg-[#00f0ff]/10 px-2 py-1 rounded ml-4 whitespace-nowrap">
              {cert.date}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6">
            {cert.issuer}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {cert.skills.map((skill, sIdx) => (
              <span 
                key={sIdx} 
                className="text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-[#333] px-2 py-1 rounded"
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
