"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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

// ── ChatBot component ──
function ChatBot() {
  const [mode, setMode] = useState('idle');
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! Soy el asistente de Páginalo. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const msgEndRef = useRef(null);

  useEffect(() => {
    (msgEndRef.current as HTMLDivElement | null)?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const msg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setLoading(true);
    try {
      const res = await fetch('https://paginalo-bot.rcriveb6.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, history: messages.map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text })) })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.reply || 'Disculpa, no pude procesar tu mensaje. ¿Prefieres contactarnos por WhatsApp?' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Lo siento, hubo un error. Intenta de nuevo.' }]);
    }
    setLoading(false);
  };

  const close = () => { setMode('idle'); };

  const open = mode !== 'idle';
  const btnShadow = open
    ? '0 2px 12px rgba(0,0,0,0.15)'
    : '0 6px 24px rgba(0,181,181,0.35), 0 0 0 4px rgba(0,181,181,0.12)';

  return (
    <>
      {open && <div onClick={close} className="fixed inset-0 z-40" />}

      {/* Floating button */}
      <button onClick={() => setMode(mode === 'idle' ? 'menu' : 'idle')}
        className="fixed bottom-6 right-6 z-50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ width: 56, height: 56, boxShadow: btnShadow, background: mode === 'idle' ? '#00B5B5' : '#1E3A5F' }}>
        {mode === 'idle' ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        )}
      </button>

      {/* Card */}
      <div className="fixed z-50 flex flex-col overflow-hidden transition-all duration-300 ease-out"
        style={{
          bottom: 80, right: 16, width: 360,
          maxWidth: 'calc(100vw - 32px)', maxHeight: 560,
          borderRadius: 24, background: '#FFFFFF',
          boxShadow: '0 12px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.92)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transformOrigin: 'bottom right',
        }}>

        {/* Menu */}
        {mode === 'menu' && (
          <>
            <div style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #022448 100%)', color: '#F8F8F8', padding: '24px 24px 20px' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="font-semibold text-sm tracking-tight">Páginalo</span>
                </div>
                <button onClick={close} className="text-white/40 hover:text-white/80 transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
              <h3 className="text-lg font-semibold leading-tight">¿Cómo prefieres hablar?</h3>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Elige tu canal preferido</p>
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5" style={{ background: '#FAFBFC' }}>
              <button onClick={() => setMode('chat')}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border"
                style={{ border: '1.5px solid #E8ECF0', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00B5B5'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,181,181,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8ECF0'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #00B5B5 0%, #009999 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M8 10h.01M12 10h.01M16 10h.01"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <div style={{ fontWeight: 600, color: '#1E3A5F', fontSize: 14 }}>Chat con IA</div>
                  <div style={{ color: '#8E959D', fontSize: 12 }}>Respuesta inmediata · 24/7</div>
                </div>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#C4CAD1" strokeWidth="2" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border no-underline"
                style={{ border: '1.5px solid #E8ECF0', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8ECF0'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #25D366 0%, #1DA851 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c 0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <div style={{ fontWeight: 600, color: '#1E3A5F', fontSize: 14 }}>WhatsApp</div>
                  <div style={{ color: '#8E959D', fontSize: 12 }}>Atención personalizada</div>
                </div>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="#C4CAD1" strokeWidth="2" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>
            </div>
          </>
        )}

        {/* Chat */}
        {mode === 'chat' && (
          <>
            <div style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #022448 100%)', color: '#F8F8F8', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="flex items-center gap-2.5">
                <button onClick={() => setMode('menu')} className="text-white/50 hover:text-white/90 transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">Asistente IA</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Páginalo · En línea</div>
                </div>
              </div>
              <button onClick={close} className="text-white/40 hover:text-white/80 transition-colors">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto" style={{ minHeight: 300, maxHeight: 400, padding: '12px 14px', background: '#F5F7FA' }}>
              <div style={{ background: 'linear-gradient(135deg, #FF7F7F 0%, #FF6B6B 100%)', color: 'white', fontSize: 12, padding: '10px 14px', borderRadius: 12, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>📞</span>
                <span className="flex-1">¿Prefieres hablar con una persona?</span>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, textDecoration: 'underline', whiteSpace: 'nowrap' }}>WhatsApp →</a>
              </div>

              {messages.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
                  {m.role === 'bot' && (
                    <div style={{ width: 26, height: 26, borderRadius: 8, background: 'linear-gradient(135deg, #1E3A5F 0%, #022448 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, marginTop: 4, flexShrink: 0 }}>
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      </svg>
                    </div>
                  )}
                  <div style={{
                    maxWidth: '78%', padding: '10px 14px', fontSize: 13, lineHeight: 1.5,
                    background: m.role === 'user' ? '#00B5B5' : '#FFFFFF',
                    color: m.role === 'user' ? '#FFFFFF' : '#1E3A5F',
                    boxShadow: m.role === 'user' ? '0 2px 8px rgba(0,181,181,0.2)' : '0 1px 4px rgba(0,0,0,0.04)',
                    borderRadius: 16,
                    borderBottomRightRadius: m.role === 'user' ? 4 : 16,
                    borderBottomLeftRadius: m.role === 'bot' ? 4 : 16,
                  }}>{m.text}</div>
                </div>
              ))}

              {loading && (
                <div style={{ display: 'flex', marginBottom: 10 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: 'linear-gradient(135deg, #1E3A5F 0%, #022448 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, marginTop: 4, flexShrink: 0 }}>
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    </svg>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '10px 14px', borderRadius: 16, borderBottomLeftRadius: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={msgEndRef} />
            </div>

            <div className="p-3 flex gap-2" style={{ background: '#FFFFFF', borderTop: '1px solid #F0F2F4' }}>
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-[#00B5B5]" />
              <button onClick={send} disabled={loading}
                className="bg-[#00B5B5] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#009999] disabled:opacity-50">Enviar</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// ── Page ──
export default function Home() {
  return (
    <div className="mesh-gradient min-h-full font-body" style={{ color: PRIMARY, overflowX: "hidden" }}>

      <div className="grain-dark" />

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 w-full z-50" style={{ padding: "1rem 1.5rem" }}>
        <nav
          className="rounded-2xl flex items-center justify-between"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0.75rem 1.5rem",
            background: "#ffffff",
            boxShadow: "0 1px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
          }}
        >
          <a href="#" className="flex items-center gap-2" aria-label="Páginalo inicio">
            <img
              src="/paginalo-hero.png"
              alt="Páginalo"
              style={{ height: "44px", width: "auto", objectFit: "contain", display: "block" }}
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
              {/* Row 0: Logo Páginalo — full width */}
              <div
                className="tech-card flex items-center justify-center"
                style={{ gridColumn: "span 3", padding: "18px 24px" }}
              >
                <img
                  src="/paginalo-hero.png"
                  alt="Páginalo"
                  style={{ height: "40px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
                />
              </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className={`service-card-dark ${svc.span === 7 ? "lg:col-span-7" : "lg:col-span-5"}`}
                style={{
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

      {/* ── Floating Chat — IA + WhatsApp ── */}
      <ChatBot />
    </div>
  );
}
