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

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* Logo */}
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
          <div className="hidden md:flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/odontohouse?igsh=djR1cmd1ejY4d2Zr" target="_blank" rel="noreferrer" aria-label="Instagram"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group ${isScrolled ? "bg-gray-100 hover:bg-[var(--color-brand-gold)]" : "bg-white/10 hover:bg-[var(--color-brand-gold)]"}`}>
                <svg className={`w-4 h-4 transition-colors group-hover:text-[var(--color-brand-blue-dark)] ${isScrolled ? "text-gray-600" : "text-white"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@odontohouse.ec?_r=1&_t=ZS-95uAlkmVHRx" target="_blank" rel="noreferrer" aria-label="TikTok"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group ${isScrolled ? "bg-gray-100 hover:bg-[var(--color-brand-gold)]" : "bg-white/10 hover:bg-[var(--color-brand-gold)]"}`}>
                <svg className={`w-4 h-4 transition-colors group-hover:text-[var(--color-brand-blue-dark)] ${isScrolled ? "text-gray-600" : "text-white"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.17 8.17 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1E4Z3Cuzws/" target="_blank" rel="noreferrer" aria-label="Facebook"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group ${isScrolled ? "bg-gray-100 hover:bg-[var(--color-brand-gold)]" : "bg-white/10 hover:bg-[var(--color-brand-gold)]"}`}>
                <svg className={`w-4 h-4 transition-colors group-hover:text-[var(--color-brand-blue-dark)] ${isScrolled ? "text-gray-600" : "text-white"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Divider */}
            <div className={`w-px h-5 ${isScrolled ? "bg-gray-300" : "bg-white/20"}`} />

            {/* Language toggle */}
            <div className={`flex p-1 rounded-full transition-colors ${isScrolled ? "bg-gray-100" : "bg-white/10 backdrop-blur-sm"}`}>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  language === "en"
                    ? "bg-white text-[var(--color-brand-blue-dark)] shadow"
                    : isScrolled ? "text-gray-500 hover:text-gray-700" : "text-white/70 hover:text-white"
                }`}
              >EN</button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  language === "es"
                    ? "bg-white text-[var(--color-brand-blue-dark)] shadow"
                    : isScrolled ? "text-gray-500 hover:text-gray-700" : "text-white/70 hover:text-white"
                }`}
              >ES</button>
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

          {/* Mobile hamburger — always above drawer */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden focus:outline-none transition-colors z-[60] relative ${
              isMobileMenuOpen
                ? "text-white"
                : isScrolled
                  ? "text-[var(--color-brand-blue-dark)]"
                  : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}

      {/* Backdrop */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel — slides in from the right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[78vw] max-w-xs z-[58] bg-[var(--color-brand-blue-dark)] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
          <img
            src="/logo-dark.png"
            alt="Odonto House"
            className="h-10 w-auto object-contain brightness-0 invert"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 px-6 pt-8">

          {/* Language label */}
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
            Language
          </p>

          {/* Language toggle */}
          <div className="flex bg-white/10 p-1 rounded-full self-start">
            <button
              onClick={() => { setLanguage("en"); setIsMobileMenuOpen(false); }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                language === "en"
                  ? "bg-white text-[var(--color-brand-blue-dark)]"
                  : "text-white/60 hover:text-white"
              }`}
            >EN</button>
            <button
              onClick={() => { setLanguage("es"); setIsMobileMenuOpen(false); }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                language === "es"
                  ? "bg-white text-[var(--color-brand-blue-dark)]"
                  : "text-white/60 hover:text-white"
              }`}
            >ES</button>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-5">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/593990904443?text=Hi!%20I'm%20interested%20in%20a%20virtual%20consultation"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue-dark)] px-6 py-3.5 rounded-full font-extrabold text-sm w-full shadow-lg active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              {t.nav.bookConsultation}
            </a>

            {/* Social Media */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a href="https://www.instagram.com/odontohouse?igsh=djR1cmd1ejY4d2Zr" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-brand-gold)] flex items-center justify-center transition-all duration-300 active:scale-95 group">
                <svg className="w-5 h-5 text-white group-hover:text-[var(--color-brand-blue-dark)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@odontohouse.ec?_r=1&_t=ZS-95uAlkmVHRx" target="_blank" rel="noreferrer" aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-brand-gold)] flex items-center justify-center transition-all duration-300 active:scale-95 group">
                <svg className="w-5 h-5 text-white group-hover:text-[var(--color-brand-blue-dark)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.17 8.17 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1E4Z3Cuzws/" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-brand-gold)] flex items-center justify-center transition-all duration-300 active:scale-95 group">
                <svg className="w-5 h-5 text-white group-hover:text-[var(--color-brand-blue-dark)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
