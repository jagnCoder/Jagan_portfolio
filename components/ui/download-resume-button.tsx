"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteCopy } from "@/data/portfolio-data";

export function DownloadResumeButton({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <MagneticButton
      href={siteCopy.resumePath}
      download="Jagan Mohan Dash_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Resume"
      className={className}
    >
      {compact ? (
        <>
          <span className="sm:hidden">Resume</span>
          <span className="hidden sm:inline">Download Resume</span>
        </>
      ) : (
        "Download Resume"
      )}
    </MagneticButton>
  );
}
