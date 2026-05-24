import Image from "next/image";

import type { Experience } from "@/data/portfolio";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const isInnoLogic = experience.company === "InnoLogic";
  const logoFrameClassName = isInnoLogic
    ? "border-[#072c50] bg-[#072c50] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_30px_rgba(7,44,80,0.18)]"
    : "border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-teal-50/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_30px_rgba(15,23,42,0.06)]";
  const logoImageClassName = "max-h-10 w-auto object-contain sm:max-h-11";

  return (
    <article
      data-story-item
      className="group relative rounded-[28px] border border-[var(--line)] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)] sm:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start">
          <div
            className={`flex h-16 w-28 shrink-0 items-center justify-center rounded-2xl border px-4 py-3 sm:h-[72px] sm:w-32 ${logoFrameClassName}`}
          >
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              className={logoImageClassName}
              priority={experience.company === "QHRM"}
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-neutral-950 md:text-2xl">
              {experience.role}
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{experience.location}</p>
          </div>
        </div>
        <span className="inline-flex w-fit rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] lg:shrink-0">
          {experience.date}
        </span>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-6 text-neutral-700 md:text-base md:leading-7">
        {experience.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {experience.techTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-semibold text-neutral-600 transition duration-300 group-hover:border-neutral-300 group-hover:bg-white group-hover:text-neutral-950"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
