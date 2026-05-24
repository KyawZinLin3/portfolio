import type { CSSProperties, ReactElement, SVGProps } from "react";
import type { TechnicalSkillRow } from "@/data/portfolio";

type SkillRowProps = {
  row: TechnicalSkillRow;
};

type IconProps = SVGProps<SVGSVGElement>;

const iconClassName = "h-7 w-7 text-white";

const icons: Record<TechnicalSkillRow["icon"], (props: IconProps) => ReactElement> = {
  server: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01M8 17h.01M12 7h4M12 17h4" />
    </svg>
  ),
  layout: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2.5" />
      <path d="M4 10h16M9 10v9" />
    </svg>
  ),
  database: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  ),
  architecture: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M10 7h4M12 10v4" />
    </svg>
  ),
  terminal: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2.5" />
      <path d="m8 10 3 2.5L8 15M13 15h4" />
    </svg>
  ),
  spark: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3l1.8 5.1L19 10l-5.2 1.9L12 17l-1.8-5.1L5 10l5.2-1.9L12 3Z" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
    </svg>
  ),
};

export function SkillRow({ row }: SkillRowProps) {
  const Icon = icons[row.icon];
  const style = {
    "--skill-color": row.themeColor,
    "--skill-glow": row.glowColor,
  } as CSSProperties;

  return (
    <article
      data-story-item
      style={style}
      className="group grid gap-6 rounded-[28px] border border-[var(--line)] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--skill-color)] hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)] sm:p-6 lg:grid-cols-[minmax(280px,0.72fr)_1fr] lg:items-center"
    >
      <div className="flex gap-4 sm:items-center">
        <div
          data-skill-icon
          className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[var(--skill-color)] shadow-[0_14px_34px_var(--skill-glow)] transition duration-300 group-hover:shadow-[0_18px_48px_var(--skill-glow)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.72),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.24),transparent_48%,rgba(0,0,0,0.2))]" />
          <Icon className={`${iconClassName} relative z-10`} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-950">{row.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">{row.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 lg:justify-end">
        {row.skills.map((skill) => (
          <span
            key={skill}
            data-skill-chip
            className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] transition duration-300 group-hover:border-neutral-300 group-hover:bg-white group-hover:text-neutral-950"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
