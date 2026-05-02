"use client";

import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from "react";
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

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  
  const savedLang = localStorage.getItem("odontohouse-lang") as Language;
  if (savedLang === "en" || savedLang === "es") {
    return savedLang;
  }
  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "es") {
    return "es";
  }
  return "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "odontohouse-lang" && e.newValue) {
        if (e.newValue === "en" || e.newValue === "es") {
          setLanguageState(e.newValue);
        }
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("odontohouse-lang", lang);
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
