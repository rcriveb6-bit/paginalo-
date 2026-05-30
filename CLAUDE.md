# CLAUDE.md — Páginalo

## Proyecto
Agencia digital de Puerto Rico. Landing page principal con portafolio de proyectos.

## Stack
- Next.js 14 (App Router)
- Supabase (base de datos)
- Vercel (deploy - paginalo-two.vercel.app)
- Tailwind CSS
- framer-motion (animaciones)
- Resend (emails)

## Arquitectura
- Proyecto ÚNICO para landing de Páginalo (NO multi-marca)
- Liora → Netlify (separado)
- RYA → Netlify (separado)
- CRM → Vercel (separado, solar-crm.vercel.app)

## Paleta de Colores OFICIAL (NO CAMBIAR)
- Bone White: #F8F8F8 (fondo principal)
- Navy: #1E3A5F (texto principal)
- Teal: #00B5B5 (acento 1)
- Coral: #FF7F7F (acento 2)
- Logo: gradiente teal → coral
- PROHIBIDO usar #0F1B2D, #0A1628, #0D0D0D, #C8A96E o cualquier color dark

## Diseño Premium — Reglas

### Layout & Espaciado
- Hero LIGHT siempre (fondo #F8F8F8). NUNCA dark
- Logo visible como imagen, grande (70% ancho en mobile)
- Portafolio con 3 CARDS visuales del mismo tamaño
- NO stats falsos, NO carruseles de marcas
- Footer minimal con enlaces reales
- Mobile first, responsive
- Usar `h-dvh` en vez de `h-screen`
- Usar `text-balance` en headings, `text-pretty` en párrafos
- Usar `size-*` para elementos cuadrados (no `w-*` + `h-*`)
- z-index fijo, sin valores arbitrarios

### Animaciones (framer-motion)
- Solo animar `transform` y `opacity` — NUNCA `width`, `height`, `margin`, `padding`
- Botones: `scale(0.97)` en `:active` con 160ms ease-out
- Entradas desde `scale(0.95)` + `opacity: 0` (nunca desde `scale(0)`)
- UI animations < 300ms
- Stagger: 30-80ms entre elementos
- NO animar acciones de teclado
- Respetar `prefers-reduced-motion`
- Hover solo en dispositivos con hover (`@media (hover: hover) and (pointer: fine)`)
- Usar `ease-out` en entradas, NUNCA `ease-in` en UI

### Tipografía
- `text-balance` en headings
- `tabular-nums` para datos
- `truncate` o `line-clamp` para UI densa
- NO modificar `letter-spacing` sin pedirlo

### Componentes
- `aria-label` en botones solo-icono
- Errores junto a la acción
- NUNCA bloquear paste en inputs
- AlertDialog para acciones destructivas

## Proyectos en Portafolio (links externos)
1. Liora y Co — liorayco.com
2. RYA Shop — ropa thrift curada. WhatsApp: (787) 455-5405. IG: @rya.shop2025
3. Solar CRM — solar-crm.vercel.app

## Contacto (NO CAMBIAR)
- WhatsApp: 787-510-4504 (wa.me/17875104504)
- Instagram: @paginalo (instagram.com/paginalo)
- Email: hola@paginalo.co

## Dueño
Roberto (RC) - Boricua, dueño de Páginalo. Socio: Rogi
