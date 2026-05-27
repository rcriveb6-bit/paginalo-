"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const wa = "https://wa.me/17873243240";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const WaIcon = () => (
  <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const projects = [
  {
    num: "01",
    href: "https://liorayco.netlify.app/",
    live: true,
    category: "E-Commerce · Velas",
    title: "Liora & Co.",
    description: "Tienda online lista para recibir órdenes 24/7. Cobros automáticos, inventario en tiempo real, catálogo de aromas.",
  },
  {
    num: "02",
    href: null,
    live: false,
    category: "Thrift Shop · Moda",
    title: "RYA Shop",
    description: "Vitrina elegante con catálogo digital conectado a WhatsApp. Cada pieza única, curada a mano en Puerto Rico.",
  },
  {
    num: "03",
    href: "https://solar-crm-seven-mu.vercel.app/login",
    live: true,
    category: "CRM · Energía Solar",
    title: "CRM Solar",
    description: "Plataforma a la medida para equipos de ventas solares. Cotizaciones, leads y seguimiento en un solo lugar.",
  },
];

const services = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Diseño Web",
    body: "Sitios rápidos, modernos y optimizados para convertir visitantes en clientes. Visible en Google desde el primer día.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    title: "Marketing Digital",
    body: "Google Maps, redes sociales y anuncios estratégicos para que tus clientes ideales te encuentren a ti primero.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Automatización con IA",
    body: "Tu empleado digital: responde preguntas frecuentes por WhatsApp las 24 horas para que tú te enfoques en entregar el servicio.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A1628] overflow-hidden px-6 text-center">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: "radial-gradient(circle, #00B5B5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20"
          style={{ background: "radial-gradient(ellipse, #00B5B5 0%, #FF7F7F 100%)" }} />

        <motion.div initial="hidden" animate="show" variants={stagger} className="relative z-10 max-w-4xl w-full">
          <motion.div variants={fadeUp} className="flex justify-center mb-10">
            <Image
              src="/paginalo-hero.png"
              alt="Páginalo"
              width={380}
              height={120}
              className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] h-auto object-contain brightness-[1.15]"
              priority
            />
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8"
          >
            Tu negocio<br />
            <span style={{
              background: "linear-gradient(90deg, #00B5B5, #FF7F7F)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              merece
            </span>{" "}
            <span className="text-white">estar</span><br />
            en internet
          </motion.h1>

          <motion.p variants={fadeUp}
            className="max-w-md mx-auto text-sm md:text-base text-white/40 mb-10 leading-relaxed"
          >
            Creamos sitios web profesionales y automatizamos procesos con IA.<br className="hidden md:block" />
            Desde San Juan, Puerto Rico.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.04] hover:brightness-110"
              style={{ backgroundColor: "#FF7F7F", boxShadow: "0 0 40px rgba(255,127,127,0.25)" }}
            >
              <WaIcon /> Contáctanos gratis
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] text-white/20 tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </div>
      </section>

      {/* ══ MARQUEE ══════════════════════════════════════════════════════ */}
      <div className="bg-[#00B5B5] py-3.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-white text-xs font-semibold tracking-[0.2em] uppercase shrink-0">
              Diseño Web · Marketing Digital · Automatización IA · Puerto Rico ·
            </span>
          ))}
        </div>
      </div>

      {/* ══ PORTAFOLIO ═══════════════════════════════════════════════════ */}
      <section id="portafolio" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">Portafolio</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1628]">
              Marcas que hemos llevado<br className="hidden md:block" /> al mundo digital
            </h2>
          </motion.div>

          <div className="divide-y divide-gray-100">
            {projects.map((p, i) => {
              const row = (
                <motion.div
                  key={p.title}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08 }}
                  className={`group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 px-4 -mx-4 rounded-xl transition-all duration-300 ${p.live ? "cursor-pointer hover:bg-[#F8F8F8]" : "cursor-default"}`}
                >
                  {/* Number */}
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#00B5B5]/20 transition-colors duration-300 leading-none shrink-0 w-16 select-none">
                    {p.num}
                  </span>

                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className={`text-xl font-black text-[#0A1628] ${p.live ? "group-hover:text-[#00B5B5]" : ""} transition-colors duration-300`}>
                        {p.title}
                      </h3>
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#00B5B5] bg-[#00B5B5]/10 px-2 py-0.5 rounded-full">
                        {p.category}
                      </span>
                      {!p.live && (
                        <span className="text-[10px] font-bold tracking-widest uppercase bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                          Próximamente
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xl">{p.description}</p>
                  </div>

                  {/* Arrow */}
                  {p.live && (
                    <span className="text-gray-200 group-hover:text-[#00B5B5] group-hover:translate-x-1 transition-all duration-300 text-2xl font-light shrink-0 hidden md:block">
                      →
                    </span>
                  )}
                </motion.div>
              );

              return p.href ? (
                <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                  {row}
                </a>
              ) : (
                <div key={p.title}>{row}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ SERVICIOS ════════════════════════════════════════════════════ */}
      <section id="servicios" className="bg-[#F8F8F8]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left — statement */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
              className="md:sticky md:top-28"
            >
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">Servicios</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A1628] leading-tight">
                Construimos tu presencia.
                <br />
                <span className="text-[#0A1628]/30">Tú te enfocas en lo tuyo.</span>
              </h2>
              <div className="mt-10 hidden md:block">
                <a href={wa} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF7F7F] hover:underline transition-all"
                >
                  <WaIcon /> Hablemos de tu proyecto
                </a>
              </div>
            </motion.div>

            {/* Right — service list */}
            <div className="divide-y divide-gray-200">
              {services.map((s, i) => (
                <motion.div key={s.title}
                  variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1 }}
                  className="py-8 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-[#00B5B5]/10 text-[#00B5B5]">
                      {s.icon}
                    </div>
                    <h3 className="font-bold text-[#0A1628]">{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACTO ══════════════════════════════════════════════════════ */}
      <section id="contacto" className="bg-[#0A1628] overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-15"
            style={{ background: "radial-gradient(ellipse, #00B5B5 0%, #FF7F7F 100%)" }} />

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">
              Consulta gratuita · Sin compromiso
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6"
            >
              ¿Hablamos?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/35 text-sm mb-12 max-w-sm mx-auto leading-relaxed">
              Escríbenos hoy y en 24 horas te decimos exactamente cómo llevar tu negocio al próximo nivel.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href={wa} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04] hover:brightness-110"
                style={{ backgroundColor: "#FF7F7F", boxShadow: "0 0 50px rgba(255,127,127,0.2)" }}
              >
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ FLOATING WHATSAPP ════════════════════════════════════════════ */}
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all duration-200">
          <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>

    </div>
  );
}
