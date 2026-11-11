"use client";

import { AnimatePresence, motion, useReducedMotion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Performance: Use MotionValues to avoid React re-renders on every mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Performance: Use springs for smooth movement without CPU-heavy transitions
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches && !prefersReducedMotion);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const onOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      // Performance: Simplified selector check
      const isHoverable = Boolean(target?.closest("a, button, [data-cursor-hover='true']"));
      setHovering(isHoverable);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, true);
    
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver, true);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
        style={{ x: smoothX, y: smoothY }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/40"
          animate={{ 
            width: hovering ? 44 : 32, 
            height: hovering ? 44 : 32, 
            opacity: hovering ? 1 : 0.6 
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        {/* Inner Dot */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200"
          animate={{ 
            width: hovering ? 6 : 4, 
            height: hovering ? 6 : 4 
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}