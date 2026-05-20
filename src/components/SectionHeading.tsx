type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "light",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className="max-w-2xl">
      <p
        className={`text-sm font-semibold uppercase ${
          isDark ? "text-teal-300" : "text-[var(--accent)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold md:text-4xl ${
          isDark ? "text-white" : "text-neutral-950"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 leading-7 ${isDark ? "text-neutral-400" : "text-[var(--muted)]"}`}>
        {description}
      </p>
    </div>
  );
}
