"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

const AbstractMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const meshColor = mounted && resolvedTheme === "light" ? "#0080ff" : "#00f0ff";
  const meshOpacity = mounted && resolvedTheme === "light" ? 0.6 : 0.3;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 2]}>
      <meshBasicMaterial color={meshColor} wireframe={true} transparent opacity={meshOpacity} />
    </Icosahedron>
  );
};

export const ThreeCanvas = () => {
  return (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full lg:w-1/2 h-[600px] z-0 opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <AbstractMesh />
      </Canvas>
    </div>
  );
};
