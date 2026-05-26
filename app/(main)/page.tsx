"use client";

import Link from "next/link";
import { motion, useInView, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const wa = "https://wa.me/17875104504";

/* ─── Animated counter ──────────────────────────── */
function StatCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [scope, animate] = useAnimate();
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = to / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setDisplayed(to); clearInterval(timer); }
      else setDisplayed(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      <span ref={scope}>{displayed}</span>{suffix}
    </span>
  );
}

/* ─── Section fade-up wrapper ───────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HomePage() {
  return (
    <div className="bg-[#0F1B2D] text-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,181,181,0.45) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00B5B5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00B5B5]/30 bg-[#00B5B5]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#00B5B5]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00B5B5] animate-pulse" />
            Puerto Rico · Diseño Web · Automatización IA
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Tu negocio merece{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(90deg, #00B5B5, #22d3ee, #818cf8, #00B5B5)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientFlow 5s ease infinite",
              }}
            >
              estar en internet
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-6 max-w-xl mx-auto text-base md:text-lg text-white/55 leading-relaxed"
          >
            Creamos sitios web profesionales, automatizamos procesos con IA y construimos
            tu presencia digital desde San Juan, Puerto Rico.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#00B5B5]/25 transition-all hover:shadow-[#00B5B5]/40 hover:scale-[1.03]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contáctanos gratis
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white transition-all"
            >
              Ver portafolio
              <span className="text-base">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="bg-[#0A1220] border-y border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
          >
            {[
              { value: 25, suffix: "+", label: "Clientes activos" },
              { value: 40, suffix: "+", label: "Proyectos completados" },
              { value: 3,  suffix: " años", label: "De experiencia" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <span
                  className="text-5xl md:text-6xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #00B5B5, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <StatCounter to={s.value} suffix={s.suffix} />
                </span>
                <p className="text-sm text-white/40 tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND CAROUSEL
      ══════════════════════════════════════════ */}
      <section className="bg-[#0F1B2D] border-b border-white/5 py-6 overflow-hidden">
        <div className="flex">
          <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
            {[
              "✦ Liora & Co.", "✦ RYA Shop", "✦ Tu Marca", "✦ Puerto Rico 🇵🇷",
              "✦ Diseño Web", "✦ IA Automation", "✦ WhatsApp Bots",
              "✦ Liora & Co.", "✦ RYA Shop", "✦ Tu Marca", "✦ Puerto Rico 🇵🇷",
              "✦ Diseño Web", "✦ IA Automation", "✦ WhatsApp Bots",
            ].map((item, i) => (
              <span key={i} className="text-sm font-semibold tracking-widest uppercase text-white/25 whitespace-nowrap hover:text-[#00B5B5] transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS
      ══════════════════════════════════════════ */}
      <section id="servicios" className="bg-[#0F1B2D]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
              Lo que construimos para ti
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                ),
                title: "Diseño Web",
                body: "Sitios rápidos, modernos y optimizados para convertir visitantes en clientes desde el primer día.",
                delay: 0,
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
                title: "Automatización con IA",
                body: "Chatbots, citas automáticas y flujos de WhatsApp que trabajan por ti 24/7 sin que muevas un dedo.",
                delay: 0.1,
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                ),
                title: "Presencia Digital",
                body: "Google Maps, redes sociales y anuncios para que te encuentren primero cuando busquen lo que ofreces.",
                delay: 0.2,
              },
            ].map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: s.delay }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/8 bg-[#0D1B2A] p-8 cursor-default transition-all duration-300"
                style={{ boxShadow: "0 0 0 0 rgba(0,181,181,0)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 32px 0 rgba(0,181,181,0.12), 0 0 0 1px rgba(0,181,181,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 rgba(0,181,181,0)";
                }}
              >
                <div className="mb-5 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-[#00B5B5]/10 text-[#00B5B5] group-hover:bg-[#00B5B5]/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PORTAFOLIO / CLIENTES
      ══════════════════════════════════════════ */}
      <section id="portafolio" className="bg-[#0A1220]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">Portafolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
              Marcas que hemos llevado al mundo digital
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Liora */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Link
                href="/liora"
                className="group relative overflow-hidden block rounded-2xl"
                style={{ backgroundColor: "#F5EDE0", minHeight: "300px" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 70% 30%, rgba(201,168,76,0.2) 0%, transparent 60%)" }} />
                <div className="relative p-10 h-full flex flex-col justify-between" style={{ minHeight: "300px" }}>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#A0522D" }}>
                      Velas · Toa Alta PR
                    </p>
                    <h2 className="text-5xl font-medium italic mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>
                      Liora & Co.
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(44,26,14,0.55)", maxWidth: "260px" }}>
                      Velas artesanales de soya, hechas a mano con aromas únicos desde Puerto Rico.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-8">
                    <span className="text-sm font-semibold" style={{ color: "#C9A84C" }}>Ver proyecto</span>
                    <span className="text-lg transition-transform group-hover:translate-x-2 duration-300" style={{ color: "#C9A84C" }}>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* RYA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
            >
              <Link
                href="/rya"
                className="group relative overflow-hidden block rounded-2xl"
                style={{ backgroundColor: "#0A0A0A", minHeight: "300px" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 30% 70%, rgba(200,169,110,0.15) 0%, transparent 60%)" }} />
                <div className="relative p-10 h-full flex flex-col justify-between" style={{ minHeight: "300px" }}>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#C8A96E" }}>
                      Moda · Puerto Rico
                    </p>
                    <h2 className="text-5xl font-medium mb-3" style={{ fontFamily: "var(--font-playfair), serif", color: "#F0EBE1" }}>
                      RYA Shop
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,235,225,0.45)", maxWidth: "260px" }}>
                      La primera marca thrift curada de PR — moda consciente para almas sofisticadas.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-8">
                    <span className="text-sm font-semibold" style={{ color: "#C8A96E" }}>Ver proyecto</span>
                    <span className="text-lg transition-transform group-hover:translate-x-2 duration-300" style={{ color: "#C8A96E" }}>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Tu proyecto */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="md:col-span-2"
            >
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden block rounded-2xl border border-dashed border-white/10 hover:border-[#00B5B5]/50 transition-all duration-300"
                style={{ minHeight: "90px" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,181,181,0.05) 0%, transparent 70%)" }} />
                <div className="relative p-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white/20 group-hover:text-[#00B5B5] transition-colors duration-300">
                      TU PROYECTO
                    </h2>
                    <p className="text-sm text-white/20 mt-1 group-hover:text-white/40 transition-colors">
                      Reserva tu espacio · Hablemos por WhatsApp
                    </p>
                  </div>
                  <span className="text-2xl text-white/15 group-hover:text-[#00B5B5] group-hover:translate-x-2 transition-all duration-300">→</span>
                </div>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section id="contacto" className="relative overflow-hidden">
        {/* Gradient bg */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0F1B2D 0%, #0a2a3a 50%, #0F1B2D 100%)",
          }}
        />
        {/* Teal glow top-center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00B5B5]/40 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">
              Consulta gratuita · Sin compromiso
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              ¿Hacemos brillar<br />tu negocio?
            </h2>
            <p className="text-white/40 text-base mb-12 max-w-md mx-auto">
              Escríbenos hoy y en 24 horas te decimos exactamente cómo llevar tu negocio al próximo nivel.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-bold text-white shadow-2xl shadow-[#00B5B5]/20 hover:shadow-[#00B5B5]/40 hover:scale-[1.04] transition-all duration-300"
            >
              <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FLOATING WHATSAPP — con pulse ring
      ══════════════════════════════════════════ */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-200">
          <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </span>
      </a>

    </div>
  );
}
