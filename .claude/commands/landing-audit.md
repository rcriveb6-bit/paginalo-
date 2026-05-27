# Landing Audit — CRO Checklist

Audita la landing de Páginalo con criterio de Conversion Rate Optimization (CRO).

## Secciones a evaluar (en orden de impacto)

### 1. Above the fold (lo que se ve sin scroll)
- [ ] ¿El headline comunica el valor en menos de 5 segundos?
- [ ] ¿Hay un CTA visible sin scroll?
- [ ] ¿El visitante sabe QUÉ hace Páginalo, PARA QUIÉN y POR QUÉ importa?

### 2. Prueba social
- [ ] ¿Hay testimonios de clientes reales?
- [ ] ¿Hay números concretos (proyectos, clientes, tiempo)?
- [ ] ¿Las marcas del portafolio tienen screenshots visibles?

### 3. Claridad de oferta
- [ ] ¿Los servicios tienen precios o rangos?
- [ ] ¿El proceso está explicado (qué pasa después de hacer click)?
- [ ] ¿Hay garantías o riesgos eliminados ("sin compromiso", "gratis")?

### 4. Fricción del CTA
- [ ] ¿El único CTA es WhatsApp? (si sí: agregar form como alternativa)
- [ ] ¿El texto del botón es activo ("Consulta gratis") o pasivo ("Contáctanos")?
- [ ] ¿Hay CTA intermedio antes del contacto final (ej: "Ver portafolio")?

### 5. Mobile UX
- [ ] ¿El hero es legible en iPhone SE (375px)?
- [ ] ¿Los botones tienen mínimo 44px de tap target?
- [ ] ¿El floating WhatsApp no bloquea contenido importante?

### 6. Velocidad y técnico
- [ ] ¿Las imágenes usan `next/image` con `priority` en el hero?
- [ ] ¿No hay `console.error` ni warnings en build?

## Output
Para cada punto fallido: problema específico + solución concreta + archivo a editar.
Lee `app/(main)/page.tsx` antes de responder.
