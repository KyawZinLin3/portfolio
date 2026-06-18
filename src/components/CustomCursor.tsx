"use client";

import { useEffect, useRef, useState } from "react";

const defaultCursorLabel = "start here.";

function getProximityCursorLabel(clientX: number, clientY: number) {
  const elements = document.querySelectorAll<HTMLElement>(
    "[data-cursor-proximity-label]",
  );
  let nearestLabel: string | undefined;
  let nearestDistance = Number.POSITIVE_INFINITY;

  elements.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    const deltaX = Math.max(bounds.left - clientX, 0, clientX - bounds.right);
    const deltaY = Math.max(bounds.top - clientY, 0, clientY - bounds.bottom);
    const distance = Math.hypot(deltaX, deltaY);
    const radius = Number(element.dataset.cursorProximityRadius) || 160;

    if (distance <= radius && distance < nearestDistance) {
      nearestDistance = distance;
      nearestLabel = element.dataset.cursorProximityLabel;
    }
  });

  return nearestLabel;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef(defaultCursorLabel);
  const typingTimeoutRef = useRef<number | null>(null);
  const isVisibleRef = useRef(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [typedLabel, setTypedLabel] = useState(defaultCursorLabel);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px) and (pointer: fine)");

    const updateEnabledState = () => {
      setIsEnabled(mediaQuery.matches);

      if (!mediaQuery.matches) {
        isVisibleRef.current = false;
        setIsVisible(false);
      }
    };

    updateEnabledState();
    mediaQuery.addEventListener("change", updateEnabledState);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabledState);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const typeLabel = (nextLabel: string) => {
      if (labelRef.current === nextLabel) {
        return;
      }

      labelRef.current = nextLabel;

      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
      }

      let characterIndex = 0;
      setTypedLabel("");

      const tick = () => {
        characterIndex += 1;
        setTypedLabel(nextLabel.slice(0, characterIndex));

        if (characterIndex < nextLabel.length) {
          typingTimeoutRef.current = window.setTimeout(tick, 34);
        }
      };

      typingTimeoutRef.current = window.setTimeout(tick, 80);
    };

    const moveCursor = (clientX: number, clientY: number) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      const target = document
        .elementFromPoint(clientX, clientY)
        ?.closest<HTMLElement>("[data-cursor-label]");

      const rippleButton = document
        .elementFromPoint(clientX, clientY)
        ?.closest<HTMLElement>(".nav-contact-button");

      if (rippleButton) {
        const bounds = rippleButton.getBoundingClientRect();
        rippleButton.style.setProperty("--contact-x", `${clientX - bounds.left}px`);
        rippleButton.style.setProperty("--contact-y", `${clientY - bounds.top}px`);
      }

      const proximityLabel = getProximityCursorLabel(clientX, clientY);

      typeLabel(
        proximityLabel || target?.dataset.cursorLabel || defaultCursorLabel,
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      moveCursor(event.clientX, event.clientY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      moveCursor(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );

      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isVisible ? "custom-cursor--visible" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="custom-cursor__arrow"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          className="custom-cursor__outline"
          d="M20.5056 10.7754C21.1225 10.5355 21.431 10.4155 21.5176 10.2459C21.5926 10.099 21.5903 9.92446 21.5115 9.77954C21.4205 9.61226 21.109 9.50044 20.486 9.2768L4.59629 3.5728C4.0866 3.38983 3.83175 3.29835 3.66514 3.35605C3.52029 3.40621 3.40645 3.52004 3.35629 3.6649C3.29859 3.8315 3.39008 4.08635 3.57304 4.59605L9.277 20.4858C9.50064 21.1088 9.61246 21.4203 9.77973 21.5113C9.92465 21.5901 10.0991 21.5924 10.2461 21.5174C10.4157 21.4308 10.5356 21.1223 10.7756 20.5054L13.3724 13.8278C13.4194 13.707 13.4429 13.6466 13.4792 13.5957C13.5114 13.5506 13.5508 13.5112 13.5959 13.479C13.6468 13.4427 13.7072 13.4192 13.828 13.3722L20.5056 10.7754Z"
        />
        <path
          className="custom-cursor__body"
          d="M20.5056 10.7754C21.1225 10.5355 21.431 10.4155 21.5176 10.2459C21.5926 10.099 21.5903 9.92446 21.5115 9.77954C21.4205 9.61226 21.109 9.50044 20.486 9.2768L4.59629 3.5728C4.0866 3.38983 3.83175 3.29835 3.66514 3.35605C3.52029 3.40621 3.40645 3.52004 3.35629 3.6649C3.29859 3.8315 3.39008 4.08635 3.57304 4.59605L9.277 20.4858C9.50064 21.1088 9.61246 21.4203 9.77973 21.5113C9.92465 21.5901 10.0991 21.5924 10.2461 21.5174C10.4157 21.4308 10.5356 21.1223 10.7756 20.5054L13.3724 13.8278C13.4194 13.707 13.4429 13.6466 13.4792 13.5957C13.5114 13.5506 13.5508 13.5112 13.5959 13.479C13.6468 13.4427 13.7072 13.4192 13.828 13.3722L20.5056 10.7754Z"
        />
      </svg>
      <span className="custom-cursor__label">
        {typedLabel}
        <span className="custom-cursor__caret" />
      </span>
    </div>
  );
}
