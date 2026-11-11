"use client";

import { motion } from "motion/react";
import { Github, Code2, ExternalLink } from "lucide-react";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { problemSolving } from "@/data/portfolio-data";

export function ProblemSolvingSection() {
  return (
    <MotionSection id="problem-solving" className="bg-[#050816]">
      <SectionHeading
        eyebrow="Coding Practice"
        title="Algorithmic Mastery"
        description="Continuous growth through structured problem solving and technical preparation."
      />
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-glow transition-all hover:border-sky-300/25"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(121,199,255,0.1),transparent_50%)]" />
          
          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
              <Code2 className="h-8 w-8" />
            </div>
            
            <h3 className="mt-6 font-display text-2xl text-white sm:text-3xl">
              {problemSolving.title}
            </h3>
            
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/85 sm:text-base">
              {problemSolving.description}
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {problemSolving.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors group-hover:border-sky-300/20 group-hover:text-sky-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-10">
              <MagneticButton 
                href={problemSolving.repository} 
                target="_blank"
                rel="noopener noreferrer"
                className="border-sky-300/20 bg-sky-300/10 hover:bg-sky-300/20"
              >
                <Github className="mr-2 h-4 w-4" />
                View Repository
                <ExternalLink className="ml-2 h-3 w-3 opacity-50" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  );
}
