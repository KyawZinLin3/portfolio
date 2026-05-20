"use client";

import { useEffect, useRef } from "react";

const MAX_WHEEL_STEP = 120;
const TRACKPAD_DELTA_LIMIT = 80;

export function SmoothScroll() {
  const lastWheelTimeRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const normalizeWheelDelta = (event: WheelEvent) => {
      if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
        return event.deltaY * 16;
      }

      if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
        return event.deltaY * window.innerHeight;
      }

      return event.deltaY;
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) {
        return;
      }

      const delta = normalizeWheelDelta(event);
      const absDelta = Math.abs(delta);
      const now = performance.now();
      const isLikelyTrackpad =
        absDelta < TRACKPAD_DELTA_LIMIT || now - lastWheelTimeRef.current < 22;

      lastWheelTimeRef.current = now;

      if (isLikelyTrackpad) {
        return;
      }

      event.preventDefault();
      window.scrollBy({
        top: Math.sign(delta) * Math.min(absDelta, MAX_WHEEL_STEP),
        behavior: "auto",
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== "PageDown" &&
        event.key !== "PageUp" &&
        event.key !== " " &&
        event.key !== "ArrowDown" &&
        event.key !== "ArrowUp"
      ) {
        return;
      }

      lastWheelTimeRef.current = 0;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
