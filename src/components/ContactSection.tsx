const contactLinks = {
  email: "mailto:kyawzinlin.dev@gmail.com",
  cv: "/Kyaw-Zin-Lin-Resume.pdf",
  github: "https://github.com/KyawZinLin3",
  linkedin: "https://www.linkedin.com/in/kyaw-zin-lin",
};

const actions = [
  {
    label: "Email Me",
    detail: "Start a project conversation",
    href: contactLinks.email,
    icon: MailIcon,
    isPrimary: true,
  },
  {
    label: "Download CV",
    detail: "PDF resume",
    href: contactLinks.cv,
    icon: DownloadIcon,
    isPrimary: false,
  },
  {
    label: "GitHub",
    detail: "Code and experiments",
    href: contactLinks.github,
    icon: GitHubIcon,
    isPrimary: false,
    external: true,
  },
  {
    label: "LinkedIn",
    detail: "Professional profile",
    href: contactLinks.linkedin,
    icon: LinkedInIcon,
    isPrimary: false,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      data-story-section
      data-cursor-label="say hello."
      className="contact-section-bg relative isolate overflow-hidden py-24 text-neutral-950 md:py-28"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"
        aria-hidden="true"
      />
      <div
        className="contact-section-bg__grid absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="contact-section-bg__beam contact-section-bg__beam--one"
        aria-hidden="true"
      />
      <div
        className="contact-section-bg__beam contact-section-bg__beam--two"
        aria-hidden="true"
      />

      <div className="page-shell relative">
        <div
          data-story-item
          className="contact-panel relative overflow-hidden rounded-lg border border-white/80 bg-white/72 shadow-[0_28px_90px_rgba(15,23,42,0.10)] backdrop-blur-xl"
        >
          <div className="contact-panel__texture absolute inset-0" aria-hidden="true" />
          <div
            className="contact-panel__slice contact-panel__slice--top"
            aria-hidden="true"
          />
          <div
            className="contact-panel__slice contact-panel__slice--bottom"
            aria-hidden="true"
          />

          <div className="relative grid gap-0 lg:grid-cols-[0.94fr_1.06fr]">
            <div
              data-story-heading
              className="flex flex-col justify-between gap-10 p-6 sm:p-8 md:p-10 lg:p-12"
            >
              <div>
                <span className="contact-status-pill inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-bold uppercase text-neutral-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.48)]" />
                  Available for opportunities
                </span>
                <h2 className="mt-7 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 md:text-5xl">
                  Let&apos;s build the next polished system.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
                  I&apos;m open to backend and full-stack developer opportunities,
                  especially remote and relocation roles where I can build APIs,
                  business systems, and production-ready web applications.
                </p>
              </div>

              <div className="grid gap-3 text-sm text-neutral-600 sm:grid-cols-2">
                <div className="contact-detail-row flex items-center gap-3 rounded-lg border border-neutral-200/90 bg-white/78 px-4 py-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-950 text-white shadow-[0_12px_28px_rgba(15,23,42,0.16)]">
                    <MapPinIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase text-neutral-400">
                      Location
                    </span>
                    <span className="mt-0.5 block font-semibold text-neutral-950">
                      Yangon, Myanmar
                    </span>
                  </span>
                </div>
                <div className="contact-detail-row flex items-center gap-3 rounded-lg border border-neutral-200/90 bg-white/78 px-4 py-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-teal-500 text-white shadow-[0_12px_28px_rgba(20,184,166,0.22)]">
                    <BriefcaseIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase text-neutral-400">
                      Availability
                    </span>
                    <span className="mt-0.5 block font-semibold text-neutral-950">
                      Remote and relocation roles
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative border-t border-neutral-200/80 bg-[#f8f8fa]/72 p-4 sm:p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="contact-mini-window overflow-hidden rounded-lg border border-neutral-200/90 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
                <div className="flex items-center justify-between border-b border-neutral-200/75 bg-[#f5f5f7]/88 px-4 py-3">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="size-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase text-neutral-400">
                    contact.app
                  </span>
                  <span className="h-2.5 w-12 rounded-full bg-neutral-200/80" aria-hidden="true" />
                </div>

                <div className="p-3 sm:p-4">
                  <div className="grid gap-3">
                    {actions.map((action) => {
                      const Icon = action.icon;
                      const className = action.isPrimary
                        ? "contact-button min-h-[72px] rounded-lg border border-neutral-950 px-4 py-4 text-sm font-bold shadow-[0_18px_42px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(15,23,42,0.18)]"
                        : "contact-secondary-button min-h-[72px] rounded-lg border border-neutral-200 bg-[#fbfbfc] px-4 py-4 text-sm font-semibold text-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-white hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]";

                      return (
                        <a
                          key={action.label}
                          href={action.href}
                          target={action.external ? "_blank" : undefined}
                          rel={action.external ? "noreferrer" : undefined}
                          className={`${className} group flex items-center justify-between gap-4`}
                        >
                          {action.isPrimary ? (
                            <>
                              <span className="contact-button__fill" aria-hidden="true" />
                              <span className="contact-button__ring" aria-hidden="true" />
                            </>
                          ) : null}
                          <span className="relative z-10 flex min-w-0 items-center gap-3">
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-current/10 bg-white/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]">
                              <Icon />
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate">{action.label}</span>
                              <span className="mt-0.5 block truncate text-xs font-semibold text-current/56">
                                {action.detail}
                              </span>
                            </span>
                          </span>
                          <ArrowUpRightIcon />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="contact-dock mt-4 grid grid-cols-3 gap-2 rounded-lg border border-white/70 bg-white/58 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur">
                {["API", "Web", "Systems"].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-neutral-200/70 bg-white px-3 py-2 text-center text-xs font-bold uppercase text-neutral-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-4 rounded-lg border border-teal-200/70 bg-teal-50/80 px-4 py-3 text-sm font-medium leading-6 text-teal-950">
                Based in Yangon. Open to backend and full-stack roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      className="relative z-10 size-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7m0 0H8m9 0v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 7.5 12 13l7.5-5.5M6.5 19h11a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-11a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.4a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-4.8 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.8 9.8 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.7-2.3 4.5-4.6 4.8.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.4Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.8 9.4H3.7V20h3.1V9.4ZM5.2 4a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 5.2 4Zm15.1 10c0-3.2-1.7-4.8-4.1-4.8a3.5 3.5 0 0 0-3.2 1.8V9.4H10V20h3.1v-5.3c0-1.4.3-2.8 2-2.8s1.8 1.6 1.8 2.9V20h3.1v-6Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7m-9 0h12a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm-2 5h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
