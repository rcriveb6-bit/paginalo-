"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/store/liora/cart";
import CandleSvg from "./CandleSvg";
import type { Product } from "@/lib/liora/products";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addItem, openCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    openCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const outOfStock = product.stock <= 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--cream)" : "var(--white)",
        cursor: "pointer",
        transition: "background 0.2s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Image area */}
      <div style={{
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
        background: product.bgColor,
        overflow: "hidden",
      }}>
        {/* Inner wrapper so SVG centers correctly */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ) : (
            <CandleSvg
              size="sm"
              scent={product.name}
              waxColor={product.waxColor}
              animationDelay={index * 0.35}
            />
          )}
        </div>

        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.04)",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered && !outOfStock ? 1 : 0,
          transition: "opacity 0.25s",
        }}>
          <button
            onClick={handleAdd}
            style={{
              background: added ? "var(--gold)" : "var(--black)",
              color: added ? "var(--black)" : "var(--white)",
              border: "none", padding: "9px 18px",
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 10, fontWeight: 400, letterSpacing: "0.16em",
              textTransform: "uppercase", cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {added ? "✓ Añadido" : "+ Añadir"}
          </button>
        </div>

        {/* Out of stock badge */}
        {outOfStock && (
          <div style={{
            position: "absolute", top: 10, right: 10,
            background: "rgba(0,0,0,0.7)", color: "#fff",
            fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "4px 8px",
          }}>
            Agotado
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "1rem 1rem 1.25rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: 3 }}>
          Vela de Soya · PR
        </div>
        <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 15, fontWeight: 500, color: "var(--black)", lineHeight: 1.2, marginBottom: 2 }}>
          {product.name}
        </div>
        <div style={{ fontSize: 11, color: "var(--gray-mid)", fontWeight: 300, marginBottom: 10 }}>
          {product.note}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 15, fontWeight: 400, color: "var(--black)" }}>
            ${product.price}.00
          </div>
          <button
            onClick={handleAdd}
            disabled={outOfStock}
            style={{
              width: 28, height: 28, borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "none", fontSize: 16, cursor: outOfStock ? "not-allowed" : "pointer",
              color: outOfStock ? "var(--gray-light)" : "var(--black)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", lineHeight: 1,
            }}
            onMouseEnter={(e) => { if (!outOfStock) { e.currentTarget.style.background = "var(--black)"; e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.borderColor = "var(--black)"; } }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
