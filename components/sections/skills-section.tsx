import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/portfolio-data";

export function SkillsSection() {
  return (
    <MotionSection id="skills" className="bg-[#060816]">
      <SectionHeading
        eyebrow="Skills"
        title="A constellation of technical depth, creative tooling, and product delivery."
        description="Each category is tuned to feel tactile and interactive without becoming visually noisy."
      />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            className={`rounded-[2rem] border border-white/10 bg-gradient-to-br ${group.accent} p-6 backdrop-blur-xl shadow-glow`}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl text-white">{group.title}</h3>
              </div>
              <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5" />
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300/85">{group.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/35 px-4 py-2 text-sm text-slate-100 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}