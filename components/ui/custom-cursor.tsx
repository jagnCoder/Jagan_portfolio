"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

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
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, [data-cursor-hover='true']")));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver, true);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver, true);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
        style={{ x: position.x, y: position.y }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/50"
          animate={{ width: hovering ? 48 : 36, height: hovering ? 48 : 36, opacity: hovering ? 0.95 : 0.7 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        />
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200 shadow-[0_0_28px_rgba(121,199,255,0.45)]"
          animate={{ width: hovering ? 8 : 6, height: hovering ? 8 : 6 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}