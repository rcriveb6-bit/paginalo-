"use client";

import Image from "next/image";
import { useState } from "react";

const wa = "https://wa.me/17875104504";
const ig = "https://www.instagram.com/paginalo";

const BG    = "#0b1322";
const TEAL  = "#4ddada";
const CORAL = "#FF7F7F";
const BONE  = "#F8F8F8";
const MUTED = "#bbc9c9";
const SURF_LOW = "#060e1c";

/* ── SVG logos for trust strip ───────────────────── */
const logos = [
  {
    name: "Next.js",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 180 180" className="w-8 h-8">
        <mask id="nx" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black"/>
        </mask>
        <g mask="url(#nx)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white"/>
          <rect x="115" y="54" width="12" height="72" fill="white"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    svg: (
      <svg viewBox="0 0 109 113" className="w-7 h-7">
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supaA)"/>
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supaB)" fillOpacity="0.2"/>
        <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
        <defs>
          <linearGradient id="supaA" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361"/>
            <stop offset="1" stopColor="#3ECF8E"/>
          </linearGradient>
          <linearGradient id="supaB" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EA4B71",
    svg: (
      <svg viewBox="0 0 60 30" className="w-14 h-7">
        <text x="0" y="24" fontFamily="monospace" fontWeight="800" fontSize="28" fill="#EA4B71">n8n</text>
      </svg>
    ),
  },
  {
    name: "Anthropic",
    color: "#D4A57A",
    svg: (
      <svg viewBox="0 0 100 40" className="w-24 h-8">
        <text x="0" y="30" fontFamily="Georgia, serif" fontWeight="700" fontSize="26" fill="#D4A57A">Anthropic</text>
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 76 65" className="w-7 h-7">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Google",
    color: "#4285F4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
];

/* ── Portfolio ────────────────────────────────────── */
const projects = [
  {
    title: "Liora & Co.",
    category: "E-Commerce · Velas artesanales",
    href: "https://www.liorayco.com/",
    gradient: "from-[#4ddada]/30 to-[#0b1322]/80",
    icon: "🕯️",
    color: TEAL,
  },
  {
    title: "RYA Shop",
    category: "Thrift Shop · Moda curada PR",
    href: "https://rya-alpha.vercel.app/",
    gradient: "from-[#FF7F7F]/30 to-[#0b1322]/80",
    icon: "👗",
    color: CORAL,
  },
  {
    title: "CRM Solar PR",
    category: "CRM · Energía Solar",
    href: "https://solar-crm-seven-mu.vercel.app/",
    gradient: "from-[#4ddada]/20 to-[#FF7F7F]/20",
    icon: "☀️",
    color: BONE,
  },
];

/* ── Nav links ────────────────────────────────────── */
const navLinks = [
  { label: "Servicios",   href: "#servicios"  },
  { label: "Proceso",     href: "#proceso"     },
  { label: "Portafolio",  href: "#portafolio"  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: BG, color: "#dbe2f7", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }} className="min-h-screen overflow-x-hidden">
      <div className="grain-dark" />

      {/* ══ NAV ══════════════════════════════════════════ */}
      <nav className="fixed top-0 w-full z-50" style={{ background: "rgba(11,19,34,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-paginalo.png"
              alt="Páginalo"
              width={130}
              height={36}
              className="h-9 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                style={{ color: MUTED, fontWeight: 700, fontSize: 15 }}
                className="hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>

          {/* WA button */}
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition-all hover:scale-105 active:scale-95"
            style={{ background: CORAL, color: BONE, boxShadow: "0 4px 20px rgba(255,127,127,0.3)" }}>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>

          {/* Hamburguesa mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menú">
            <span className={`block h-[2px] w-5 bg-white/70 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-[2px] w-5 bg-white/70 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-white/70 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden md:hidden"
              style={{ background: "rgba(11,19,34,0.98)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                    style={{ color: MUTED, fontWeight: 700 }}
                    className="hover:text-white transition-colors py-1">
                    {l.label}
                  </a>
                ))}
                <a href={wa} target="_blank" rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full px-5 py-3 text-sm font-bold text-center transition-all"
                  style={{ background: CORAL, color: BONE }}>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══ HERO ════════════════════════════════════════ */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-[1100px] mx-auto relative flex flex-col items-center text-center">
        <div className="hero-glow-dark -top-20 left-1/2 -translate-x-1/2" />

        {/* Badge */}
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-[11px] font-black tracking-[0.2em] uppercase"
          style={{ background: "rgba(77,218,218,0.1)", border: "1px solid rgba(77,218,218,0.2)", color: TEAL }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: TEAL }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: TEAL }} />
          </span>
          Agencia IA · Puerto Rico 🇵🇷
        </motion.div>

        {/* H1 */}
        <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-6 max-w-4xl"
          style={{ fontFamily: "var(--font-syne), sans-serif", color: BONE }}>
          Recupera tu tiempo.<br/>
          <span style={{ background: `linear-gradient(90deg, ${TEAL}, ${CORAL})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
            Nosotros automatizamos el resto.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.2 }}
          className="text-lg max-w-2xl mb-10 leading-relaxed" style={{ color: MUTED }}>
          Sitio web profesional + chatbot IA + presencia en Google. Todo incluido para tu negocio en Puerto Rico. Entregamos en 2 semanas.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-10">
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-sm transition-all hover:scale-105 active:scale-95"
            style={{ background: CORAL, color: BONE, boxShadow: "0 20px 60px rgba(255,127,127,0.25)" }}>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Consulta gratis
          </a>
          <a href="#portafolio"
            className="glass-card-dark inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-sm transition-all hover:bg-white/5"
            style={{ color: BONE }}>
            Ver proyectos
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0.4 }}
          className="flex flex-wrap items-center gap-6 justify-center pb-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem" }}>
          {[
            { icon:"⏱", text:"2 semanas de entrega" },
            { icon:"📍", text:"San Juan, PR" },
            { icon:"🤖", text:"Chatbot IA 24/7" },
          ].map(b => (
            <div key={b.text} className="flex items-center gap-2 text-sm font-bold" style={{ color: "#dbe2f7" }}>
              <span>{b.icon}</span> {b.text}
            </div>
          ))}
        </motion.div>

        {/* Hero mockup card */}
        <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.5 }}
          className="relative group w-full max-w-4xl mt-16">
          <div className="coral-glow-dark -bottom-20 -right-20" />
          <div className="group-hover:[transform:rotate(0deg)] transition-transform duration-500 shadow-2xl relative z-10 overflow-hidden rounded-xl"
            style={{ transform:"rotate(1.5deg)", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.10)", padding:"1rem" }}>
            {/* Browser bar */}
            <div className="flex items-center gap-2 mb-4 pb-2" style={{ borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background:"rgba(255,180,171,0.4)" }} />
                <div className="w-3 h-3 rounded-full" style={{ background:"rgba(255,179,177,0.4)" }} />
                <div className="w-3 h-3 rounded-full" style={{ background:`rgba(77,218,218,0.4)` }} />
              </div>
              <div className="h-4 flex-1 max-w-48 rounded-full ml-2 px-3 flex items-center text-xs" style={{ background:"rgba(255,255,255,0.04)", color:MUTED }}>
                solar-crm-seven-mu.vercel.app
              </div>
            </div>
            {/* Mock CRM dashboard */}
            <div className="rounded-lg w-full h-64 md:h-80 flex flex-col gap-4 p-6"
              style={{ background:"linear-gradient(135deg, #0b1322 0%, #18202e 60%, #0b2030 100%)" }}>
              <div className="grid grid-cols-3 gap-4">
                {[{l:"Leads",v:"142",c:TEAL},{l:"Cotizaciones",v:"38",c:BONE},{l:"Cierre",v:"68%",c:CORAL}].map(s => (
                  <div key={s.l} className="glass-card-dark rounded-xl p-4 text-center">
                    <p className="text-xs mb-1" style={{ color:MUTED }}>{s.l}</p>
                    <p className="text-2xl font-black" style={{ fontFamily:"var(--font-syne)", color:s.c }}>{s.v}</p>
                  </div>
                ))}
              </div>
              <div className="glass-card-dark rounded-xl p-4 flex-1">
                <p className="text-xs mb-3" style={{ color:MUTED }}>Pipeline mensual</p>
                <div className="flex items-end gap-2 h-16">
                  {[40,60,80,65,100,85].map((h,i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all" style={{ height:`${h}%`, background: i === 4 ? TEAL : `rgba(77,218,218,${0.15+i*0.1})` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Floating badges */}
          <div className="absolute -left-4 md:-left-8 top-1/4 glass-card-dark p-3 rounded-xl z-20 animate-bounce" style={{ animationDuration:"3s", boxShadow:`0 0 20px rgba(77,218,218,0.15)`, border:"1px solid rgba(77,218,218,0.2)" }}>
            <p className="text-[10px] font-black tracking-widest uppercase" style={{ color:MUTED }}>ENTREGA</p>
            <p className="text-xl font-black" style={{ fontFamily:"var(--font-syne)", color:TEAL }}>2 sem.</p>
          </div>
          <div className="absolute -right-4 md:-right-8 bottom-1/4 glass-card-dark p-3 rounded-xl z-20" style={{ boxShadow:`0 0 20px rgba(255,127,127,0.15)`, border:"1px solid rgba(255,127,127,0.2)" }}>
            <p className="text-[10px] font-black tracking-widest uppercase" style={{ color:MUTED }}>SOPORTE IA</p>
            <p className="text-xl font-black" style={{ fontFamily:"var(--font-syne)", color:CORAL }}>24/7</p>
          </div>
        </motion.div>
      </section>

      {/* ══ TRUST STRIP ═══════════════════════════════════ */}
      <section className="py-12 trust-strip" style={{ borderTop:"1px solid rgba(255,255,255,0.07)", borderBottom:"1px solid rgba(255,255,255,0.07)", background:"rgba(255,255,255,0.02)" }}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-wrap justify-center md:justify-between items-center gap-10">
          {logos.map(l => (
            <div key={l.name} className="trust-logo flex flex-col items-center gap-2 group">
              <div style={{ color: l.color }} className="transition-all duration-300">
                {l.svg}
              </div>
              <span className="text-xs font-bold tracking-wide" style={{ color: MUTED }}>{l.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICIOS ═════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 max-w-[1100px] mx-auto" id="servicios">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-[0.25em] uppercase mb-3" style={{ color:TEAL }}>Lo que hacemos</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily:"var(--font-syne)", color:BONE }}>
            Todo lo que necesita tu negocio
          </h2>
          <p className="max-w-xl mx-auto" style={{ color:MUTED }}>Tecnología de punta adaptada a la escala de tu negocio en Puerto Rico.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon:"🌐", title:"Sitio Web Profesional", desc:"Diseño moderno, rápido y responsive optimizado para Google. WhatsApp y formulario incluidos.", accent:TEAL, featured:false },
            { icon:"🤖", title:"Chatbot IA 24/7", desc:"Atención al cliente automatizada con n8n + Claude AI. Responde preguntas, califica leads y nunca duerme.", accent:CORAL, featured:true },
            { icon:"📍", title:"Presencia en Google", desc:"Google Business optimizado, visible en Maps, estrategia de reseñas y redes sociales.", accent:TEAL, featured:false },
          ].map(s => (
            <div key={s.title} className="glass-card-dark rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={s.featured ? { borderColor:`rgba(255,127,127,0.3)` } : {}}>
              {s.featured && (
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-black tracking-[0.15em] uppercase rounded-full px-3 py-1"
                    style={{ background:`linear-gradient(90deg, ${TEAL}, ${CORAL})`, color:BONE }}>
                    MÁS POPULAR
                  </span>
                </div>
              )}
              <div className="text-5xl mb-5">{s.icon}</div>
              <h3 className="text-xl font-black mb-3" style={{ fontFamily:"var(--font-syne)", color:BONE }}>{s.title}</h3>
              <p style={{ color:MUTED }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PROCESO ═══════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12" id="proceso" style={{ background:"rgba(6,14,28,0.6)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-xs font-black tracking-[0.25em] uppercase mb-3" style={{ color:TEAL }}>Metodología</p>
              <h2 className="text-3xl md:text-4xl font-black" style={{ fontFamily:"var(--font-syne)", color:BONE }}>Del acuerdo al lanzamiento</h2>
            </div>
            <p className="max-w-sm" style={{ color:MUTED }}>Un proceso ágil y transparente. Sin sorpresas, sin retrasos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-px" style={{ background:"rgba(255,255,255,0.07)" }} />
            {[
              { n:"01", title:"Análisis",    desc:"Entendemos tu negocio y definimos qué necesita exactamente.", day:"Día 1",    active:true },
              { n:"02", title:"Diseño",      desc:"Creamos la maqueta y tú la apruebas antes de codificar.",       day:"Días 2–4",  active:false },
              { n:"03", title:"Desarrollo",  desc:"Construcción con tecnologías modernas. Tú ves el progreso.",    day:"Días 5–12", active:false },
              { n:"04", title:"Lanzamiento", desc:"Deploy, capacitación y 30 días de soporte gratuito.",           day:"Día 14",   active:false },
            ].map(s => (
              <div key={s.n} className="space-y-4">
                <div className="w-16 h-16 rounded-2xl glass-card-dark flex items-center justify-center text-lg font-black"
                  style={s.active ? { fontFamily:"var(--font-syne)", color:TEAL, borderColor:`rgba(77,218,218,0.2)`, background:`rgba(77,218,218,0.05)` } : { fontFamily:"var(--font-syne)", color:BONE }}>
                  {s.n}
                </div>
                <h4 className="text-lg font-black" style={{ fontFamily:"var(--font-syne)", color:BONE }}>{s.title}</h4>
                <p className="text-sm" style={{ color:MUTED }}>{s.desc}</p>
                <span className="text-xs font-black tracking-widest uppercase" style={{ color: s.active ? TEAL : MUTED }}>{s.day}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTAFOLIO ════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 max-w-[1100px] mx-auto" id="portafolio">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-[0.25em] uppercase mb-3" style={{ color:TEAL }}>Trabajo real</p>
          <h2 className="text-3xl md:text-4xl font-black" style={{ fontFamily:"var(--font-syne)", color:BONE }}>Proyectos que lanzamos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(p => (
            <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center cursor-pointer">
              <div className="relative w-full rounded-3xl overflow-hidden mb-5 glass-card-dark" style={{ aspectRatio:"16/9" }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center gap-3`}>
                  <span className="text-5xl">{p.icon}</span>
                  <span className="text-sm font-bold" style={{ color:p.color }}>{p.href.replace("https://","").replace(/\/$/, "")}</span>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background:"linear-gradient(to top, rgba(11,19,34,0.8), transparent)" }}>
                  <span className="text-xs font-bold flex items-center gap-1" style={{ color:BONE }}>
                    Ver sitio →
                  </span>
                </div>
              </div>
              <h4 className="font-black text-lg mb-1" style={{ fontFamily:"var(--font-syne)", color:BONE }}>{p.title}</h4>
              <p className="text-sm" style={{ color:MUTED }}>{p.category}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ══ CTA BOX ═══════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="glass-card-dark rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
          style={{ borderColor:"rgba(77,218,218,0.15)" }}>
          <div className="hero-glow-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />
          <div className="relative z-10">
            <p className="text-xs font-black tracking-[0.25em] uppercase mb-4" style={{ color:TEAL }}>Sin compromiso</p>
            <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily:"var(--font-syne)", color:BONE }}>¿Empezamos?</h2>
            <p className="text-lg max-w-md mx-auto mb-10" style={{ color:MUTED }}>
              Escríbenos hoy y en 24 horas tienes una propuesta con precio exacto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={wa} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-10 py-5 font-bold text-sm transition-all hover:scale-105 active:scale-95"
                style={{ background:CORAL, color:BONE, boxShadow:"0 20px 60px rgba(255,127,127,0.3)" }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Escríbenos por WhatsApp
              </a>
              <a href={ig} target="_blank" rel="noopener noreferrer"
                className="glass-card-dark inline-flex items-center gap-2 rounded-full px-10 py-5 font-bold text-sm transition-all hover:bg-white/5"
                style={{ color:BONE }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @paginalo en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════ */}
      <footer className="py-16 px-6 md:px-12" style={{ background: SURF_LOW, borderTop:"1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image src="/logo-paginalo.png" alt="Páginalo" width={110} height={30}
              className="h-7 w-auto object-contain" style={{ mixBlendMode:"screen" }} />
            <p className="text-sm" style={{ color:MUTED }}>San Juan, Puerto Rico 🇵🇷 · © 2025 Páginalo</p>
          </div>
          <div className="flex items-center gap-2" style={{ color:MUTED }}>
            <span className="text-sm">hola@paginalo.co</span>
          </div>
          <div className="flex gap-3">
            {[
              { href: ig, label:"Instagram", icon:<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/> },
              { href: wa, label:"WhatsApp", icon:<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/> },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 rounded-full glass-card-dark flex items-center justify-center transition-colors hover:text-[#4ddada]"
                style={{ color: MUTED }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
              </a>
            ))}
            <a href="mailto:hola@paginalo.co" aria-label="Email"
              className="w-10 h-10 rounded-full glass-card-dark flex items-center justify-center transition-colors hover:text-[#4ddada]"
              style={{ color: MUTED }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WA ═══════════════════════════════════ */}
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center text-white z-50 hover:scale-110 active:scale-90 transition-transform overflow-hidden"
        style={{ background:"#25D366", boxShadow:"0 8px 32px rgba(37,211,102,0.4)" }}>
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
        <svg className="h-7 w-7 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  );
}
