"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Dental Clinic"
          className="w-full h-full object-cover object-top md:object-center"
        />
        {/* Mobile: gradient from bottom only — face stays visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051A2F]/95 via-[#051A2F]/40 to-transparent md:hidden" />
        {/* Desktop: gradient from left — original design */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#051A2F]/85 via-[#051A2F]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="w-full px-6 sm:px-8 lg:pl-14 relative z-20 pb-16 pt-32 md:pt-28 md:pb-24">
        <div className="max-w-sm md:max-w-md">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3 md:mb-5"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm md:text-lg text-white/70 mb-6 md:mb-10 leading-relaxed max-w-sm md:max-w-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="flex flex-row flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-[var(--color-brand-blue-dark)] px-6 py-3 rounded-full font-extrabold text-sm whitespace-nowrap transition-all flex items-center justify-center gap-2 shadow-xl min-h-[48px]"
            >
              {t.hero.getQuote} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/593990904443"
              target="_blank"
              rel="noreferrer"
              className="border border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all flex items-center justify-center gap-2 backdrop-blur-sm min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" /> {t.hero.chatWhatsApp}
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 60L1440 60L1440 20C1100 55 700 60 360 40C220 32 80 20 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};
