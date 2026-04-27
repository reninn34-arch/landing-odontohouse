"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Users, Award, Clock } from "lucide-react";

export const TrustBar = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: <Users className="w-7 h-7" />, value: "500+", label: "US Patients" },
    { icon: <ShieldCheck className="w-7 h-7" />, value: "70%", label: t.trustBar.saveUpTo },
    { icon: <Award className="w-7 h-7" />, value: "10+", label: "Years Experience" },
    { icon: <Clock className="w-7 h-7" />, value: "3-5", label: "Days Treatment" },
  ];

  return (
    <section className="bg-white py-10 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="text-[var(--color-brand-gold)] mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className="text-4xl font-extrabold text-[var(--color-brand-blue-dark)] leading-tight">{stat.value}</span>
              <span className="text-sm text-gray-500 font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
        {/* Brands strip */}
        <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-4 flex-wrap">
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest mr-4">Our Materials & Partners</span>
          {["Invisalign", "3M", "Straumann", "Dentsply"].map((brand) => (
            <span key={brand} className="text-sm font-bold text-gray-400 border border-gray-200 px-4 py-1.5 rounded-full">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
