"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteCopy } from "@/data/portfolio-data";

export function DownloadResumeButton() {
  return (
    <MagneticButton href={siteCopy.resumePath} download="Jagan Mohan Dash_Resume.pdf" target="_blank" rel="noopener noreferrer">
      Download Resume
    </MagneticButton>
  );
}