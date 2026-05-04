"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { en } from "@/locales/en";
import { es } from "@/locales/es";

type Language = "en" | "es";
type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ 
  children, 
  initialLanguage 
}: { 
  children: ReactNode; 
  initialLanguage: Language;
}) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Update cookie so server can read it on next request
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    // Refresh to apply changes server-side (optional but recommended for pure server components)
    window.location.reload();
  };

  const t = language === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
