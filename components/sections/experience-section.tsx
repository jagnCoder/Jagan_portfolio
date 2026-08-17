import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience, education } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <MotionSection id="experience" className="bg-[#050816]">
      <SectionHeading
        eyebrow="Experience & Education"
        title="A timeline that frames growth, research, and execution."
        description="The layout stays vertical and readable while still feeling premium and motion-friendly."
      />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative pl-4 sm:pl-8">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-sky-300/60 via-white/20 to-transparent sm:left-9" />
          <div className="space-y-8">
            {experience.map((item) => (
              <article key={`${item.organization}-${item.role}`} className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glow sm:p-8">
                <div className="absolute -left-1.5 top-8 h-4 w-4 rounded-full border border-sky-200/40 bg-sky-300 shadow-[0_0_24px_rgba(125,211,252,0.55)] sm:-left-1" />
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1">{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-white">{item.role}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-sky-200/70">{item.organization}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300/85">{item.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300/85">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-300/10 via-white/5 to-violet-400/10 p-6 backdrop-blur-xl shadow-glow sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Education</p>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-200/70">{item.period}</p>
                  <h3 className="mt-3 font-display text-xl text-white">{item.degree}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300/85">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Working style</p>
            <p className="mt-4 text-sm leading-7 text-slate-300/85">
              Fast iteration, clear research framing, and production-minded interfaces. The goal is always to turn complexity into something readable and useful.
            </p>
          </div>
        </aside>
      </div>
    </MotionSection>
  );
}