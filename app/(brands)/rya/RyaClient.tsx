"use client";

import { motion, type Variants } from "framer-motion";
import type { RyaService, RyaTestimonial } from "@/lib/types";

const wa = "https://wa.me/17875104504?text=Hola%2C%20me%20interesa%20los%20servicios%20de%20RYA%20International";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const iconMap: Record<string, React.ReactNode> = {
  chart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  diamond: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
      <line x1="2" y1="8.5" x2="22" y2="8.5"/>
    </svg>
  ),
  megaphone: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  ),
  target: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
};

interface Props {
  services: RyaService[];
  testimonials: RyaTestimonial[];
}

export default function RyaClient({ services, testimonials }: Props) {
  return (
    <div className="rya-brand min-h-screen">

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "92vh", backgroundColor: "#0A0A0A" }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 60% 0%, rgba(200,169,110,0.12) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(200,169,110,0.07) 0%, transparent 50%)"
        }} />
        <motion.div
          className="relative z-10 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-6 text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: "#C8A96E" }}>
            Miami, FL · Consultoría Empresarial
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#F0EBE1", lineHeight: 1.1 }}
          >
            Transformamos<br />
            <span style={{ color: "#C8A96E" }}>negocios</span> en imperios
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base md:text-lg mb-12 leading-relaxed" style={{ color: "rgba(240,235,225,0.55)", maxWidth: "500px", margin: "0 auto 3rem" }}>
            Consultoría estratégica de alto impacto para líderes que quieren resultados reales, no promesas vacías.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#servicios"
              className="px-10 py-3.5 text-sm font-semibold transition-all"
              style={{ backgroundColor: "#C8A96E", color: "#0A0A0A" }}>
              Nuestros Servicios
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="px-10 py-3.5 text-sm font-semibold transition-all"
              style={{ border: "1px solid rgba(200,169,110,0.5)", color: "#C8A96E" }}>
              Contáctanos
            </a>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(200,169,110,0.4)" }}>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, #C8A96E)" }} />
          <span className="text-[9px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section style={{ backgroundColor: "#141414", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#C8A96E" }}>Quiénes Somos</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-playfair), serif", color: "#F0EBE1" }}>
                Estrategia sin concesiones
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(240,235,225,0.55)" }}>
                RYA International LLC es una firma de consultoría empresarial con base en Miami, especializada en transformar organizaciones a través de estrategia, branding de alto nivel y liderazgo ejecutivo.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(240,235,225,0.55)" }}>
                Trabajamos con emprendedores, startups y empresas establecidas que buscan resultados exponenciales, no incrementales.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { value: "+40%", label: "Crecimiento promedio" },
                { value: "50+", label: "Clientes transformados" },
                { value: "$2M+", label: "En contratos cerrados" },
                { value: "3", label: "Startups lanzadas" },
              ].map(m => (
                <div key={m.label} className="p-6 text-center" style={{ backgroundColor: "#0A0A0A", border: "1px solid rgba(200,169,110,0.15)" }}>
                  <p className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair), serif", color: "#C8A96E" }}>{m.value}</p>
                  <p className="text-xs tracking-wide uppercase" style={{ color: "rgba(240,235,225,0.4)" }}>{m.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#C8A96E" }}>Servicios</p>
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-playfair), serif", color: "#F0EBE1" }}>
                Lo que hacemos mejor
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map(s => (
                <motion.div
                  key={s.id}
                  variants={fadeUp}
                  className="p-8 transition-all group"
                  style={{ backgroundColor: "#141414", border: "1px solid rgba(200,169,110,0.15)" }}
                  whileHover={{ borderColor: "rgba(200,169,110,0.45)" }}
                >
                  <div className="mb-4" style={{ color: "#C8A96E" }}>
                    {iconMap[s.icon ?? "chart"] ?? iconMap.chart}
                  </div>
                  <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-playfair), serif", color: "#F0EBE1" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,235,225,0.5)" }}>{s.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section style={{ backgroundColor: "#141414", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#C8A96E" }}>Testimonios</p>
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-playfair), serif", color: "#F0EBE1" }}>
                Lo que dicen nuestros clientes
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <motion.div
                  key={t.id}
                  variants={fadeUp}
                  className="p-8"
                  style={{ backgroundColor: "#0A0A0A", border: "1px solid rgba(200,169,110,0.12)" }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} style={{ color: "#C8A96E" }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "rgba(240,235,225,0.65)" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#C8A96E" }}>{t.client_name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA / CONTACTO ── */}
      <section style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "#C8A96E" }}>
              ¿Listo para transformar tu negocio?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: "var(--font-playfair), serif", color: "#F0EBE1" }}>
              Hablemos
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm mb-12" style={{ color: "rgba(240,235,225,0.4)" }}>
              Consulta inicial gratuita · Sin compromiso · Miami, FL
            </motion.p>
            <motion.a
              variants={fadeUp}
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-4 text-sm font-semibold"
              style={{ backgroundColor: "#C8A96E", color: "#0A0A0A" }}
              whileHover={{ backgroundColor: "#E8D5A3" }}
            >
              Agendar Consulta por WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER MARCA ── */}
      <div className="text-center py-6" style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid rgba(200,169,110,0.08)" }}>
        <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(200,169,110,0.3)" }}>
          RYA International LLC · Miami, FL · Powered by Páginalo PR
        </p>
      </div>

    </div>
  );
}
