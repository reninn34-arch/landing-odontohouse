"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Languages, Star } from "lucide-react";

export const MeetDoctor = () => {
  const { t } = useLanguage();

  const credentials = [
    { icon: <Star className="w-5 h-5" />, text: "10+ Years in Aesthetic Dentistry" },
    { icon: <Languages className="w-5 h-5" />, text: "Fluent English & Spanish" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "US-Standard Techniques & Materials" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image */}
          <div className="w-full lg:w-5/12 relative flex-shrink-0">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/doctora.jpg"
                alt="Dr. Elena Barroso"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue-dark)] rounded-2xl shadow-xl px-6 py-4 text-center">
              <div className="text-3xl font-black">10+</div>
              <div className="text-xs font-bold uppercase tracking-wider">Years Exp.</div>
            </div>
            {/* Accent line */}
            <div className="absolute top-8 -left-4 w-1.5 h-32 bg-[var(--color-brand-gold)] rounded-full" />
          </div>

          {/* Bio */}
          <div className="w-full lg:w-7/12">
            <span className="text-[var(--color-brand-gold)] font-bold uppercase tracking-widest text-sm">The Specialist</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-blue-dark)] mt-3 mb-2">
              {t.doctor.meet}
            </h2>
            <p className="text-[var(--color-brand-gold)] font-semibold mb-8 text-lg">{t.doctor.credentials}</p>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">
              {t.doctor.bio}
            </p>

            <div className="space-y-4 mb-10">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-blue-dark)] flex items-center justify-center text-[var(--color-brand-gold)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/593990904443?text=Hi%20Dr.%20Elena!%20I'd%20like%20to%20schedule%20a%20virtual%20consultation."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[var(--color-brand-blue-dark)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-blue-dark)] transition-all shadow-lg"
            >
              Book a Consultation with Dr. Elena
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
