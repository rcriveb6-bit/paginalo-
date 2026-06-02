"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProcesoSection from "./ProcesoSection";

const CANVAS  = "#F9F9F9";
const NAVY    = "#1E3A5F";
const PRIMARY = "#022448";
const TEAL    = "#00B5B5";
const CORAL   = "#FF7F7F";
const BONE    = "#F8F8F8";
const MUTED   = "#43474e";

const WA_LINK = "https://wa.me/17875104504?text=Hola%2C%20quiero%20una%20consulta%20gratis%20para%20mi%20negocio";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.2, 0.8, 0.3, 1] as [number, number, number, number] },
});

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso",   href: "#proceso"   },
];

const techStack = [
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36" fill="currentColor">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6H36.2V26.4h13.7l62.1 89.6C122.9 104.4 128 84.9 128 64c0-35.3-28.7-64-64-64zm27.2 92.9L79.4 74.1V41.2h11.8v51.7z"/>
      </svg>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <svg viewBox="0 0 109 113" width="36" height="36">
        <path d="M63.7 110.2c-2.4 3-7.4 1.4-7.6-2.4l-1-67.6H100c7.7 0 12 8.9 7.2 14.9L63.7 110.2z" fill="#3ECF8E"/>
        <path d="M45.3 2.8c2.4-3 7.4-1.4 7.6 2.4l.7 67.6H9.3c-7.7 0-12-8.9-7.2-14.9L45.3 2.8z" fill="#3ECF8E" opacity=".5"/>
      </svg>
    ),
  },
  {
    name: "n8n",
    svg: (
      <svg viewBox="0 0 40 40" width="36" height="36">
        <rect x="0" y="0" width="40" height="40" rx="10" fill="#FF6D5A"/>
        <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="monospace">n8n</text>
      </svg>
    ),
  },
  {
    name: "Anthropic",
    svg: (
      <svg viewBox="0 0 256 176" width="48" height="30" fill="#191919">
        <path d="M171.3 0h-40.9l58.3 176h40.9L171.3 0ZM85.2 0 27 176h41.6l11.9-36.5h61.1l11.9 36.5h41.6L136.8 0H85.2Zm-8.4 104.6 20.8-63.8 20.8 63.8H76.8Z"/>
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 283 232" width="36" height="30" fill="#000">
        <path d="M141.68 0L283.36 232H0L141.68 0z"/>
      </svg>
    ),
  },
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 48 48" width="36" height="36">
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.5-1.45-.79-3-.79-4.59s.29-3.14.79-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    svg: (
      <svg viewBox="0 0 200 84" width="44" height="20">
        <path fill="#F38020" d="M130.3 57.3l2.9-9.9c.3-1.1-.3-1.5-1.4-1.2l-3.1 1.2c-.5.2-1.1.1-1.4-.4l-2.1-3.5c-.6-1-1.7-1-2.2 0l-2.1 3.5c-.3.5-.9.6-1.4.4l-3.1-1.2c-1.1-.4-1.7 0-1.4 1.2l2.9 9.9c.2.7.9 1.1 1.6.9l11.1-3.3c.7-.2 1-.7.7-1.6z"/>
        <path fill="#FBAD41" d="M170 41.4c-1.6-5.5-7.4-9.5-14-9.5-2.3 0-4.5.5-6.5 1.5-.5-8.3-7.5-14.9-16-14.9-8.9 0-16.1 7.2-16.1 16.1 0 .7.1 1.4.1 2.1-5.4.4-9.6 4.9-9.6 10.4 0 5.7 4.6 10.3 10.3 10.3h49.6c5.1 0 9.2-4.1 9.2-9.2 0-3.3-1.7-6.2-4.3-7.9-.5-.3-.6-.6-.7-.9z"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    svg: (
      <svg viewBox="0 0 32 32" width="36" height="36">
        <path fill="#25D366" d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.1C10.6 31.3 13.3 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm8.2 22.2c-.4 1-2.1 2-2.9 2.1-.8.1-1.5.4-5.2-1.1-4.3-1.7-7.1-6.1-7.3-6.4-.2-.3-1.7-2.3-1.7-4.4 0-2.1 1.1-3.1 1.5-3.5.4-.4.9-.5 1.2-.5.3 0 .6 0 .8.01.3.01.6.02.9.7.3.7 1.1 2.6 1.2 2.8.1.2.1.4 0 .7-.1.2-.2.4-.4.6-.2.2-.4.5-.5.6-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1.2-.2.8-1 1.1-1.3.3-.3.5-.2.9-.1.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1 1-.3 2z"/>
      </svg>
    ),
  },
];

const services = [
  {
    title: "Sitio Web Profesional",
    description: "Diseñado para convertir visitas en clientes. Rápido, seguro, y fácil de editar. Entregado en 2 semanas.",
    icon: "language",
    span: 7,
    stat: { value: "2 sem.", label: "Entrega garantizada" },
    color: TEAL,
  },
  {
    title: "Automatizaciones IA",
    description: "Elimina tareas repetitivas. Facturas, citas, seguimientos y más — automatizados con n8n y Claude.",
    icon: "account_tree",
    span: 5,
    stat: null,
    color: CORAL,
  },
  {
    title: "Chatbot IA 24/7",
    description: "Responde clientes a cualquier hora, agenda citas y filtra leads — mientras tú duermes.",
    icon: "smart_toy",
    span: 5,
    stat: null,
    color: TEAL,
  },
  {
    title: "Presencia en Google",
    description: "Aparece en el top de búsquedas locales. Google Business configurado y optimizado para Puerto Rico.",
    icon: "pin_drop",
    span: 7,
    stat: { value: "Top 3", label: "Búsqueda local PR" },
    color: CORAL,
  },
];

export default function Home() {
  return (
    <div className="mesh-gradient min-h-full font-body" style={{ color: PRIMARY }}>

      <div className="grain-dark" />

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 w-full z-50" style={{ padding: "1rem 1.5rem" }}>
        <nav
          className="glass-panel rounded-2xl flex items-center justify-between"
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "0.75rem 1.5rem" }}
        >
          <a href="#" className="flex items-center gap-2" aria-label="Páginalo inicio">
            <Image
              src="/logo-paginalo.png"
              alt="Páginalo"
              width={140}
              height={40}
              priority
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-label text-xs uppercase transition-colors"
                style={{ color: MUTED, letterSpacing: "0.15em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm font-semibold rounded-full transition-all"
            style={{ background: "#25D366", color: "#fff", padding: "0.5rem 1.1rem" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>chat</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "clamp(7rem, 12vw, 10rem) clamp(1rem, 4vw, 48px) clamp(4rem, 8vw, 7rem)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeIn(0)}>
              <span
                className="font-mono-label text-xs uppercase tracking-widest inline-block px-3 py-1 rounded-full"
                style={{
                  color: TEAL,
                  background: "rgba(0,181,181,0.1)",
                  border: "1px solid rgba(0,181,181,0.2)",
                  letterSpacing: "0.18em",
                }}
              >
                Agencia Digital · Puerto Rico
              </span>
            </motion.div>

            <motion.h1
              className="font-display display-heavy"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: PRIMARY }}
              {...fadeIn(0.1)}
            >
              Recupera tu{" "}
              <span className="italic" style={{ color: TEAL }}>tiempo.</span>
              <br />
              Nosotros
              <br />
              automatizamos
              <br />
              el resto.
            </motion.h1>

            <motion.p
              className="font-body text-base leading-relaxed"
              style={{ color: MUTED, maxWidth: "420px" }}
              {...fadeIn(0.2)}
            >
              Sitio web profesional, chatbot IA 24/7 y presencia en Google.
              Todo incluido. Entregado en 2 semanas.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mt-2" {...fadeIn(0.3)}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-semibold rounded-xl transition-all"
                style={{
                  background: PRIMARY,
                  color: "#fff",
                  padding: "0.875rem 2rem",
                  fontSize: "0.95rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = NAVY)}
                onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY)}
              >
                Consulta gratis →
              </a>
              <a
                href="#servicios"
                className="font-body font-semibold rounded-xl transition-all"
                style={{
                  background: "transparent",
                  color: PRIMARY,
                  border: `1.5px solid ${PRIMARY}`,
                  padding: "0.875rem 2rem",
                  fontSize: "0.95rem",
                }}
              >
                Ver servicios
              </a>
            </motion.div>
          </div>

          {/* Bento tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.3, 1] }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
              {/* Row 1: Next.js (span 2) + Supabase */}
              <div
                className="tech-card flex flex-col items-center justify-center gap-2"
                style={{ gridColumn: "span 2", padding: "20px 24px" }}
              >
                {techStack[0].svg}
                <span className="font-mono-label text-xs" style={{ color: MUTED }}>Next.js</span>
              </div>
              <div className="tech-card flex flex-col items-center justify-center gap-2" style={{ padding: "20px 16px" }}>
                {techStack[1].svg}
                <span className="font-mono-label text-xs" style={{ color: MUTED }}>Supabase</span>
              </div>
              {/* Row 2: n8n + Anthropic (span 2) */}
              <div className="tech-card flex flex-col items-center justify-center gap-2" style={{ padding: "20px 16px" }}>
                {techStack[2].svg}
                <span className="font-mono-label text-xs" style={{ color: MUTED }}>n8n</span>
              </div>
              <div
                className="tech-card flex flex-col items-center justify-center gap-2"
                style={{ gridColumn: "span 2", padding: "20px 24px" }}
              >
                {techStack[3].svg}
                <span className="font-mono-label text-xs" style={{ color: MUTED }}>Anthropic</span>
              </div>
              {/* Row 3: Vercel + Google + Cloudflare */}
              <div className="tech-card flex flex-col items-center justify-center gap-2" style={{ padding: "20px 16px" }}>
                {techStack[4].svg}
                <span className="font-mono-label text-xs" style={{ color: MUTED }}>Vercel</span>
              </div>
              <div className="tech-card flex flex-col items-center justify-center gap-2" style={{ padding: "20px 16px" }}>
                {techStack[5].svg}
                <span className="font-mono-label text-xs" style={{ color: MUTED }}>Google</span>
              </div>
              <div className="tech-card flex flex-col items-center justify-center gap-2" style={{ padding: "20px 16px" }}>
                {techStack[6].svg}
                <span className="font-mono-label text-xs" style={{ color: MUTED }}>Cloudflare</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" style={{ background: NAVY }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "clamp(3.5rem, 7vw, 7rem) clamp(1rem, 4vw, 48px)",
          }}
        >
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="font-mono-label text-xs uppercase tracking-widest block mb-4"
              style={{ color: TEAL, letterSpacing: "0.18em" }}
            >
              Servicios
            </span>
            <h2
              className="font-display display-heavy"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: BONE, maxWidth: "600px" }}
            >
              Todo lo que tu negocio necesita.
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "12px",
            }}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="service-card-dark"
                style={{
                  gridColumn: `span ${svc.span}`,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  minHeight: svc.span === 7 ? "220px" : "200px",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "36px", color: svc.color, opacity: 0.85 }}
                >
                  {svc.icon}
                </span>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.15rem", color: BONE, fontWeight: 700, lineHeight: 1.2 }}
                >
                  {svc.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)", flex: 1 }}
                >
                  {svc.description}
                </p>
                {svc.stat && (
                  <div
                    className="flex items-center gap-3 mt-auto pt-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="font-display" style={{ fontSize: "1.5rem", color: svc.color, fontWeight: 700 }}>
                      {svc.stat.value}
                    </span>
                    <span
                      className="font-mono-label text-xs uppercase"
                      style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em" }}
                    >
                      {svc.stat.label}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <ProcesoSection />

      {/* ── CTA ── */}
      <section style={{ background: BONE }}>
        <div
          className="text-center"
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 48px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <span
              className="font-mono-label text-xs uppercase tracking-widest"
              style={{ color: CORAL, letterSpacing: "0.18em" }}
            >
              ¿Empezamos?
            </span>
            <h2
              className="font-display display-heavy text-balance"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)", color: PRIMARY }}
            >
              El futuro de tu negocio{" "}
              <span
                className="italic"
                style={{
                  background: CORAL,
                  color: "#fff",
                  padding: "0 12px 4px",
                  display: "inline-block",
                  transform: "rotate(-1deg)",
                  borderRadius: "4px",
                }}
              >
                no espera.
              </span>
            </h2>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: MUTED, maxWidth: "460px" }}
            >
              Consulta gratis, sin compromiso. En 30 minutos sabes exactamente
              qué necesitas y cuánto cuesta.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-bold rounded-2xl flex items-center gap-3 transition-all"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  padding: "1rem 2.2rem",
                  fontSize: "1rem",
                  boxShadow: "0 8px 32px rgba(37,211,102,0.25)",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>rocket_launch</span>
                Iniciar ahora — gratis
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-semibold rounded-2xl transition-all"
                style={{
                  background: "transparent",
                  color: PRIMARY,
                  border: `1.5px solid ${PRIMARY}`,
                  padding: "1rem 2.2rem",
                  fontSize: "1rem",
                }}
              >
                Agendar llamada
              </a>
            </div>
            <p
              className="font-mono-label text-xs"
              style={{ color: "rgba(2,36,72,0.3)", letterSpacing: "0.12em" }}
            >
              DISPONIBILIDAD LIMITADA · PUERTO RICO
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: PRIMARY, color: "rgba(255,255,255,0.55)" }}>
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "2.5rem clamp(1rem, 4vw, 48px)",
          }}
        >
          <span
            className="font-display display-heavy"
            style={{ fontSize: "1.2rem", color: "#fff", letterSpacing: "-0.03em" }}
          >
            PÁGINALO
          </span>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://instagram.com/paginalo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Instagram
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              WhatsApp
            </a>
            <a href="mailto:hola@paginalo.co" className="transition-colors hover:text-white">
              hola@paginalo.co
            </a>
          </div>
          <span className="font-mono-label text-xs" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>
            © 2025 PÁGINALO
          </span>
        </div>
      </footer>

      {/* ── Floating WhatsApp ── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-lg"
        style={{ width: "56px", height: "56px", background: "#25D366" }}
      >
        <span className="absolute inset-0 rounded-full animate-pulse-ring" style={{ background: "#25D366" }} />
        <span className="material-symbols-outlined text-white" style={{ fontSize: "28px" }}>chat</span>
      </a>
    </div>
  );
}
