"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface PageLoaderProps {
  isVisible: boolean;
}

export function PageLoader({ isVisible }: PageLoaderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex w-[min(88vw,26rem)] flex-col items-center gap-8 px-6 text-center">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(121,199,255,0.18),transparent_60%)] blur-3xl" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-sky-300/20 bg-white/5 shadow-glow">
              <div className="absolute inset-3 rounded-full border border-sky-200/10 animate-pulseGlow" />
              <div className="h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_40px_rgba(121,199,255,0.8)]" />
            </div>
            <div className="relative space-y-3">
              <p className="text-xs uppercase tracking-[0.45em] text-sky-200/70">Initializing</p>
              <h1 className="font-display text-2xl font-medium text-white sm:text-3xl">
                Loading the neural interface
              </h1>
              <p className="mx-auto max-w-md text-sm leading-7 text-slate-300/80">
                Preparing a cinematic portfolio environment tuned for motion, depth, and focus.
              </p>
            </div>
            <div className="h-px w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/2 bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: prefersReducedMotion ? 0 : 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}