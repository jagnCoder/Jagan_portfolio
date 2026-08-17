import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface StatCardProps {
  value: ReactNode;
  label: string;
  detail: string;
  className?: string;
}

export function StatCard({ value, label, detail, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-sky-300/20 hover:bg-white/7",
        className
      )}
    >
      <p className="font-display text-3xl text-white sm:text-4xl">{value}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-sky-200/70">{label}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300/80">{detail}</p>
    </div>
  );
}