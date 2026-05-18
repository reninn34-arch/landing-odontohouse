"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // High performance IntersectionObserver that runs off the main thread
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);

    // Single non-blocking fallback for navigation restoration or sudden layout shifts
    const timeoutId = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        setInView(true);
        observer.disconnect();
      }
    }, 250);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [threshold, pathname]); // Re-run when navigating back via Next.js router cache

  return { ref, inView };
}
