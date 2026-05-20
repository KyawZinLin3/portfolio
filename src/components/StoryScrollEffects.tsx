"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function StoryScrollEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-story-section]").forEach((section) => {
        const heading = section.querySelector("[data-story-heading]");
        const headingParts = heading?.children ?? [];
        const items = section.querySelectorAll("[data-story-item]");

        gsap.set(headingParts, {
          y: 38,
          opacity: 0,
          filter: "blur(10px)",
        });

        gsap.set(items, {
          y: 56,
          opacity: 0,
          scale: 0.96,
        });

        gsap
          .timeline({
            defaults: {
              ease: "none",
            },
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              end: "center 42%",
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          })
          .to(headingParts, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.12,
            duration: 0.34,
          })
          .to(
            items,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              stagger: 0.12,
              duration: 0.52,
            },
            0.38,
          );
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
