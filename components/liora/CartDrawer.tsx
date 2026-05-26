"use client";

import { useState } from "react";
import { useCart } from "@/store/liora/cart";
import { buildWhatsAppUrl } from "@/lib/liora/whatsapp";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, total, count } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);

  const cartTotal = total();
  const cartCount = count();

  const handleStripeCheckout = async () => {
    if (items.length === 0) return;
    setCheckingOut(true);
    try {
      const res = await fetch("/api/liora/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items.map((i) => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })) }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Error procesando el pago. Intenta de nuevo o usa WhatsApp.");
    } finally {
      setCheckingOut(false);
    }
  };

  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl(items);
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.5)", zIndex: 300,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, bottom: 0,
        right: isOpen ? 0 : -440,
        width: 440, maxWidth: "100vw",
        background: "var(--white)", zIndex: 301,
        transition: "right 0.35s ease",
        display: "flex", flexDirection: "column",
      }}>
        {/* Header */}
        <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 18, fontWeight: 700, color: "var(--black)" }}>
            Tu carrito {cartCount > 0 && <span style={{ fontSize: 13, color: "var(--gray-mid)", fontWeight: 400 }}>({cartCount})</span>}
          </div>
          <button
            onClick={closeCart}
            style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "var(--gray-mid)", lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem 1.5rem" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem", fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "var(--gray-mid)", fontSize: 16 }}>
              Tu carrito está vacío
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "1rem 0", borderBottom: "1px solid var(--border)" }}>
                <div style={{ width: 56, height: 56, background: "var(--ivory)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 24 }}>
                  🕯️
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 14, fontWeight: 500, color: "var(--black)" }}>{item.name}</div>
                  <div style={{ fontSize: 12, color: "var(--gray-mid)" }}>${item.price}.00 × {item.qty} = <strong>${item.price * item.qty}.00</strong></div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--gray-light)", fontSize: 13, marginLeft: "auto", flexShrink: 0, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c0392b")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-light)")}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-playfair), serif", fontSize: 18, fontWeight: 500, color: "var(--black)", marginBottom: "1rem" }}>
              <span>Total</span>
              <span>${cartTotal}.00</span>
            </div>

            {/* Stripe button */}
            <button
              onClick={handleStripeCheckout}
              disabled={checkingOut}
              style={{
                width: "100%", background: "var(--black)", color: "var(--white)",
                border: "none", padding: 14,
                fontFamily: "var(--font-outfit), sans-serif", fontSize: 11,
                fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase",
                cursor: checkingOut ? "wait" : "pointer", transition: "background 0.25s",
                marginBottom: 10,
              }}
              onMouseEnter={(e) => { if (!checkingOut) e.currentTarget.style.background = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--black)"; }}
            >
              {checkingOut ? "Redirigiendo…" : "Pagar con Tarjeta →"}
            </button>

            {/* WhatsApp button */}
            <button
              onClick={handleWhatsApp}
              style={{
                width: "100%", background: "none",
                border: "1px solid var(--border-gold)",
                padding: 14, color: "var(--gold)",
                fontFamily: "var(--font-outfit), sans-serif", fontSize: 11,
                fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.2s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--black)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--gold)"; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ordenar por WhatsApp
            </button>

            <p style={{ fontSize: 10, color: "var(--gray-mid)", textAlign: "center", marginTop: 8, letterSpacing: "0.05em" }}>
              Envíos disponibles en Puerto Rico
            </p>
          </div>
        )}
      </div>
    </>
  );
}
