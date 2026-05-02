"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const FAQ = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-brand-blue)] mb-10 md:mb-16">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.questions.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[var(--color-brand-gold)]/40 transition-colors duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + idx * 0.1}s, transform 0.6s ease ${0.1 + idx * 0.1}s, border-color 0.3s`,
              }}
            >
              <button
                onClick={() => toggleOpen(idx)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none group"
              >
                <span className="font-bold text-lg text-[var(--color-brand-blue)] text-left group-hover:text-[var(--color-brand-gold)] transition-colors duration-300">
                  {faq.q}
                </span>
                <div
                  className="flex-shrink-0 ml-4 transition-transform duration-300"
                  style={{ transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${openIndex === idx ? "text-[var(--color-brand-gold)]" : "text-gray-400"}`} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white text-gray-600 border-t border-gray-100 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
