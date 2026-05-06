import { cookies } from "next/headers";
import { getDictionary, Locale } from "@/lib/dictionary";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SmileDesign } from "@/components/sections/SmileDesign";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";
import { WhyEcuador } from "@/components/sections/WhyEcuador";
import { MeetDoctor } from "@/components/sections/MeetDoctor";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

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
