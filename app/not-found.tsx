import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-glow backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">404</p>
        <h1 className="mt-4 font-display text-4xl">Project not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300/85">
          The selected case study does not exist in the placeholder data set.
        </p>
        <Link href="/#projects" className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-100 transition-colors hover:border-sky-300/25 hover:text-white">
          Return to projects
        </Link>
      </div>
    </main>
  );
}