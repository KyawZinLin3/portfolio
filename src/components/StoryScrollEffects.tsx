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
        const isCaseStudiesSection = section.hasAttribute(
          "data-case-studies-section",
        );
        const items = section.querySelectorAll("[data-story-item]");

        gsap.set(headingParts, {
          y: 38,
          opacity: 0,
          filter: "blur(10px)",
        });

        if (isCaseStudiesSection) {
          gsap
            .timeline({
              defaults: {
                ease: "none",
              },
              scrollTrigger: {
                trigger: heading ?? section,
                start: "top 88%",
                end: "bottom 64%",
                scrub: 0.35,
                invalidateOnRefresh: true,
              },
            })
            .to(headingParts, {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.08,
              duration: 0.34,
            });

          gsap.utils
            .toArray<HTMLElement>("[data-case-study-row]", section)
            .forEach((row) => {
              const copy = row.querySelector("[data-case-study-copy]");
              const card = row.querySelector("[data-case-study-card]");

              if (!copy || !card) {
                return;
              }

              gsap.set([copy, card], {
                y: 48,
                opacity: 0,
                filter: "blur(10px)",
              });

              gsap
                .timeline({
                  defaults: {
                    ease: "none",
                  },
                  scrollTrigger: {
                    trigger: row,
                    start: "top 80%",
                    end: "top 48%",
                    scrub: 0.55,
                    invalidateOnRefresh: true,
                  },
                })
                .to([copy, card], {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 0.5,
                });
            });

          return;
        }

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
