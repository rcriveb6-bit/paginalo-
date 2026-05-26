import Image from "next/image";
import CandleSvg from "./CandleSvg";

export default function AboutSection() {
  return (
    <section id="nosotros" style={{ background: "var(--ivory)", padding: "5rem 8%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
        <style>{`@media(max-width:768px){ .about-grid{ grid-template-columns:1fr !important; gap:2rem !important; } }`}</style>

        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>✦ Nuestra Historia</p>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(26px,3.2vw,44px)", fontWeight: 700, color: "var(--black)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Hechas a mano,<br />con <em style={{ fontStyle: "italic", color: "var(--gold)" }}>intención real.</em>
          </h2>

          <blockquote style={{
            borderLeft: "3px solid var(--gold)", padding: "1rem 1.5rem",
            fontFamily: "var(--font-playfair), serif", fontStyle: "italic",
            fontSize: 16, color: "var(--black)", lineHeight: 1.65,
            background: "var(--white)", marginBottom: "1.75rem",
          }}>
            "De lejos se ven bonitas... pero cuando te acercas, te enamoras."
          </blockquote>

          <p style={{ fontSize: 14, color: "#706A60", lineHeight: 1.85, marginBottom: "1rem" }}>
            LIORA nació en 2025 con un propósito claro: crear velas que no solo se vean bien, sino que transformen cómo se siente tu espacio. Cada vela es hand-poured en Toa Alta, Puerto Rico, con cera de soya 100% natural y pabilo de algodón.
          </p>
          <p style={{ fontSize: 14, color: "#706A60", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            En LIORA la seguridad es primero. Usamos solo materiales de calidad, sin tóxicos, para que puedas disfrutar cada aroma con tranquilidad.
          </p>

          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {[["100%", "Natural"], ["20+", "Aromas"], ["PR", "Hecho aquí"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-mid)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", minHeight: 420, borderRadius: 2, overflow: "hidden", border: "1px solid var(--border)" }}>
          <Image
            src="/candles/eucalipto.png"
            alt="Velas LIORA — Eucalipto, hecho en Puerto Rico"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 60%)" }} />
        </div>
      </div>
    </section>
  );
}
