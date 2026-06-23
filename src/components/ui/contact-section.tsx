"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Something went wrong. Please try again later or email me directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      
      {/* Vibrant multi-color gradient background glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-tr from-rose-500 via-purple-500 to-[#00f0ff] opacity-10 dark:opacity-20 blur-[100px] z-0 pointer-events-none rounded-full"></div>

      {/* Headline */}
      <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black dark:text-white mb-12 relative z-10 text-center">
        Want to know further
      </h2>

      {/* Glassmorphism Container */}
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full p-8 md:p-12 rounded-3xl bg-white/10 dark:bg-black/10 backdrop-blur-[10px] border border-black/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] flex flex-col gap-8"
      >
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name" 
            className="w-full bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-3 text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 focus:outline-none focus:border-black dark:focus:border-white transition-colors font-light"
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email" 
            className="w-full bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-3 text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 focus:outline-none focus:border-black dark:focus:border-white transition-colors font-light"
          />
        </div>
        
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message" 
          rows={4}
          className="w-full bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-3 text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 focus:outline-none focus:border-black dark:focus:border-white transition-colors font-light resize-none"
        />

        {status.message && (
          <div className={`text-center text-sm font-medium ${status.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {status.message}
          </div>
        )}

        <div className="flex justify-center mt-4">
          {/* Call to Action Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] dark:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </motion.form>

      {/* Direct Contact Text */}
      <p className="mt-8 text-black/60 dark:text-white/60 font-light text-center relative z-10">
        Or reach out here: <span className="select-all cursor-text text-black dark:text-white font-medium">bss10i19ibrahimazeem@gmail.com</span>
      </p>
    </div>
  );
};

