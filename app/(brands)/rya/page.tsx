import type { Metadata } from "next";
import { getRyaServices, getRyaTestimonials } from "@/lib/supabase";
import RyaClient from "./RyaClient";

export const metadata: Metadata = {
  title: "RYA International LLC — Consultoría Empresarial · Miami, FL",
  description: "Transformamos negocios en imperios. Consultoría estratégica, branding premium y coaching ejecutivo para líderes visionarios.",
};

export default async function RyaPage() {
  const [services, testimonials] = await Promise.all([
    getRyaServices(),
    getRyaTestimonials(),
  ]);

  return <RyaClient services={services} testimonials={testimonials} />;
}
