"use client";

import { useState } from "react";

const PRIMARY = "#022448";
const TEAL    = "#00B5B5";
const MUTED   = "#43474e";
const BONE    = "#F8F8F8";

const pasos = [
  {
    num: "01",
    title: "Análisis",
    day: "Día 1",
    icon: "travel_explore",
    color: TEAL,
    description:
      "Entendemos tu negocio, tu cliente ideal y exactamente qué necesitas. Sin suposiciones, sin scope creep. Salimos de esta reunión con un plan claro y un precio exacto.",
  },
  {
    num: "02",
    title: "Diseño",
    day: "Días 2–4",
    icon: "draw",
    color: "#FF7F7F",
    description:
      "Creamos la maqueta visual y tú la apruebas antes de que escribamos una línea de código. Lo que apruebas es exactamente lo que recibes. Sin sorpresas.",
  },
  {
    num: "03",
    title: "Desarrollo",
    day: "Días 5–12",
    icon: "bolt",
    color: TEAL,
    description:
      "Construcción con Next.js, Supabase y n8n. Ves el progreso en tiempo real — no desaparecemos una semana y reaparecemos con algo que no pediste.",
  },
  {
    num: "04",
    title: "Lanzamiento",
    day: "Día 14",
    icon: "rocket_launch",
    color: "#FF7F7F",
    description:
      "Deploy, dominio, Google Business y 30 días de soporte gratuito incluidos. Te capacitamos para que puedas editar lo que necesites. Tu negocio, tu control.",
  },
];

export default function ProcesoSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="proceso" className="proceso-section">
      <div className="proceso-header">
        <span className="proceso-eyebrow">Metodología</span>
        <h2 className="proceso-title font-display display-heavy text-balance">
          Del acuerdo al lanzamiento
        </h2>
        <p className="proceso-subtitle text-pretty">
          Un proceso ágil y transparente. Sin sorpresas, sin retrasos.
        </p>
      </div>

      {/* Desktop: 4 cards iguales */}
      <div className="steps-desktop">
        {pasos.map((paso, i) => (
          <button
            key={i}
            className={`step-card ${active === i ? "step-active" : ""}`}
            style={{ "--paso-color": paso.color } as React.CSSProperties}
            onClick={() => setActive(i)}
            aria-expanded={active === i}
          >
            {/* Número grande Playfair */}
            <div className="step-num-big font-display">{paso.num}</div>

            <div className="step-top">
              <span className="material-symbols-outlined step-icon-sym">{paso.icon}</span>
              <span className="step-day-badge">{paso.day}</span>
            </div>

            <h3 className="step-title font-display">{paso.title}</h3>
            <p className="step-desc font-body">{paso.description}</p>

            <div className="step-indicator" />
          </button>
        ))}
      </div>

      {/* Mobile: accordion */}
      <div className="steps-mobile">
        {pasos.map((paso, i) => (
          <div
            key={i}
            className={`step-row ${active === i ? "row-active" : ""}`}
            style={{ "--paso-color": paso.color } as React.CSSProperties}
          >
            <button
              className="step-row-header"
              onClick={() => setActive(i === active ? -1 : i)}
              aria-expanded={active === i}
            >
              <div className="step-row-left">
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "22px",
                    fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
                    color: paso.color,
                    opacity: active === i ? 1 : 0.45,
                    transition: "opacity 0.2s",
                  }}
                >
                  {paso.icon}
                </span>
                <div>
                  <span className="step-title-sm font-display">{paso.title}</span>
                  <span className="step-day-sm font-mono-label">{paso.day}</span>
                </div>
              </div>
              <span className="step-chevron">{active === i ? "−" : "+"}</span>
            </button>
            <div
              className="step-row-body"
              style={{ maxHeight: active === i ? "200px" : "0px" }}
            >
              <p className="step-desc-sm font-body">{paso.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .proceso-section {
          background: #F9F9F9;
          padding: 112px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .proceso-header {
          text-align: center;
          margin-bottom: 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .proceso-eyebrow {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${TEAL};
        }

        .proceso-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: ${PRIMARY};
          margin: 0;
        }

        .proceso-subtitle {
          font-family: var(--font-inter), system-ui, sans-serif;
          color: ${MUTED};
          margin: 0;
          max-width: 420px;
          font-size: 15px;
          line-height: 1.6;
        }

        /* ── DESKTOP ── */
        .steps-desktop {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          align-items: stretch;
        }

        .step-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 20px;
          padding: 28px 22px;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.15s;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 280px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }

        .step-card:hover {
          border-color: color-mix(in srgb, var(--paso-color) 40%, transparent);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.08);
        }

        .step-card.step-active {
          border-color: var(--paso-color);
          box-shadow: 0 4px 28px color-mix(in srgb, var(--paso-color) 15%, transparent);
        }

        .step-num-big {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 1;
          color: rgba(0,0,0,0.06);
          transition: color 0.25s;
          margin-bottom: 4px;
        }

        .step-active .step-num-big {
          color: var(--paso-color);
          opacity: 0.25;
        }

        .step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: -4px;
        }

        .step-icon-sym {
          font-size: 28px;
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          color: rgba(0,0,0,0.2);
          transition: color 0.2s;
        }

        .step-active .step-icon-sym {
          color: var(--paso-color);
        }

        .step-day-badge {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: ${MUTED};
          background: rgba(0,0,0,0.05);
          padding: 3px 10px;
          border-radius: 20px;
          font-weight: 500;
          transition: background 0.2s, color 0.2s;
        }

        .step-active .step-day-badge {
          background: var(--paso-color);
          color: #fff;
        }

        .step-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: ${PRIMARY};
          margin: 4px 0 0;
          line-height: 1.2;
        }

        .step-desc {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 13px;
          color: ${MUTED};
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        .step-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--paso-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0 0 20px 20px;
        }

        .step-active .step-indicator {
          transform: scaleX(1);
        }

        /* ── MOBILE ── */
        .steps-mobile { display: none; }

        .step-row {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 10px;
          transition: border-color 0.2s;
        }

        .step-row.row-active { border-color: var(--paso-color); }

        .step-row-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 18px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          color: ${PRIMARY};
        }

        .step-row-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .step-title-sm {
          display: block;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: ${PRIMARY};
          line-height: 1.2;
        }

        .step-day-sm {
          display: block;
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: ${MUTED};
          margin-top: 2px;
        }

        .step-chevron {
          font-size: 20px;
          color: rgba(0,0,0,0.25);
          font-weight: 300;
          line-height: 1;
          transition: color 0.2s;
        }

        .row-active .step-chevron { color: var(--paso-color); }

        .step-row-body {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-desc-sm {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 14px;
          color: ${MUTED};
          line-height: 1.65;
          margin: 0;
          padding: 0 20px 20px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .proceso-section { padding: 80px 24px; }
          .steps-desktop { display: none; }
          .steps-mobile { display: block; }
        }

        @media (max-width: 480px) {
          .proceso-section { padding: 60px 16px; }
        }
      `}</style>
    </section>
  );
}
