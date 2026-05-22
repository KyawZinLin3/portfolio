"use client";

import type { CSSProperties, PointerEvent } from "react";
import type { CaseStudy } from "@/data/portfolio";
import { caseStudies } from "@/data/portfolio";

const themeClasses: Record<CaseStudy["theme"], string> = {
  violet:
    "from-[#f7d7ff] via-[#9f6cff] to-[#111827] text-violet-700 border-violet-200",
  emerald:
    "from-[#d8fff3] via-[#34d399] to-[#0f172a] text-emerald-700 border-emerald-200",
  amber:
    "from-[#fff2cc] via-[#f59e0b] to-[#171717] text-amber-700 border-amber-200",
  sky: "from-[#d9f4ff] via-[#38bdf8] to-[#111827] text-sky-700 border-sky-200",
};

function handlePointerMove(event: PointerEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const rotateY = ((x / bounds.width) - 0.5) * 14;
  const rotateX = ((0.5 - y / bounds.height) * 12);

  event.currentTarget.style.setProperty("--case-x", `${x}px`);
  event.currentTarget.style.setProperty("--case-y", `${y}px`);
  event.currentTarget.style.setProperty("--case-rotate-x", `${rotateX}deg`);
  event.currentTarget.style.setProperty("--case-rotate-y", `${rotateY}deg`);
}

function handlePointerLeave(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--case-x", "50%");
  event.currentTarget.style.setProperty("--case-y", "50%");
  event.currentTarget.style.setProperty("--case-rotate-x", "0deg");
  event.currentTarget.style.setProperty("--case-rotate-y", "0deg");
}

function CaseStudyMockup({ study }: { study: CaseStudy }) {
  return (
    <article
      data-cursor-label="explore."
      className={`case-study-card group relative isolate aspect-[1.28] overflow-visible rounded-[24px] border bg-gradient-to-br p-4 shadow-[0_28px_80px_rgba(15,23,42,0.10)] ${themeClasses[study.theme]}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          "--case-x": "50%",
          "--case-y": "50%",
          "--case-rotate-x": "0deg",
          "--case-rotate-y": "0deg",
        } as CSSProperties
      }
    >
      <div className="case-study-glow absolute inset-0 rounded-[24px]" />
      <div className="case-study-back absolute inset-5 rounded-[20px] bg-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-sm" />
      <div className="case-study-screen relative z-10 flex h-full flex-col rounded-[18px] border border-white/28 bg-[#111111] p-3 text-white shadow-[0_22px_48px_rgba(15,23,42,0.35)]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-rose-300" />
            <span className="size-2 rounded-full bg-amber-300" />
            <span className="size-2 rounded-full bg-emerald-300" />
          </div>
          <div className="h-2 w-28 rounded-full bg-white/12" />
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[0.72fr_1.28fr] gap-3 pt-3">
          <aside className="space-y-2 rounded-xl bg-white/[0.04] p-2">
            {["Overview", "Pipeline", "Reports", "Settings"].map((item, index) => (
              <div
                key={item}
                className={`rounded-lg px-2 py-2 text-[10px] font-semibold ${
                  index === 1
                    ? "bg-white text-neutral-950"
                    : "bg-white/[0.06] text-white/58"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="flex min-w-0 flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-white/[0.06] p-3"
                >
                  <p className="text-[9px] font-semibold uppercase text-white/42">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-lg font-bold">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="grid flex-1 grid-cols-3 items-end gap-2 rounded-xl border border-white/10 bg-white/[0.05] p-3">
              {[48, 76, 58, 88, 66, 96].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="rounded-t-md bg-white"
                  style={{ height: `${height}%`, opacity: 0.28 + index * 0.08 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="case-study-phone absolute bottom-5 right-7 z-20 hidden h-[62%] w-[24%] rounded-[22px] border border-white/25 bg-[#18181b] p-2 shadow-[0_22px_42px_rgba(15,23,42,0.32)] sm:block">
        <div className="mx-auto mb-3 h-1.5 w-8 rounded-full bg-white/18" />
        <div className="space-y-2">
          <div className="h-14 rounded-xl bg-white/12" />
          <div className="h-2 rounded-full bg-white/22" />
          <div className="h-2 w-2/3 rounded-full bg-white/12" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <span className="h-8 rounded-lg bg-white/14" />
            <span className="h-8 rounded-lg bg-white/14" />
          </div>
        </div>
      </div>
    </article>
  );
}

function CaseStudyRow({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <div
      data-case-study-row
      data-story-item
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        isReversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div data-case-study-copy className="max-w-xl">
        <p className={`text-xs font-bold uppercase tracking-[0.22em] ${themeClasses[study.theme].split(" ").at(-2)}`}>
          {study.eyebrow}
        </p>
        <h3 className="mt-5 text-3xl font-semibold leading-tight text-neutral-950 md:text-4xl">
          {study.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
          {study.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-black"
        >
          View case study
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div data-case-study-card>
        <CaseStudyMockup study={study} />
      </div>
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      data-case-studies-section
      data-story-section
      data-cursor-label="case studies."
      className="case-studies-bg border-t border-[var(--line)] bg-[#fbfbfb] py-24 text-black md:py-28"
    >
      <div className="page-shell">
        <div data-story-heading className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-[var(--accent)]">
            Case Studies
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-neutral-950 md:text-4xl">
            Four product stories shaped around clarity, speed, and polish.
          </h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            Dummy projects for now, structured like real case studies with
            focused outcomes, product context, and interactive previews.
          </p>
        </div>

        <div className="mt-20 space-y-24 md:mt-24 md:space-y-28">
          {caseStudies.map((study, index) => (
            <CaseStudyRow key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
