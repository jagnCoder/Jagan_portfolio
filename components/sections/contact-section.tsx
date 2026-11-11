"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { DownloadResumeButton } from "@/components/ui/download-resume-button";
import { contact, siteCopy } from "@/data/portfolio-data";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <MotionSection id="contact" className="bg-[#060816] pb-28">
      <SectionHeading
        eyebrow="Contact"
        title={contact.cta}
        description={contact.body}
      />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-glow sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Availability</p>
            <p className="mt-3 text-lg text-slate-200">{siteCopy.availability}</p>
          </div>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-slate-950/35 px-4 py-3">
              <Mail className="h-4 w-4 text-sky-200" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-slate-950/35 px-4 py-3">
              <MapPin className="h-4 w-4 text-sky-200" />
              <span>{siteCopy.location}</span>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Resume</p>
            <p className="mt-3 text-sm leading-7 text-slate-300/85">
              Download a summary resume or connect a production PDF when you are ready.
            </p>
            <div className="mt-5">
              <DownloadResumeButton />
            </div>
          </div>
        </aside>
        <form
          onSubmit={handleSubmit}
          suppressHydrationWarning
          className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-300/10 via-white/5 to-violet-400/10 p-6 backdrop-blur-md shadow-glow sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              <span>Name</span>
              <input
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                required
                suppressHydrationWarning
                className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-300/30"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-200">
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                required
                suppressHydrationWarning
                className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-300/30"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block space-y-2 text-sm text-slate-200">
            <span>Project vision</span>
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              required
              rows={7}
              suppressHydrationWarning
              className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-300/30"
              placeholder="Tell me what you want to build, who it is for, and what makes it meaningful."
            />
          </label>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <MagneticButton type="submit">
              Send Message <Send className="ml-2 h-4 w-4" />
            </MagneticButton>
            <p className="text-sm text-slate-300/80">
              {status === "sent" ? "Opening your email client now." : "The form launches your email client with a prefilled message."}
            </p>
          </div>
        </form>
      </div>
    </MotionSection>
  );
}