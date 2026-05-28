const contactLinks = {
  email: "mailto:kyawzinlin14future@gmail.com",
  cv: "/Kyaw-Zin-Lin-Resume.pdf",
  github: "https://github.com/KyawZinLin3",
  linkedin: "https://www.linkedin.com/in/kyawzinlin3",
};

const actions = [
  {
    label: "Email Me",
    href: contactLinks.email,
    icon: MailIcon,
    isPrimary: true,
  },
  {
    label: "Download CV",
    href: contactLinks.cv,
    icon: DownloadIcon,
    isPrimary: false,
  },
  {
    label: "GitHub",
    href: contactLinks.github,
    icon: GitHubIcon,
    isPrimary: false,
    external: true,
  },
  {
    label: "LinkedIn",
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
      className="relative overflow-hidden bg-neutral-950 py-20 text-white md:py-28"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/45 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-10 h-40 w-[min(780px,88vw)] -translate-x-1/2 rounded-[999px] bg-cyan-300/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="page-shell relative">
        <article
          data-story-item
          className="group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.045] p-6 shadow-[0_34px_100px_rgba(0,0,0,0.34)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-teal-300/45 hover:bg-white/[0.06] hover:shadow-[0_42px_120px_rgba(20,184,166,0.14)] sm:p-8 md:p-10"
        >
          <div
            className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:34px_34px]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 top-8 h-52 w-52 rotate-12 rounded-[42px] border border-teal-300/18 bg-teal-300/[0.035] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-6"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 left-8 h-40 w-64 -rotate-6 rounded-[36px] border border-sky-300/14 bg-sky-300/[0.035] transition duration-500 group-hover:translate-x-2 group-hover:rotate-0"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div data-story-heading>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(94,234,212,0.75)]" />
                Available for opportunities
              </span>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                Let&apos;s build something reliable.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
                I&apos;m open to backend and full-stack developer opportunities,
                especially remote and relocation roles where I can build APIs,
                business systems, and production-ready web applications.
              </p>

              <div className="mt-8 grid gap-3 text-sm text-neutral-300 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/18 px-4 py-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-teal-200">
                    <MapPinIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase text-neutral-500">
                      Location
                    </span>
                    <span className="mt-0.5 block font-semibold text-white">
                      Yangon, Myanmar
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/18 px-4 py-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-teal-200">
                    <BriefcaseIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase text-neutral-500">
                      Availability
                    </span>
                    <span className="mt-0.5 block font-semibold text-white">
                      Open to remote and relocation opportunities
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:pl-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {actions.map((action) => {
                  const Icon = action.icon;
                  const className = action.isPrimary
                    ? "contact-button min-h-14 rounded-2xl border border-teal-200/60 bg-teal-300 px-5 py-4 text-sm font-bold text-neutral-950 shadow-[0_18px_48px_rgba(45,212,191,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-white hover:shadow-[0_22px_60px_rgba(45,212,191,0.32)]"
                    : "min-h-14 rounded-2xl border border-white/12 bg-white/[0.055] px-5 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-teal-300/45 hover:bg-white/[0.09] hover:text-teal-100";

                  return (
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                      className={`${className} flex items-center justify-center gap-3`}
                    >
                      {action.isPrimary ? (
                        <>
                          <span className="contact-button__fill" aria-hidden="true" />
                          <span className="contact-button__ring" aria-hidden="true" />
                        </>
                      ) : null}
                      <span className="relative z-10 flex items-center gap-3">
                        <Icon />
                        {action.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <p className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center text-sm font-medium text-neutral-300">
                Based in Yangon · Open to remote and relocation roles
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
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
