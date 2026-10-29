"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { siteCopy } from "@/data/portfolio-data";

export function DownloadResumeButton() {
  return (
    <MagneticButton href={siteCopy.resumePath} download="Jagan_Mohan_Dash_CV.pdf" target="_blank" rel="noopener noreferrer">
      Download CV
    </MagneticButton>
  );
}