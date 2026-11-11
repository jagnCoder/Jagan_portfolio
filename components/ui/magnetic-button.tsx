"use client";

import { motion, useReducedMotion, useMotionValue, useSpring } from "motion/react";
import { type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  download?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function MagneticButton({ 
  children, 
  className, 
  href, 
  onClick, 
  ...rest 
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  // Performance: Direct value updates instead of state-driven React renders
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((event.clientX - centerX) * 0.2);
    y.set((event.clientY - centerY) * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const sharedClassName = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-sky-300/35 hover:bg-white/10",
    className
  );

  const motionStyles = prefersReducedMotion ? {} : { x: smoothX, y: smoothY };

  if (href) {
    return (
      <motion.a
        href={href}
        className={sharedClassName}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onClick={onClick}
        style={motionStyles}
        {...rest}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(121,199,255,0.12),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </motion.a>
    );
  }

  return (
    <motion.button
      className={sharedClassName}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={motionStyles}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(121,199,255,0.12),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.button>
  );
}