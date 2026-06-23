"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MountainMaterial = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#00f0ff") },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Calculate organic noise based on position and time
      float elevation = snoise(vec2(pos.x * 0.08, pos.y * 0.08 - uTime * 0.1)) * 4.0;
      elevation += snoise(vec2(pos.x * 0.2, pos.y * 0.2 - uTime * 0.3)) * 1.5;
      elevation += snoise(vec2(pos.x * 0.5, pos.y * 0.5 - uTime * 0.5)) * 0.5;
      
      pos.z += elevation;
      vElevation = elevation;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    varying float vElevation;
    varying vec2 vUv;

    void main() {
      // Fade out the extreme edges to blend smoothly into the fog
      float edgeAlpha = (1.0 - smoothstep(0.4, 0.5, abs(vUv.x - 0.5))) * 
                        (1.0 - smoothstep(0.3, 0.5, abs(vUv.y - 0.5)));
      
      // Enhance brightness on peaks, darker in valleys
      vec3 finalColor = mix(uColor * 0.1, uColor, (vElevation + 6.0) / 12.0);
      
      gl_FragColor = vec4(finalColor, edgeAlpha);
    }
  `;

  return (
    <shaderMaterial
      ref={materialRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      wireframe={true}
      transparent={true}
      blending={THREE.AdditiveBlending}
    />
  );
};

const Scene = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Initial camera position (looking forward over the plane)
    camera.position.set(0, -25, 6);
    camera.lookAt(0, 0, 0);

    // Give the DOM time to render sections for ScrollTrigger height calculation
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });

      // Fly the camera forward across the generated mountains
      tl.to(camera.position, {
        y: 15,
        z: 3,
        ease: "none",
      });
      
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [camera]);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        {/* Massive 256x256 segment plane for dense vertex manipulation */}
        <planeGeometry args={[100, 100, 256, 256]} />
        <MountainMaterial />
      </mesh>
    </group>
  );
};

export const MountainBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030303]">
      <Canvas
        camera={{ fov: 60, near: 0.1, far: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <fog attach="fog" args={["#030303", 5, 25]} />
        <Scene />
      </Canvas>
    </div>
  );
};
