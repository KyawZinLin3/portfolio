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
        const isExperienceSection = section.hasAttribute(
          "data-experience-section",
        );
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

        if (isExperienceSection) {
          const line = section.querySelector("[data-experience-line]");
          const dots = section.querySelectorAll("[data-experience-dot]");

          gsap.set(headingParts, {
            y: 42,
            opacity: 0,
            filter: "blur(10px)",
          });

          gsap.set(line, {
            scaleY: 0,
            transformOrigin: "top center",
          });

          gsap.set(dots, {
            scale: 0.2,
            opacity: 0,
          });

          gsap.set(items, {
            x: 34,
            y: 42,
            opacity: 0,
            scale: 0.97,
            filter: "blur(10px)",
          });

          gsap.set("[data-experience-logo]", {
            scale: 0.86,
            rotate: -3,
          });

          gsap.set("[data-experience-date], [data-experience-tag]", {
            y: 12,
            opacity: 0,
          });

          gsap
            .timeline({
              defaults: {
                ease: "none",
              },
              scrollTrigger: {
                trigger: section,
                start: "top 84%",
                end: "bottom 55%",
                scrub: 0.45,
                invalidateOnRefresh: true,
              },
            })
            .to(headingParts, {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.08,
              duration: 0.18,
            })
            .to(
              line,
              {
                scaleY: 1,
                duration: 0.82,
              },
              0.1,
            );

          gsap.utils.toArray<HTMLElement>(items).forEach((item) => {
            const wrapper = item.parentElement;
            const dot = wrapper?.querySelector("[data-experience-dot]");
            const logo = item.querySelector("[data-experience-logo]");
            const date = item.querySelector("[data-experience-date]");
            const tags = item.querySelectorAll("[data-experience-tag]");

            const cardTimeline = gsap.timeline({
                defaults: {
                  ease: "power3.out",
                },
                scrollTrigger: {
                  trigger: wrapper ?? item,
                  start: "top 82%",
                  end: "top 52%",
                  scrub: 0.5,
                  invalidateOnRefresh: true,
                },
              });

            if (dot) {
              cardTimeline.to(dot, {
                scale: 1,
                opacity: 1,
                duration: 0.24,
              });
            }

            cardTimeline.to(
                item,
                {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  duration: 0.68,
                },
                0,
              );

            if (logo) {
              cardTimeline.to(
                logo,
                {
                  scale: 1,
                  rotate: 0,
                  duration: 0.52,
                },
                0.12,
              );
            }

            if (date) {
              cardTimeline.to(
                date,
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.36,
                },
                0.2,
              );
            }

            if (tags.length > 0) {
              cardTimeline.to(
                tags,
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.02,
                  duration: 0.36,
                },
                0.28,
              );
            }
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
