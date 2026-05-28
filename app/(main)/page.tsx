"use client";

import Image from "next/image";
import { useState } from "react";

const wa = "https://wa.me/17875104504";

const WaIcon = () => (
  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left gap-4 group">
        <span className="text-sm font-semibold text-[#F8F8F8] group-hover:text-[#00B5B5] transition-colors">{q}</span>
        <svg className={`h-3 w-3 text-[#00B5B5]/50 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="pb-4 text-sm text-white/40 leading-relaxed">{a}</p>}
    </div>
  );
};

const BUBBLES = [
  { cls: "top-[15%] left-[2%] w-[170px] animation-delay-0", strong: "🚀 Sin esperas", text: "Resultados visibles en días, no meses." },
  { cls: "top-[35%] right-[2%] w-[190px] animation-delay-[-2s]", strong: "🤖 Automatización IA", text: "Chatbot que responde por ti 24/7." },
  { cls: "bottom-[28%] left-[6%] w-[160px] animation-delay-[-4s]", strong: "📱 Todo en uno", text: "Web + IA + Google. Un solo paquete." },
  { cls: "bottom-[12%] right-[6%] w-[170px] animation-delay-[-1s]", strong: "🎯 Hecho en PR", text: "Entendemos tu mercado local." },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-[#1E3A5F] text-[#F8F8F8] font-sans antialiased">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(30,58,95,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,181,181,0.08)" }}>
        <div className="mx-auto max-w-[1100px] px-6 h-[60px] flex items-center justify-between">
          <Image src="/logo-paginalo.png" alt="Páginalo" width={100} height={28} className="h-7 w-auto object-contain" />
          <nav className="flex items-center gap-6 md:gap-8">
            <a href="#servicios" className="text-xs md:text-sm font-medium text-white/50 hover:text-white transition-colors">Servicios</a>
            <a href="#portafolio" className="text-xs md:text-sm font-medium text-white/50 hover:text-white transition-colors">Portafolio</a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-semibold text-white bg-[#FF7F7F] px-4 py-1.5 md:px-5 md:py-2 rounded-full hover:brightness-110 transition-all">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(0,181,181,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(255,127,127,0.05) 0%, transparent 60%)" }} />

        {/* Burbujas flotantes */}
        {BUBBLES.map((b, i) => (
          <div key={i} className={`absolute hidden lg:block z-10 rounded-[20px] px-5 py-3.5 pointer-events-none animate-float ${b.cls}`}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,181,181,0.1)" }}>
            <strong className="block text-xs font-semibold text-[#00B5B5] mb-1">{b.strong}</strong>
            <p className="text-[11px] text-white/50 leading-relaxed">{b.text}</p>
          </div>
        ))}

        <div className="relative z-20 text-center max-w-[720px]">
          <Image src="/logo-paginalo.png" alt="Páginalo" width={500} height={140} className="w-[clamp(240px,60vw,420px)] h-auto mx-auto mb-8" priority />
          <h1 className="text-[clamp(28px,5vw,48px)] font-black leading-[1.15] tracking-tight mb-4">
            <span style={{ fontWeight: 200, fontSize: "0.45em", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(248,248,248,0.15)" }}>
              Páginalo
            </span><br />
            Recupera tu tiempo.<br />
            Nosotros automatizamos<br />
            <span className="bg-gradient-to-r from-[#00B5B5] to-[#FF7F7F] bg-clip-text text-transparent">el resto.</span>
          </h1>
          <p className="text-sm md:text-[15px] text-white/50 leading-relaxed max-w-[480px] mx-auto mb-9">
            Sitio web profesional + chatbot con IA + presencia en Google.<br />
            Todo incluido para tu negocio en Puerto Rico.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF7F7F] text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-200 hover:scale-[1.03]"
            style={{ boxShadow: "0 4px 20px rgba(255,127,127,0.25)" }}>
            <WaIcon /> Consulta gratis · Sin compromiso
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-[#F8F8F8] py-24 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#00B5B5] mb-3 block">Servicios</span>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-black text-[#1E3A5F] leading-tight mb-3">Todo lo que necesitas para vender en internet</h2>
          <p className="text-sm text-[#1E3A5F]/50 max-w-[520px] mb-12">Un paquete completo. Sin sorpresas, sin letra chiquita.</p>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3", title: "Sitio Web Profesional", desc: "Diseñado para convertir visitantes en clientes. Rápido, responsive y optimizado para Google." },
              { icon: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M2.25 6.75c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z", title: "Automatización con IA", desc: "Chatbot en WhatsApp que responde preguntas, califica leads y agenda citas. 24/7." },
              { icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", title: "Presencia en Google", desc: "Perfil de Google Business optimizado. Tu negocio visible en Maps y búsquedas locales." },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-[#00B5B5]/10 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:shadow-md hover:border-[#00B5B5]/20">
                <div className="w-10 h-10 rounded-xl bg-[#00B5B5]/10 text-[#00B5B5] flex items-center justify-center mb-4">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                </div>
                <h3 className="text-[15px] font-bold text-[#1E3A5F] mb-2.5">{s.title}</h3>
                <p className="text-[13px] text-[#1E3A5F]/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#00B5B5] mb-3 block">¿Para quién es?</span>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-black leading-tight mb-3">Páginalo es ideal si eres...</h2>
          <p className="text-sm text-white/50 max-w-[520px] mb-12">Dueño de negocio, emprendedor o profesional independiente en Puerto Rico.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { emoji: "🏪", title: "Dueño de negocio local", desc: "Tienda, restaurante, salón. Quieres que los clientes te encuentren en Google y te contacten fácil." },
              { emoji: "🛒", title: "Emprendedor con producto", desc: "Vendes algo — velas, ropa, comida — y necesitas una tienda online que funcione sola." },
              { emoji: "💼", title: "Profesional independiente", desc: "Abogado, médico, coach. Necesitas proyectar credibilidad y que te encuentren antes que a la competencia." },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl p-7 md:p-8 transition-all duration-300 hover:bg-white/[0.06]" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,181,181,0.08)" }}>
                <span className="text-2xl block mb-3">{p.emoji}</span>
                <h4 className="text-sm font-bold mb-1.5">{p.title}</h4>
                <p className="text-[13px] text-white/45 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-[#F8F8F8] py-24 md:py-28 text-[#1E3A5F]">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#00B5B5] mb-3 block">El problema</span>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-black leading-tight mb-3">¿Por qué tu negocio todavía no vende en internet?</h2>
              <p className="text-sm text-[#1E3A5F]/50">Nosotros resolvemos todo esto por ti.</p>
            </div>
            <div>
              {[
                "No tienes tiempo para manejar un sitio web",
                "Contestas los mismos mensajes de WhatsApp 50 veces al día",
                "Tus clientes no te encuentran en Google",
                "La competencia ya tiene presencia digital — tú todavía no",
                "No sabes por dónde empezar ni cuánto cuesta",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-[#1E3A5F]/5 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF7F7F]/40 shrink-0" />
                  <p className="text-sm text-[#1E3A5F]/50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="portafolio" className="py-24 md:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#00B5B5] mb-3 block">Portafolio</span>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-black leading-tight mb-3">Ya lo hicimos para ellos</h2>
          <p className="text-sm text-white/50 max-w-[520px] mb-12">Proyectos reales, resultados concretos.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { num: "01", cat: "E-Commerce · Velas", title: "Liora & Co.", desc: "Tienda online profesional con cobros automáticos e inventario en tiempo real.", href: "https://liorayco.netlify.app/", live: true },
              { num: "02", cat: "E-Commerce · Moda", title: "RYA Shop", desc: "Catálogo digital elegante conectado a WhatsApp para ventas personalizadas.", href: null, live: false },
              { num: "03", cat: "CRM · Ventas", title: "CRM Solar", desc: "Plataforma a la medida para equipos de ventas: cotizaciones, leads y seguimiento.", href: "https://solar-crm-seven-mu.vercel.app/login", live: true },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl p-7 md:p-8 transition-all duration-300 hover:bg-white/[0.06]" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,181,181,0.08)" }}>
                <div className="text-[32px] font-black text-[#00B5B5]/15 mb-2">{p.num}</div>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#00B5B5]/40 mb-2">{p.cat}</div>
                <h4 className="text-[15px] font-bold mb-1.5">{p.title}</h4>
                <p className="text-[13px] text-white/45 leading-relaxed mb-3">{p.desc}</p>
                {p.live ? (
                  <a href={p.href ?? undefined} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#00B5B5] hover:text-[#FF7F7F] transition-colors inline-flex items-center gap-1">
                    Ver proyecto <span>→</span>
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-white/25">Próximamente</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F8F8] py-24 md:py-28 text-[#1E3A5F]">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#00B5B5] mb-3 block">Preguntas frecuentes</span>
            <h2 className="text-[clamp(24px,3.5vw,32px)] font-black leading-tight">¿Tienes dudas?</h2>
          </div>
          <div className="bg-white rounded-2xl border border-[#00B5B5]/8 px-6" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            {[
              { q: "¿Cuánto cuesta?", a: "Cada proyecto es único. Escríbenos por WhatsApp y en 24 horas te enviamos una propuesta con precio exacto." },
              { q: "¿En cuánto tiempo está listo?", a: "Proyectos estándar entre 10 y 14 días hábiles. E-commerce o CRM pueden tomar 3-4 semanas." },
              { q: "¿Qué pasa después del lanzamiento?", a: "Incluimos capacitación y 30 días de soporte gratuito post-lanzamiento." },
              { q: "¿Trabajan solo en Puerto Rico?", a: "Principalmente Puerto Rico. Podemos trabajar con clientes en EEUU o Latinoamérica." },
            ].map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#F8F8F8] text-center">
        <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-24">
          <h2 className="text-[clamp(32px,5vw,48px)] font-black text-[#1E3A5F] leading-tight mb-3">¿Empezamos?</h2>
          <p className="text-sm text-[#1E3A5F]/50 mb-8 max-w-[400px] mx-auto">
            Escríbenos hoy y en 24 horas tienes una propuesta con precio exacto.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF7F7F] text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-200 hover:scale-[1.03]"
            style={{ boxShadow: "0 4px 20px rgba(255,127,127,0.25)" }}>
            <WaIcon /> Escríbenos por WhatsApp
          </a>
          <div className="mt-5">
            <a href="https://www.instagram.com/paginalo" target="_blank" rel="noopener noreferrer"
              className="text-xs text-[#1E3A5F]/30 hover:text-[#00B5B5] transition-colors">
              Instagram @paginalo
            </a>
          </div>
          <p className="text-[11px] text-[#1E3A5F]/20 mt-3">Respuesta garantizada en 24 horas</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 px-6 border-t border-[#00B5B5]/5">
        <p className="text-xs text-white/20">San Juan, Puerto Rico 🇵🇷 · © 2025 Páginalo</p>
      </footer>

      {/* FLOATING WA */}
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 rounded-full bg-[#25D366] flex items-center justify-center transition-transform duration-200 hover:scale-110"
        style={{ boxShadow: "0 4px 16px rgba(37,211,102,0.3)", width: 52, height: 52 }}>
        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-\[-2s\] { animation-delay: -2s; }
        .animation-delay-\[-4s\] { animation-delay: -4s; }
        .animation-delay-\[-1s\] { animation-delay: -1s; }
      `}</style>
    </div>
  );
}
