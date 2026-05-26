"use client";

import { useCart } from "@/lib/rya/cart";
import Link from "next/link";
import Image from "next/image";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, total, count } = useCart();
  const cartCount = count();
  const cartTotal = total();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 w-full max-w-md flex flex-col transition-transform duration-300 ease-out"
        style={{
          background: "var(--color-dark-surface)",
          borderLeft: "1px solid rgba(200,169,110,0.2)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: "rgba(200,169,110,0.2)" }}
        >
          <div>
            <h2
              className="font-normal text-xl"
              style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)" }}
            >
              Tu Carrito
            </h2>
            {cartCount > 0 && (
              <p className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                {cartCount} {cartCount === 1 ? "pieza" : "piezas"}
              </p>
            )}
          </div>
          <button
            onClick={closeCart}
            className="cursor-pointer transition-colors"
            style={{ color: "var(--color-slate)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-slate)")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)", opacity: 0.4 }}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.85rem" }}>
                Tu carrito está vacío
              </p>
              <button
                onClick={closeCart}
                className="btn-outline px-6 py-2.5 text-xs"
              >
                Ver catálogo
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map(({ producto }) => (
                <div
                  key={producto.id}
                  className="flex gap-4 py-4 border-b"
                  style={{ borderColor: "rgba(200,169,110,0.1)" }}
                >
                  {/* Foto */}
                  <div
                    className="w-20 h-24 flex-shrink-0 overflow-hidden relative"
                    style={{ background: "var(--color-warm-white)" }}
                  >
                    {producto.fotos_url?.[0] ? (
                      <Image src={producto.fotos_url[0]} alt={producto.nombre} fill className="object-cover" sizes="80px" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: "var(--color-gold)", opacity: 0.5 }}>
                          <path d="M12 4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2" /><path d="M12 8L3 17h18L12 8z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className="font-normal leading-tight"
                        style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "1.05rem" }}
                      >
                        {producto.nombre}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                        {producto.talla && `Talla ${producto.talla}`}
                        {producto.talla && producto.estado && " · "}
                        {producto.estado}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", fontSize: "0.95rem" }}>
                        ${producto.precio}
                      </span>
                      <button
                        onClick={() => removeItem(producto.id)}
                        className="text-xs cursor-pointer transition-colors"
                        style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#c0392b")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-slate)")}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className="px-6 py-6 border-t flex flex-col gap-4"
            style={{ borderColor: "rgba(200,169,110,0.2)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>Total</span>
              <span className="text-xl font-light" style={{ color: "var(--color-gold)", fontFamily: "var(--font-title)" }}>
                ${cartTotal}
              </span>
            </div>
            <Link
              href="/rya/checkout"
              onClick={closeCart}
              className="btn-gold px-6 py-3.5 text-xs w-full text-center"
            >
              Proceder al Checkout
            </Link>
            <button
              onClick={closeCart}
              className="text-xs text-center cursor-pointer transition-colors"
              style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}
