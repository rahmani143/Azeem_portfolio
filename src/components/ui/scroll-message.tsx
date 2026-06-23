"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float } from "@react-three/drei";
import * as THREE from "three";

// A simple 3D fluffy cloud made of spheres
const CloudMesh = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto-rotate the cloud slowly
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group scale={1.5}>
          {/* Cloud puffs */}
          <mesh position={[-0.8, -0.2, 0]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="#0080ff" transparent opacity={0.8} roughness={0.1} />
          </mesh>
          <mesh position={[0.8, -0.2, 0]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshStandardMaterial color="#00f0ff" transparent opacity={0.8} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.2, 0.5]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#e0f7ff" transparent opacity={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.2, -0.5]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#e0f7ff" transparent opacity={0.9} roughness={0.1} />
          </mesh>
          
          {/* Floating HTML Text pinned to the cloud */}
          <Html center distanceFactor={8}>
            <div className="w-max bg-white/20 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 pointer-events-none select-none">
              <p className="text-sm md:text-base font-bold text-black dark:text-white tracking-wide whitespace-nowrap drop-shadow-md">
                Looking forward to making it better.. ✨
              </p>
            </div>
          </Html>
        </group>
      </Float>
    </group>
  );
};

export const ScrollMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Vanish smoothly if scrolled past 50px
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-700 ease-in-out",
        "w-[300px] h-[250px] md:w-[400px] md:h-[300px]",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90 pointer-events-none"
      )}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#0080ff" />
        
        <CloudMesh />
        
        {/* Allows the user to turn/rotate the cloud! */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};
