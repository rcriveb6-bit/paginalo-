"use client";

import Link from "next/link";
import Image from "next/image";
import { Producto } from "@/lib/rya/types";
import { useCart } from "@/lib/rya/cart";

interface ProductCardProps {
  producto: Producto;
  theme?: "dark" | "light";
}

export default function ProductCard({ producto, theme = "dark" }: ProductCardProps) {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.producto.id === producto.id);

  const bg = theme === "light" ? "var(--color-warm-white)" : "var(--color-dark-surface)";
  const textColor = theme === "light" ? "var(--color-bg)" : "var(--color-cream)";
  const subtextColor = theme === "light" ? "#555" : "var(--color-slate)";

  return (
    <div
      className="group relative flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
      style={{ background: bg }}
    >
      {/* Image */}
      <Link href={`/rya/catalogo/${producto.id}`} className="block overflow-hidden aspect-[3/4] relative">
        {producto.fotos_url && producto.fotos_url[0] ? (
          <Image
            src={producto.fotos_url[0]}
            alt={producto.nombre}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "var(--color-warm-white)" }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)", opacity: 0.5 }}>
              <path d="M12 4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2" />
              <path d="M12 8L3 17h18L12 8z" />
            </svg>
          </div>
        )}

        {/* Stock badge */}
        {producto.stock === 1 && (
          <span
            className="absolute top-2 left-2 text-xs px-2 py-0.5"
            style={{ background: "var(--color-bg)", color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.1em", fontSize: "0.6rem" }}
          >
            ÚLTIMA
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1.5">
        <Link href={`/rya/catalogo/${producto.id}`}>
          <h3
            className="font-normal leading-tight transition-colors"
            style={{
              fontFamily: "var(--font-title)",
              color: textColor,
              fontSize: "1rem",
            }}
          >
            {producto.nombre}
          </h3>
        </Link>

        <div className="flex items-center gap-2 text-xs" style={{ color: subtextColor, fontFamily: "var(--font-body)" }}>
          {producto.talla && <span>Talla {producto.talla}</span>}
          {producto.talla && producto.estado && <span>·</span>}
          {producto.estado && <span>{producto.estado}</span>}
        </div>

        <div className="flex items-center justify-between mt-1">
          <span
            className="font-medium"
            style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", fontSize: "0.95rem" }}
          >
            ${producto.precio}
          </span>

          <button
            onClick={() => addItem(producto)}
            disabled={inCart || producto.stock === 0}
            className="text-xs px-3 py-1.5 transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              border: "1px solid var(--color-gold)",
              color: inCart ? "var(--color-bg)" : "var(--color-gold)",
              background: inCart ? "var(--color-gold)" : "transparent",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.08em",
              fontSize: "0.6rem",
              textTransform: "uppercase",
            }}
          >
            {inCart ? "En carrito" : "+ Agregar"}
          </button>
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        className="h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: "var(--color-gold)" }}
      />
    </div>
  );
}
