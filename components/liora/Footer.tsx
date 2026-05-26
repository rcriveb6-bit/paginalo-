"use client";

export default function Footer() {
  return (
    <>
      <footer style={{ background: "var(--black)", padding: "3.5rem 8%", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem" }} className="footer-grid">
        <style>{`@media(max-width:768px){ .footer-grid{ grid-template-columns:1fr !important; gap:2rem !important; } }`}</style>

        <div>
          <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 30, fontWeight: 700, color: "var(--white)", letterSpacing: "0.06em" }}>
            LI<span style={{ color: "var(--gold)" }}>O</span>RA
          </div>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)", marginTop: 6, marginBottom: "1.25rem" }}>
            Be The Light
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", lineHeight: 2 }}>
            📍 Toa Alta, Puerto Rico<br />
            📷 @liorayco<br />
            Est. 2025
          </div>
        </div>

        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>Colección</div>
          <ul style={{ listStyle: "none" }}>
            {["Los de Siempre", "Los de Temporada", "Gift Sets", "Tropi Mix"].map((l) => (
              <li key={l} style={{ marginBottom: "0.6rem" }}>
                <a href="#catalogo" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                >{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>Info</div>
          <ul style={{ listStyle: "none" }}>
            {[
              { label: "Sobre LIORA", href: "#nosotros" },
              { label: "Cómo Ordenar", href: "#productos" },
              { label: "Envíos en PR", href: "#" },
              { label: "@liorayco", href: "https://www.instagram.com/liorayco" },
            ].map(({ label, href }) => (
              <li key={label} style={{ marginBottom: "0.6rem" }}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div style={{ background: "rgba(0,0,0,0.4)", textAlign: "center", padding: "1rem", fontSize: 10, color: "rgba(255,255,255,0.15)", letterSpacing: "0.1em", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        © 2025 LIORA & Co. — Toa Alta, Puerto Rico · Be The Light ✦
      </div>
    </>
  );
}
