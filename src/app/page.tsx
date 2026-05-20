import { AnimatedHero } from "@/components/AnimatedHero";
import { AboutMeSection } from "@/components/AboutMeSection";
import { CoreStrengthsSection } from "@/components/CoreStrengthsSection";
import { CustomCursor } from "@/components/CustomCursor";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryScrollEffects } from "@/components/StoryScrollEffects";
import { projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <StoryScrollEffects />
      <main>
        <AnimatedHero />
        <CoreStrengthsSection />
        <AboutMeSection />

        <section
          id="projects"
          data-story-section
          data-cursor-label="selected work."
          className="min-h-[72svh] border-y border-[var(--line)] bg-white py-24 md:py-28"
        >
          <div className="page-shell">
            <div data-story-heading>
              <SectionHeading
                eyebrow="Selected work"
                title="Project cards ready for your real portfolio."
                description="The content lives in a small typed data file so the page stays easy to read and update."
              />
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} data-story-item>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          data-story-section
          data-cursor-label="capabilities."
          className="min-h-[72svh] py-24 md:py-28"
        >
          <div className="page-shell grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div data-story-heading>
              <SectionHeading
                eyebrow="Capabilities"
                title="Simple sections, typed content, and reusable components."
                description="This starter avoids unnecessary abstraction while still giving you a clean place to add richer portfolio features."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  data-story-item
                  className="rounded-lg border border-[var(--line)] bg-white p-5"
                >
                  <h3 className="font-semibold text-neutral-950">{group.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
