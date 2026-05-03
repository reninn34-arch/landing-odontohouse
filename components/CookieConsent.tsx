"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { Cookie, X } from "lucide-react";

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

const translations = {
  es: {
    title: "Usamos cookies",
    description:
      "Utilizamos cookies para mejorar tu experiencia y analizar el tráfico del sitio. Puedes aceptar todas las cookies o gestionarlas individualmente.",
    acceptAll: "Aceptar todo",
    reject: "Rechazar",
    manage: "Gestionar preferencias",
    openSettings: "Configurar cookies",
    necessary: "Necesarias",
    necessaryDesc: "Siempre activas - esenciales para el funcionamiento del sitio",
    analytics: "Analíticas",
    analyticsDesc: "Nos ayudan a entender cómo los visitantes interactúan con el sitio",
    marketing: "Marketing",
    marketingDesc: "Se usan para mostrar anuncios relevantes",
    savePreferences: "Guardar preferencias",
    privacyPolicy: "Política de Privacidad",
  },
  en: {
    title: "We use cookies",
    description:
      "We use cookies to improve your experience and analyze site traffic. You can accept all cookies or manage them individually.",
    acceptAll: "Accept all",
    reject: "Reject",
    manage: "Manage preferences",
    openSettings: "Cookie settings",
    necessary: "Necessary",
    necessaryDesc: "Always active - essential for site functionality",
    analytics: "Analytics",
    analyticsDesc: "Help us understand how visitors interact with the site",
    marketing: "Marketing",
    marketingDesc: "Used to display relevant advertisements",
    savePreferences: "Save preferences",
    privacyPolicy: "Privacy Policy",
  },
};

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const enableAnalytics = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
  }
};

export const CookieConsent = () => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const t = translations[language as keyof typeof translations] || translations.es;
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const isPrivacyPage = pathname === "/privacy";

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (!stored) {
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(stored) as CookiePreferences;
      setPreferences(parsed);
      if (parsed.analytics) {
        enableAnalytics();
      }
    }
  }, []);

  useEffect(() => {
    if (isPrivacyPage) {
      const stored = localStorage.getItem("cookie_consent");
      if (!stored) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(true);
      }
    }
  }, [pathname]);

  const handleAcceptAll = () => {
    const newPrefs = { necessary: true, analytics: true, marketing: true };
    setPreferences(newPrefs);
    localStorage.setItem("cookie_consent", JSON.stringify(newPrefs));
    setShowBanner(false);
    setShowSettings(false);
    setShowFloatingButton(false);
    enableAnalytics();
  };

  const handleReject = () => {
    const newPrefs = { necessary: true, analytics: false, marketing: false };
    setPreferences(newPrefs);
    localStorage.setItem("cookie_consent", JSON.stringify(newPrefs));
    setShowBanner(false);
    setShowSettings(false);
    setShowFloatingButton(isPrivacyPage);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    setShowFloatingButton(isPrivacyPage);
    if (preferences.analytics) {
      enableAnalytics();
    }
  };

  const shouldShowFloatingButton = showFloatingButton && !showBanner && !showSettings;

  if (!showBanner && !showSettings && !showFloatingButton) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={() => setShowSettings(false)} />
        <div className="relative w-full max-w-lg mx-4 mb-4 bg-white rounded-2xl shadow-2xl animate-slide-up-fade overflow-hidden">
          {!showSettings ? (
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[var(--color-brand-blue)]/10 rounded-full">
                  <Cookie className="w-5 h-5 text-[var(--color-brand-blue)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-brand-blue)]">{t.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">{t.description}</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 min-w-[120px] px-4 py-2.5 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold rounded-full text-sm hover:bg-[var(--color-brand-gold-light)] transition-colors"
                >
                  {t.acceptAll}
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 min-w-[120px] px-4 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-full text-sm hover:bg-gray-50 transition-colors"
                >
                  {t.reject}
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="w-full px-4 py-2.5 text-[var(--color-brand-blue)] font-semibold text-sm hover:underline"
                >
                  {t.manage}
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-[var(--color-brand-blue)]">
                  {t.privacyPolicy}
                </a>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[var(--color-brand-blue)]">{t.manage}</h3>
                <button onClick={() => setShowSettings(false)} className="p-1 hover:bg-gray-100 rounded-full">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{t.necessary}</p>
                    <p className="text-xs text-gray-500">{t.necessaryDesc}</p>
                  </div>
                  <input type="checkbox" checked disabled className="mt-1 w-4 h-4 accent-[var(--color-brand-blue)]" />
                </div>

                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{t.analytics}</p>
                    <p className="text-xs text-gray-500">{t.analyticsDesc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[var(--color-brand-blue)]"
                  />
                </div>

                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{t.marketing}</p>
                    <p className="text-xs text-gray-500">{t.marketingDesc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[var(--color-brand-blue)]"
                  />
                </div>
              </div>

              <button
                onClick={handleSavePreferences}
                className="w-full px-4 py-2.5 bg-[var(--color-brand-blue)] text-white font-bold rounded-full text-sm hover:bg-[var(--color-brand-blue)]/90 transition-colors"
              >
                {t.savePreferences}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating button when cookies were rejected or on privacy page */}
      {shouldShowFloatingButton && !showBanner && !showSettings && (
        <button
          onClick={() => setShowSettings(true)}
          className="fixed bottom-4 right-4 z-50 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] px-4 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-[var(--color-brand-gold-light)] transition-all flex items-center gap-2 animate-bounce"
        >
          <Cookie className="w-4 h-4" />
          {t.openSettings}
        </button>
      )}
    </>
  );
};