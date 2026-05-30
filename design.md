# Design System — Páginalo Dark Proto

Sistema de diseño del prototipo dark glassmorphism. Basado en Material Design 3 adaptado para dark mode.

---

## Paleta de Colores

### Base
| Token | Hex | Uso |
|-------|-----|-----|
| `background` | `#0b1322` | Fondo general, surface |
| `surface-container` | `#18202e` | Cards internas |
| `surface-container-lowest` | `#060e1c` | Footer, secciones más oscuras |
| `on-background` | `#dbe2f7` | Texto principal |
| `on-surface-variant` | `#bbc9c9` | Texto secundario, subtítulos |

### Acentos
| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#4ddada` | Teal primario — badges, iconos, números |
| `primary-container` | `#00b5b5` | Teal medio — botones CTA secundarios |
| `coral-sunset` | `#FF7F7F` | Coral — CTA principal, WhatsApp button |
| `bone-white` | `#F8F8F8` | Texto blanco/crema en headlines |
| `whatsapp-green` | `#25D366` | Floating WA button |

### Glass / Overlay
| Token | Valor | Uso |
|-------|-------|-----|
| `glass-bg` | `rgba(255,255,255,0.04)` | Fondo de cards glass |
| `glass-border` | `rgba(255,255,255,0.08)` | Bordes de cards glass |

---

## Tipografía

### Familias
| Familia | Pesos | Uso |
|---------|-------|-----|
| **Syne** | 700, 800 | Headlines, display, labels caps |
| **DM Sans** | 400, 700 | Body copy, botones |

### Escala
| Token | Tamaño | Line Height | Weight | Uso |
|-------|--------|-------------|--------|-----|
| `display-hero` | 48px | 56px | 800 | H1 hero principal |
| `headline-lg` | 32px | 40px | 800 | H2 secciones |
| `headline-md` | 24px | 32px | 800 | H3 cards, sub-secciones |
| `body-lg` | 18px | 28px | 400 | Lead text, descripciones importantes |
| `body-base` | 15px | 24px | 400 | Texto general |
| `body-bold` | 15px | 24px | 700 | Botones, etiquetas |
| `label-caps` | 11px | 16px | 800 | Labels en mayúsculas (letter-spacing 0.2em) |

---

## Componentes

### Glass Card
```css
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Hero Glow (teal)
```css
width: 600px; height: 600px;
background: radial-gradient(circle, rgba(77,218,218,0.15) 0%, rgba(11,19,34,0) 70%);
filter: blur(60px);
```

### Coral Glow
```css
width: 400px; height: 400px;
background: radial-gradient(circle, rgba(255,127,127,0.10) 0%, rgba(11,19,34,0) 70%);
filter: blur(40px);
```

### Grain Overlay
```css
position: fixed; inset: 0;
opacity: 0.04;
background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
pointer-events: none; z-index: 9999;
```

### CTA Primary (coral)
```css
background: #FF7F7F; color: #F8F8F8;
padding: 16px 32px; border-radius: 9999px;
font-family: DM Sans; font-weight: 700;
box-shadow: 0 20px 60px rgba(255,127,127,0.2);
```

### CTA Secondary (glass)
```css
/* glass-card + */
color: #F8F8F8; padding: 16px 32px; border-radius: 9999px;
```

---

## Espaciado

| Token | Valor |
|-------|-------|
| `section-gap-mobile` | 96px |
| `section-gap-desktop` | 112px |
| `margin-mobile` | 24px |
| `margin-desktop` | 48px |
| `max-width` | 1100px |
| `gutter` | 16px |

---

## Animaciones

| Efecto | Implementación |
|--------|---------------|
| Hover scale up | `hover:scale-105 active:scale-95 transition-all` |
| Card hover rotate | `rotate-2 group-hover:rotate-0 transition-transform duration-500` |
| Floating badge | `animate-bounce` con `animation-duration: 3s` |
| WA ping | `animate-ping opacity-75` en border del botón |
| Parallax glow | `mousemove` → `translateX/Y` en hero-glow |
| Glass nav | `backdrop-blur-md` en `fixed` nav |

---

## Estructura de Secciones

| # | Sección | Fondo | Notas |
|---|---------|-------|-------|
| 1 | Hero | `#0b1322` | Glow teal + mockup browser card |
| 2 | Trust Strip | `glass-bg/20` | Stack tecnológico |
| 3 | Servicios | `#0b1322` | 3-col bento grid |
| 4 | Proceso | `surface-container-lowest/50` | 4 pasos con línea horizontal |
| 5 | Portafolio | `#0b1322` | 3 cards con overlay gradient |
| 6 | CTA Box | `#0b1322` | Glass card con glow centrado |
| Footer | Footer | `surface-container-lowest` | Logo + links + social |

---

## Pendientes para producción
- [ ] Screenshots reales de Liora, RYA, CRM Solar para portafolio
- [ ] Screenshot real del CRM para el hero mockup
- [ ] Mobile hamburger menu
- [ ] Scroll animations con IntersectionObserver / framer-motion
- [ ] Sección Proceso en español con duraciones estimadas
- [ ] Descripciones de servicios más específicas al mercado PR
