import { AnimatedHero } from "@/components/AnimatedHero";
import { AboutMeSection } from "@/components/AboutMeSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CoreStrengthsSection } from "@/components/CoreStrengthsSection";
import { CustomCursor } from "@/components/CustomCursor";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillRow } from "@/components/SkillRow";
import { StoryScrollEffects } from "@/components/StoryScrollEffects";
import { experiences, technicalSkillRows } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <StoryScrollEffects />
      <main>
        <AnimatedHero />
        <CoreStrengthsSection />
        <AboutMeSection />
        <CaseStudiesSection />

        <section
          id="skills"
          data-story-section
          data-cursor-label="capabilities."
          className="relative overflow-hidden border-b border-[var(--line)] bg-white py-24 md:py-28"
        >
          <div className="absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-teal-100/55 blur-3xl" />
          <div className="page-shell relative">
            <div data-story-heading>
              <SectionHeading
                eyebrow="Capabilities"
                title="Technical Toolkit"
                description="Technologies and tools I use to build full-stack web applications, production-ready APIs, and maintainable backend systems."
              />
            </div>
            <div className="mt-12 space-y-4">
              {technicalSkillRows.map((row) => (
                <SkillRow key={row.title} row={row} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          data-story-section
          data-cursor-label="experience."
          className="relative overflow-hidden border-b border-[var(--line)] bg-white py-24 md:py-28"
        >
          <div className="absolute left-1/2 top-0 h-80 w-[760px] -translate-x-1/2 rounded-full bg-teal-100/55 blur-3xl" />
          <div className="page-shell relative">
            <div data-story-heading>
              <SectionHeading
                eyebrow="Career"
                title="Experience"
                description="A summary of my professional work building, maintaining, and supporting business software systems."
              />
            </div>

            <div className="relative mt-12 pl-5 md:pl-8">
              <div
                className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-teal-400 via-neutral-200 to-transparent md:left-1"
                aria-hidden="true"
              />
              <div className="space-y-5">
                {experiences.map((experience) => (
                  <div key={`${experience.company}-${experience.role}`} className="relative">
                    <span
                      className="absolute -left-[25px] top-8 h-3 w-3 rounded-full border border-teal-500 bg-white shadow-[0_0_0_6px_rgba(20,184,166,0.12),0_0_24px_rgba(20,184,166,0.24)] md:-left-[33px]"
                      aria-hidden="true"
                    />
                    <ExperienceItem experience={experience} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          data-story-section
          data-cursor-label="say hello."
          className="min-h-[58svh] bg-neutral-950 py-20 text-white md:py-24"
        >
          <div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div data-story-heading>
              <p className="text-sm font-semibold uppercase text-teal-300">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Ready to replace this with your details.
              </h2>
            </div>
            <a
              data-story-item
              href="mailto:hello@example.com"
              className="contact-button w-full rounded-md border border-white/20 px-10 py-4 text-center text-sm font-semibold text-white transition-colors duration-300 md:w-[340px]"
            >
              <span className="contact-button__fill" aria-hidden="true" />
              <span className="contact-button__ring" aria-hidden="true" />
              <span className="contact-button__text">hello@example.com</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
