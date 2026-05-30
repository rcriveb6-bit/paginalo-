"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProcesoSection from "./ProcesoSection";

const wa = "https://wa.me/17875104504";
const ig = "https://www.instagram.com/paginalo";

/* ── SVG logos trust strip ───────────────────────── */
const logos = [
  { name:"Next.js",   color:"#ffffff", svg:<svg viewBox="0 0 180 180" className="w-8 h-8"><mask id="nx" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#nx)"><circle cx="90" cy="90" r="90" fill="black"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white"/><rect x="115" y="54" width="12" height="72" fill="white"/></g></svg> },
  { name:"Supabase",  color:"#3ECF8E", svg:<svg viewBox="0 0 109 113" className="w-7 h-7"><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#sA)"/><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#sB)" fillOpacity="0.2"/><path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/><defs><linearGradient id="sA" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse"><stop stopColor="#249361"/><stop offset="1" stopColor="#3ECF8E"/></linearGradient><linearGradient id="sB" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stopOpacity="0"/></linearGradient></defs></svg> },
  { name:"n8n",       color:"#EA4B71", svg:<svg viewBox="0 0 60 30" className="w-14 h-7"><text x="0" y="24" fontFamily="monospace" fontWeight="800" fontSize="28" fill="#EA4B71">n8n</text></svg> },
  { name:"Anthropic", color:"#D4A57A", svg:<svg viewBox="0 0 100 40" className="w-24 h-8"><text x="0" y="30" fontFamily="Georgia, serif" fontWeight="700" fontSize="26" fill="#D4A57A">Anthropic</text></svg> },
  { name:"Vercel",    color:"#ffffff", svg:<svg viewBox="0 0 76 65" className="w-7 h-7"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white"/></svg> },
  { name:"Google",    color:"#4285F4", svg:<svg viewBox="0 0 24 24" className="w-7 h-7"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
  { name:"Cloudflare", color:"#F38020", svg:<svg viewBox="0 0 24 24" className="w-7 h-7"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.4 12.6H6.6v-1.2h10.8v1.2zm0-3.6H6.6V9.8h10.8v1.2zm0-3.6H6.6V6.2h10.8v1.2z" fill="currentColor"/></svg> },
  { name:"WhatsApp",  color:"#25D366", svg:<svg viewBox="0 0 24 24" className="w-7 h-7"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/></svg> },
];

const projects = [
  { title:"Liora & Co.",  category:"E-Commerce · Velas artesanales",    href:"https://www.liorayco.com/",                    portClass:"port-liora",  icon:"candle",      hex:"#4ddada" },
  { title:"RYA Shop",     category:"Thrift Shop · Moda curada PR",      href:"https://rya-alpha.vercel.app/",                portClass:"port-rya",    icon:"style",       hex:"#FF7F7F" },
  { title:"CRM Solar PR", category:"CRM · Energía Solar",               href:"https://solar-crm-seven-mu.vercel.app/",       portClass:"port-crm",    icon:"solar_power", hex:"#F8F8F8" },
];

const navLinks = [
  { label:"Servicios",  href:"#servicios"  },
  { label:"Proceso",    href:"#proceso"    },
  { label:"Portafolio", href:"#portafolio" },
];

const fadeIn = (delay = 0) => ({
  initial:{ opacity:0, y:20 },
  animate:{ opacity:1, y:0 },
  transition:{ duration:0.55, ease:"easeOut" as const, delay },
});

const viewIn = {
  initial:{ opacity:0, y:24 },
  whileInView:{ opacity:1, y:0 },
  viewport:{ once:true, margin:"-80px" as const },
  transition:{ duration:0.5, ease:"easeOut" as const },
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-surface font-body-base antialiased overflow-x-hidden min-h-dvh">
      <div className="grain-dark" />

      {/* ══ NAV ══════════════════════════════════════════ */}
      <nav className="fixed top-0 w-full z-50 bg-glass-bg backdrop-blur-md border-b border-glass-border"
        style={{ paddingTop:"env(safe-area-inset-top)" }}>
        <div className="max-w-[1100px] mx-auto px-12 flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/logo-paginalo.png" alt="Páginalo" width={130} height={36}
              className="h-9 w-auto object-contain" style={{ mixBlendMode:"screen" }} priority />
          </a>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-on-surface-variant hover:text-bone-white transition-colors font-body-bold">
                {l.label}
              </a>
            ))}
          </div>

          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="hidden md:flex bg-coral-sunset text-bone-white px-6 py-2 rounded-full font-body-bold text-sm hover:scale-105 active:scale-95 transition-all items-center gap-2"
            style={{ boxShadow:"0 8px 24px rgba(255,127,127,0.25)" }}>
            <span className="material-symbols-outlined text-lg">chat</span>
            WhatsApp
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menú">
            <span className={`block h-[2px] w-5 bg-white/70 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-[2px] w-5 bg-white/70 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-white/70 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
              exit={{ height:0, opacity:0 }} transition={{ duration:0.22 }} className="overflow-hidden md:hidden"
              style={{ background:"rgba(11,19,34,0.98)", borderTop:"1px solid rgba(255,255,255,0.07)" }}>
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                    className="text-on-surface-variant hover:text-bone-white transition-colors font-body-bold py-1">
                    {l.label}
                  </a>
                ))}
                <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                  className="bg-coral-sunset text-bone-white rounded-full px-5 py-3 text-sm font-body-bold text-center">
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative">

        {/* ══ HERO ═════════════════════════════════════════ */}
        <section className="pt-48 md:pt-52 pb-28 px-6 md:px-12 max-w-[1100px] mx-auto relative flex flex-col items-center text-center">
          <div className="hero-glow-dark -top-20 -left-40" />

          <motion.div initial="hidden" animate="show"
            variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.1 } } }}
            className="flex flex-col items-center space-y-8 w-full">

            <motion.div variants={{ hidden:{opacity:0,y:16}, show:{opacity:1,y:0,transition:{duration:0.5,ease:"easeOut"}} }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-caps uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Agencia IA · Puerto Rico 🇵🇷
            </motion.div>

            <motion.h1 variants={{ hidden:{opacity:0,y:20}, show:{opacity:1,y:0,transition:{duration:0.6,ease:"easeOut"}} }}
              className="font-display-hero text-display-hero text-bone-white leading-tight max-w-4xl text-balance">
              Recupera tu tiempo.<br/>
              <span className="bg-gradient-to-r from-primary to-coral-sunset bg-clip-text text-transparent">
                Nosotros automatizamos el resto.
              </span>
            </motion.h1>

            <motion.p variants={{ hidden:{opacity:0,y:16}, show:{opacity:1,y:0,transition:{duration:0.55,ease:"easeOut"}} }}
              className="text-body-lg text-on-surface-variant max-w-2xl text-pretty">
              Sitio web profesional + chatbot IA + presencia en Google. Todo incluido para tu negocio en Puerto Rico. Entregamos en 2 semanas.
            </motion.p>

            <motion.div variants={{ hidden:{opacity:0,y:12}, show:{opacity:1,y:0,transition:{duration:0.5,ease:"easeOut"}} }}
              className="flex flex-wrap gap-4 justify-center">
              <a href={wa} target="_blank" rel="noopener noreferrer"
                className="bg-coral-sunset text-bone-white px-8 py-4 rounded-full font-body-bold hover:scale-105 active:scale-95 transition-all"
                style={{ boxShadow:"0 20px 60px rgba(255,127,127,0.2)" }}>
                Consulta gratis
              </a>
              <a href="#portafolio"
                className="glass-card-dark text-bone-white px-8 py-4 rounded-full font-body-bold hover:bg-white/5 transition-all">
                Ver proyectos
              </a>
            </motion.div>

            <motion.div variants={{ hidden:{opacity:0}, show:{opacity:1,transition:{duration:0.5}} }}
              className="flex items-center gap-6 pt-4 border-t border-glass-border justify-center">
              {[
                { icon:"schedule",      text:"2 semanas de entrega" },
                { icon:"location_on",   text:"San Juan, PR" },
                { icon:"support_agent", text:"Chatbot 24/7" },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2 text-sm font-body-bold text-on-surface">
                  <span className="material-symbols-outlined text-primary">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Browser card + floating badges */}
          <motion.div {...fadeIn(0.5)} className="relative group w-full max-w-4xl mt-16">
            <div className="coral-glow-dark -bottom-20 -right-20" />
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-2xl relative z-10 overflow-hidden mockup-rotate">
              <div className="flex items-center gap-2 mb-4 border-b border-glass-border pb-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/40" />
                  <div className="w-3 h-3 rounded-full bg-secondary/40" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                </div>
                <div className="h-4 w-48 bg-glass-bg rounded-full ml-4 flex items-center px-3">
                  <span className="text-on-surface-variant text-xs">paginalo.org</span>
                </div>
              </div>
              <Image
                src="/paginalo-hero.png"
                alt="Páginalo — Tu negocio merece estar en internet"
                width={1794}
                height={592}
                className="rounded-lg shadow-inner w-full h-auto"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -left-6 top-1/4 glass-card-dark border-primary/30 p-3 rounded-lg animate-bounce z-20"
              style={{ animationDuration:"3s", boxShadow:"0 0 15px rgba(77,218,218,0.2)" }}>
              <p className="text-label-caps font-label-caps text-on-surface-variant">ENTREGA</p>
              <p className="text-xl font-headline-md text-primary">2 sem.</p>
            </div>
            <div className="absolute -right-6 bottom-1/4 glass-card-dark border-coral-sunset/30 p-3 rounded-lg animate-pulse z-20"
              style={{ boxShadow:"0 0 15px rgba(255,127,127,0.2)" }}>
              <p className="text-label-caps font-label-caps text-on-surface-variant">SOPORTE IA</p>
              <p className="text-xl font-headline-md text-coral-sunset">24/7</p>
            </div>
          </motion.div>
        </section>

        {/* ══ TRUST STRIP ══════════════════════════════════ */}
        <section className="py-12 border-y border-glass-border bg-glass-bg/20 backdrop-blur-sm trust-strip">
          <div className="max-w-[1100px] mx-auto px-12 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 hover:opacity-80 transition-all">
            {logos.map(l => (
              <div key={l.name} className="trust-logo flex flex-col items-center gap-2">
                <div style={{ color:l.color }}>{l.svg}</div>
                <span className="text-xs font-body-bold text-on-surface-variant">{l.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SERVICIOS ════════════════════════════════════ */}
        <section className="py-28 px-6 md:px-12 max-w-[1100px] mx-auto" id="servicios">
          <motion.div className="text-center mb-16 space-y-4" {...viewIn}>
            <span className="text-primary font-label-caps">Lo que hacemos</span>
            <h2 className="font-headline-lg text-headline-lg text-bone-white text-balance">Todo lo que necesita tu negocio</h2>
            <p className="text-on-surface-variant text-body-base max-w-xl mx-auto text-pretty">Tecnología de punta adaptada a la escala de tu negocio en Puerto Rico.</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
            {[
              { icon:"web",         title:"Sitio Web Profesional",   desc:"Diseño moderno, rápido y responsive optimizado para Google. WhatsApp y formulario incluidos.", coral:false },
              { icon:"bolt",        title:"Automatizaciones",        desc:"Flujos inteligentes con n8n que conectan tu web, WhatsApp, email y redes. Cotizaciones, recordatorios, seguimiento de clientes — todo automático.", coral:false },
              { icon:"smart_toy",   title:"Chatbot IA 24/7",         desc:"Atención al cliente automatizada con n8n + Claude AI. Responde preguntas, califica leads y nunca duerme.", coral:true, popular:true },
              { icon:"language",    title:"Presencia en Google",     desc:"Google Business optimizado, visible en Maps, estrategia de reseñas y redes sociales.", coral:false },
            ].map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.45, ease:"easeOut", delay: i * 0.08 }}
                className={`glass-card-dark p-8 rounded-3xl group transition-colors relative overflow-hidden flex flex-col items-center text-center ${
                  s.coral ? "hover:border-coral-sunset/40" : "hover:border-primary/40"
                }`}
                style={s.coral ? { borderColor:"rgba(255,127,127,0.2)" } : {}}>
                {s.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="text-label-caps font-label-caps text-coral-sunset border border-coral-sunset/30 px-2 py-0.5 rounded-full">MÁS POPULAR</span>
                  </div>
                )}
                <div className="mb-6">
                  <span className={`material-symbols-outlined text-6xl block ${s.coral ? "card-icon-coral" : "card-icon-teal"}`}
                    style={{ fontSize:"60px" }}>
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-bone-white mb-4 text-balance">{s.title}</h3>
                <p className="text-on-surface-variant text-body-base text-pretty">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ PROCESO ══════════════════════════════════════ */}
        <div style={{ background:"rgba(6,14,28,0.5)" }}>
          <ProcesoSection />
        </div>

        {/* ══ PORTAFOLIO ═══════════════════════════════════ */}
        <section className="py-28 px-6 md:px-12 max-w-[1100px] mx-auto" id="portafolio">
          <motion.div className="text-center mb-16 space-y-4" {...viewIn}>
            <span className="text-primary font-label-caps">Trabajo real</span>
            <h2 className="font-headline-lg text-headline-lg text-bone-white text-balance">Proyectos que lanzamos</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer"
                className="group cursor-pointer flex flex-col items-center"
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-60px" }} transition={{ duration:0.45, ease:"easeOut", delay: i * 0.08 }}>
                <div className={`relative aspect-video rounded-3xl overflow-hidden mb-6 glass-card-dark w-full ${p.portClass}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <span className="material-symbols-outlined text-5xl" style={{ color:p.hex, opacity:0.6, fontSize:"48px" }}>{p.icon}</span>
                    <p className="font-headline-md text-sm" style={{ color:p.hex }}>{p.href.replace("https://","").replace(/\/$/, "")}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-xs font-body-bold text-bone-white flex items-center gap-1">
                      Ver sitio <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </span>
                  </div>
                </div>
                <h4 className="font-headline-md text-headline-md text-bone-white">{p.title}</h4>
                <p className="text-on-surface-variant text-body-base">{p.category}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ══ CTA BOX ══════════════════════════════════════ */}
        <section className="py-28 px-6 md:px-12 max-w-[1100px] mx-auto">
          <motion.div className="glass-card-dark rounded-[40px] p-12 md:p-24 text-center space-y-10 relative overflow-hidden border-primary/20" {...viewIn}>
            <div className="hero-glow-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="space-y-4 relative z-10">
              <span className="text-primary font-label-caps">Sin compromiso</span>
              <h2 className="font-display-hero text-display-hero text-bone-white text-balance">¿Empezamos?</h2>
              <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto text-pretty">
                Escríbenos hoy y en 24 horas tienes una propuesta con precio exacto. Sin rodeos.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a href={wa} target="_blank" rel="noopener noreferrer"
                className="bg-coral-sunset text-bone-white px-10 py-5 rounded-full font-body-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                style={{ boxShadow:"0 20px 60px rgba(255,127,127,0.25)" }}>
                <span className="material-symbols-outlined">chat</span>
                Escríbenos por WhatsApp
              </a>
              <a href={ig} target="_blank" rel="noopener noreferrer"
                className="border border-glass-border bg-white/5 backdrop-blur-md text-bone-white px-10 py-5 rounded-full font-body-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">photo_camera</span>
                @paginalo en Instagram
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* ══ FOOTER ═══════════════════════════════════════ */}
      <footer className="bg-surface-container-lowest border-t border-glass-border py-16">
        <div className="max-w-[1100px] mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image src="/logo-paginalo.png" alt="Páginalo" width={110} height={30}
              className="h-8 w-auto object-contain" style={{ mixBlendMode:"screen" }} />
            <p className="text-on-surface-variant text-body-base">San Juan, Puerto Rico 🇵🇷 · © 2025 Páginalo</p>
          </div>
          <div className="flex gap-8">
            <a href="mailto:hola@paginalo.co" className="text-on-surface-variant hover:text-bone-white transition-colors text-sm">
              hola@paginalo.co
            </a>
          </div>
          <div className="flex gap-4">
            {[
              { href:ig, label:"Instagram", d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { href:wa,  label:"WhatsApp",  d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 rounded-full glass-card-dark flex items-center justify-center hover:text-primary transition-colors text-on-surface-variant">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={s.d}/></svg>
              </a>
            ))}
            <a href="mailto:hola@paginalo.co" aria-label="Email"
              className="w-10 h-10 rounded-full glass-card-dark flex items-center justify-center hover:text-primary transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </a>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WA ══════════════════════════════════ */}
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="fixed bottom-8 right-8 w-16 h-16 bg-whatsapp-green rounded-full flex items-center justify-center text-white shadow-2xl z-50 hover:scale-110 active:scale-90 transition-transform group overflow-hidden"
        style={{ boxShadow:"0 8px 32px rgba(37,211,102,0.4)" }}>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        <span className="material-symbols-outlined text-3xl relative z-10" style={{ fontVariationSettings:"'FILL' 1" }}>chat</span>
        <div className="absolute inset-0 rounded-full border-2 border-whatsapp-green animate-ping opacity-75" />
      </a>

    </div>
  );
}
