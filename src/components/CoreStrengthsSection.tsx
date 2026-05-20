"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StrengthCard } from "@/components/StrengthCard";
import { coreStrengths } from "@/data/portfolio";

export function CoreStrengthsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!sectionRef.current || prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.set("[data-strength-reveal]", {
        y: 46,
        opacity: 0,
      });

      gsap.set("[data-strength-card]", {
        y: 64,
        opacity: 0,
        scale: 0.94,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          end: "center 42%",
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to("[data-strength-eyebrow]", {
          y: 0,
          opacity: 1,
          duration: 0.18,
        })
        .to("[data-strength-title]", {
          y: 0,
          opacity: 1,
          duration: 0.28,
        }, 0.12)
        .to("[data-strength-description]", {
          y: 0,
          opacity: 1,
          duration: 0.26,
        }, 0.32)
        .to("[data-strength-card]", {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.46,
        }, 0.54);
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="core-strengths"
      data-cursor-label="core strengths."
      className="min-h-[72svh] border-t border-[var(--line)] bg-[#fbfbfb] py-24 text-black md:py-28"
    >
      <div className="page-shell">
        <div className="max-w-2xl">
          <p
            data-strength-reveal
            data-strength-eyebrow
            className="text-sm font-semibold uppercase text-[var(--accent)]"
          >
            Core Strengths
          </p>
          <h2
            data-strength-reveal
            data-strength-title
            className="mt-3 text-3xl font-semibold text-neutral-950 md:text-4xl"
          >
            Backend-focused full-stack development for real products.
          </h2>
          <p
            data-strength-reveal
            data-strength-description
            className="mt-4 leading-7 text-[var(--muted)]"
          >
            Practical experience across APIs, application UI, databases, and
            production support for business software.
          </p>
        </div>
        <div className="mt-10 grid gap-6 overflow-visible sm:grid-cols-2 lg:grid-cols-4">
          {coreStrengths.map((strength) => (
            <StrengthCard key={strength.title} strength={strength} />
          ))}
        </div>
      </div>
    </section>
  );
}
