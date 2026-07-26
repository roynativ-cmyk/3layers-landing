"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Minimal scroll reveal. Fires once per element, then stops observing.
 * Motion itself is defined in globals.css (.reveal / .is-in) so that
 * prefers-reduced-motion can neutralise it in one place.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Failsafe: if the observer never fires (odd viewports, headless
    // renderers, prerender snapshots), show the content anyway.
    const failsafe = setTimeout(() => setShown(true), 1200);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => {
      clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      // @ts-expect-error -- one ref for a small union of intrinsic tags
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
