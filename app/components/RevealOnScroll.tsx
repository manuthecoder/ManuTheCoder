"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds `is-visible` the first time the element scrolls into view, so an
 * animation plays when the reader actually reaches it rather than on load.
 * Server-rendered children are passed straight through.
 */
export function RevealOnScroll({
  className,
  threshold = 0.2,
  children,
}: {
  className?: string;
  threshold?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Without observer support, show the finished state immediately.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={[className, visible ? "is-visible" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
