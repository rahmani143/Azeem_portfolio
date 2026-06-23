"use client";

import React, { useRef, useEffect } from "react";
import { CssFog } from "@/components/ui/css-fog";

export const ScrollVideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let virtualPlayhead = 0;
    let lastTime = performance.now();
    let lastScroll = window.scrollY;
    
    // Attempt to start normal playback under the hood to keep the engine warm
    video.play().catch(() => {});

    const renderLoop = (time: number) => {
      // Calculate time delta in seconds
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!Number.isNaN(video.duration) && video.duration > 0) {
        // 1. Ambient forward movement (Plays at 100% normal speed so it is highly dynamic)
        virtualPlayhead += delta * 1.0;

        // 2. Add scroll delta
        const currentScroll = window.scrollY;
        const scrollDelta = currentScroll - lastScroll;
        lastScroll = currentScroll;

        // Map scroll pixels to video seconds (e.g. 500px scroll = 1 second)
        virtualPlayhead += scrollDelta * 0.002;

        // 3. Wrap around seamlessly
        let finalTime = virtualPlayhead % video.duration;
        if (finalTime < 0) finalTime += video.duration; // Handle rewinding past 0

        // 4. Calculate blurry transition near the loop point
        const fadeDuration = 1.0; // 1 second of transition
        const timeLeft = video.duration - finalTime;
        
        let blurAmount = 0;
        let videoOpacity = 0.3; // Default base opacity

        if (timeLeft < fadeDuration) {
          // Fading out into fog at the end
          const progress = 1 - (timeLeft / fadeDuration); // 0 to 1
          blurAmount = progress * 20; // Up to 20px blur
          videoOpacity = 0.3 * (1 - progress); // Fade opacity to 0
        } else if (finalTime < fadeDuration) {
          // Fading in from fog at the start
          const progress = finalTime / fadeDuration; // 0 to 1
          blurAmount = (1 - progress) * 20; // 20px down to 0px blur
          videoOpacity = 0.3 * progress; // Fade opacity up to 0.3
        }

        // Apply styles directly to bypass React render cycle for 60fps
        video.style.filter = `blur(${blurAmount}px)`;
        video.style.opacity = videoOpacity.toString();

        // 5. Update the video frame
        video.currentTime = finalTime;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#030303]">
      <video
        ref={videoRef}
        src="/hero-animation-optimized.mp4"
        playsInline
        muted
        loop
        preload="auto"
        className="w-full h-full object-cover opacity-30"
      />
      <CssFog />
    </div>
  );
};
