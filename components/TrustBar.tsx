"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Users, Award, Clock } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Reveal } from "./Reveal";
import { Dictionary } from "@/lib/dictionary";

// ── Animated counter component ────────────────────────────────────────────────
function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

// ── Animated stat item ─────────────────────────────────────────────────────────
function AnimatedStat({
  icon,
  target,
  suffix,
  label,
  active,
  delay = 0,
}: {
  icon: React.ReactNode;
  target: number | string;
  suffix: string;
  label: string;
  active: boolean;
  delay?: number;
}) {
  const isNumeric = typeof target === "number";

  return (
    <div
      className="flex flex-col items-center text-center group"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <div className="text-[var(--color-brand-gold)] mb-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-[var(--color-brand-blue)] leading-tight tabular-nums">
          {isNumeric ? <AnimatedCounter target={target as number} /> : target}
          {isNumeric && suffix}
        </span>
        <span className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}

// ── TrustBar ──────────────────────────────────────────────────────────────────
export const TrustBar = ({ t }: { t: Dictionary }) => {
  const { ref, inView } = useInView(0.2);

  const stats = [
    {
      icon: <Users className="w-7 h-7" />,
      target: 500,
      suffix: "+",
      label: t.trustBar.usPatients,
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      target: 70,
      suffix: "%",
      label: t.trustBar.saveUpTo,
    },
    {
      icon: <Award className="w-7 h-7" />,
      target: 10,
      suffix: "+",
      label: t.trustBar.yearsExperience,
    },
    {
      icon: <Clock className="w-7 h-7" />,
      target: "3-5",
      suffix: "",
      label: t.trustBar.daysTreatment,
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-12 md:py-16 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {stats.map((stat, idx) => (
            <AnimatedStat
              key={idx}
              icon={stat.icon}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              active={inView}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Brands strip */}
        <Reveal
          className="mt-12 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 flex-wrap"
          delay={500}
        >
          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2 md:mb-0">
            {t.trustBar.materialsTitle}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {["Invisalign", "3M", "Straumann", "Dentsply"].map((brand: string) => (
              <span
                key={brand}
                className="text-sm md:text-base font-bold text-gray-400 hover:text-[var(--color-brand-gold)] transition-colors duration-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
