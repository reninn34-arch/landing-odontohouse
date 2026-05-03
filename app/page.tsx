"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SchemaOrg } from "@/components/SchemaOrg";
import dynamic from "next/dynamic";

const Skeleton = () => <div className="w-full min-h-[400px] bg-gray-50 animate-pulse" />;

// Below-the-fold: lazy-loaded with ssr: false to eliminate hydration errors & reduce initial payload
const SmileDesign  = dynamic(() => import("@/components/SmileDesign").then(m => ({ default: m.SmileDesign })),  { ssr: false, loading: Skeleton });
const Pricing      = dynamic(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })),          { ssr: false, loading: Skeleton });
const Services     = dynamic(() => import("@/components/Services").then(m => ({ default: m.Services })),         { ssr: false, loading: Skeleton });
const WhyEcuador   = dynamic(() => import("@/components/WhyEcuador").then(m => ({ default: m.WhyEcuador })),     { ssr: false, loading: Skeleton });
const MeetDoctor   = dynamic(() => import("@/components/MeetDoctor").then(m => ({ default: m.MeetDoctor })),     { ssr: false, loading: Skeleton });
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })), { ssr: false, loading: Skeleton });
const FAQ          = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })),                   { ssr: false, loading: Skeleton });
const Footer       = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })),             { ssr: false, loading: Skeleton });
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <SchemaOrg />
      <Navbar />
      <Hero />
      <TrustBar />
      <SmileDesign />
      <Pricing />
      <Services />
      <WhyEcuador />
      <MeetDoctor />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
