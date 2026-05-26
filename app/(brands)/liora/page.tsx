import type { Metadata } from "next";
import { getLioraProducts } from "@/lib/supabase";
import type { LioraProduct } from "@/lib/types";

export const metadata: Metadata = {
  title: "Liora & Co. — Velas Artesanales de Soya · Toa Alta, Puerto Rico",
  description: "Velas artesanales de soya 100% naturales, hechas a mano en Toa Alta, Puerto Rico. Aromas únicos, calidad premium.",
};

const wa = "https://wa.me/17875104504?text=Hola,%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Liora";

const allAromas = [
  { name: "Vainilla & Canela", notes: "Vainilla bourbon · Canela de Ceylán · Almendra tostada" },
  { name: "Lavanda & Eucalipto", notes: "Lavanda francesa · Eucalipto fresco · Menta verde" },
  { name: "Sándalo & Musk", notes: "Sándalo cremoso · Musk blanco · Ámbar cálido" },
  { name: "Coco & Lima", notes: "Coco tostado · Lima zesty · Vainilla tropical" },
  { name: "Jazmín & Bergamota", notes: "Jazmín nocturno · Bergamota italiana · Cedro suave" },
  { name: "Palo Santo & Vetiver", notes: "Palo santo místico · Vetiver terroso · Sándalo negro" },
];

function ProductCard({ product }: { product: LioraProduct }) {
  return (
    <div className="group cursor-default">
      <div
        className="aspect-square w-full mb-4 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundColor: "#EDD9C0" }}
      >
        {product.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ color: "#D4B896" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2c0 0-4 4-4 9a4 4 0 0 0 8 0c0-5-4-9-4-9z"/>
              <path d="M12 11 12 22"/>
            </svg>
          </div>
        )}
      </div>
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-1" style={{ color: "#A0522D" }}>
        {product.category === 'especial' ? 'Especial' : product.category === 'floral' ? 'Floral' : product.category === 'frutal' ? 'Frutal' : 'Fresco'}
      </p>
      <h3 className="text-base font-semibold" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E", fontSize: "1.15rem" }}>
        {product.name}
      </h3>
      {product.note && (
        <p className="text-xs mt-1 leading-relaxed" style={{ color: "rgba(44,26,14,0.55)" }}>
          {product.note}
        </p>
      )}
      <p className="mt-2 text-sm font-semibold" style={{ color: "#C9A84C" }}>
        ${product.price}
      </p>
    </div>
  );
}

export default async function LioraPage() {
  const products = await getLioraProducts();

  return (
    <div className="liora-brand min-h-screen">

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 overflow-hidden" style={{ backgroundColor: "#F5EDE0", minHeight: "85vh" }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 30% 70%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 70% 30%, #A0522D 0%, transparent 50%)"
        }} />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: "#A0522D" }}>
            Toa Alta · Puerto Rico · Est. 2025
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium italic mb-6" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>
            Be The Light
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "rgba(44,26,14,0.65)", maxWidth: "480px", margin: "0 auto 2rem" }}>
            Velas artesanales de soya, elaboradas a mano con amor y aromas que cuentan historias.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="liora-cta-btn inline-flex items-center gap-2 px-10 py-3.5 text-sm font-semibold transition-all"
          >
            Ver Colección
          </a>
        </div>
      </section>

      {/* ── NUESTRA PROMESA ── */}
      <section style={{ backgroundColor: "#EDD9C0", borderTop: "1px solid #D4B896" }}>
        <div className="mx-auto max-w-5xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { title: "100% Soya Natural", body: "Sin parafina, sin toxinas. Cera de soya pura que arde limpia y lenta, llenando tu espacio de bienestar." },
            { title: "Aromas Únicos", body: "Cada fragancia es una composición artesanal que despierta los sentidos y transforma cualquier ambiente." },
            { title: "Hecho a Mano", body: "Cada vela es elaborada con cuidado en Toa Alta, Puerto Rico. Pequeños lotes para garantizar calidad premium." },
          ].map(item => (
            <div key={item.title}>
              <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(44,26,14,0.6)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLECCIÓN ── */}
      <section style={{ backgroundColor: "#F5EDE0", borderTop: "1px solid #D4B896" }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#A0522D" }}>Colección</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>
              Aromas para el alma
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center mt-12">
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold"
              style={{ backgroundColor: "#C9A84C", color: "#2C1A0E" }}>
              Hacer un pedido
            </a>
          </div>
        </div>
      </section>

      {/* ── HISTORIA ── */}
      <section style={{ backgroundColor: "#EDD9C0", borderTop: "1px solid #D4B896" }}>
        <div className="mx-auto max-w-5xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#A0522D" }}>Nuestra Historia</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>
              Nacidas del corazón de Puerto Rico
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(44,26,14,0.65)" }}>
              Liora & Co. nació en las manos de una mujer que encontró en las velas una forma de conectar con sus raíces, con la naturaleza y con quienes ama.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(44,26,14,0.65)" }}>
              Desde Toa Alta, elaboramos cada pieza con soya natural, mechas de algodón y fragancias cuidadosamente seleccionadas. Sin atajos. Con amor.
            </p>
          </div>
          <div className="aspect-square" style={{ backgroundColor: "#D4B896" }}>
            <div className="w-full h-full flex items-center justify-center" style={{ color: "#C9A84C" }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M12 2c0 0-4 4-4 9a4 4 0 0 0 8 0c0-5-4-9-4-9z"/>
                <path d="M12 11 12 22"/>
                <path d="M8 22h8"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATÁLOGO DE AROMAS ── */}
      <section style={{ backgroundColor: "#F5EDE0", borderTop: "1px solid #D4B896" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#A0522D" }}>Aromateca</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>
              Catálogo completo de aromas
            </h2>
          </div>
          <div className="space-y-0">
            {allAromas.map((a, i) => (
              <div key={a.name} className="flex items-center justify-between py-5" style={{ borderBottom: i < allAromas.length - 1 ? "1px solid #D4B896" : "none" }}>
                <div>
                  <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>{a.name}</h3>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(44,26,14,0.5)" }}>{a.notes}</p>
                </div>
                <span className="text-[#C9A84C] text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section style={{ backgroundColor: "#2C1A0E" }}>
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A84C" }}>Síguenos</p>
          <h3 className="text-3xl md:text-4xl italic mb-6" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F5EDE0" }}>
            @liorayco
          </h3>
          <p className="text-sm mb-8" style={{ color: "rgba(245,237,224,0.5)" }}>
            Nuevos aromas, drops especiales y el proceso detrás de cada vela.
          </p>
          <a href="https://instagram.com/liorayco" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold tracking-widest uppercase transition-all"
            style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}>
            Ver Instagram
          </a>
        </div>
      </section>

      {/* ── PROPÓSITO ── */}
      <section style={{ backgroundColor: "#EDD9C0", borderTop: "1px solid #D4B896" }}>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <blockquote className="text-3xl md:text-4xl italic leading-relaxed mb-6" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>
            &ldquo;Una vela no pierde su llama al encender otra. Así es como trabajamos — compartiendo luz.&rdquo;
          </blockquote>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#A0522D" }}>— Liora & Co.</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-sm" style={{ color: "rgba(44,26,14,0.6)" }}>100% Soya</span>
            <span style={{ color: "#D4B896" }}>·</span>
            <span className="text-sm" style={{ color: "rgba(44,26,14,0.6)" }}>Mechas de Algodón</span>
            <span style={{ color: "#D4B896" }}>·</span>
            <span className="text-sm" style={{ color: "rgba(44,26,14,0.6)" }}>Hecho en Puerto Rico</span>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ backgroundColor: "#A0522D" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h3 className="text-4xl md:text-5xl italic mb-4" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F5EDE0" }}>
            ¿Lista para iluminar tu hogar?
          </h3>
          <p className="text-sm mb-10" style={{ color: "rgba(245,237,224,0.65)" }}>Pedidos disponibles · San Juan y entregas en PR</p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-12 py-4 text-sm font-semibold transition-all"
            style={{ backgroundColor: "#C9A84C", color: "#2C1A0E" }}>
            Pedir por WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
