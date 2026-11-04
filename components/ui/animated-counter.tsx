"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export function AnimatedCounter({ value, suffix = "+" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(value);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!prefersReducedMotion) {
      setCount(0);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!mounted || !inView || prefersReducedMotion) {
      setCount(value);
      return;
    }

    let animationFrame = 0;
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [mounted, inView, prefersReducedMotion, value]);

  return (
    <span ref={ref} suppressHydrationWarning>
      {count}{suffix}
    </span>
  );
}