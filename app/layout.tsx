import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odonto House | Premium Dental Tourism in Ecuador",
  description: "Get your dream smile in Ecuador for a fraction of the US cost. Premium Smile Design, Implants, and Expert Dental Care in a state-of-the-art clinic.",
  keywords: [
    "dental tourism", "smile design ecuador", "dentist ecuador", 
    "dental implants", "affordable dental care", "turismo dental ecuador", 
    "diseño de sonrisa", "carillas dentales"
  ],
  openGraph: {
    title: "Odonto House | Premium Dental Tourism",
    description: "Save up to 70% on premium dental care in Ecuador. Contact us for a free quote!",
    url: "https://odontohouse.com",
    siteName: "Odonto House",
    images: [
      {
        url: "/hero.jpg", // Esta imagen se mostrará al compartir el link en WhatsApp
        width: 1200,
        height: 630,
        alt: "Odonto House Premium Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odonto House | Dental Tourism",
    description: "Get your dream smile in Ecuador for a fraction of the US cost.",
    images: ["/hero.jpg"],
  },
  other: {
    // Prevent Google Translate & other browser extensions from mutating
    // the DOM before React hydrates, which causes hydration mismatches.
    "google": "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
