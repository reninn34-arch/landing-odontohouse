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
    
    // Check initial position (element is visible or above the viewport)
    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        setInView(true);
        return true;
      }
      return false;
    };

    if (checkVisibility()) return;

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

    // Fallback for sudden scroll jumps (bfcache/navigation)
    const handleScroll = () => {
      if (checkVisibility()) {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Fallback for layout shifts / scroll restoration without events
    const timeoutId = setTimeout(() => {
      if (checkVisibility()) {
        observer.disconnect();
      }
    }, 150);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold, pathname]); // Re-run when navigating back via Next.js router cache

  return { ref, inView };
}
