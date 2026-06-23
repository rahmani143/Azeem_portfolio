"use client";

import React from "react";
import { motion } from "framer-motion";

interface LeetCodeStats {
  status: string;
  totalSolved?: number;
  totalQuestions?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
  ranking?: number;
}

const roles = [
  {
    title: "Joint Secretary (Embedded Vertical)",
    organization: "Robotics Club, NITW",
  },
  {
    title: "Joint Secretary",
    organization: "HAM-ARC, NITW",
  },
  {
    title: "Secretary of Events",
    organization: "IEEE Student Branch, NITW",
  },
  {
    title: "Student Coordinator",
    organization: "Dean of International Relations, NITW",
  },
  {
    title: "Member & Participant",
    organization: "Google Developer Groups (GDG) & Agentathon 2025",
  },
];

export const AchievementsClient = ({ leetcode }: { leetcode: LeetCodeStats }) => {
  const isSuccess = leetcode.status === "success";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* LeetCode Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="col-span-1 lg:col-span-1 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-[#222] p-8 hover:shadow-[0_0_30px_rgba(0,128,255,0.15)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all flex flex-col group overflow-hidden relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0080ff] dark:via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="flex items-center gap-3 mb-8">
          <img 
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" 
            alt="LeetCode Original Logo" 
            className="w-10 h-10 object-contain"
          />
          <h3 className="text-xl font-bold text-black dark:text-white font-mono">LeetCode Stats</h3>
        </div>

        {isSuccess ? (
          <div className="flex-grow flex flex-col justify-center">
            <div className="mb-6">
              <h4 className="text-5xl font-black text-[#0080ff] dark:text-[#00f0ff] mb-1">{leetcode.totalSolved}</h4>
              <p className="text-sm text-gray-500 font-mono tracking-wider uppercase">Problems Solved</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-teal-600 dark:text-teal-400">Easy</span>
                  <span className="text-gray-600 dark:text-gray-400">{leetcode.easySolved}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-[#111] rounded-full h-1.5">
                  <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: `${(leetcode.easySolved! / leetcode.totalSolved!) * 100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-yellow-600 dark:text-yellow-400">Medium</span>
                  <span className="text-gray-600 dark:text-gray-400">{leetcode.mediumSolved}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-[#111] rounded-full h-1.5">
                  <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: `${(leetcode.mediumSolved! / leetcode.totalSolved!) * 100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-red-600 dark:text-red-400">Hard</span>
                  <span className="text-gray-600 dark:text-gray-400">{leetcode.hardSolved}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-[#111] rounded-full h-1.5">
                  <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${(leetcode.hardSolved! / leetcode.totalSolved!) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center text-gray-500 font-mono text-sm">
            Unable to load stats.
          </div>
        )}
      </motion.div>

      {/* Leadership Roles Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="col-span-1 lg:col-span-2 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-200 dark:border-[#222] p-8 hover:shadow-[0_0_30px_rgba(0,128,255,0.15)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all flex flex-col group overflow-hidden relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0080ff] dark:via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="flex items-center gap-3 mb-8">
          <svg className="w-8 h-8 text-[#0080ff] dark:text-[#00f0ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <h3 className="text-xl font-bold text-black dark:text-white font-mono">Leadership & Roles</h3>
        </div>

        <div className="flex-grow flex flex-col justify-center space-y-6">
          {roles.map((role, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-[#0080ff] dark:bg-[#00f0ff] flex-shrink-0 shadow-[0_0_8px_rgba(0,128,255,0.8)] dark:shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
              <div>
                <h4 className="text-base font-bold text-black dark:text-white">{role.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-mono mt-1">{role.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
