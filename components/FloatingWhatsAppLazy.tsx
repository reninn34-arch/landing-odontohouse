"use client";

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
  () => import("@/components/FloatingWhatsApp").then(m => ({ default: m.FloatingWhatsApp })),
  { ssr: false }
);

export default function FloatingWhatsAppLazy() {
  return <FloatingWhatsApp />;
}
