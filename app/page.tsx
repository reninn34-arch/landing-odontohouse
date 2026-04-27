import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SmileDesign } from "@/components/SmileDesign";
import { Services } from "@/components/Services";
import { WhyEcuador } from "@/components/WhyEcuador";
import { MeetDoctor } from "@/components/MeetDoctor";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

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
