"use client";

import React, { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function Reveal({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up",
  distance = 30
}: RevealProps) {
  const { ref, inView } = useInView(0.05); // Lower threshold for better reliability
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getTransform = () => {
    if (!inView) {
      const effectiveDistance = isMobile ? Math.min(distance, 20) : distance;

      switch (direction) {
        case "up": return `translate3d(0, ${effectiveDistance}px, 0)`;
        case "down": return `translate3d(0, -${effectiveDistance}px, 0)`;
        case "left": return `translate3d(${effectiveDistance}px, 0, 0)`;
        case "right": return `translate3d(-${effectiveDistance}px, 0, 0)`;
      }
    }
    return "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)`}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
}
