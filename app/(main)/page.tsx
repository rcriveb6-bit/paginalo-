"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const wa = "https://wa.me/17873243240";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

const gradient = {
  background: "linear-gradient(90deg, #00B5B5, #FF7F7F)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const WaIcon = () => (
  <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WaBtn = ({ label }: { label: string }) => (
  <a href={wa} target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
    style={{ backgroundColor: "#FF7F7F", boxShadow: "0 4px 20px rgba(255,127,127,0.25)" }}
  >
    <WaIcon /> {label}
  </a>
);

const SectionLabel = ({ text }: { text: string }) => (
  <div className="mb-5">
    <div className="w-8 h-[3px] bg-[#00B5B5] mb-3 rounded-full" />
    <p className="text-[11px] font-black tracking-[0.25em] uppercase text-[#00B5B5]">{text}</p>
  </div>
);

const Divider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-[#00B5B5]/20 to-transparent" />
);

const Check = () => (
  <svg className="h-4 w-4 text-[#00B5B5] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const XIcon = () => (
  <svg className="h-4 w-4 text-[#FF7F7F] shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="font-semibold text-[#1E3A5F] group-hover:text-[#00B5B5] transition-colors text-sm md:text-base">{q}</span>
        <svg className={`h-4 w-4 text-[#00B5B5] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const packages = [
  {
    icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>,
    title: "Sitio Web Profesional",
    items: ["Diseño moderno, rápido y responsive", "Optimizado para Google (SEO básico)", "WhatsApp y formulario de contacto", "Dominio y hosting el primer año"],
  },
  {
    icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>,
    title: "Automatización con IA",
    items: ["Chatbot en WhatsApp activo 24/7", "Responde preguntas frecuentes solo", "Califica leads antes de pasarlos a ti", "Configurado para tu negocio específico"],
    featured: true,
  },
  {
    icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>,
    title: "Presencia en Google",
    items: ["Perfil de Google Business optimizado", "Tu negocio visible en Google Maps", "Estrategia base de redes sociales", "Gestión de reseñas y reputación online"],
  },
];

const personas = [
  { emoji: "🏪", title: "Dueño de negocio local", desc: "Tienda, restaurante, salón, barbería, clínica. Quieres que los clientes te encuentren en Google y puedan contactarte fácil." },
  { emoji: "🛒", title: "Emprendedor con producto", desc: "Tienes algo que vender — velas, ropa, joyería, comida — y necesitas una tienda online que funcione sola mientras tú produces." },
  { emoji: "💼", title: "Profesional independiente", desc: "Abogado, médico, coach, consultor. Necesitas proyectar credibilidad y que tus clientes te encuentren antes que a la competencia." },
];

const projects = [
  { num: "01", href: "https://liorayco.netlify.app/", live: true, category: "E-Commerce · Velas", title: "Liora & Co.", desc: "Tienda online 24/7 con cobros automáticos e inventario en tiempo real." },
  { num: "02", href: null, live: false, category: "Thrift Shop · Moda", title: "RYA Shop", desc: "Catálogo digital elegante conectado a WhatsApp para ventas personalizadas." },
  { num: "03", href: "https://solar-crm-seven-mu.vercel.app/login", live: true, category: "CRM · Energía Solar", title: "CRM Solar", desc: "Plataforma a la medida para equipos de ventas: cotizaciones, leads y seguimiento." },
];

const faqs = [
  { q: "¿Cuánto cuesta?", a: "Cada proyecto es único. Escríbenos por WhatsApp y en 24 horas te enviamos una propuesta con precio exacto." },
  { q: "¿En cuánto tiempo está listo?", a: "Proyectos estándar entre 10 y 14 días hábiles. E-commerce o CRM pueden tomar 3-4 semanas." },
  { q: "¿Necesito saber de tecnología?", a: "Para nada. Nosotros manejamos todo — diseño, código, configuración y lanzamiento. Tú solo apruebas." },
  { q: "¿Qué pasa después del lanzamiento?", a: "Incluimos capacitación y 30 días de soporte gratuito post-lanzamiento." },
  { q: "¿Trabajan solo en Puerto Rico?", a: "Principalmente Puerto Rico. Podemos trabajar con clientes en EEUU o Latinoamérica." },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center bg-[#0A1628] overflow-hidden px-6 text-center pb-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #00B5B5 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,181,181,0.10) 0%, rgba(255,127,127,0.06) 100%)" }} />

        <motion.div initial="hidden" animate="show" variants={stagger} className="relative z-10 max-w-2xl w-full">
          {/* Wordmark tipográfico */}
          <motion.div variants={fadeUp} className="flex justify-center mb-7">
            <span className="text-3xl font-black tracking-tight" style={gradient}>
              Páginalo
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00B5B5]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-[#00B5B5]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00B5B5] animate-pulse shrink-0" />
              Agencia IA · Puerto Rico 🇵🇷
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5"
          >
            Tu negocio completo<br />
            en internet<br />
            <span style={gradient}>en 2 semanas</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-sm md:text-base text-white/45 mb-9 leading-relaxed max-w-md mx-auto">
            Sitio web + chatbot IA + presencia en Google.<br />
            Todo incluido. Tú solo te enfocas en tu negocio.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-2.5">
            <WaBtn label="Consulta gratis · Sin compromiso" />
            <p className="text-white/25 text-xs">Respuesta en 24 horas</p>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #EEF7F7)" }} />
      </section>

      {/* ══ STATS ════════════════════════════════════════════════════════ */}
      <section className="py-10 border-b border-[#00B5B5]/10" style={{ background: "#EEF7F7" }}>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[{ num: "3+", label: "Negocios lanzados" }, { num: "24/7", label: "Chatbot activo" }, { num: "2 sem.", label: "Tiempo de entrega" }].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-black text-[#1E3A5F]">{s.num}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ EL PROBLEMA ══════════════════════════════════════════════════ */}
      <section className="relative bg-white py-20 overflow-hidden">
        <span className="absolute right-6 top-4 text-[120px] font-black select-none pointer-events-none leading-none" style={{ color: "rgba(0,181,181,0.04)" }}>01</span>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Columna izquierda */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <motion.div variants={fadeUp}><SectionLabel text="El problema" /></motion.div>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-8 leading-tight">
                ¿Por qué tu negocio todavía no vende en internet?
              </motion.h2>
              <motion.div variants={fadeUp} className="inline-block rounded-xl border border-[#00B5B5]/20 px-5 py-4" style={{ background: "#EEF7F7" }}>
                <p className="text-sm font-semibold text-[#1E3A5F]">
                  Nosotros resolvemos todo esto por ti.{" "}
                  <span className="text-[#00B5B5]">En 2 semanas.</span>
                </p>
              </motion.div>
            </motion.div>

            {/* Columna derecha */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="space-y-3 md:pt-14">
              {[
                "No tienes tiempo para manejar un sitio web",
                "Contestas los mismos mensajes de WhatsApp 50 veces al día",
                "Tus clientes no te encuentran en Google",
                "La competencia ya tiene presencia digital — tú todavía no",
                "No sabes por dónde empezar ni cuánto cuesta",
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 rounded-lg bg-gray-50 px-4 py-3 border border-gray-100">
                  <XIcon />
                  <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      <Divider />

      {/* ══ PAQUETE ══════════════════════════════════════════════════════ */}
      <section id="servicios" className="relative py-20 overflow-hidden" style={{ background: "#EEF7F7" }}>
        <span className="absolute right-6 top-4 text-[120px] font-black select-none pointer-events-none leading-none" style={{ color: "rgba(0,181,181,0.04)" }}>02</span>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp}><SectionLabel text="Paquete todo incluido" /></motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-10 leading-tight">
              Todo lo que necesitas para vender en internet
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5 items-start">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.title} variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border p-6 transition-all duration-300 ${
                  pkg.featured
                    ? "bg-white border-[#00B5B5]/40 shadow-xl shadow-[#00B5B5]/10 md:scale-[1.05] md:-translate-y-1 border-t-2 border-t-[#00B5B5]"
                    : "bg-white border-gray-100 border-t-2 border-t-[#00B5B5]/20"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-black tracking-[0.15em] uppercase text-white" style={{ background: "linear-gradient(90deg, #00B5B5, #FF7F7F)" }}>
                      ✦ Más Popular
                    </span>
                  </div>
                )}
                <div className={`inline-flex items-center justify-center h-10 w-10 rounded-lg mb-4 ${pkg.featured ? "bg-[#00B5B5]/15 text-[#00B5B5]" : "bg-[#00B5B5]/10 text-[#00B5B5]"}`}>
                  {pkg.icon}
                </div>
                <h3 className="font-black text-[#1E3A5F] mb-4 text-base">{pkg.title}</h3>
                <ul className="space-y-2.5">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check />
                      <span className="text-sm text-gray-500 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 flex flex-col items-center gap-2">
            <WaBtn label="Quiero saber el precio" />
            <p className="text-xs text-gray-400">Precio exacto en 24 horas · Sin compromiso</p>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ══ PARA QUIÉN ═══════════════════════════════════════════════════ */}
      <section className="relative bg-white py-20 overflow-hidden">
        <span className="absolute right-6 top-4 text-[120px] font-black select-none pointer-events-none leading-none" style={{ color: "rgba(0,181,181,0.04)" }}>03</span>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp}><SectionLabel text="¿Para quién es?" /></motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-10 leading-tight">
              Páginalo es ideal si eres...
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {personas.map((p, i) => (
              <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-gray-100 p-6 border-l-4 border-l-[#00B5B5]/30"
                style={{ background: "#FAFCFF" }}
              >
                <span className="text-2xl mb-3 block">{p.emoji}</span>
                <h3 className="font-black text-[#1E3A5F] text-sm mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ PORTAFOLIO ═══════════════════════════════════════════════════ */}
      <section id="portafolio" className="relative py-20 overflow-hidden" style={{ background: "#EEF7F7" }}>
        <span className="absolute right-6 top-4 text-[120px] font-black select-none pointer-events-none leading-none" style={{ color: "rgba(0,181,181,0.04)" }}>04</span>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp}><SectionLabel text="Portafolio" /></motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-10 leading-tight">
              Ya lo hicimos para ellos
            </motion.h2>
          </motion.div>
          <div className="divide-y divide-[#00B5B5]/10">
            {projects.map((p, i) => {
              const row = (
                <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08 }}
                  className={`group flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-5 px-4 rounded-lg transition-colors duration-200 ${p.live ? "cursor-pointer hover:bg-white" : "cursor-default"}`}
                >
                  <span className="text-3xl font-black select-none leading-none shrink-0 w-12 transition-colors group-hover:text-[#00B5B5]/30" style={{ color: "rgba(0,181,181,0.12)" }}>{p.num}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className={`font-black text-[#1E3A5F] text-base ${p.live ? "group-hover:text-[#00B5B5]" : ""} transition-colors`}>{p.title}</h3>
                      <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#00B5B5] bg-[#00B5B5]/10 px-2 py-0.5 rounded-full">{p.category}</span>
                      {!p.live && <span className="text-[10px] font-bold tracking-widest uppercase bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Próximamente</span>}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>
                  {p.live && <span className="text-gray-300 group-hover:text-[#00B5B5] group-hover:translate-x-1 transition-all text-lg shrink-0 hidden md:block">→</span>}
                </motion.div>
              );
              return p.href ? (
                <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="block">{row}</a>
              ) : <div key={p.title}>{row}</div>;
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-20 overflow-hidden">
        <span className="absolute right-6 top-4 text-[120px] font-black select-none pointer-events-none leading-none" style={{ color: "rgba(0,181,181,0.04)" }}>05</span>
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp}><SectionLabel text="Preguntas frecuentes" /></motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-8 leading-tight">
              ¿Tienes dudas?
            </motion.h2>
            <motion.div variants={fadeUp} className="bg-gray-50 rounded-2xl border border-gray-100 px-5 max-w-2xl divide-y divide-gray-100">
              {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA FINAL ════════════════════════════════════════════════════ */}
      <section id="contacto" className="relative bg-[#0A1628] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, white, transparent)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #00B5B5 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-24 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <motion.p variants={fadeUp} className="mb-3 text-[11px] font-black tracking-[0.25em] uppercase text-[#00B5B5]">
              Consulta gratuita · Sin compromiso
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
              ¿Empezamos?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/35 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
              Escríbenos hoy y en 24 horas tienes una propuesta con precio exacto.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-2.5">
              <WaBtn label="Escríbenos por WhatsApp" />
              <p className="text-white/20 text-xs">Respuesta garantizada en 24 horas</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ FLOATING WA ══════════════════════════════════════════════════ */}
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
