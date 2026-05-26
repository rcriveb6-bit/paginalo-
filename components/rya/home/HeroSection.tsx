import Link from "next/link";
import GoldDivider from "@/components/rya/ui/GoldDivider";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-texture"
      style={{ background: "var(--color-bg)", paddingTop: "64px" }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(200,169,110,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <GoldDivider width="narrow" />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.25em" }}
          >
            Puerto Rico · Segunda Mano Curada
          </span>
          <GoldDivider width="narrow" />
        </div>

        {/* Main title */}
        <h1
          className="mb-6 font-normal leading-none"
          style={{
            fontFamily: "var(--font-title)",
            color: "var(--color-cream)",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "0.05em",
          }}
        >
          Moda consciente<br />
          <em style={{ color: "var(--color-warm-white)" }}>para almas sofisticadas.</em>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-10 max-w-lg mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-slate)",
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
          }}
        >
          Ropa de segunda mano curada. Piezas únicas, seleccionadas a mano.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/rya/catalogo"
            className="btn-gold px-8 py-3.5 text-xs"
          >
            Ver Catálogo
          </Link>
          <Link
            href="/rya/nosotros"
            className="btn-outline px-8 py-3.5 text-xs"
          >
            Nuestra historia
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "var(--color-gold)" }}
          />
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em", fontSize: "0.6rem" }}>
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
