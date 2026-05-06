"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    router.refresh();
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
