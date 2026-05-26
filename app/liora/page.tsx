import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liora — Velas Artesanales de Soya · San Juan, Puerto Rico",
  description: "Velas artesanales de soya hechas a mano en San Juan, Puerto Rico. Aromas únicos, calidad premium.",
};

const products = [
  { name: "Vainilla & Canela", price: "$28", desc: "Cálido, dulce, acogedor" },
  { name: "Lavanda & Eucalipto", price: "$32", desc: "Relajante, fresco, aromático" },
  { name: "Sándalo & Musk", price: "$35", desc: "Profundo, sensual, sofisticado" },
  { name: "Coco & Lima", price: "$30", desc: "Fresco, tropical, vibrante" },
];

export default function LioraPage() {
  const wa = "https://wa.me/17875104504?text=Hola,%20me%20interesa%20saber%20más%20sobre%20Liora";

  return (
    <div className="liora-brand min-h-screen">
      {/* ── SUB-HEADER ── */}
      <div className="border-b border-[#DDD9D2] bg-[#FAF7F1]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-widest text-[#0D0D0D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Liora
          </h1>
          <Link href="/" className="text-sm text-[#9A9A9A] hover:text-[#0D0D0D] transition-colors">
            ← Volver a Páginalo
          </Link>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#0D0D0D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
          Ilumina tu espacio
        </h2>
        <p className="mt-4 text-base text-[#9A9A9A]">
          Velas artesanales de soya · San Juan, Puerto Rico
        </p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border border-[#C9A84C] px-8 py-3 text-sm font-semibold text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white transition-all"
        >
          Hacer un pedido
        </a>
      </section>

      {/* ── PRODUCTOS ── */}
      <section className="border-t border-[#DDD9D2] bg-[#FAF7F1]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-10 text-xs font-semibold tracking-[0.2em] uppercase text-[#9A9A9A]">
            Colección
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="group cursor-default">
                <div className="aspect-square w-full bg-[#E8E4DD] mb-4" />
                <h3 className="text-sm font-bold text-[#0D0D0D]">{p.name}</h3>
                <p className="text-xs text-[#9A9A9A] mt-0.5">{p.desc}</p>
                <p className="text-sm font-semibold text-[#C9A84C] mt-1">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="border-t border-[#DDD9D2]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-lg font-semibold tracking-widest text-[#0D0D0D] uppercase">
            100% Soya · Hecho a Mano · Puerto Rico
          </p>
          <p className="mt-4 max-w-md mx-auto text-sm text-[#9A9A9A] leading-relaxed">
            Cada vela es elaborada con soya natural, mechas de algodón y fragancias de alta calidad. Sin parafina, sin químicos agresivos.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#DDD9D2] bg-[#0D0D0D]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
            ¿Lista para iluminar tu hogar?
          </h3>
          <p className="mt-3 text-sm text-white/50">Envíos disponibles · San Juan, Puerto Rico</p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#C9A84C] px-10 py-4 text-sm font-semibold text-white hover:bg-[#b8952f] transition-colors"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
