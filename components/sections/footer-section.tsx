import { siteCopy } from "@/data/portfolio-data";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 pb-10 pt-6 text-sm text-slate-400 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteCopy.name}. Built as a cinematic portfolio experience.</p>
        <p>Placeholder content and assets are centralized in data/portfolio-data.ts.</p>
      </div>
    </footer>
  );
}