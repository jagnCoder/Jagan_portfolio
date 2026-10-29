"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

// Helper to check for WebGL support
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
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 + mouse.y * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.18 + mouse.x * 0.4;
    meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.03);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.65}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshStandardMaterial
          color="#b5e6ff"
          emissive="#1f3a66"
          emissiveIntensity={0.65}
          metalness={0.45}
          roughness={0.3}
          wireframe
        />
      </mesh>
      <mesh scale={0.28}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#7dd3fc" emissive="#8bcfff" emissiveIntensity={1.2} />
      </mesh>
    </Float>
  );
}

function OrbitingNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => ({
      radius: 2.4 + (index % 3) * 0.35,
      angle: (index / 18) * Math.PI * 2,
      height: Math.sin(index * 1.7) * 0.35,
      speed: 0.18 + (index % 5) * 0.02
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={[
            Math.cos(node.angle + index * 0.12) * node.radius,
            node.height,
            Math.sin(node.angle + index * 0.12) * node.radius
          ]}
        >
          <sphereGeometry args={[0.06 + (index % 4) * 0.01, 18, 18]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#7dd3fc" : "#a78bfa"}
            emissive={index % 2 === 0 ? "#67e8f9" : "#c4b5fd"}
            emissiveIntensity={1.2}
            roughness={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

function GridPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.65, 0]}>
      <planeGeometry args={[20, 20, 1, 1]} />
      <meshBasicMaterial color="#0f1a33" wireframe transparent opacity={0.22} />
    </mesh>
  );
}

export function NeuralFieldCanvas() {
  const prefersReducedMotion = useReducedMotion();
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  const Fallback = () => (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,167,255,0.18),transparent_65%)]">
      <div className="absolute inset-0 bg-grid-fine bg-[length:48px_48px] opacity-[0.12]" />
    </div>
  );

  if (prefersReducedMotion || webGLSupported === false) {
    return <Fallback />;
  }

  // Still checking support
  if (webGLSupported === null) {
    return <div className="absolute inset-0 bg-[#050816]" />;
  }

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,167,255,0.22),transparent_52%)]" />
      <Canvas 
        dpr={[1, 1.6]} 
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onError={(e) => {
          console.error("WebGL Canvas Error:", e);
          setWebGLSupported(false);
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7.2]} fov={42} />
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 5, 16]} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 4, 6]} intensity={1.1} color="#7dd3fc" />
        <pointLight position={[-4, -2, 5]} intensity={1.8} color="#8b5cf6" />
        <CoreMesh />
        <OrbitingNodes />
        <GridPlane />
      </Canvas>
    </div>
  );
}