const FEATS = [
  { num: "100%", title: "Cera de Soya", desc: "Natural, limpia y de larga duración." },
  { num: "PR", title: "Hand-Poured", desc: "Elaboradas en Toa Alta, Puerto Rico." },
  { num: "20+", title: "Aromas", desc: "Permanentes y de temporada." },
  { num: "♡", title: "Con Intención", desc: "Cada vela tiene propósito." },
];

export default function Features() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      className="features-grid"
    >
      <style>{`@media(max-width:768px){ .features-grid{ grid-template-columns: repeat(2,1fr) !important; } }`}</style>
      {FEATS.map((f) => (
        <div key={f.title} style={{ background: "var(--white)", padding: "2.5rem 1.75rem", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 34, fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: "0.75rem" }}>{f.num}</div>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--black)", marginBottom: "0.5rem" }}>{f.title}</div>
          <p style={{ fontSize: 12, color: "var(--gray-mid)", fontWeight: 300, lineHeight: 1.6 }}>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
