import { ContactDrawingBoard } from "@/components/ContactDrawingBoard";

const contactLinks = {
  email: "mailto:kyawzinlin.dev@gmail.com",
  cv: "/Kyaw-Zin-Lin-Resume.pdf",
  github: "https://github.com/KyawZinLin3",
  linkedin: "https://www.linkedin.com/in/kyaw-zin-lin",
};

const contactActions = [
  {
    label: "Email",
    href: contactLinks.email,
    icon: MailIcon,
    isPrimary: true,
    cursorLabel: "kyawzinlin.dev@gmail.com",
  },
  {
    label: "Download resume",
    href: contactLinks.cv,
    icon: DownloadIcon,
    cursorLabel: "download kzl's resume",
  },
  {
    label: "GitHub",
    href: contactLinks.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: contactLinks.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      data-story-section
      data-cursor-label="say hello."
      className="contact-section relative overflow-hidden border-t border-neutral-200 bg-[#f5f5f7] py-20 text-neutral-950 md:py-24"
    >
      <div className="page-shell">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div data-story-item className="flex w-fit flex-col items-start gap-4">
            <div data-story-heading className="flex flex-col items-start gap-3">
              <h2 className="max-w-[360px] text-3xl font-semibold leading-tight tracking-normal text-neutral-950 sm:text-4xl">
                Let&apos;s Connect
              </h2>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/78 px-3 py-1.5 text-xs font-semibold text-neutral-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur">
                <span className="contact-status-dot h-2 w-2 rounded-full bg-emerald-500" />
                Available for opportunities
              </span>
            </div>

            <nav
              aria-label="Contact links"
              className="flex w-fit items-center justify-start rounded-3xl border border-neutral-200 bg-white/72 p-2 shadow-[0_18px_44px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur"
            >
              <div className="grid grid-cols-4 gap-2">
                {contactActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <a
                      key={action.label}
                      aria-label={action.label}
                      data-cursor-label={action.cursorLabel}
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                      className={`group flex size-12 items-center justify-center rounded-2xl border transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:size-14 ${
                        action.isPrimary
                          ? "border-neutral-950 bg-neutral-950 text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)]"
                          : "border-neutral-200 bg-[#f8f8fa] text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-white hover:text-neutral-950"
                      }`}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </nav>
          </div>

          <div data-story-item className="min-w-0">
            <ContactDrawingBoard />
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg className="size-5 sm:size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg className="size-5 sm:size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg className="size-5 sm:size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.4a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-4.8 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.8 9.8 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.7-2.3 4.5-4.6 4.8.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.4Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-5 sm:size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.8 9.4H3.7V20h3.1V9.4ZM5.2 4a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 5.2 4Zm15.1 10c0-3.2-1.7-4.8-4.1-4.8a3.5 3.5 0 0 0-3.2 1.8V9.4H10V20h3.1v-5.3c0-1.4.3-2.8 2-2.8s1.8 1.6 1.8 2.9V20h3.1v-6Z" />
    </svg>
  );
}
