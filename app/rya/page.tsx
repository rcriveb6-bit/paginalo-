import Link from "next/link";

export default function RyaInfoPage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F7F5F1] selection:bg-[#C8A96E] selection:text-black overflow-hidden pb-20">
      {/* Decorative Shimmer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(200,169,110,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Info Section */}
      <section className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <div className="mx-auto mb-6 flex max-w-max items-center gap-3 rounded-full border border-[#C8A96E]/20 bg-[#C8A96E]/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#C8A96E]">
          <span>✦ Segunda Mano Curada · Puerto Rico</span>
        </div>

        <h1 className="font-outfit text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl uppercase" style={{ letterSpacing: "0.08em" }}>
          RYA SHOP
        </h1>
        <p className="mt-2 text-xs italic tracking-widest text-[#C8A96E]" style={{ letterSpacing: "0.2em" }}>
          — Moda consciente para almas sofisticadas —
        </p>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-zinc-400">
          RYA Shop es la primera marca de ropa de segunda mano curada y de alta calidad en San Juan, Puerto Rico. Creemos que la moda y la sostenibilidad pueden coexistir en armonía, ofreciéndote piezas exclusivas seleccionadas a mano.
        </p>
      </section>

      {/* Brand Values / Details */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <h3 className="font-outfit text-lg font-bold text-[#C8A96E] mb-3">La Curaduría</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Cada prenda en RYA Shop pasa por un riguroso proceso de inspección, limpieza y restauración. No vendemos ropa usada común; seleccionamos piezas con carácter, cortes clásicos, excelentes textiles y en condiciones impecables.
            </p>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <h3 className="font-outfit text-lg font-bold text-[#C8A96E] mb-3">Estilo con Propósito</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              El consumo de moda rápida (fast fashion) genera toneladas de desperdicios textiles anualmente. RYA Shop te invita a practicar un lujo responsable sin culpa, adquiriendo piezas de diseñador y vintage que merecen una segunda oportunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Pieces / Carousel Placeholders */}
      <section className="mx-auto max-w-4xl px-6 py-12 text-center">
        <h3 className="font-outfit text-xl font-bold text-white mb-8">Nuestras Categorías</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group rounded-xl border border-white/5 bg-zinc-950/40 p-4 text-center">
            <div className="aspect-[3/4] w-full rounded bg-neutral-900 flex items-center justify-center text-3xl mb-3">👔</div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Sacos & Blazers</span>
          </div>

          <div className="group rounded-xl border border-white/5 bg-zinc-950/40 p-4 text-center">
            <div className="aspect-[3/4] w-full rounded bg-neutral-900 flex items-center justify-center text-3xl mb-3">👗</div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Vestidos</span>
          </div>

          <div className="group rounded-xl border border-white/5 bg-zinc-950/40 p-4 text-center">
            <div className="aspect-[3/4] w-full rounded bg-neutral-900 flex items-center justify-center text-3xl mb-3">👖</div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Pantalones</span>
          </div>

          <div className="group rounded-xl border border-white/5 bg-zinc-950/40 p-4 text-center">
            <div className="aspect-[3/4] w-full rounded bg-neutral-900 flex items-center justify-center text-3xl mb-3">👜</div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Accesorios</span>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center border-t border-white/5 mt-12">
        <h2 className="font-outfit text-2xl font-bold text-white mb-4">¿Te interesa conocer el catálogo?</h2>
        <p className="text-xs text-zinc-400 mb-8 leading-relaxed">
          Nuestros drops son exclusivos y semanales. Síguenos en Instagram para no perderte las novedades o escríbenos directamente para consultas sobre tallas y disponibilidad.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://instagram.com/rya.shop2025"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#C8A96E] px-8 py-3 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-white"
          >
            Ver Instagram
          </a>
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
          >
            Volver al Portal
          </Link>
        </div>
      </section>
    </div>
  );
}
