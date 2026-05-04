import { cookies } from "next/headers";
import { getDictionary, Locale } from "@/lib/dictionary";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SchemaOrg } from "@/components/SchemaOrg";
import { SmileDesign } from "@/components/SmileDesign";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { WhyEcuador } from "@/components/WhyEcuador";
import { MeetDoctor } from "@/components/MeetDoctor";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default async function Home() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value as Locale) || "en";
  const t = getDictionary(locale);

  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <SchemaOrg />
      <Navbar />
      <Hero t={t} />
      <TrustBar t={t} />
      <SmileDesign t={t} />
      <Pricing t={t} locale={locale} />
      <Services t={t} />
      <WhyEcuador t={t} />
      <MeetDoctor t={t} />
      <Testimonials t={t} />
      <FAQ t={t} />
      <Footer t={t} locale={locale} />
      <FloatingWhatsApp />
    </main>
  );
}
