"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { Check, X, DollarSign, ChevronDown, Calculator } from "lucide-react";

const prices = {
  en: {
    title: "Transparent Pricing",
    subtitle: "Compare USA vs Ecuador prices. Same quality, same materials, up to 70% savings.",
    tableTitle: "Treatment Cost Comparison",
    perTooth: "per tooth",
    perArch: "per arch",
    fullMouth: "full mouth",
    saving: "SAVE",
    included: "What's Included",
    includedList: [
      "Free consultation",
      "Premium materials (Straumann, Nobel Biocare, Emax)",
      "Airport transfer",
      "Hotel assistance",
      "Follow-up care"
    ],
    cta: "Get Your Free Quote",
    whatsappMsg: "Hi!%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20dental%20treatment%20in%20Ecuador.%20Can%20you%20help%20me?",
    note: "*Prices shown are averages. Final quote based on your specific case after virtual consultation.",
    specialPackage: {
      title: "All-Inclusive Smile Design Package",
      subtitle: "Everything handled for you. Just arrive and smile.",
      priceLabel: "Special Offer",
      priceHidden: true,
      features: [
        "Smile Design (10-12 porcelain veneers)",
        "Luxury Suite Stay (entire treatment duration)",
        "3 meals daily (breakfast, lunch & dinner)",
        "Airport pickup in Guayaquil",
        "Airport drop-off",
        "Guayaquil city tour",
        "Dedicated concierge service",
        "All follow-up visits included"
      ],
      cta: "Ask for Details",
      whatsappMsg: "Hi!%20I'm%20interested%20in%20the%20All-Inclusive%20Smile%20Design%20Package.%20Can%20you%20give%20me%20more%20details%20and%20pricing?"
    },
    treatments: [
      {
        name: "Porcelain Veneers (Emax)",
        usa: "$1,500",
        ecuador: "$350",
        unit: "per tooth",
        savings: "77%"
      },
      {
        name: "Zirconia Crowns",
        usa: "$1,800",
        ecuador: "$400",
        unit: "per tooth",
        savings: "78%"
      },
      {
        name: "All-on-4 Implants",
        usa: "$28,000",
        ecuador: "$8,500",
        unit: "per arch",
        savings: "70%"
      },
      {
        name: "All-on-6 Implants",
        usa: "$35,000",
        ecuador: "$12,000",
        unit: "per arch",
        savings: "66%"
      },
      {
        name: "Single Dental Implant",
        usa: "$4,500",
        ecuador: "$950",
        unit: "per implant",
        savings: "79%"
      },
      {
        name: "Hollywood Smile (10-12 veneers)",
        usa: "$18,000",
        ecuador: "$4,200",
        unit: "full smile",
        savings: "77%"
      },
      {
        name: "Invisalign / Clear Aligners",
        usa: "$6,000",
        ecuador: "$2,200",
        unit: "full treatment",
        savings: "63%"
      },
      {
        name: "Teeth Whitening (Laser)",
        usa: "$800",
        ecuador: "$250",
        unit: "per session",
        savings: "69%"
      },
      {
        name: "Root Canal Treatment",
        usa: "$1,200",
        ecuador: "$300",
        unit: "per tooth",
        savings: "75%"
      },
    ]
  },
  es: {
    title: "Precios Transparentes",
    subtitle: "Compara precios de EE.UU. vs Ecuador. Misma calidad, mismos materiales, hasta 70% de ahorro.",
    tableTitle: "Comparación de Costos de Tratamiento",
    perTooth: "por diente",
    perArch: "por arco",
    fullMouth: "boca completa",
    saving: "AHORRA",
    included: "Qué Está Incluido",
    includedList: [
      "Consulta gratuita",
      "Materiales premium (Straumann, Nobel Biocare, Emax)",
      "Traslado desde aeropuerto",
      "Asistencia con hotel",
      "Seguimiento post-tratamiento"
    ],
    cta: "Obtén Tu Cotización Gratis",
    whatsappMsg: "Hola!%20Me%20gustaría%20obtener%20una%20cotización%20gratis%20para%20tratamiento%20dental%20en%20Ecuador.%20Me%20pueden%20ayudar?",
    note: "*Los precios mostrados son promedios. Cotización final basada en tu caso específico después de consulta virtual.",
specialPackage: {
      title: "Paquete Todo Incluido - Diseño de Sonrisa",
      subtitle: "Todo resuelto para ti. Solo llega y sonríe.",
      priceLabel: "Oferta Especial",
      priceHidden: true,
      features: [
        "Diseño de Sonrisa (10-12 carillas de porcelana)",
        "Estancia en Suite de lujo (duración completa del tratamiento)",
        "3 comidas diarias (desayuno, almuerzo y cena)",
        "Recogida en aeropuerto de Guayaquil",
        "Traslado al aeropuerto",
        "Tour por la ciudad de Guayaquil",
        "Servicio de conserjería dedicada",
        "Todas las visitas de seguimiento incluidas"
      ],
      cta: "Solicitar Información",
      whatsappMsg: "Hola!%20Estoy%20interesado%20en%20el%20Paquete%20Todo%20Incluido%20de%20Diseño%20de%20Sonrisa.%20Me%20puede%20dar%20más%20detalles%20y%20el%20precio?"
    },
    treatments: [
      {
        name: "Carillas de Porcelana (Emax)",
        usa: "$1,500",
        ecuador: "$350",
        unit: "por diente",
        savings: "77%"
      },
      {
        name: "Coronas de Zirconia",
        usa: "$1,800",
        ecuador: "$400",
        unit: "por diente",
        savings: "78%"
      },
      {
        name: "Implantes All-on-4",
        usa: "$28,000",
        ecuador: "$8,500",
        unit: "por arco",
        savings: "70%"
      },
      {
        name: "Implantes All-on-6",
        usa: "$35,000",
        ecuador: "$12,000",
        unit: "por arco",
        savings: "66%"
      },
      {
        name: "Implante Dental Individual",
        usa: "$4,500",
        ecuador: "$950",
        unit: "por implante",
        savings: "79%"
      },
      {
        name: "Hollywood Smile (10-12 carillas)",
        usa: "$18,000",
        ecuador: "$4,200",
        unit: "sonrisa completa",
        savings: "77%"
      },
      {
        name: "Invisalign / Alineadores Transparentes",
        usa: "$6,000",
        ecuador: "$2,200",
        unit: "tratamiento completo",
        savings: "63%"
      },
      {
        name: "Blanqueamiento Dental (Láser)",
        usa: "$800",
        ecuador: "$250",
        unit: "por sesión",
        savings: "69%"
      },
      {
        name: "Tratamiento de Conducto",
        usa: "$1,200",
        ecuador: "$300",
        unit: "por diente",
        savings: "75%"
      },
    ]
  }
};

export const Pricing = () => {
  const { t, language } = useLanguage();
  const { ref, inView } = useInView(0.1);
  const [showPrices, setShowPrices] = useState(false);
  
  const content = language === "en" ? prices.en : prices.es;

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-14 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[#8f6d21] font-bold uppercase tracking-widest text-xs md:text-sm">
            {language === "en" ? "Transparent Pricing" : "Precios Transparentes"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] mt-3 mb-4">
            {content.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {content.subtitle}
          </p>
        </div>

        {/* Special All-Inclusive Package */}
        <div 
          className="mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div className="bg-gradient-to-r from-[var(--color-brand-blue)] to-blue-900 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            {/* Animated decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-brand-gold)]/10 rounded-full group-hover:bg-[var(--color-brand-gold)]/20 transition-colors duration-700 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full animate-pulse" style={{ animationDuration: "4s" }}></div>
            
            {/* Floating sparkles */}
            <div className="absolute top-10 left-1/4 w-2 h-2 bg-[var(--color-brand-gold)] rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: "0.2s" }}></div>
            
            <div className="relative z-10">
              <span className="inline-block bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold px-4 py-1 rounded-full text-sm mb-4 animate-bounce" style={{ animationDuration: "3s" }}>
                {language === "en" ? "BEST VALUE" : "MEJOR VALOR"}
              </span>
              <h3 className="text-white font-extrabold text-2xl md:text-4xl mb-2 group-hover:scale-[1.02] transition-transform duration-300">
                {content.specialPackage.title}
              </h3>
              <p className="text-white/80 text-lg mb-6 group-hover:text-white transition-colors duration-300">
                {content.specialPackage.subtitle}
              </p>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
                <div className="group/price cursor-pointer" onClick={() => window.open(`https://wa.me/593990904443?text=${content.specialPackage.whatsappMsg}`, '_blank')}>
                  <span className="text-white/60 text-sm">{content.specialPackage.priceLabel}</span>
                  <div className="text-4xl font-black text-[var(--color-brand-gold)] group-hover/price:scale-105 transition-all duration-300 flex items-center gap-2">
                    {content.specialPackage.priceHidden ? (
                      <>
                        <span className="text-white/90">?</span>
                        <span className="text-2xl text-white/70 font-medium">{language === "en" ? "Ask us" : "Consultános"}</span>
                      </>
                    ) : null}
                  </div>
                  <span className="text-white/50 text-xs mt-1 group-hover/price:text-white/70 transition-colors">
                    {language === "en" ? "Click to inquire" : "Clic para consultar"}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                  {content.specialPackage.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 text-white/90 group-hover/feature:text-white group-hover/feature:translate-x-1 transition-all duration-300"
                      style={{ 
                        opacity: inView ? 1 : 0, 
                        transform: inView ? "translateX(0)" : "translateX(-20px)",
                        transition: `opacity 0.5s ease ${0.3 + idx * 0.1}s, transform 0.5s ease ${0.3 + idx * 0.1}s`
                      }}
                    >
                      <Check className="w-5 h-5 text-[var(--color-brand-gold)] flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href={`https://wa.me/593990904443?text=${content.specialPackage.whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 shadow-lg animate-bounce"
                style={{ animationDuration: "2s" }}
              >
                <DollarSign className="w-5 h-5" />
                {content.specialPackage.cta}
              </a>
            </div>
          </div>
        </div>

        {/* What's Included Card */}
        <div 
          className="bg-[var(--color-brand-blue)] rounded-3xl p-8 mb-12 max-w-2xl mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <Check className="w-6 h-6 text-[var(--color-brand-gold)]" />
            {content.included}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.includedList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/90">
                <Check className="w-4 h-4 text-[var(--color-brand-gold)] flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table - Collapsible */}
        <div 
          className="mt-8"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          {/* Collapsible Button */}
          <button 
            onClick={() => setShowPrices(!showPrices)}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-300 group"
          >
            <Calculator className="w-5 h-5 text-[var(--color-brand-blue)] group-hover:scale-110 transition-transform" />
            <span className="font-bold text-[var(--color-brand-blue)]">
              {language === "en" ? "Curious about savings? See price comparison" : "¿Curioso sobre los ahorros? Ver comparación de precios"}
            </span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showPrices ? "rotate-180" : ""}`} />
          </button>

          {/* Collapsible Content */}
          <div className={`overflow-hidden transition-all duration-500 ${showPrices ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-4 font-bold text-[var(--color-brand-blue)] text-lg">
                      {content.tableTitle}
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-gray-500 text-sm uppercase tracking-wider">
                      USA
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-[var(--color-brand-blue)] text-sm uppercase tracking-wider">
                      Ecuador
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-green-600 text-sm uppercase tracking-wider">
                      {content.saving}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.treatments.map((treatment, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <td className="py-4 px-4">
                        <div className="font-bold text-[var(--color-brand-blue)]">{treatment.name}</div>
                        <div className="text-gray-400 text-xs mt-1">{treatment.unit}</div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-gray-400 line-through text-sm">{treatment.usa}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="font-bold text-[var(--color-brand-blue)] text-lg">{treatment.ecuador}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">
                          {treatment.savings}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div 
          className="text-center mt-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
          }}
        >
          <a 
            href={`https://wa.me/593990904443?text=${content.whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <DollarSign className="w-5 h-5" />
            {content.cta}
          </a>
          <p className="text-gray-400 text-sm mt-4 italic">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
};