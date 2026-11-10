import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ProblemSolvingSection } from "@/components/sections/problem-solving-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <main className="relative bg-[#050816] text-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ProblemSolvingSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}