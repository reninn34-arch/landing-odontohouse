"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export const Testimonials = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-10 md:mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[var(--color-brand-gold)] font-bold uppercase tracking-widest text-xs md:text-sm">Patient Stories</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue-dark)] mt-3">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.reviews.map((review, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-500 ${
                idx === 1
                  ? "bg-[var(--color-brand-blue-dark)] text-white"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.1 + idx * 0.15}s, transform 0.7s ease ${0.1 + idx * 0.15}s, box-shadow 0.3s ease, translate 0.3s ease`,
              }}
            >
              <Quote
                className={`w-10 h-10 mb-6 transition-transform duration-300 hover:scale-110 ${
                  idx === 1 ? "text-[var(--color-brand-gold)]" : "text-gray-200"
                }`}
              />
              <p className={`text-lg leading-relaxed mb-8 flex-grow ${idx === 1 ? "text-gray-300" : "text-gray-600"}`}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`font-extrabold ${idx === 1 ? "text-white" : "text-[var(--color-brand-blue-dark)]"}`}>
                    {review.name}
                  </h3>
                  <span className={`text-sm ${idx === 1 ? "text-white/70" : "text-gray-500"}`}>{review.location}</span>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]"
                      style={{
                        opacity: inView ? 1 : 0,
                        transition: `opacity 0.4s ease ${0.5 + idx * 0.15 + i * 0.06}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
