# CLAUDE.md — Páginalo

## Proyecto
Agencia digital de Puerto Rico. Landing page principal con portafolio de proyectos.

## Stack
- Next.js 16 (App Router)
- Vercel (deploy — paginalo.org)
- Tailwind CSS v4
- framer-motion (animaciones)
- Google Fonts: Syne (headlines 700/800) + DM Sans (body 400/700)
- Material Symbols Outlined (iconos en service cards y trust badges)

## Arquitectura
- Proyecto ÚNICO para landing de Páginalo
- Liora → liorayco.com (Netlify, separado)
- RYA → rya-alpha.vercel.app (separado)
- CRM Solar → solar-crm-seven-mu.vercel.app (separado)

## Paleta de Colores OFICIAL — DARK GLASSMORPHISM
- **Canvas**: `#0b1322` (fondo principal — dark navy)
- **Surface**: `#18202e` (surface cards)
- **Surface Low**: `#060e1c` (secciones proceso y footer)
- **Primary Teal**: `#4ddada` (acento principal — badges, iconos, números)
- **Coral**: `#FF7F7F` (CTA primario, WhatsApp, acento secundario)
- **Bone White**: `#F8F8F8` (texto headlines, botones CTA)
- **Text primary**: `#dbe2f7` (texto general sobre dark)
- **Text muted**: `#bbc9c9` (texto secundario, labels)
- **WhatsApp Green**: `#25D366`
- **Glass card**: `background: rgba(255,255,255,0.04); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.08)`

## Referencia visual
- **Proto aprobado**: `public/proto.html` — fuente de verdad visual
- **Arquetipo**: Dark canvas + product UI as protagonist (estilo Linear/Cursor/Warp)
- El sitio live en `paginalo.org` debe ser 99.9% igual al proto.html

## Proyectos en Portafolio
1. Liora & Co. — https://www.liorayco.com/ (E-Commerce · Velas artesanales)
2. RYA Shop — https://rya-alpha.vercel.app/ (Thrift Shop · Moda curada PR)
3. CRM Solar PR — https://solar-crm-seven-mu.vercel.app/ (CRM · Energía Solar)

## Información de Contacto (NO CAMBIAR)
- WhatsApp: 787-510-4504 (link wa.me/17875104504)
- Instagram: @paginalo (https://www.instagram.com/paginalo)
- Email: hola@paginalo.co

## Reglas de Diseño
- Hero en **DARK** (`#0b1322`). NUNCA light.
- `space-y-8` para ritmo vertical del hero content
- Service cards: Material Symbols Outlined (web, smart_toy, language) — 60px, group hover border + icon color animation
- Trust strip: SVG logos (Next.js, Supabase, n8n, Anthropic, Vercel, Google) — grayscale → color on hover
- Portafolio: 3 cards con gradiente placeholder (aspect-video, rounded-3xl, glass-card-dark)
- NO stats falsos (0+ clientes, etc.)
- Footer minimal dark con IG + WA + email
- Todo responsive mobile first
- Floating WA button verde `#25D366` con animate-ping

## Reglas de código
- page.tsx usa constantes: BG, TEAL, CORAL, BONE, MUTED, SURF_LOW
- CSS custom classes en globals.css: glass-card-dark, hero-glow-dark, coral-glow-dark, grain-dark, card-icon-teal, card-icon-coral, mockup-rotate, trust-logo, trust-strip
- Hover effects de iconos via CSS (globals.css) no Tailwind arbitrary hover
- Framer-motion: stagger en hero, whileInView en secciones

## Dueño
Roberto (RC) — Boricua, dueño de Páginalo. Socio: Rogi
