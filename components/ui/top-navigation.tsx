import Image from "next/image";
import Link from "next/link";
import { navigation, siteCopy } from "@/data/portfolio-data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { DownloadResumeButton } from "@/components/ui/download-resume-button";

export function TopNavigation() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-xl shadow-glow">
        <Link href="#home" className="group flex items-center gap-3">
          <div className="relative flex h-9 w-9 overflow-hidden items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-sky-300/40">
            <Image
              src="/assets/aistudio/image_3a194523.png"
              alt="Logo"
              width={36}
              height={36}
              className="h-full w-full object-contain p-0.5"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">{siteCopy.name}</p>
            <p className="text-xs text-slate-400">{siteCopy.headline}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <DownloadResumeButton />
          </div>
          <MagneticButton href="#contact">Contact</MagneticButton>
        </div>
      </div>
    </header>
  );
}