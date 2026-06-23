"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Float, Clouds, Cloud, Text } from "@react-three/drei";
import * as THREE from "three";

// A simple 3D fluffy cloud made of spheres
const CloudMesh = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto-rotate the cloud slowly
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group scale={0.8}>
          {/* Volumetric Clouds from drei */}
          <Clouds material={THREE.MeshLambertMaterial} limit={400}>
            <Cloud segments={40} bounds={[6, 2, 2]} volume={12} color="#ffffff" opacity={0.8} />
            <Cloud seed={1} scale={1.5} volume={8} color="#e0f7ff" opacity={0.6} position={[0, 0, -1]} fade={10} />
            <Cloud seed={2} scale={1.5} volume={8} color="#cceeff" opacity={0.6} position={[0, 0, 1]} fade={10} />
          </Clouds>
          
          {/* Stylish 3D Text pinned to the cloud */}
          <Text
            position={[0, 0.4, 2.5]}
            fontSize={0.6}
            color="#0080ff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.03}
            outlineColor="#ffffff"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          >
            Looking forward
          </Text>
          <Text
            position={[0, -0.4, 2.5]}
            fontSize={0.5}
            color="#0080ff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#ffffff"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          >
            to making it better..
          </Text>
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
        "relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] transition-all duration-700 ease-in-out hidden lg:block flex-shrink-0",
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
