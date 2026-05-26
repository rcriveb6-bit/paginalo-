"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const wa = "https://wa.me/17873243240";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <div className="text-[#1E3A5F] overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#F8F8F8] overflow-hidden px-6 text-center">

        {/* Dot grid sutil teal */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #00B5B5 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow teal sutil */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: "rgba(0,181,181,0.04)" }} />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 max-w-3xl"
        >
          {/* Logo hero — incluye ícono, nombre y tagline */}
          <motion.div variants={fadeUp} className="flex justify-center mb-10">
            <Image
              src="/paginalo-hero.png"
              alt="Páginalo — Tu negocio merece estar en internet"
              width={560}
              height={180}
              className="w-full max-w-[420px] md:max-w-[520px] h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="max-w-lg mx-auto text-base md:text-lg leading-relaxed text-[#1E3A5F]/55"
          >
            Creamos sitios web profesionales, automatizamos procesos con IA y construimos
            tu presencia digital desde San Juan, Puerto Rico.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
              style={{ backgroundColor: "#FF7F7F", boxShadow: "0 4px 24px rgba(255,127,127,0.25)" }}
            >
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contáctanos gratis
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[#1E3A5F] hover:bg-[#1E3A5F]/5"
              style={{ borderColor: "rgba(30,58,95,0.25)", color: "#1E3A5F" }}
            >
              Ver portafolio
              <span>↓</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="text-[10px] text-[#1E3A5F]/30 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#00B5B5]/30 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS
      ══════════════════════════════════════════ */}
      <section id="servicios" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-14">
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
                body: "Sitios rápidos, modernos y optimizados para convertir visitantes en clientes. Tu negocio visible en Google desde el primer día.",
                delay: 0,
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                ),
                title: "Marketing Digital",
                body: "Google Maps, redes sociales y anuncios estratégicos para que tus clientes ideales te encuentren a ti primero, no a la competencia.",
                delay: 0.1,
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                ),
                title: "Automatización con IA",
                body: "Tu propio empleado digital: Contestamos las preguntas frecuentes de tus clientes por WhatsApp 24/7, para que tú solo tengas que enfocarte en entregar el servicio.",
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
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm cursor-default transition-all duration-300 hover:shadow-md hover:border-[#00B5B5]/30"
              >
                <div className="mb-5 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-[#00B5B5]/10 text-[#00B5B5] group-hover:bg-[#00B5B5]/18 transition-colors">
                  {s.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PORTAFOLIO
      ══════════════════════════════════════════ */}
      <section id="portafolio" className="bg-[#F8F8F8]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">Portafolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-14">
              Marcas que hemos llevado al mundo digital
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                href: "/liora",
                external: false,
                bg: "bg-[#FEFAF5]",
                badge: "E-Commerce · Velas",
                location: "Toa Alta, PR",
                title: "Liora & Co.",
                description: "Una tienda online lista para recibir órdenes a cualquier hora. Automatizamos todo el proceso de compra para que Liora pueda vender sus velas a todo Puerto Rico sin tener que contestar mensajes para cobrar.",
                tags: ["Tienda 24/7", "Cobros Automáticos", "Cero Estrés"],
                accentColor: "#C9A84C",
                delay: 0,
              },
              {
                href: "/rya",
                external: false,
                bg: "bg-white",
                badge: "Thrift Shop · Moda",
                location: "Puerto Rico",
                title: "RYA Shop",
                description: "Una vitrina elegante que proyecta confianza. Conectamos su inventario exclusivo directamente con un botón a WhatsApp, cerrando la distancia entre el cliente y la venta de forma rápida y personal.",
                tags: ["Catálogo Digital", "Ventas por WhatsApp", "Diseño Custom"],
                accentColor: "#C8A96E",
                delay: 0.1,
              },
              {
                href: "#proximamente",
                external: false,
                bg: "bg-[#F5FAFA]",
                badge: "CRM · Energía Solar",
                location: "Puerto Rico",
                title: "CRM Solar",
                description: "Plataforma a la medida para equipos de ventas de energía solar. Cotizaciones, leads y seguimiento en un solo lugar.",
                tags: ["Herramienta de Ventas", "Cotizador Rápido", "Eficiencia"],
                accentColor: "#00B5B5",
                delay: 0.2,
              },
            ].map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: p.delay }}
                className="h-full"
              >
                <Link
                  href={p.href}
                  className={`group relative flex flex-col justify-between h-full rounded-2xl border border-gray-100 ${p.bg} p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#00B5B5]/25`}
                  onClick={p.href === "#proximamente" ? (e) => e.preventDefault() : undefined}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${p.accentColor}, transparent)` }} />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#00B5B5]">{p.badge}</span>
                      <span className="text-[10px] font-medium text-[#1E3A5F]/35">{p.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-3 group-hover:text-[#00B5B5] transition-colors duration-300">
                      {p.title}
                      {p.href === "#proximamente" && (
                        <span className="ml-2 text-[9px] font-semibold tracking-widest uppercase bg-[#00B5B5]/10 text-[#00B5B5] px-2 py-0.5 rounded-full">Próximamente</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#00B5B5]/10 text-[#00B5B5]">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.href !== "#proximamente" && (
                      <span className="text-[#00B5B5] text-lg group-hover:translate-x-1.5 transition-transform duration-300 shrink-0 ml-2">→</span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section id="contacto" className="relative overflow-hidden bg-[#1E3A5F]">
        {/* Teal line top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,181,181,0.5), transparent)" }} />
        {/* Glow sutil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: "rgba(0,181,181,0.08)" }} />

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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              ¿Hacemos brillar<br />tu negocio?
            </h2>
            <p className="text-white/45 text-base mb-12 max-w-md mx-auto">
              Escríbenos hoy y en 24 horas te decimos exactamente cómo llevar tu negocio al próximo nivel.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
              style={{ backgroundColor: "#FF7F7F", boxShadow: "0 4px 32px rgba(255,127,127,0.3)" }}
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
          FLOATING WHATSAPP
      ══════════════════════════════════════════ */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50"
      >
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
