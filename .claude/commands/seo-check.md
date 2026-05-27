# SEO Check — Páginalo

Audita el SEO técnico y on-page de este proyecto Next.js.

## Archivos a revisar
- `app/layout.tsx` — metadata global (title, description, og:image)
- `app/(main)/page.tsx` — headings H1/H2/H3, alt texts
- `app/(brands)/liora/page.tsx` — metadata de Liora
- `app/(brands)/rya/page.tsx` — metadata de RYA
- `public/` — verificar que existe og-image.png o similar

## Checklist

### Meta tags
- [ ] `<title>` tiene menos de 60 caracteres
- [ ] `description` tiene entre 140-160 caracteres
- [ ] `og:title`, `og:description`, `og:image` presentes
- [ ] `og:image` existe en `/public/` y tiene dimensiones 1200×630
- [ ] `twitter:card` configurado

### Headings
- [ ] Solo un H1 por página
- [ ] H1 incluye keyword principal ("agencia digital Puerto Rico" o "automatización IA")
- [ ] H2 en cada sección principal
- [ ] Sin saltos de nivel (H1 → H3 sin H2)

### Imágenes
- [ ] Todos los `<Image>` tienen `alt` descriptivo
- [ ] Logo: alt="Páginalo — Agencia Digital Puerto Rico"

### Structured data (bonus)
- [ ] JSON-LD de tipo `LocalBusiness` con dirección PR, teléfono, servicios

## Output
Lista los problemas encontrados con severidad (Alta/Media/Baja) y la corrección exacta de código.
