"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MotionSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function MotionSection({ id, className, children }: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn("relative px-6 py-20 sm:px-8 lg:px-12", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
      suppressHydrationWarning
    >

      {children}
    </motion.section>
  );
}