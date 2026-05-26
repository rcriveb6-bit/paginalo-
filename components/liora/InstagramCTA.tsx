"use client";

import Image from "next/image";

export default function InstagramCTA() {
  return (
    <div style={{
      position: "relative",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      alignItems: "center", minHeight: 380,
      padding: "4rem 8%", gap: "4rem",
      overflow: "hidden",
    }}
    className="insta-grid"
    >
      <style>{`@media(max-width:768px){ .insta-grid{ grid-template-columns:1fr !important; } }`}</style>

      {/* Background photo */}
      <Image
        src="/candles/lavanda.png"
        alt="LIORA Lavanda"
        fill
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.82)" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>✦ Síguenos</p>
        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, color: "var(--white)", lineHeight: 1.1, marginBottom: "0.75rem" }}>
          Encuéntranos<br />en <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Instagram</em>
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: "2rem" }}>
          Aromas nuevos, temporadas y novedades · @liorayco
        </p>
        <a
          href="https://www.instagram.com/liorayco"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "none", border: "1px solid var(--border-gold)",
            padding: "12px 24px", color: "var(--gold)",
            fontFamily: "var(--font-outfit), sans-serif", fontSize: 11,
            fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase",
            cursor: "pointer", textDecoration: "none", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--gold)"; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          @liorayco
        </a>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative", zIndex: 1 }}>
        {[
          { label: "✦ Nuestro propósito", text: '"No son solo velas... es como se siente tu espacio cuando llegas."' },
          { label: "✦ Hechas para ti", text: '"Si quieres la tuya, escríbeme HOY."' },
        ].map(({ label, text }) => (
          <div key={label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.15)", padding: "1.25rem 1.5rem" }}>
            <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>{label}</div>
            <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
