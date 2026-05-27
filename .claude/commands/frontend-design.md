# Frontend Design Guide — Páginalo

Eres un experto en diseño frontend aplicando los estándares de este proyecto específico.

## Sistema de diseño

### Paleta
- `#0A1628` — Navy oscuro (hero, contacto, proceso)
- `#1E3A5F` — Navy medio (texto principal)
- `#F8F8F8` — Gris hueso (fondos de sección alternos)
- `#00B5B5` — Teal (acentos, badges, CTAs secundarios)
- `#FF7F7F` — Coral (CTAs primarios, WhatsApp button)
- `#25D366` — Verde WhatsApp (floating button)
- `white/40`, `white/35` — Texto secundario sobre fondos oscuros

### Tipografía
- Font: System (Inter vía `--font-inter`)
- `font-black` = headlines grandes
- `font-bold` = subtítulos, títulos de card
- `font-semibold` = labels, badges
- `tracking-[0.2em] uppercase text-xs` = labels de sección (siempre en teal)

### Espaciado estándar
- Secciones: `py-24`
- Max width: `max-w-6xl mx-auto px-6`
- Cards gap: `gap-5` a `gap-8`

### Componentes reutilizables
- **Badge de sección**: `<p className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">`
- **Headline de sección**: `text-3xl md:text-4xl font-black text-[#0A1628]`
- **Gradiente IA**: `background: "linear-gradient(90deg, #00B5B5, #FF7F7F)"` con `-webkit-background-clip: text`
- **CTA primario coral**: `rounded-full px-8 py-4 text-sm font-bold text-white bg-[#FF7F7F]`
- **Glow de fondo**: `w-[700px] h-[500px] rounded-full blur-[120px] opacity-15` con gradiente radial teal→coral

## Animaciones (framer-motion)
- `fadeUp` = `{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } }`
- `stagger` = `{ show: { transition: { staggerChildren: 0.12 } } }`
- Siempre usar `whileInView` con `viewport={{ once: true, margin: "-80px" }}`

## Reglas
1. Hero y Contacto siempre en `#0A1628`
2. Secciones alternadas: `bg-white` ↔ `bg-[#F8F8F8]` ↔ `bg-[#0A1628]`
3. Nunca usar `bg-gray-*` para fondos de sección, solo para elementos internos
4. Botones CTA primarios: siempre coral con `rounded-full`
5. Links externos: siempre `target="_blank" rel="noopener noreferrer"`
6. Mobile first: empezar con clases base, añadir `md:` y `lg:` encima
