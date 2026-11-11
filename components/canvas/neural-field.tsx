"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

// Performance: Helper to check for WebGL support
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

function CoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    // Performance: Throttled/Simplified rotation logic
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08 + mouse.y * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12 + mouse.x * 0.2;
    meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.02);
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.35, 1]} /> {/* Performance: Detail level 1 instead of 2 */}
        <meshStandardMaterial
          color="#b5e6ff"
          emissive="#1f3a66"
          emissiveIntensity={0.5}
          metalness={0.4}
          roughness={0.4}
          wireframe
        />
      </mesh>
      <mesh scale={0.25}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#7dd3fc" emissive="#8bcfff" emissiveIntensity={1} />
      </mesh>
    </Float>
  );
}

function OrbitingNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    return Array.from({ length: 15 }, (_, index) => ({ // Performance: 15 nodes instead of 18
      radius: 2.4 + (index % 3) * 0.4,
      angle: (index / 15) * Math.PI * 2,
      height: Math.sin(index * 1.5) * 0.3,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={[
            Math.cos(node.angle + index * 0.1) * node.radius,
            node.height,
            Math.sin(node.angle + index * 0.1) * node.radius
          ]}
        >
          {/* Performance: 6x6 segments instead of 18x18 for tiny dots */}
          <sphereGeometry args={[0.06 + (index % 3) * 0.01, 6, 6]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#7dd3fc" : "#a78bfa"}
            emissive={index % 2 === 0 ? "#67e8f9" : "#c4b5fd"}
            emissiveIntensity={1}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]}>
      <planeGeometry args={[20, 20, 1, 1]} />
      <meshBasicMaterial color="#0f1a33" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

export function NeuralFieldCanvas() {
  const prefersReducedMotion = useReducedMotion();
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());

    // Performance: Stop rendering when not in viewport
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const Fallback = () => (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,167,255,0.15),transparent_70%)]">
      <div className="absolute inset-0 bg-grid-fine bg-[length:48px_48px] opacity-[0.1]" />
    </div>
  );

  if (prefersReducedMotion || webGLSupported === false) {
    return <Fallback />;
  }

  if (webGLSupported === null) {
    return <div className="absolute inset-0 bg-[#050816]" />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,167,255,0.18),transparent_55%)]" />
      {isVisible && (
        <Canvas 
          dpr={[1, 1.25]} // Performance: Lower max DPR for 3D backgrounds
          gl={{ 
            antialias: false, // Performance: Disable antialias for better mobile/laptop performance
            powerPreference: "high-performance",
            stencil: false,
            depth: true 
          }}
          onError={() => setWebGLSupported(false)}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 7.5]} fov={40} />
          <color attach="background" args={["#050816"]} />
          <fog attach="fog" args={["#050816", 6, 15]} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#7dd3fc" />
          <pointLight position={[-5, -2, 5]} intensity={1.5} color="#8b5cf6" />
          <CoreMesh />
          <OrbitingNodes />
          <GridPlane />
        </Canvas>
      )}
    </div>
  );
}