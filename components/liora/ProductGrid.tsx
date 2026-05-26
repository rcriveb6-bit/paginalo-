"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS, type Category } from "@/lib/liora/products";

const TABS: { label: string; value: Category }[] = [
  { label: "Todos", value: "all" },
  { label: "Frutales", value: "frutal" },
  { label: "Florales", value: "floral" },
  { label: "Frescos", value: "fresco" },
  { label: "Especiales", value: "especial" },
];

export default function ProductGrid() {
  const [active, setActive] = useState<Category>("all");

  const visible = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="productos">
      <div style={{ textAlign: "center", padding: "5rem 5% 3rem" }}>
        <p style={{ fontSize: 10, fontWeight: 400, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>✦ Los de Siempre</p>
        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(30px,4vw,50px)", fontWeight: 700, color: "var(--black)", lineHeight: 1.1 }}>
          Nuestra{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Colección</em>
        </h2>
        <div style={{ width: 40, height: 1, background: "var(--gold)", margin: "1.25rem auto 0" }} />
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 0,
        margin: "0 5% 2.5rem",
        borderBottom: "1px solid var(--border)",
        overflowX: "auto",
      }}>
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            style={{
              padding: "10px 24px", fontSize: 11, fontWeight: 400,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: active === tab.value ? "var(--black)" : "var(--gray-mid)",
              cursor: "pointer",
              borderBottom: `2px solid ${active === tab.value ? "var(--gold)" : "transparent"}`,
              borderTop: "none", borderLeft: "none", borderRight: "none",
              background: "none", fontFamily: "var(--font-outfit), sans-serif",
              transition: "all 0.2s", whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1px",
        background: "var(--border)",
        margin: "0 5% 5rem",
        border: "1px solid var(--border)",
      }}
      className="products-grid-responsive"
      >
        <style>{`
          @media(max-width:960px){ .products-grid-responsive{ grid-template-columns: repeat(2,1fr) !important; } }
          @media(max-width:480px){ .products-grid-responsive{ grid-template-columns: 1fr !important; } }
        `}</style>
        {visible.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
