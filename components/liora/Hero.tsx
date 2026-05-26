"use client";

import Link from "next/link";
import Image from "next/image";
import CandleSvg from "./CandleSvg";

export default function Hero() {
  return (
    <section style={{
      minHeight: "calc(100vh - 64px)",
      background: "var(--cream)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      overflow: "hidden",
      position: "relative",
    }}
    className="hero-grid"
    >
      <style>{`
        @media(max-width:768px){
          .hero-grid{ grid-template-columns:1fr !important; }
          .hero-right-panel{ min-height:380px; }
        }
      `}</style>

      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "6% 8%" }}>
        <p style={{ fontSize: 10, fontWeight: 400, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: 10 }}>
          Toa Alta, Puerto Rico · Est. 2025
          <span style={{ flex: "0 0 36px", height: 1, background: "var(--gold)", opacity: 0.4, display: "inline-block" }} />
        </p>

        <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: "clamp(64px,7vw,110px)", fontWeight: 700, lineHeight: 0.9, color: "var(--black)", letterSpacing: "0.04em", marginBottom: 6 }}>
          LI<span style={{ color: "var(--gold)" }}>O</span>RA
        </h1>

        <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(14px,1.5vw,20px)", fontWeight: 400, fontStyle: "italic", color: "var(--gold)", letterSpacing: "0.08em", marginBottom: "2rem" }}>
          Be The Light
        </p>

        <p style={{ fontSize: 15, fontWeight: 300, color: "#7A7060", maxWidth: 400, lineHeight: 1.85, marginBottom: "2.5rem" }}>
          No son solo velas... es como se siente tu espacio cuando{" "}
          <em style={{ color: "var(--black)", fontStyle: "italic" }}>llegas.</em>
          <br /><br />
          Hechas a mano, con intención real.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <a
            href="#productos"
            style={{
              background: "var(--black)", color: "var(--white)",
              border: "none", padding: "13px 30px",
              fontFamily: "var(--font-outfit), sans-serif", fontSize: 11,
              fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase",
              cursor: "pointer", textDecoration: "none", display: "inline-block",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--black)"; e.currentTarget.style.color = "var(--white)"; }}
          >
            Ver Colección
          </a>
          <a
            href="#nosotros"
            style={{
              background: "none", border: "1px solid rgba(0,0,0,0.18)",
              padding: "13px 30px", fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 11, fontWeight: 400, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--gray-mid)",
              cursor: "pointer", textDecoration: "none", display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.18)"; e.currentTarget.style.color = "var(--gray-mid)"; }}
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      {/* Right panel — real product photo */}
      <div
        className="hero-right-panel"
        style={{
          position: "relative", overflow: "hidden",
          minHeight: 480,
        }}
      >
        <Image
          src="/candles/sweet-vainilla.png"
          alt="LIORA Sweet Vainilla — vela artesanal prendida"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="50vw"
        />
        {/* Gradient overlay for readability */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(250,247,241,0.15) 0%, transparent 40%)" }} />

        {/* Badge */}
        <div style={{
          position: "absolute", bottom: "10%", left: "6%",
          background: "rgba(255,255,255,0.92)", border: "1px solid var(--border-gold)",
          padding: "12px 16px", maxWidth: 210,
          backdropFilter: "blur(4px)",
        }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>✦ Nuestra promesa</div>
          <div style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: 13, color: "var(--black)", lineHeight: 1.5 }}>
            "Hay algo en prender nuestras velas que cambia tu energía por completo."
          </div>
        </div>

        {/* Handle */}
        <div style={{ position: "absolute", top: "10%", right: "8%", fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.8)", fontWeight: 400, textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
          @liorayco
        </div>
      </div>
    </section>
  );
}
