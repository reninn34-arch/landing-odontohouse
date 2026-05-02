import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SchemaOrg } from "@/components/SchemaOrg";
import dynamic from "next/dynamic";

const Skeleton = () => <div className="w-full min-h-[400px] bg-gray-50 animate-pulse" />;

// Below-the-fold: lazy-loaded to reduce initial JS bundle & TBT
const SmileDesign  = dynamic(() => import("@/components/SmileDesign").then(m => ({ default: m.SmileDesign })),  { ssr: true, loading: Skeleton });
const Pricing      = dynamic(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })),          { ssr: true, loading: Skeleton });
const Services     = dynamic(() => import("@/components/Services").then(m => ({ default: m.Services })),         { ssr: true, loading: Skeleton });
const WhyEcuador   = dynamic(() => import("@/components/WhyEcuador").then(m => ({ default: m.WhyEcuador })),     { ssr: true, loading: Skeleton });
const MeetDoctor   = dynamic(() => import("@/components/MeetDoctor").then(m => ({ default: m.MeetDoctor })),     { ssr: true, loading: Skeleton });
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })), { ssr: true, loading: Skeleton });
const FAQ          = dynamic(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })),                   { ssr: true, loading: Skeleton });
const Footer       = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })),             { ssr: true, loading: Skeleton });
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })), { ssr: true });

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
