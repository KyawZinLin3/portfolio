import type { ReactNode } from "react";
import type { CoreStrength, DecorativeStrengthIcon } from "@/data/portfolio";

const strengthIcons = {
  experience: (
    <path d="M6 20V7.5A3.5 3.5 0 0 1 9.5 4h5A3.5 3.5 0 0 1 18 7.5V20M8.5 9h7M8.5 13h7M10 17h4" />
  ),
  backend: (
    <>
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
      <path d="m14 4-4 16" />
    </>
  ),
  frontend: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </>
  ),
  databaseProduction: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      <path d="m17 16 2 2 3-4" />
    </>
  ),
} as const;

const decorativeIconPositions = [
  "right-4 top-5 translate-x-3 -translate-y-1 rotate-6 group-hover:right-[-18px] group-hover:top-[-18px] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[-8deg]",
  "right-12 bottom-8 translate-x-5 translate-y-3 rotate-[-10deg] group-hover:right-[-24px] group-hover:bottom-12 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-6",
  "left-5 bottom-7 -translate-x-3 translate-y-4 rotate-[8deg] group-hover:left-[-18px] group-hover:bottom-[-16px] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[-6deg]",
  "left-1/2 top-8 -translate-x-1/2 -translate-y-2 rotate-[-5deg] group-hover:top-[-22px] group-hover:translate-y-0 group-hover:rotate-3",
  "left-9 top-1/2 -translate-x-4 -translate-y-1/2 rotate-12 group-hover:left-[-20px] group-hover:translate-x-0 group-hover:rotate-[-10deg]",
] as const;

const decorativeIconThemes: Record<DecorativeStrengthIcon, string> = {
  activity: "border-lime-200 bg-lime-50 text-lime-700",
  api: "border-indigo-200 bg-indigo-50 text-indigo-700",
  azure: "border-sky-200 bg-sky-50 text-sky-700",
  briefcase: "border-amber-200 bg-amber-50 text-amber-700",
  bug: "border-rose-200 bg-rose-50 text-rose-700",
  calendar: "border-blue-200 bg-blue-50 text-blue-700",
  check: "border-emerald-200 bg-emerald-50 text-emerald-700",
  cloud: "border-cyan-200 bg-cyan-50 text-cyan-700",
  code: "border-violet-200 bg-violet-50 text-violet-700",
  components: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700",
  csharp: "border-violet-200 bg-violet-50 text-violet-700",
  database: "border-orange-200 bg-orange-50 text-orange-700",
  docker: "border-sky-200 bg-sky-50 text-sky-700",
  dotnet: "border-purple-200 bg-purple-50 text-purple-700",
  mssql: "border-red-200 bg-red-50 text-red-700",
  next: "border-neutral-200 bg-neutral-50 text-neutral-800",
  postgres: "border-blue-200 bg-blue-50 text-blue-700",
  react: "border-cyan-200 bg-cyan-50 text-cyan-700",
  server: "border-slate-200 bg-slate-50 text-slate-700",
  shield: "border-teal-200 bg-teal-50 text-teal-700",
  tailwind: "border-cyan-200 bg-cyan-50 text-cyan-700",
  terminal: "border-zinc-200 bg-zinc-50 text-zinc-800",
  typescript: "border-blue-200 bg-blue-50 text-blue-700",
  users: "border-pink-200 bg-pink-50 text-pink-700",
};

function renderDecorativeIcon(icon: DecorativeStrengthIcon) {
  const iconPaths: Partial<Record<DecorativeStrengthIcon, ReactNode>> = {
    briefcase: (
      <>
        <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
        <rect x="4" y="7" width="16" height="12" rx="2.5" />
        <path d="M4 12h16" />
      </>
    ),
    csharp: (
      <>
        <path d="M12 3.5 19.4 7.8v8.4L12 20.5l-7.4-4.3V7.8Z" />
        <path d="M13.8 9.4a3.7 3.7 0 1 0 0 5.2" />
        <path d="M16.2 10v4M18.3 10v4M15.4 11.2h3.7M15.4 12.8h3.7" />
      </>
    ),
    dotnet: (
      <>
        <circle cx="5.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
        <path d="M8 17V9l5.5 8V9" />
        <path d="M16 9h4M18 9v8" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2.5" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </>
    ),
    code: (
      <>
        <path d="m9 17-5-5 5-5" />
        <path d="m15 7 5 5-5 5" />
      </>
    ),
    bug: (
      <>
        <path d="M8 8.5A4 4 0 0 1 12 5a4 4 0 0 1 4 3.5V15a4 4 0 0 1-8 0Z" />
        <path d="M8 12H5M19 12h-3M7 18l2-2M17 18l-2-2M7 6l2 2M17 6l-2 2" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.8 12.3 2.1 2.1 4.4-5" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M3.5 19c.8-3.2 2.7-5 5.5-5s4.7 1.8 5.5 5" />
        <path d="M14.5 14.5c2.8.2 4.7 1.7 5.7 4.5" />
      </>
    ),
    server: (
      <>
        <rect x="5" y="5" width="14" height="6" rx="2" />
        <rect x="5" y="13" width="14" height="6" rx="2" />
        <path d="M8 8h.01M8 16h.01" />
      </>
    ),
    api: (
      <>
        <path d="M7 8h3.5a2 2 0 0 1 0 4H7V8Z" />
        <path d="M7 12v4" />
        <path d="M14 8v8" />
        <path d="M17 8v8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.5 19 6v5.2c0 4.2-2.8 7.2-7 9.3-4.2-2.1-7-5.1-7-9.3V6Z" />
        <path d="m9.2 12 1.9 1.9 3.8-4" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
      </>
    ),
    mssql: (
      <>
        <path d="M12 4c3.9 0 7 1.2 7 2.8S15.9 9.6 12 9.6 5 8.4 5 6.8 8.1 4 12 4Z" />
        <path d="M5 6.8v5.8c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6.8" />
        <path d="M5 12.6v4.6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-4.6" />
      </>
    ),
    react: (
      <>
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
    next: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M8.8 16V8l6.4 8V8" />
        <path d="m14.6 15.4 2.4 3" />
      </>
    ),
    typescript: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2.5" />
        <path d="M8 9h6M11 9v7" />
        <path d="M15.2 15.2c.5.5 1.1.8 1.9.8.9 0 1.5-.4 1.5-1.1 0-.8-.7-1-1.6-1.3-1-.3-1.8-.7-1.8-1.9 0-1.1.9-1.8 2.1-1.8.8 0 1.4.2 1.9.7" />
      </>
    ),
    tailwind: (
      <path d="M5 12.7c1.1-2.9 2.9-4.3 5.4-4.3 1.5 0 2.6.6 3.4 1.7.5.7 1.1 1.1 1.9 1.1 1 0 1.9-.6 2.7-1.9-1.1 2.9-2.9 4.3-5.4 4.3-1.5 0-2.6-.6-3.4-1.7-.5-.7-1.1-1.1-1.9-1.1-1 0-1.9.6-2.7 1.9Zm0 4c1.1-2.9 2.9-4.3 5.4-4.3 1.5 0 2.6.6 3.4 1.7.5.7 1.1 1.1 1.9 1.1 1 0 1.9-.6 2.7-1.9-1.1 2.9-2.9 4.3-5.4 4.3-1.5 0-2.6-.6-3.4-1.7-.5-.7-1.1-1.1-1.9-1.1-1 0-1.9.6-2.7 1.9Z" />
    ),
    postgres: (
      <>
        <path d="M8 17.5c-1.8-.9-3-2.9-3-5.3C5 7.7 8.1 5 12 5s7 2.7 7 7.2c0 2.5-1.2 4.4-3.1 5.3" />
        <path d="M9.1 14.2c.4 4.1 1.4 5.8 2.9 5.8s2.5-1.7 2.9-5.8" />
        <path d="M9 10.2h.01M15 10.2h.01M8.5 13.3c2.2 1 4.8 1 7 0" />
      </>
    ),
    components: (
      <>
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </>
    ),
    docker: (
      <>
        <path d="M5 13h14c-.5 3.7-2.8 6-7.1 6C8 19 5.7 17 5 13Z" />
        <path d="M8 9h3v3H8zM12 9h3v3h-3zM12 5h3v3h-3z" />
      </>
    ),
    cloud: (
      <path d="M7.5 18h9.2a4 4 0 0 0 .7-7.9A5.6 5.6 0 0 0 6.8 9a4.6 4.6 0 0 0 .7 9Z" />
    ),
    azure: (
      <>
        <path d="M10.2 4.5 5 17.8h5.4l7.8-13.3Z" />
        <path d="m13.4 12.2-3 5.6H19Z" />
      </>
    ),
    terminal: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2.5" />
        <path d="m8 10 2.4 2L8 14M12.5 15h3.5" />
      </>
    ),
    activity: (
      <path d="M4 12h4l2-6 4 12 2-6h4" />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[icon]}
    </svg>
  );
}

type StrengthCardProps = {
  strength: CoreStrength;
};

export function StrengthCard({ strength }: StrengthCardProps) {
  return (
    <div
      data-strength-card
      className="relative z-0 overflow-visible transition-[z-index] delay-300 hover:z-30 hover:delay-0"
    >
      <article className="group relative isolate h-full transform-gpu overflow-visible rounded-xl border border-[var(--line)] bg-white/85 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-[transform,border-color,background-color,box-shadow] duration-700 ease-[cubic-bezier(0.18,1,0.28,1)] hover:-translate-y-2 hover:scale-[1.025] hover:border-neutral-300 hover:bg-white hover:shadow-[0_24px_65px_rgba(15,23,42,0.11)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 overflow-visible"
        >
          {strength.decorativeIcons.slice(0, 5).map((icon, index) => (
            <span
              key={`${strength.title}-${icon}`}
              className={`absolute flex size-11 transform-gpu items-center justify-center rounded-xl border opacity-0 shadow-[0_16px_35px_rgba(15,23,42,0.10)] transition-all duration-700 ease-[cubic-bezier(0.18,1,0.28,1)] group-hover:scale-110 group-hover:opacity-100 max-lg:opacity-[0.16] ${decorativeIconThemes[icon]} ${decorativeIconPositions[index]}`}
              style={{
                transitionDelay: `${index * 55}ms`,
              }}
            >
              {renderDecorativeIcon(icon)}
            </span>
          ))}
        </div>

        <div className="relative z-30">
          <div className="flex size-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-950 text-teal-300">
            <svg
              aria-hidden="true"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {strengthIcons[strength.icon]}
            </svg>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-neutral-950">
            {strength.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            {strength.description}
          </p>
        </div>
      </article>
    </div>
  );
}
