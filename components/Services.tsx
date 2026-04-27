"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AlignVerticalJustifyCenter, Bone, Sparkles, ArrowRight } from "lucide-react";

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.orthoTitle,
      description: t.services.orthoDesc,
      icon: <AlignVerticalJustifyCenter className="w-10 h-10" />,
      tag: "Most Popular",
    },
    {
      title: t.services.wisdomTitle,
      description: t.services.wisdomDesc,
      icon: <Bone className="w-10 h-10" />,
      tag: "Painless",
    },
    {
      title: t.services.whiteningTitle,
      description: t.services.whiteningDesc,
      icon: <Sparkles className="w-10 h-10" />,
      tag: "1 Session",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--color-brand-gold)] font-bold uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-blue-dark)] mt-3 mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">World-class dental procedures at a fraction of US prices, performed by a specialist with over 10 years of experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col relative overflow-hidden"
            >
              {/* Tag */}
              <span className="absolute top-5 right-5 text-xs font-bold text-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/20 px-3 py-1 rounded-full">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-blue-dark)] flex items-center justify-center text-[var(--color-brand-gold)] mb-6 group-hover:bg-[var(--color-brand-gold)] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-extrabold text-[var(--color-brand-blue-dark)] mb-3">{service.title}</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed">{service.description}</p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[var(--color-brand-blue-dark)] font-bold group-hover:text-[var(--color-brand-gold)] transition-colors"
              >
                {t.services.learnMore} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
