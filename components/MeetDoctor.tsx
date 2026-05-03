"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Languages, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export const MeetDoctor = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView(0.15);

  const credentials = [
    { icon: <Star className="w-5 h-5" />, text: t.doctor.cred1 },
    { icon: <Languages className="w-5 h-5" />, text: t.doctor.cred2 },
    { icon: <ShieldCheck className="w-5 h-5" />, text: t.doctor.cred3 },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

          {/* Image — slides in from left */}
          <div
            className="w-full lg:w-5/12 relative flex-shrink-0"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group relative">
              <Image
                src="/doctora.jpg"
                alt="Dr. Elena Barroso, specialist in aesthetic dentistry"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={75}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] rounded-2xl shadow-xl px-6 py-4 text-center"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0.6)",
                transition: "opacity 0.6s ease 0.4s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.4s",
              }}
            >
              <div className="text-3xl font-black">{t.doctor.yearsExpValue}</div>
              <div className="text-xs font-bold uppercase tracking-wider">{t.doctor.yearsExpLabel}</div>
            </div>
            <div
              className="absolute top-8 -left-4 w-1.5 rounded-full bg-[var(--color-brand-gold)]"
              style={{
                height: inView ? "8rem" : "0",
                transition: "height 0.8s ease 0.3s",
              }}
            />
          </div>

          {/* Bio — slides in from right */}
          <div
            className="w-full lg:w-7/12"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
            <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm">{t.doctor.specialist}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mt-3 mb-2">
              {t.doctor.meet}
            </h2>
            <p className="text-[#8f6d21] font-semibold mb-8 text-lg">{t.doctor.credentials}</p>
            <p className="text-base md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed">{t.doctor.bio}</p>

            <div className="space-y-4 mb-10">
              {credentials.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(30px)",
                    transition: `opacity 0.6s ease ${0.4 + idx * 0.12}s, transform 0.6s ease ${0.4 + idx * 0.12}s`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-blue)] flex items-center justify-center text-[var(--color-brand-gold)] flex-shrink-0 hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-blue)] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/593990904443?text=${t.doctor.whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[var(--color-brand-blue)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-blue)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t.doctor.bookConsultation}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
