export default function Ticker() {
  const items = [
    "Cera de Soya 100%", "Pabilo de Algodón", "Hand-Poured en Puerto Rico",
    "+20 Aromas Disponibles", "Hecho con Intención Real", "Sin Tóxicos", "Envíos en Puerto Rico",
  ];
  const doubled = [...items, ...items];

  return (
    <div style={{ background: "var(--black)", display: "flex", alignItems: "center", height: 40, overflow: "hidden" }}>
      <div className="ticker-track" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", padding: "0 2.5rem" }}>
              {item}
            </span>
            <span style={{ color: "var(--gold)", fontSize: 12 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
