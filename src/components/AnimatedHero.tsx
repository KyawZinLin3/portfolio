"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const navItems = ["Home", "About", "Explorations", "Work", "Contact"];
const heroPhrases = [
  "fast web apps.",
  "SaaS platforms.",
  "product interfaces.",
  "modern dashboards.",
] as const;
const avatarMessages = [
  {
    accent: "Mingalarbar 👋",
    body: "Nice to meet you.",
    side: "right",
  },
  {
    accent: "I build useful things.",
    body: "Mostly web apps, SaaS, and clean product interfaces.",
    side: "left",
  },
  {
    accent: "Cursor detected.",
    body: "The avatar is following along.",
    side: "right",
  },
  {
    accent: "Thanks for stopping by.",
    body: "Have a look around the work below.",
    side: "left",
  },
] as const;

export function AnimatedHero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const avatarArtRef = useRef<SVGGElement | null>(null);
  const leftEyeRef = useRef<SVGCircleElement | null>(null);
  const rightEyeRef = useRef<SVGCircleElement | null>(null);
  const [messageIndex, setMessageIndex] = useState(-1);
  const [heroPhraseIndex, setHeroPhraseIndex] = useState(0);

  const currentMessage =
    avatarMessages[messageIndex < 0 ? 0 : messageIndex % avatarMessages.length];
  const messagePositionClass =
    currentMessage.side === "left"
      ? "md:left-auto md:right-[calc(100%+18px)] md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:group-hover/avatar:-translate-y-1/2"
      : "md:left-[calc(100%+18px)] md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:group-hover/avatar:-translate-y-1/2";
  const messageArrowClass =
    currentMessage.side === "left"
      ? "md:left-auto md:right-[-6px] md:top-1/2 md:-translate-x-0 md:-translate-y-1/2"
      : "md:left-[-6px] md:top-1/2 md:-translate-x-0 md:-translate-y-1/2";

  const handleNavContactPointer = (
    event: React.PointerEvent<HTMLAnchorElement>,
  ) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--contact-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--contact-y",
      `${event.clientY - bounds.top}px`,
    );
  };

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.set(avatarArtRef.current, {
        transformOrigin: "540px 560px",
      });

      gsap.from("[data-hero-reveal]", {
        y: 28,
        opacity: 0,
        duration: 1.15,
        ease: "power3.out",
        stagger: 0.16,
      });
    }, rootRef);

    const moveAvatarX = gsap.quickTo(avatarArtRef.current, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const moveAvatarY = gsap.quickTo(avatarArtRef.current, "y", {
      duration: 0.35,
      ease: "power3.out",
    });
    const rotateAvatar = gsap.quickTo(avatarArtRef.current, "rotate", {
      duration: 0.35,
      ease: "power3.out",
    });
    const moveLeftEyeX = gsap.quickTo(leftEyeRef.current, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const moveLeftEyeY = gsap.quickTo(leftEyeRef.current, "y", {
      duration: 0.2,
      ease: "power3.out",
    });
    const moveRightEyeX = gsap.quickTo(rightEyeRef.current, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const moveRightEyeY = gsap.quickTo(rightEyeRef.current, "y", {
      duration: 0.2,
      ease: "power3.out",
    });
    const navScale = gsap.quickTo(navRef.current, "scale", {
      duration: 0.62,
      ease: "power3.out",
    });
    const navY = gsap.quickTo(navRef.current, "y", {
      duration: 0.62,
      ease: "power3.out",
    });
    const navOpacity = gsap.quickTo(navRef.current, "opacity", {
      duration: 0.5,
      ease: "power2.out",
    });
    let navFrame = 0;

    const handleScroll = () => {
      if (navFrame) {
        return;
      }

      navFrame = window.requestAnimationFrame(() => {
        navFrame = 0;

        if (!navRef.current) {
          return;
        }

        const start = 80;
        const end = 640;
        const progress = gsap.utils.clamp(
          0,
          1,
          (window.scrollY - start) / (end - start),
        );

        navScale(1 - progress * 0.22);
        navY(progress * 22);
        navOpacity(1 - progress);
        navRef.current.style.filter = `blur(${progress * 8}px)`;
        navRef.current.style.pointerEvents = progress > 0.82 ? "none" : "auto";
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!avatarRef.current) {
        return;
      }

      const bounds = avatarRef.current.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const activeRadius = 320;

      if (distance > activeRadius) {
        moveAvatarX(0);
        moveAvatarY(0);
        rotateAvatar(0);
        moveLeftEyeX(0);
        moveLeftEyeY(0);
        moveRightEyeX(0);
        moveRightEyeY(0);
        return;
      }

      const strength = 1 - distance / activeRadius;
      const normalizedX = deltaX / activeRadius;
      const normalizedY = deltaY / activeRadius;

      moveAvatarX(normalizedX * 24 * strength);
      moveAvatarY(normalizedY * 18 * strength);
      rotateAvatar(normalizedX * 8 * strength);
      moveLeftEyeX(normalizedX * 42);
      moveLeftEyeY(normalizedY * 28);
      moveRightEyeX(normalizedX * 42);
      moveRightEyeY(normalizedY * 28);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      if (navFrame) {
        window.cancelAnimationFrame(navFrame);
      }
      context.revert();
    };
  }, []);

  useEffect(() => {
    const phraseTimer = window.setInterval(() => {
      setHeroPhraseIndex((current) => (current + 1) % heroPhrases.length);
    }, 4200);

    return () => {
      window.clearInterval(phraseTimer);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      data-cursor-label="start here."
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#fbfbfb] px-5 py-7 text-center text-black md:py-8"
    >
      <a
        data-hero-reveal
        href="/resume.pdf"
        className="resume-shine absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-[#191919] px-5 py-3 font-mono text-sm uppercase tracking-normal text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_5px_18px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 md:right-[10vw] md:top-8 md:px-6 md:py-3.5 md:text-base"
      >
        Get Resume
      </a>

      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center justify-center pt-8">
        <div
          ref={avatarRef}
          data-hero-reveal
          className="group/avatar relative mx-auto flex h-[112px] w-[112px] items-center justify-center rounded-full bg-[#f3f3f3] md:h-[132px] md:w-[132px]"
          aria-label="Interactive avatar looking toward your cursor"
          onPointerEnter={() => {
            setMessageIndex((current) => (current + 1) % avatarMessages.length);
          }}
        >
          <div className="avatar-crown pointer-events-none absolute left-[90%] top-[-50%] z-20 h-[64px] w-[96px] -translate-x-1/2 md:h-[72px] md:w-[108px]">
            <Image
              src="/crown-svg.svg"
              alt=""
              width={108}
              height={72}
              className="avatar-crown__image h-full w-full object-contain"
            />
          </div>

          <div
            key={messageIndex}
            className={`pointer-events-none absolute left-1/2 top-[calc(100%+14px)] z-10 w-max max-w-[250px] -translate-x-1/2 translate-y-2 scale-95 rounded-2xl bg-[#111111] px-4 py-3 text-left text-sm font-semibold leading-5 text-white opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition duration-300 ease-out group-hover/avatar:translate-y-0 group-hover/avatar:scale-100 group-hover/avatar:opacity-100 ${messagePositionClass}`}
          >
            <span className="block text-[#99f6e4]">{currentMessage.accent}</span>
            <span className="mt-0.5 block text-white/85">
              {currentMessage.body}
            </span>
            <span
              className={`absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rotate-45 bg-[#111111] ${messageArrowClass}`}
            />
          </div>

          <svg
            viewBox="210 200 610 720"
            className="h-[102px] w-[102px] overflow-visible md:h-[118px] md:w-[118px]"
            role="img"
            aria-hidden="true"
          >
            <g ref={avatarArtRef}>
              <path
                d="M532 379c132.548 0 240 107.452 240 240 0 132.548-7.452 280-180 280-129.285 0-233.252-82.78-277.261-180.046A81.49 81.49 0 0 1 312 719c-44.183 0-80-35.817-80-80 0-39.865 29.159-72.92 67.312-78.999C325.599 455.979 419.81 379 532 379Z"
                fill="#ffffff"
                stroke="#050505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              />
              <path
                d="M295.859 624.545l8.282 30.91"
                fill="none"
                stroke="#050505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              />
              <path
                d="M631 694.381c29.333-6.921 47-17.048 53-30.381 9-20-46.967-57.607-23.839-85"
                fill="none"
                stroke="#050505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M549 759c26.13 14.667 54.13 22 84 22s49.87-7.333 60-22"
                fill="none"
                stroke="#050505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M662.391 482.335c3-5 60-23 80-20s49 29 49 29-27-11-52-11-60 18-60 18-20-11-17-16Z"
                fill="#050505"
                stroke="#050505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <path
                d="M615 482.335c-3-5-60-23-80-20s-49 29-49 29 27-11 52-11 60 18 60 18 20-11 17-16Z"
                fill="#050505"
                stroke="#050505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <path
                d="M611.547 230.463C698.094 236.925 725 287 724.589 333.555 748.639 343.003 766 370.026 766 401.887c0 17.655-17.667 40.026-53 67.113-54.352 2.69-98.224 1.09-131.617-4.798C514.014 452.323 462.039 412.237 441 412c-21.039-.237-38.518 4.589-57 42-18.482 37.411 1.823 66.524 0 97-7.409 37.904-13.245 71.451-17.507 100.64l-.493 3.36-37.883-90.175h-40.971C265.13 517.303 245 413 269 379s41-28 77-19c8.615-44.616 47.524-68.237 84.725-89.689L433 269c33-19 92-45 178.547-38.537Z"
                fill="#050505"
                stroke="#050505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              />
              <path
                d="M518 541c16-13.333 32-20 48-20s32 6.667 48 20M664 541c16-13.333 32-20 48-20s32 6.667 48 20"
                fill="none"
                stroke="#050505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              />
              <g fill="#050505">
                <circle ref={leftEyeRef} cx="566.229" cy="538.576" r="20" />
                <circle ref={rightEyeRef} cx="711.771" cy="538.576" r="20" />
              </g>
            </g>
          </svg>
        </div>

        <div className="mx-auto mt-7 max-w-[960px] md:mt-8">
          <h1
            data-hero-reveal
            className="hero-headline text-[clamp(2.2rem,4vw,4.15rem)] font-medium leading-[1.2] tracking-normal text-black"
          >
            <span className="block">Hey, I&apos;m Kyaw Zin Lin,</span>
            <span className="block">
              a{" "}
              <span className="hero-headline__role">
                full-stack developer
              </span>{" "}
              crafting
            </span>
            <span className="hero-headline__phrase-wrap">
              <span key={heroPhraseIndex} className="hero-headline__phrase">
                {heroPhrases[heroPhraseIndex]}
              </span>
            </span>
          </h1>
        </div>

        <nav
          ref={navRef}
          data-hero-reveal
          className="mx-auto mt-8 flex w-fit max-w-full origin-center transform-gpu items-center gap-3 rounded-full bg-[#151515] p-2 text-left shadow-[0_28px_70px_rgba(0,0,0,0.2)] will-change-transform md:mt-9 md:p-2.5"
          aria-label="Primary navigation"
        >
          <div className="h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_20%,#ff8a39,#181818_58%)] md:h-[52px] md:w-[52px]">
            <div className="h-full w-full bg-[linear-gradient(135deg,transparent_36%,rgba(255,255,255,0.16)_36%,transparent_52%)]" />
          </div>
          <span className="hidden h-7 w-px bg-white/15 sm:block" />
          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                onPointerEnter={
                  item === "Contact" ? handleNavContactPointer : undefined
                }
                onPointerMove={
                  item === "Contact" ? handleNavContactPointer : undefined
                }
                className={`whitespace-nowrap rounded-full px-3.5 py-3 text-sm font-semibold transition md:px-4 md:py-3.5 md:text-[15px] ${
                  item === "Contact"
                    ? "nav-contact-button min-w-[108px] border border-white/10 bg-[#3f3f3f] text-center text-white md:min-w-[126px]"
                    : "text-[#a7a7a7] hover:bg-white/5 hover:text-white"
                }`}
              >
                {item === "Contact" ? (
                  <>
                    <span className="nav-contact-button__fill" aria-hidden="true" />
                    <span className="nav-contact-button__ring" aria-hidden="true" />
                    <span className="nav-contact-button__text">{item}</span>
                  </>
                ) : (
                  item
                )}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
