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
        const isCaseStudiesSection = section.hasAttribute(
          "data-case-studies-section",
        );
        const isSkillsSection = section.id === "skills";
        const headingParts = isSkillsSection
          ? (heading?.querySelectorAll<HTMLElement>("p, h2") ?? [])
          : (heading?.children ?? []);
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

        if (isSkillsSection) {
          gsap.set(items, {
            y: 44,
            opacity: 0,
            scale: 0.98,
            filter: "blur(8px)",
          });

          gsap.set("[data-skill-icon]", {
            scale: 0.82,
            rotate: -4,
          });

          gsap.set("[data-skill-chip]", {
            y: 14,
            opacity: 0,
          });

          gsap
            .timeline({
              defaults: {
                ease: "none",
              },
              scrollTrigger: {
                trigger: heading ?? section,
                start: "top 86%",
                end: "top 58%",
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            })
            .to(headingParts, {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.1,
              duration: 0.6,
            });

          gsap.utils.toArray<HTMLElement>(items).forEach((item) => {
            const icon = item.querySelector("[data-skill-icon]");
            const chips = item.querySelectorAll("[data-skill-chip]");

            gsap
              .timeline({
                defaults: {
                  ease: "power3.out",
                },
                scrollTrigger: {
                  trigger: item,
                  start: "top 82%",
                  end: "top 56%",
                  scrub: 0.45,
                  invalidateOnRefresh: true,
                },
              })
              .to(item, {
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.64,
              })
              .to(
                icon,
                {
                  scale: 1,
                  rotate: 0,
                  duration: 0.56,
                },
                0.08,
              )
              .to(
                chips,
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.025,
                  duration: 0.42,
                },
                0.18,
              );
          });

          return;
        }

        gsap.set(items, {
          y: 56,
          opacity: 0,
          scale: 0.96,
          filter: "blur(8px)",
        });

        gsap
          .timeline({
            defaults: {
              ease: "power3.out",
            },
            scrollTrigger: {
              trigger: section,
              start: "top 76%",
              once: true,
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
              filter: "blur(0px)",
              stagger: 0.12,
              duration: 0.68,
            },
            0.28,
          );
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
