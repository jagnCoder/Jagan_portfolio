import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl text-center", className)}>
      <p className="mb-3 text-xs uppercase tracking-[0.45em] text-sky-200/70">{eyebrow}</p>
      <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300/80 sm:text-base">
        {description}
      </p>
    </div>
  );
}