import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { researchTopics } from "@/data/portfolio-data";

export function ResearchSection() {
  const nodes = researchTopics.map((topic, index) => ({
    ...topic,
    x: index % 2 === 0 ? 18 : 78,
    y: 20 + index * 18
  }));

  return (
    <MotionSection id="research" className="bg-[#060816]">
      <SectionHeading
        eyebrow="Research"
        title="AI research areas mapped as an interconnected visual system."
        description="Each card is linked to the others to communicate how the research areas reinforce one another."
      />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {researchTopics.map((topic) => (
            <article key={topic.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glow">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">{topic.intensity}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{topic.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300/85">{topic.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {topic.relatedTo.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-xs text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-300/10 via-white/5 to-violet-400/10 p-6 backdrop-blur-xl shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(121,199,255,0.2),transparent_60%)]" />
          <div className="relative h-[34rem] rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Connections</p>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {nodes.slice(0, -1).map((node, index) => {
                const next = nodes[index + 1];
                return (
                  <line
                    key={`${node.title}-${next.title}`}
                    x1={node.x}
                    y1={node.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="rgba(125, 211, 252, 0.28)"
                    strokeWidth="0.8"
                    strokeDasharray="2 3"
                  />
                );
              })}
            </svg>
            {nodes.map((node) => (
              <div
                key={node.title}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/30 bg-sky-300/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-100"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {node.title}
              </div>
            ))}
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-center text-xs uppercase tracking-[0.35em] text-white">
              Human
              <br />
              in the loop
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}