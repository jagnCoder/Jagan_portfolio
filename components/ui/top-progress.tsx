"use client";

import { motion, useScroll } from "motion/react";

export function TopProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      suppressHydrationWarning
      className="fixed left-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-sky-300 via-cyan-300 to-indigo-400"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}