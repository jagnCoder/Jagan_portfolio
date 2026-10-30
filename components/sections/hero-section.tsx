"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { NeuralFieldCanvas } from "@/components/canvas/neural-field";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Pill } from "@/components/ui/pill";
import { siteCopy } from "@/data/portfolio-data";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-32 sm:px-8 lg:px-12">
      <NeuralFieldCanvas />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.12)_0%,rgba(5,8,22,0.55)_70%,#050816_100%)]" />
      <div className="absolute inset-0 bg-grid-fine bg-[length:48px_48px] opacity-[0.15]" />
      <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-radial-glow blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:pt-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-3xl"
        >
          <motion.div variants={textVariants} transition={{ duration: 0.7 }}>
            <Pill>
              <Sparkles className="mr-2 h-3 w-3" />
              Full-Stack Development Portfolio
            </Pill>
          </motion.div>
          <motion.p
            variants={textVariants}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.65 }}
            className="mt-8 text-xs uppercase tracking-[0.45em] text-sky-200/65"
          >
            {siteCopy.location}
          </motion.p>
          <motion.h1
            variants={textVariants}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.8 }}
            className="mt-4 font-display text-5xl font-medium leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            {siteCopy.name}
            <span className="mt-4 block bg-gradient-to-r from-sky-200 via-cyan-100 to-violet-200 bg-clip-text text-transparent">
              builds practical, user-centric software solutions.
            </span>
          </motion.h1>
          <motion.p
            variants={textVariants}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.75 }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-300/85 sm:text-lg"
          >
            {siteCopy.subheadline}
          </motion.p>
          <motion.p
            variants={textVariants}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.8 }}
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
          >
            {siteCopy.description}
          </motion.p>

          <motion.div
            variants={textVariants}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.div
              variants={textVariants}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#projects">
                Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#contact" className="border-sky-300/20 bg-sky-300/10">
                Start a Conversation
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              "Modern Full-Stack",
              "Backend Systems",
              "RESTful API Design"
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(121,199,255,0.2),transparent_68%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Status</p>
                <h2 className="mt-2 font-display text-2xl text-white">Jagan&apos;s Engineering Portfolio Active </h2>
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                Available
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Full-Stack Application Engineering"],
                ["02", "Secure Software Development"],
                ["03", "Visual systems design"],
                ["04", "AI-Powered Solutions" ]
              ].map(([index, label]) => (
                <div key={index} className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-200/65">{index}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-200/65">Signature interaction</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Interactive project showcases, smooth motion design, and dynamic visual components create an engaging experience while highlighting real-world development, cybersecurity, and AI achievements.              </p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}