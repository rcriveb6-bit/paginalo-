"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/store/liora/cart";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--cream)", padding: "4rem 5%" }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontSize: 48, marginBottom: "1.5rem" }}>🕯️</div>

        <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>✦ Orden Confirmada</p>

        <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "var(--black)", lineHeight: 1.1, marginBottom: "1rem" }}>
          ¡Gracias por tu <em style={{ color: "var(--gold)", fontStyle: "italic" }}>orden!</em>
        </h1>

        <p style={{ fontSize: 15, color: "#7A7060", lineHeight: 1.85, marginBottom: "2.5rem" }}>
          Recibirás un correo de confirmación con los detalles de tu pedido. Nos comunicaremos contigo para coordinar la entrega en Puerto Rico.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/liora"
            style={{
              background: "var(--black)", color: "var(--white)",
              padding: "13px 30px", textDecoration: "none",
              fontFamily: "var(--font-outfit), sans-serif", fontSize: 11,
              fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase",
            }}
          >
            Seguir Comprando
          </Link>

          <a
            href="https://www.instagram.com/liorayco"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "none", border: "1px solid var(--border-gold)",
              color: "var(--gold)", padding: "13px 30px",
              textDecoration: "none", fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 11, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase",
            }}
          >
            @liorayco
          </a>
        </div>

        <div style={{ marginTop: "3rem", padding: "1.5rem", background: "var(--white)", border: "1px solid var(--border-gold)" }}>
          <p style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontSize: 14, color: "var(--black)", lineHeight: 1.6 }}>
            "No son solo velas... es como se siente tu espacio cuando llegas."
          </p>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginTop: 8 }}>— LIORA & Co.</p>
        </div>
      </div>
    </div>
  );
}
