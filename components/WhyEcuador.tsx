"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Plane, PiggyBank, Award, Languages, HeartHandshake } from "lucide-react";

export const WhyEcuador = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[var(--color-brand-blue-dark)] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-[var(--color-brand-gold)]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--color-brand-gold)] font-bold uppercase tracking-widest text-sm">Dental Tourism</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            {t.whyEcuador.title}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">Everything you need for a world-class dental experience — without the US price tag.</p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Big card */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between min-h-64 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <PiggyBank className="w-12 h-12 text-[var(--color-brand-gold)] mb-4" />
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-3">{t.whyEcuador.savingsTitle}</h3>
              <p className="text-gray-300 leading-relaxed">{t.whyEcuador.savingsDesc}</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="text-5xl font-black text-[var(--color-brand-gold)]">70%</div>
              <div className="text-gray-400 text-sm">Average savings<br/>vs. US dental costs</div>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="bg-[var(--color-brand-gold)] rounded-3xl p-8 flex flex-col justify-between hover:opacity-90 transition-opacity">
            <Award className="w-10 h-10 text-[var(--color-brand-blue-dark)] mb-4" />
            <div>
              <h3 className="text-xl font-extrabold text-[var(--color-brand-blue-dark)] mb-2">{t.whyEcuador.qualityTitle}</h3>
              <p className="text-[var(--color-brand-blue-dark)]/80 text-sm leading-relaxed">{t.whyEcuador.qualityDesc}</p>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Languages className="w-10 h-10 text-[var(--color-brand-gold)] mb-4" />
            <h3 className="text-xl font-extrabold text-white mb-2">English-Speaking Staff</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Our lead doctor and team communicate fluently in English — zero language barrier.</p>
          </div>

          {/* Small card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Plane className="w-10 h-10 text-[var(--color-brand-gold)] mb-4" />
            <h3 className="text-xl font-extrabold text-white mb-2">Travel Assistance</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Airport pick-up, hotel recommendations, and scheduling support included.</p>
          </div>

          {/* Small card 4 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <HeartHandshake className="w-10 h-10 text-[var(--color-brand-gold)] mb-4" />
            <h3 className="text-xl font-extrabold text-white mb-2">{t.whyEcuador.conciergeTitle}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{t.whyEcuador.conciergeDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
