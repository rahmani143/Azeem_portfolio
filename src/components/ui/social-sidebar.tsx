import React from "react";
// No lucide-react imports needed

export const SocialSidebar = () => {
  return (
    <div className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center space-y-6">
      <div className="flex flex-col space-y-6">
        <a 
          href="https://github.com/rahmani143" 
          target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-[#0080ff] dark:hover:bg-[#00f0ff] hover:text-white dark:hover:text-black transition-all transform hover:-translate-y-1 duration-300"
          aria-label="GitHub"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
            <path d="M12 18h.01"></path>
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/ibrahim-azeem/" 
          target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-[#0080ff] dark:hover:bg-[#00f0ff] hover:text-white dark:hover:text-black transition-all transform hover:-translate-y-1 duration-300"
          aria-label="LinkedIn"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a 
          href="mailto:bss10i19ibrahimazeem@gmail.com" 
          className="w-12 h-12 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-[#0080ff] dark:hover:bg-[#00f0ff] hover:text-white dark:hover:text-black transition-all transform hover:-translate-y-1 duration-300"
          aria-label="Email"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
      <div className="w-px h-10 bg-gradient-to-b from-gray-300 dark:from-gray-500 to-transparent mt-4"></div>
    </div>
  );
};
