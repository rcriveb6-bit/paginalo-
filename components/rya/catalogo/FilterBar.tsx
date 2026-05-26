"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Categoria } from "@/lib/rya/types";

const CATEGORIAS: { value: Categoria | "todos"; label: string }[] = [
  { value: "todos", label: "Todo" },
  { value: "mujer", label: "Mujer" },
  { value: "hombre", label: "Hombre" },
  { value: "accesorios", label: "Accesorios" },
];

const TALLAS = ["XS", "S", "M", "L", "XL", "XXL", "26", "27", "28", "29", "30", "32"];

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoria = searchParams.get("categoria") || "todos";
  const talla = searchParams.get("talla") || "";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== "todos") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/catalogo?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <div
      className="flex flex-wrap items-center gap-4 py-5 border-b"
      style={{ borderColor: "rgba(200,169,110,0.2)" }}
    >
      {/* Categorías */}
      <div className="flex items-center gap-2 flex-wrap">
        {CATEGORIAS.map((c) => (
          <button
            key={c.value}
            onClick={() => updateParam("categoria", c.value)}
            className="text-xs px-4 py-2 transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid",
              borderColor: categoria === c.value ? "var(--color-gold)" : "rgba(200,169,110,0.3)",
              color: categoria === c.value ? "var(--color-bg)" : "var(--color-slate)",
              background: categoria === c.value ? "var(--color-gold)" : "transparent",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.65rem",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Separador */}
      <div className="hidden md:block w-px h-6" style={{ background: "rgba(200,169,110,0.3)" }} />

      {/* Tallas */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <span
          className="text-xs uppercase tracking-widest mr-1"
          style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.15em" }}
        >
          Talla:
        </span>
        {TALLAS.map((t) => (
          <button
            key={t}
            onClick={() => updateParam("talla", talla === t ? "" : t)}
            className="text-xs w-8 h-8 flex items-center justify-center transition-all duration-200 cursor-pointer"
            style={{
              border: "1px solid",
              borderColor: talla === t ? "var(--color-gold)" : "rgba(200,169,110,0.3)",
              color: talla === t ? "var(--color-bg)" : "var(--color-slate)",
              background: talla === t ? "var(--color-gold)" : "transparent",
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Limpiar filtros */}
      {(categoria !== "todos" || talla) && (
        <button
          onClick={() => router.push("/catalogo", { scroll: false })}
          className="text-xs ml-auto transition-colors cursor-pointer"
          style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", fontSize: "0.65rem", textTransform: "uppercase" }}
        >
          × Limpiar
        </button>
      )}
    </div>
  );
}
