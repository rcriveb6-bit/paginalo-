# CLAUDE.md — Páginalo

## Proyecto
Agencia digital de Puerto Rico. Landing page principal.

## Stack
- Next.js 16 (App Router)
- Vercel (deploy — paginalo.org)
- Tailwind CSS v4
- framer-motion (animaciones)
- Google Fonts: Playfair Display (headlines serif) + Inter (body) + JetBrains Mono (labels/mono)
- Material Symbols Outlined (iconos)

## Arquitectura
- Proyecto ÚNICO para landing de Páginalo
- Liora → liorayco.com (Netlify, separado)
- RYA → rya-alpha.vercel.app (separado)
- CRM Solar → solar-crm-seven-mu.vercel.app (separado)

## Paleta de Colores OFICIAL — EDITORIAL LIGHT

- **Canvas**: `#F9F9F9` (fondo base — bone white)
- **Primary Navy**: `#022448` (headlines, texto fuerte, navbar wordmark)
- **Navy Mid**: `#1E3A5F` (secciones dark alternas — Servicios)
- **Teal**: `#00B5B5` (acento principal — eyebrows, badges, iconos activos)
- **Coral**: `#FF7F7F` (acento secundario — CTA, paso 02/04)
- **Bone**: `#F8F8F8` (headlines sobre secciones dark)
- **Muted**: `#43474e` (texto secundario, subtítulos)
- **WhatsApp**: `#25D366`

## Design System

### Tipografía
- **Headlines**: Playfair Display, serif, 700 — `var(--font-playfair)` → clase `.font-display`
- **Body**: Inter, sans-serif — `var(--font-inter)` → clase `.font-body`
- **Labels/mono**: JetBrains Mono — `var(--font-jetbrains)` → clase `.font-mono-label`

### Clases CSS en globals.css
- `.mesh-gradient` — background canvas con radiales teal/coral sutiles
- `.glass-panel` — navbar glass (light): rgba(255,255,255,0.75) + blur(20px)
- `.display-heavy` — letter-spacing:-0.04em, line-height:0.95 (para headlines Playfair grandes)
- `.tech-card` — tarjeta blanca para logos del tech stack (hover: teal border/glow)
- `.service-card-dark` — card para secciones navy (rgba white + blur)
- `.glass-card-dark` — conservado para uso en otros proyectos
- `.animate-pulse-ring`, `.grain-dark` — conservados

### Constantes en page.tsx
```tsx
const CANVAS  = "#F9F9F9";
const NAVY    = "#1E3A5F";
const PRIMARY = "#022448";
const TEAL    = "#00B5B5";
const CORAL   = "#FF7F7F";
const BONE    = "#F8F8F8";
const MUTED   = "#43474e";
```

## Arquetipo visual
- Editorial serif + bento grid (estilo Linear/Stripe/premium agency)
- Secciones alternas: canvas light → navy dark → canvas light → bone
- Hero: 2 columnas — texto izq + bento tech stack der
- Servicios: bento 12-col sobre navy
- Proceso: 4 cards blancas sobre canvas, Playfair Display grandes
- CTA: headline bold + botón WhatsApp verde + botón secundario navy

## Estructura de página
1. Navbar (glass-panel fijo)
2. Hero (mesh-gradient, 2-col desktop)
3. Servicios (navy dark, bento 12-col)
4. Proceso (canvas light, 4 cards)
5. CTA (bone, centrado)
6. Footer (primary navy, minimal)

## Contacto (NO CAMBIAR)
- WhatsApp: 787-510-4504 (wa.me/17875104504)
- Instagram: @paginalo (instagram.com/paginalo)
- Email: hola@paginalo.co

## Reglas de Diseño

### Layout & Espaciado
- NUNCA dark canvas global — ahora light base con secciones dark
- Servicios: bento 12-col grid con cards span 5/7
- NO stats falsos, NO carruseles de marcas
- Footer minimal navy con IG + WA + email
- Mobile first, responsive
- `text-balance` en headings, `text-pretty` en párrafos
- `display-heavy` + Playfair Display = impacto tipográfico

### Animaciones (framer-motion)
- Solo animar `transform` y `opacity`
- Stagger: 30–80ms entre elementos
- `ease-out` en entradas
- `whileInView` con `viewport={{ once: true }}` en secciones

## Reglas de código
- Inline styles para colores (las constantes PRIMARY, TEAL, etc.)
- CSS custom classes en `globals.css` para patrones reutilizables
- `ProcesoSection.tsx` usa `<style>` scoped con CSS vars `--paso-color`
- Mouse event handlers (`onMouseEnter/Leave`) para hover de links en nav

## Dueño
Roberto (RC) — Boricua, dueño de Páginalo. Socio: Rogi
