import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RYA SHOP — Moda Consciente · San Juan, Puerto Rico",
  description: "Moda de segunda mano curada en San Juan, Puerto Rico. Piezas únicas seleccionadas con criterio y estilo.",
};

const products = [
  { img: "/rya/item-1.png", name: "Biker Jacket Vintage", price: "$45", tag: "Chaquetas" },
  { img: "/rya/item-2.png", name: "Bomber Jacket Borgoña", price: "$38", tag: "Chaquetas" },
  { img: "/rya/item-3.png", name: "Crop Top Satén V", price: "$22", tag: "Tops" },
  { img: "/rya/item-4.png", name: "Co-ord Lino Navy", price: "$55", tag: "Sets" },
  { img: "/rya/item-5.png", name: "Bralette Crochet Sol", price: "$28", tag: "Tops" },
  { img: "/rya/item-6.png", name: "Nike Hoodie Clásico", price: "$35", tag: "Abrigos" },
];

const events = [
  { date: "Jun 14, 2025", name: "Pop-Up RYA", place: "Santurce, San Juan" },
  { date: "Jul 5, 2025", name: "Mercado de Diseñadores", place: "Miramar, San Juan" },
  { date: "Ago 2, 2025", name: "Flea Market La Placita", place: "Río Piedras, San Juan" },
];

export default function RyaPage() {
  const wa = "https://wa.me/17875104504?text=Hola,%20me%20interesa%20algo%20de%20RYA%20SHOP";
  const ig = "https://instagram.com/rya.shop2025";

  return (
    <div className="rya-brand min-h-screen">
      {/* ── SUB-HEADER ── */}
      <div className="border-b border-[#DDD9D2] bg-[#F7F5F1]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Image
            src="/rya/logo-rya.jpeg"
            alt="RYA SHOP"
            width={80}
            height={32}
            className="h-8 w-auto object-contain"
          />
          <Link href="/" className="text-sm text-[#9A9A9A] hover:text-[#0D0D0D] transition-colors">
            ← Volver a Páginalo
          </Link>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#0D0D0D]" style={{ fontFamily: "var(--font-playfair), serif" }}>
          Moda consciente<br />para almas sofisticadas
        </h1>
        <p className="mt-5 text-base text-[#9A9A9A]">
          Segunda mano curada · San Juan, Puerto Rico
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={ig}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#0D0D0D] px-8 py-3 text-sm font-semibold text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all"
          >
            Instagram
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D0D0D] px-8 py-3 text-sm font-semibold text-white hover:bg-[#1E3A5F] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ── PRODUCTOS ── */}
      <section className="border-t border-[#DDD9D2] bg-[#FAF8F4]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-10 text-xs font-semibold tracking-[0.2em] uppercase text-[#9A9A9A]">
            Colección
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="group">
                <div className="relative aspect-square w-full overflow-hidden bg-[#E8E4DD]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9A9A9A]">{p.tag}</p>
                  <h3 className="text-sm font-bold text-[#0D0D0D] mt-0.5">{p.name}</h3>
                  <p className="text-sm font-semibold text-[#1E3A5F] mt-1">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTOS ── */}
      <section className="border-t border-[#DDD9D2]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-10 text-xs font-semibold tracking-[0.2em] uppercase text-[#9A9A9A]">
            Próximos Eventos
          </p>
          <div className="space-y-0">
            {events.map((e) => (
              <div key={e.name} className="flex items-center justify-between border-b border-[#DDD9D2] py-6">
                <div>
                  <h3 className="text-base font-bold text-[#0D0D0D]">{e.name}</h3>
                  <p className="text-sm text-[#9A9A9A] mt-0.5">{e.place}</p>
                </div>
                <p className="text-sm font-semibold text-[#1E3A5F]">{e.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#DDD9D2] bg-[#0D0D0D]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
            ¿Te interesa alguna pieza?
          </h3>
          <p className="mt-3 text-sm text-white/50">Escríbenos y la apartamos para ti</p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-white px-10 py-4 text-sm font-semibold text-[#0D0D0D] hover:bg-[#F7F5F1] transition-colors"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
