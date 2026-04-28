import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import dynamic from "next/dynamic";

// Below-the-fold: lazy-loaded to reduce initial JS bundle & TBT
const SmileDesign  = dynamic(() => import("@/components/SmileDesign").then(m => ({ default: m.SmileDesign })),  { ssr: true });
const Services     = dynamic(() => import("@/components/Services").then(m => ({ default: m.Services })),         { ssr: true });
const WhyEcuador   = dynamic(() => import("@/components/WhyEcuador").then(m => ({ default: m.WhyEcuador })),     { ssr: true });
const MeetDoctor   = dynamic(() => import("@/components/MeetDoctor").then(m => ({ default: m.MeetDoctor })),     { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })), { ssr: true });
const FAQ          = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })),                   { ssr: true });
const Footer       = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })),             { ssr: true });
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsAppLazy"), { ssr: true });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <SmileDesign />
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
