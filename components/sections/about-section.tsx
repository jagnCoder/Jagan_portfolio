import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { stats, siteCopy } from "@/data/portfolio-data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function AboutSection() {
  return (
    <MotionSection id="about" className="bg-[#050816]">
      <SectionHeading
        eyebrow="About"
        title="A digital identity shaped for secure engineering, thoughtful product design, and practical impact."
        description="The site highlights my background in full-stack development, cybersecurity, and student-led product building with a focus on dependable systems."
      />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glow sm:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Professional snapshot</p>
          <h3 className="mt-4 font-display text-3xl text-white sm:text-4xl">{siteCopy.headline}</h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300/85 sm:text-base">
            {siteCopy.description} The structure is intentionally decoupled so every future update lives in the data file, not the component tree.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Research-grade thinking translated into product decisions",
              "Motion-led interfaces that remain lightweight and accessible",
              "Crisp narrative structure for projects, research, and experience",
              "A design language tuned for premium, futuristic presentation"
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-white/10 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => {
            const numericValue = Number.parseInt(stat.value, 10);
            return (
              <StatCard
                key={stat.label}
                value={Number.isNaN(numericValue) ? stat.value : <AnimatedCounter value={numericValue} suffix="+" />}
                label={stat.label}
                detail={stat.detail}
              />
            );
          })}
          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sky-300/10 via-white/5 to-violet-400/10 p-5 backdrop-blur-xl sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Research interests</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
              {[
                "Large language models",
                "Multimodal intelligence",
                "Retrieval systems",
                "Human-AI interaction",
                "Evaluation pipelines"
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300/85">
              Location: {siteCopy.location}. Availability: {siteCopy.availability}
            </p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}