"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";

const resumeText = `Jagan Mohan Dash
Full-Stack Developer & Cybersecurity Enthusiast

Computer Science undergraduate focused on building secure, scalable web applications and data-driven products.
Skills: Python, Java, C, JavaScript, TypeScript, React, Node.js, SQL, Penetration Testing, Threat Hunting

Contact: jagnsuvhamohan@gmail.com
Portfolio: https://jagncoder.github.io/Portfolio/
`;

const resumeHref = `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`;

export function DownloadResumeButton() {
  return (
    <MagneticButton href={resumeHref} download="jagan-mohan-dash-resume.txt">
      Download Resume
    </MagneticButton>
  );
}