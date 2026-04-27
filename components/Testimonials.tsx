"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--color-brand-gold)] font-bold uppercase tracking-widest text-sm">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-blue-dark)] mt-3">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.reviews.map((review, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col ${idx === 1 ? "bg-[var(--color-brand-blue-dark)] text-white" : "bg-white border border-gray-100 shadow-sm"}`}
            >
              <Quote className={`w-10 h-10 mb-6 ${idx === 1 ? "text-[var(--color-brand-gold)]" : "text-gray-200"}`} />
              <p className={`text-lg leading-relaxed mb-8 flex-grow ${idx === 1 ? "text-gray-300" : "text-gray-600"}`}>
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`font-extrabold ${idx === 1 ? "text-white" : "text-[var(--color-brand-blue-dark)]"}`}>{review.name}</h4>
                  <span className={`text-sm ${idx === 1 ? "text-gray-400" : "text-gray-400"}`}>{review.location}</span>
                </div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />
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
