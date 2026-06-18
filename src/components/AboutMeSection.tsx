"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
  type RefObject,
} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FloatingCardItem =
  | {
      label: string;
      className: string;
      tiltClassName: string;
      iconClassName: string;
      icon: ReactNode;
    }
  | {
      label: string;
      className: string;
      tiltClassName: string;
      imageClassName: string;
      image: string;
    };

type DragRect = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

const emptyRect: DragRect = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

const aboutText =
  "I'm Kyaw Zin Lin, a full-stack developer from Yangon. I build production-ready APIs and SaaS backends.I enjoy turning complex business workflows into simple, reliable systems. When I'm not coding, I lift weights, eat Shan noodles, play chess and watch Arsenal matches. Arsenal fan through and through.";

function splitTextIntoRenderedLines(element: HTMLElement, text: string) {
  const words = text.trim().split(/\s+/);
  const computedStyle = window.getComputedStyle(element);
  const measurer = document.createElement("div");

  measurer.style.position = "fixed";
  measurer.style.left = "-9999px";
  measurer.style.top = "0";
  measurer.style.width = `${element.clientWidth}px`;
  measurer.style.visibility = "hidden";
  measurer.style.pointerEvents = "none";
  measurer.style.fontFamily = computedStyle.fontFamily;
  measurer.style.fontSize = computedStyle.fontSize;
  measurer.style.fontWeight = computedStyle.fontWeight;
  measurer.style.lineHeight = computedStyle.lineHeight;
  measurer.style.letterSpacing = computedStyle.letterSpacing;
  measurer.style.textTransform = computedStyle.textTransform;
  measurer.style.whiteSpace = "normal";

  words.forEach((word, index) => {
    const span = document.createElement("span");

    span.textContent = index === words.length - 1 ? word : `${word} `;
    measurer.appendChild(span);
  });

  document.body.appendChild(measurer);

  const lines: string[] = [];
  let currentTop: number | null = null;
  let currentLine = "";

  Array.from(measurer.children).forEach((child) => {
    const span = child as HTMLSpanElement;

    if (currentTop === null || Math.abs(span.offsetTop - currentTop) > 2) {
      if (currentLine) {
        lines.push(currentLine.trim());
      }

      currentTop = span.offsetTop;
      currentLine = span.textContent ?? "";
      return;
    }

    currentLine += span.textContent ?? "";
  });

  if (currentLine) {
    lines.push(currentLine.trim());
  }

  measurer.remove();

  return lines.length > 0 ? lines : [text];
}

function DraggableLayer({
  children,
  constraintRef,
  className = "",
}: {
  children: ReactNode;
  constraintRef: RefObject<HTMLElement | null>;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const dragStartRef = useRef({
    pointerX: 0,
    pointerY: 0,
    offsetX: 0,
    offsetY: 0,
    cardRect: emptyRect,
    sectionRect: emptyRect,
  });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current || !constraintRef.current || event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);

    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      offsetX: offset.x,
      offsetY: offset.y,
      cardRect: cardRef.current.getBoundingClientRect(),
      sectionRect: constraintRef.current.getBoundingClientRect(),
    };

    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    event.preventDefault();

    const { pointerX, pointerY, offsetX, offsetY, cardRect, sectionRect } =
      dragStartRef.current;
    const rawDeltaX = event.clientX - pointerX;
    const rawDeltaY = event.clientY - pointerY;
    const minDeltaX = sectionRect.left - cardRect.left;
    const maxDeltaX = sectionRect.right - cardRect.right;
    const minDeltaY = sectionRect.top - cardRect.top;
    const maxDeltaY = sectionRect.bottom - cardRect.bottom;
    const deltaX = Math.max(minDeltaX, Math.min(maxDeltaX, rawDeltaX));
    const deltaY = Math.max(minDeltaY, Math.min(maxDeltaY, rawDeltaY));

    setOffset({
      x: offsetX + deltaX,
      y: offsetY + deltaY,
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    event.currentTarget.releasePointerCapture(event.pointerId);
    setIsDragging(false);
  };

  const lift = isHovering || isDragging ? -14 : 0;

  return (
    <div
      ref={cardRef}
      className={`about-draggable-card relative ${
        isDragging ? "z-50" : "z-30"
      } ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y + lift}px, 0)`,
        transitionDuration: isDragging ? "0ms" : undefined,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
    >
      {children}
    </div>
  );
}

const floatingCards: FloatingCardItem[] = [
  {
    label: "Bicep",
    className: "right-0 top-0",
    tiltClassName: "-rotate-[12deg]",
    imageClassName: "h-[5.4rem] w-[5.4rem] translate-y-1 md:h-[6.4rem] md:w-[6.4rem]",
    image: "/bicep-flex.svg",
  },
  {
    label: "Myanmar",
    className: "left-4 top-2 md:left-0 md:top-8",
    tiltClassName: "rotate-[7deg]",
    imageClassName: "h-[4.6rem] w-[6.2rem] md:h-[6.5rem] md:w-[7.0rem]",
    image: "/mm-flag.svg",
  },
  {
    label: "Shan noodles",
    className: "bottom-4 left-0",
    tiltClassName: "rotate-[9deg]",
    imageClassName: "h-[5.8rem] w-[5.8rem] md:h-[6.8rem] md:w-[6.8rem]",
    image: "/noodles-shan.svg",
  },
  {
    label: "Arsenal",
    className: "bottom-0 right-0",
    tiltClassName: "rotate-[-7deg]",
    imageClassName: "h-[7.4rem] w-[7.4rem] md:h-[8.6rem] md:w-[8.6rem]",
    image: "/arsenal-logo.svg",
  },
];

function FloatingCard({
  card,
  constraintRef,
}: {
  card: (typeof floatingCards)[number];
  constraintRef: RefObject<HTMLElement | null>;
}) {
  return (
    <div
      data-about-float
      aria-hidden="true"
      className={`absolute z-30 ${card.className}`}
    >
      <DraggableLayer constraintRef={constraintRef}>
        <div
          className={`flex h-32 w-32 select-none items-center justify-center rounded-[22px] border border-neutral-200 bg-white/90 text-neutral-950 shadow-[0_22px_64px_rgba(15,23,42,0.09)] transition-[box-shadow,border-color,background-color] duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-[0_26px_70px_rgba(15,23,42,0.14)] md:h-36 md:w-36 ${card.tiltClassName}`}
        >
          {"image" in card ? (
            <Image
              src={card.image}
              alt=""
              width={144}
              height={144}
              draggable={false}
              className={`block object-contain ${
                card.imageClassName ?? "size-20 md:size-24"
              }`}
            />
          ) : (
            <svg
              className={`${card.iconClassName ?? "size-14 md:size-16"} text-teal-600`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            >
              {card.icon}
            </svg>
          )}
        </div>
      </DraggableLayer>
    </div>
  );
}

function AboutPhotoCard({
  constraintRef,
}: {
  constraintRef: RefObject<HTMLElement | null>;
}) {
  return (
    <div
      data-about-photo
      className="absolute left-1/2 top-1/2 z-30 h-48 w-40 -translate-x-1/2 -translate-y-1/2 rotate-3 md:h-52 md:w-44 lg:h-56 lg:w-48"
    >
      <DraggableLayer constraintRef={constraintRef} className="h-full w-full">
        <div className="h-full w-full rounded-[26px] border border-neutral-200 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition-[box-shadow,border-color,background-color] duration-300 hover:border-neutral-300 hover:shadow-[0_28px_78px_rgba(15,23,42,0.16)]">
          <div className="relative h-full w-full select-none overflow-hidden rounded-[20px] bg-neutral-100">
            <Image
              src="/about-profile.jpeg"
              alt="Kyaw Zin Lin"
              fill
              sizes="(min-width: 1024px) 192px, (min-width: 768px) 176px, 160px"
              draggable={false}
              className="object-cover"
            />
          </div>
        </div>
      </DraggableLayer>
    </div>
  );
}

export function AboutMeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [aboutLines, setAboutLines] = useState([aboutText]);

  useLayoutEffect(() => {
    if (!headingRef.current) {
      return;
    }

    const updateLines = () => {
      if (!headingRef.current) {
        return;
      }

      const nextLines = splitTextIntoRenderedLines(
        headingRef.current,
        aboutText,
      );

      setAboutLines((currentLines) => {
        if (
          currentLines.length === nextLines.length &&
          currentLines.every((line, index) => line === nextLines[index])
        ) {
          return currentLines;
        }

        return nextLines;
      });
    };

    updateLines();

    const observer = new ResizeObserver(updateLines);

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!sectionRef.current || prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.set("[data-about-reveal]", {
        y: 42,
        opacity: 0.12,
        filter: "blur(12px)",
      });

      gsap.set("[data-about-line]", {
        y: 32,
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set("[data-about-photo]", {
        y: 72,
        opacity: 0,
        rotate: -4,
        scale: 0.88,
      });

      gsap.set("[data-about-float]", {
        y: 58,
        opacity: 0,
        rotate: 4,
        scale: 0.9,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          end: "center 40%",
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to("[data-about-eyebrow]", {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.18,
        })
        .to("[data-about-line]", {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.08,
          duration: 0.34,
        }, 0.12)
        .to(
          "[data-about-photo]",
          {
            y: 0,
            opacity: 1,
            rotate: 3,
            scale: 1,
            duration: 0.3,
          },
          0.42,
        )
        .to(
          "[data-about-float]",
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.38,
          },
          0.58,
        );
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, [aboutLines.length]);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-cursor-label="about me."
      className="relative min-h-[72svh] overflow-hidden border-t border-[var(--line)] bg-[#fbfbfb] py-24 text-black md:py-28"
    >
      <div className="page-shell grid min-h-[500px] items-center gap-12 md:min-h-[520px] md:grid-cols-[1.14fr_0.86fr] lg:gap-16">
        <div className="relative z-10 max-w-2xl">
          <p
            data-about-reveal
            data-about-eyebrow
            className="text-sm font-semibold uppercase text-[var(--accent)]"
          >
            About Me
          </p>
          <h2
            ref={headingRef}
            data-about-title
            className="mt-4 text-3xl font-normal leading-[1.48] text-neutral-950 md:text-4xl md:leading-[1.46]"
          >
            {aboutLines.map((line, index) => (
              <span
                key={`${line}-${index}`}
                data-about-line
                className="block"
              >
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="relative min-h-[320px] md:min-h-[420px]">
          {floatingCards.map((card) => (
            <FloatingCard
              key={card.label}
              card={card}
              constraintRef={sectionRef}
            />
          ))}

          <AboutPhotoCard constraintRef={sectionRef} />
        </div>
      </div>
    </section>
  );
}
