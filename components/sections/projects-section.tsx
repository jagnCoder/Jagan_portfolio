"use client";

import { memo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Modal } from "@/components/ui/modal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { projects, type ProjectItem } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

// Performance: Separated card component with memo to prevent parent re-renders on hover
const ProjectCard = memo(({ 
  project, 
  isActive, 
  onHover, 
  onDetails 
}: { 
  project: ProjectItem; 
  isActive: boolean; 
  onHover: (slug: string) => void;
  onDetails: (project: ProjectItem) => void;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const liveUrl = project.links.find(
    (link) => link.label.toLowerCase().includes("website") || link.label.toLowerCase().includes("live")
  )?.href;

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.3 }}
      suppressHydrationWarning
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-glow transition-colors",
        isActive && "border-sky-300/35 bg-white/7",
        liveUrl && "cursor-pointer"
      )}
      onMouseEnter={() => onHover(project.slug)}
      onClick={() => {
        if (liveUrl) window.open(liveUrl, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(121,199,255,0.12),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">{project.year}</p>
            <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
          </div>
          <Layers3 className="h-5 w-5 text-sky-200/70" />
        </div>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">{project.subtitle}</p>
        <p className="mt-5 text-sm leading-7 text-slate-300/85">{project.overview}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-xs text-slate-200">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <MagneticButton onClick={(e) => {
            e.stopPropagation();
            onDetails(project);
          }} className="border-sky-300/20 bg-sky-300/10">
            View Details
          </MagneticButton>
          <Link
            href={`/projects/${project.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm text-sky-200 transition-colors hover:text-white"
          >
            Open case study <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

export function ProjectsSection() {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  const handleDetails = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <MotionSection id="projects" className="bg-[#050816]">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Practical project showcases with clear objectives, implementation, and technical architecture."
        description="Hover the cards for subtle parallax and open a detail view to inspect the thinking behind each project."
      />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            isActive={project.slug === activeSlug} 
            onHover={setActiveSlug}
            onDetails={handleDetails}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? "Project details"}
      >
        {selectedProject ? (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Overview</p>
                <p className="mt-3 text-base leading-8 text-slate-200">{selectedProject.overview}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Problem</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/85">{selectedProject.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Solution</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/85">{selectedProject.solution}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Impact</p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-300/85">
                  {selectedProject.impact.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="space-y-5 rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Architecture</p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-300/85">
                  {selectedProject.architecture.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Links</p>
                <div className="mt-3 flex flex-col gap-2">
                  {selectedProject.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors hover:border-sky-300/25 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        ) : null}
      </Modal>
    </MotionSection>
  );
}