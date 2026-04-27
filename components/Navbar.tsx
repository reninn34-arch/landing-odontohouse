"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, MessageCircle } from "lucide-react";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo — same image, CSS filter makes it white on dark hero */}
        <div className="flex items-center">
          <img
            src="/logo-dark.png"
            alt="Odonto House"
            className={`h-14 md:h-20 w-auto object-contain transition-all duration-500 ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
            style={isScrolled ? {} : { filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language toggle */}
          <div className={`flex p-1 rounded-full transition-colors ${isScrolled ? "bg-gray-100" : "bg-white/10 backdrop-blur-sm"}`}>
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                language === "en"
                  ? "bg-white text-[var(--color-brand-blue-dark)] shadow"
                  : isScrolled ? "text-gray-500 hover:text-gray-700" : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                language === "es"
                  ? "bg-white text-[var(--color-brand-blue-dark)] shadow"
                  : isScrolled ? "text-gray-500 hover:text-gray-700" : "text-white/70 hover:text-white"
              }`}
            >
              ES
            </button>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/593990904443?text=Hi!%20I'm%20interested%20in%20a%20virtual%20consultation"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-[var(--color-brand-blue-dark)] px-5 py-2.5 rounded-full font-extrabold text-sm transition-all shadow-lg hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            {t.nav.bookConsultation}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden focus:outline-none transition-colors ${isScrolled ? "text-[var(--color-brand-blue-dark)]" : "text-white"}`}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-brand-blue-dark)] absolute top-full left-0 w-full flex flex-col items-center py-8 gap-5 shadow-2xl">
          <img src="/logo-white.png" alt="Odonto House" className="h-14 w-auto object-contain mb-2"
            onError={(e) => { e.currentTarget.src = "/logo-dark.png"; e.currentTarget.className = "h-14 w-auto object-contain mb-2 invert"; }} />

          <div className="flex bg-white/10 p-1 rounded-full">
            <button
              onClick={() => { setLanguage("en"); setIsMobileMenuOpen(false); }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${language === "en" ? "bg-white text-[var(--color-brand-blue-dark)]" : "text-white/70"}`}
            >EN</button>
            <button
              onClick={() => { setLanguage("es"); setIsMobileMenuOpen(false); }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${language === "es" ? "bg-white text-[var(--color-brand-blue-dark)]" : "text-white/70"}`}
            >ES</button>
          </div>

          <a
            href="https://wa.me/593990904443?text=Hi!%20I'm%20interested%20in%20a%20virtual%20consultation"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue-dark)] px-8 py-3.5 rounded-full font-extrabold w-[85%] justify-center shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            {t.nav.bookConsultation}
          </a>
        </div>
      )}
    </nav>
  );
};
