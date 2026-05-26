import { SCENTS_PERMANENTES, SCENTS_TEMPORADA } from "@/lib/liora/products";

export default function CatalogSection() {
  return (
    <section id="catalogo" style={{ background: "var(--cream)", padding: "5rem 8%" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ fontSize: 10, fontWeight: 400, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>✦ Todos los aromas</p>
        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(30px,4vw,50px)", fontWeight: 700, color: "var(--black)", lineHeight: 1.1 }}>
          Catálogo <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Completo</em>
        </h2>
        <div style={{ width: 40, height: 1, background: "var(--gold)", margin: "1.25rem auto 0" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="catalog-grid">
        <style>{`@media(max-width:768px){ .catalog-grid{ grid-template-columns:1fr !important; } }`}</style>

        <div>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--black)", borderBottom: "2px solid var(--gold)", paddingBottom: 12, marginBottom: "1.5rem" }}>
            ✦ Los de Siempre
          </div>
          <ul style={{ listStyle: "none" }}>
            {SCENTS_PERMANENTES.map((s) => (
              <li key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--border)", fontSize: 13, fontWeight: 300, color: "#5A5040" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, opacity: 0.6, display: "inline-block" }} />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--black)", borderBottom: "2px solid var(--gold)", paddingBottom: 12, marginBottom: "1.5rem" }}>
            ✦ Los de Temporada
          </div>
          <ul style={{ listStyle: "none" }}>
            {SCENTS_TEMPORADA.map((s) => (
              <li key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--border)", fontSize: 13, fontWeight: 300, color: "#5A5040" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, opacity: 0.6, display: "inline-block" }} />
                {s}
                <span style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", marginLeft: "auto", fontWeight: 400 }}>Temporada</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "1.5rem", fontSize: 12, color: "var(--gray-mid)", fontStyle: "italic", fontFamily: "var(--font-playfair), serif", textAlign: "center", padding: "1rem", border: "1px solid var(--border-gold)", background: "var(--white)" }}>
            "Tendremos más olores según la demanda. De no ver su olor favorito en la lista, favor de notificárselo a la gerencia."<br />— Liora & Co.
          </div>
        </div>
      </div>
    </section>
  );
}
