"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Users, Award, Clock } from "lucide-react";
import { useInView } from "@/hooks/useInView";

// ── Animated counter hook ──────────────────────────────────────────────────────
function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

// ── Animated stat item ─────────────────────────────────────────────────────────
function AnimatedStat({
  icon,
  target,
  suffix,
  label,
  duration = 1800,
  active,
  delay = 0,
}: {
  icon: React.ReactNode;
  target: number | string; // string = non-numeric like "3-5"
  suffix: string;
  label: string;
  duration?: number;
  active: boolean;
  delay?: number;
}) {
  const isNumeric = typeof target === "number";
  const count = useCounter(isNumeric ? (target as number) : 0, duration, active && isNumeric);

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
      <span className="text-4xl font-extrabold text-[var(--color-brand-blue)] leading-tight tabular-nums">
        {isNumeric ? `${count}${suffix}` : target}
      </span>
      <span className="text-sm text-gray-500 font-medium mt-1">{label}</span>
    </div>
  );
}

// ── TrustBar ──────────────────────────────────────────────────────────────────
export const TrustBar = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView(0.2);

  const stats = [
    {
      icon: <Users className="w-7 h-7" />,
      target: 500,
      suffix: "+",
      label: t.trustBar.usPatients,
      duration: 1600,
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      target: 70,
      suffix: "%",
      label: t.trustBar.saveUpTo,
      duration: 1400,
    },
    {
      icon: <Award className="w-7 h-7" />,
      target: 10,
      suffix: "+",
      label: t.trustBar.yearsExperience,
      duration: 1200,
    },
    {
      icon: <Clock className="w-7 h-7" />,
      // "3-5" is a range, keep as static string
      target: "3-5" as const,
      suffix: "",
      label: t.trustBar.daysTreatment,
      duration: 1000,
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white py-10 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedStat
              key={idx}
              icon={stat.icon}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              duration={stat.duration}
              active={inView}
              delay={idx * 0.12}
            />
          ))}
        </div>

        {/* Brands strip */}
        <div
          className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-4 flex-wrap"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >
          <span className="text-xs text-gray-500 font-semibold uppercase tracking-widest mr-4">
            {t.trustBar.materialsTitle}
          </span>
          {["Invisalign", "3M", "Straumann", "Dentsply"].map((brand) => (
            <span
              key={brand}
              className="text-sm font-bold text-gray-500 border border-gray-200 px-4 py-1.5 rounded-full hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors duration-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
