"use client";

import { useState } from "react";

const pasos = [
  {
    num: "01",
    title: "Análisis",
    day: "Día 1",
    description:
      "Entendemos tu negocio, tu cliente ideal y exactamente qué necesitas. Sin suposiciones, sin scope creep. Salimos de esta reunión con un plan claro y un precio exacto.",
    icon: "travel_explore",
  },
  {
    num: "02",
    title: "Diseño",
    day: "Días 2–4",
    description:
      "Creamos la maqueta visual y tú la apruebas antes de que escribamos una línea de código. Lo que apruebas es exactamente lo que recibes. Sin sorpresas.",
    icon: "draw",
  },
  {
    num: "03",
    title: "Desarrollo",
    day: "Días 5–12",
    description:
      "Construcción con Next.js, Supabase y n8n. Ves el progreso en tiempo real — no desaparecemos una semana y reaparecemos con algo que no pediste.",
    icon: "bolt",
  },
  {
    num: "04",
    title: "Lanzamiento",
    day: "Día 14",
    description:
      "Deploy, dominio, Google Business y 30 días de soporte gratuito incluidos. Te capacitamos para que puedas editar lo que necesites. Tu negocio, tu control.",
    icon: "rocket_launch",
  },
];

export default function ProcesoSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="proceso" className="proceso-section">
      <div className="proceso-header">
        <span className="proceso-eyebrow">Metodología</span>
        <h2 className="proceso-title font-headline-lg text-headline-lg text-balance">
          Del acuerdo al lanzamiento
        </h2>
        <p className="proceso-subtitle text-body-base text-pretty">
          Un proceso ágil y transparente. Sin sorpresas, sin retrasos.
        </p>
      </div>

      {/* Desktop: horizontal cards */}
      <div className="steps-desktop">
        {pasos.map((paso, i) => (
          <button
            key={i}
            className={`step-card ${active === i ? "step-active" : ""}`}
            onClick={() => setActive(i === active ? -1 : i)}
            aria-expanded={active === i}
          >
            <div className="step-top">
              <span className="step-num">{paso.num}</span>
              <span className="step-day">{paso.day}</span>
            </div>
            <div className="step-icon">
              <span className="material-symbols-outlined" style={{ fontSize:"28px", fontVariationSettings:"'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>
                {paso.icon}
              </span>
            </div>
            <h3 className="step-title">{paso.title}</h3>
            <div
              className="step-desc-wrap"
              style={{ maxHeight: active === i ? "140px" : "0px" }}
            >
              <p className="step-desc">{paso.description}</p>
            </div>
            <div className="step-indicator" />
          </button>
        ))}
      </div>

      {/* Mobile: vertical accordion */}
      <div className="steps-mobile">
        {pasos.map((paso, i) => (
          <div key={i} className={`step-row ${active === i ? "row-active" : ""}`}>
            <button
              className="step-row-header"
              onClick={() => setActive(i === active ? -1 : i)}
              aria-expanded={active === i}
            >
              <div className="step-row-left">
                <span className="step-num-sm">{paso.num}</span>
                <div>
                  <span className="step-title-sm">{paso.title}</span>
                  <span className="step-day-sm">{paso.day}</span>
                </div>
              </div>
              <span className="step-chevron">{active === i ? "−" : "+"}</span>
            </button>
            <div
              className="step-row-body"
              style={{ maxHeight: active === i ? "200px" : "0px" }}
            >
              <p className="step-desc-sm">{paso.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .proceso-section {
          padding: 112px 24px;
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
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #4ddada;
        }

        .proceso-title {
          margin: 0;
          color: #F8F8F8;
        }

        .proceso-subtitle {
          color: #bbc9c9;
          margin: 0;
          max-width: 420px;
        }

        /* ── DESKTOP ── */
        .steps-desktop {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .step-card {
          position: relative;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px 20px;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
          overflow: hidden;
          color: #dbe2f7;
        }

        .step-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .step-card.step-active {
          border-color: #4ddada;
          box-shadow: 0 4px 24px rgba(77, 218, 218, 0.12);
        }

        .step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .step-num {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(255, 255, 255, 0.25);
          transition: color 0.2s;
        }

        .step-active .step-num {
          color: #4ddada;
        }

        .step-day {
          font-size: 11px;
          color: #bbc9c9;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.06);
          padding: 3px 8px;
          border-radius: 20px;
          transition: background 0.2s, color 0.2s;
        }

        .step-active .step-day {
          background: #4ddada;
          color: #0b1322;
        }

        .step-icon {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
        }

        .step-title {
          font-size: 17px;
          font-weight: 600;
          color: #F8F8F8;
          margin: 0;
          line-height: 1.2;
        }

        .step-desc-wrap {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-desc {
          font-size: 13px;
          color: #bbc9c9;
          line-height: 1.65;
          margin: 12px 0 0;
          padding-right: 4px;
        }

        .step-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #4ddada;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0 0 16px 16px;
        }

        .step-active .step-indicator {
          transform: scaleX(1);
        }

        /* ── MOBILE ── */
        .steps-mobile {
          display: none;
        }

        .step-row {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 10px;
          transition: border-color 0.2s;
        }

        .step-row.row-active {
          border-color: #4ddada;
        }

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
          color: #dbe2f7;
        }

        .step-row-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .step-num-sm {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.25);
          min-width: 28px;
        }

        .row-active .step-num-sm {
          color: #4ddada;
        }

        .step-title-sm {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: #F8F8F8;
          line-height: 1.2;
        }

        .step-day-sm {
          display: block;
          font-size: 12px;
          color: #bbc9c9;
          margin-top: 2px;
        }

        .step-chevron {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.3);
          font-weight: 300;
          line-height: 1;
          transition: color 0.2s;
        }

        .row-active .step-chevron {
          color: #4ddada;
        }

        .step-row-body {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-desc-sm {
          font-size: 14px;
          color: #bbc9c9;
          line-height: 1.65;
          margin: 0;
          padding: 0 20px 20px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .proceso-section {
            padding: 80px 16px;
          }
          .steps-desktop {
            display: none;
          }
          .steps-mobile {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .proceso-section {
            padding: 60px 12px;
          }
        }
      `}</style>
    </section>
  );
}
