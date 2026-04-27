"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--color-brand-blue-dark)] text-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-brand-gold-light)]">
              {t.footer.ready}
            </h2>
            <div className="space-y-4 mb-8 text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-brand-teal)]" />
                <span>Av. las Aguas 1106 entre Jiguas y Laureles, Guayaquil</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-brand-teal)]" />
                <span>+593 99 090 4443 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-brand-teal)]" />
                <span>elenazbm@hotmail.com</span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden relative">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3986.980601354422!2d-79.9140833!3d-2.1610833000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMDknMzkuOSJTIDc5wrA1NCc1MC43Ilc!5e0!3m2!1ses!2sec!4v1777318549865!5m2!1ses!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-[var(--color-brand-blue-dark)] p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Request Your Free Quote</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-600">{t.footer.name}</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-teal)]" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-600">{t.footer.email}</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-teal)]" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-600">{t.footer.phone}</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-teal)]" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-600">{t.footer.treatment}</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-brand-teal)] bg-white">
                  {t.footer.treatmentOptions.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-light)] text-white hover:text-[var(--color-brand-blue-dark)] font-bold py-4 rounded-lg transition-colors mt-4">
                {t.footer.submit}
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-[var(--color-brand-blue)] text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Odonthouse Dental Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
