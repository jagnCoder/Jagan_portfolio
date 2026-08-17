import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Layers3 } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Project Case Study`,
    description: project.overview
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-20 pt-28 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-sky-200 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">{project.year}</p>
              <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300/85">{project.subtitle}</p>
            </div>
            <Layers3 className="h-8 w-8 text-sky-200/70" />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Overview</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/85">{project.overview}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Problem</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/85">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Solution</p>
                <p className="mt-3 text-sm leading-7 text-slate-300/85">{project.solution}</p>
              </div>
            </div>
            <aside className="space-y-5 rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Architecture</p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-300/85">
                  {project.architecture.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Impact</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {project.impact.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4 text-sm leading-7 text-slate-300/85">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors hover:border-sky-300/25 hover:text-white"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}