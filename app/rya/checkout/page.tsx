"use client";

import { useCart } from "@/lib/rya/cart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GoldDivider from "@/components/rya/ui/GoldDivider";
import Image from "next/image";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [stripeReady] = useState(!!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  useEffect(() => {
    if (items.length === 0) router.push("/rya/catalogo");
  }, [items, router]);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/rya/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        clearCart();
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  };

  if (items.length === 0) return null;

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "64px" }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <GoldDivider width="narrow" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em" }}>Checkout</span>
          </div>
          <h1 className="font-normal" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Tu Pedido
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Resumen */}
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}>
              Resumen
            </h2>
            <div className="flex flex-col gap-3">
              {items.map(({ producto }) => (
                <div
                  key={producto.id}
                  className="flex gap-3 py-3 border-b"
                  style={{ borderColor: "rgba(200,169,110,0.15)" }}
                >
                  <div className="w-14 h-16 flex-shrink-0 relative overflow-hidden" style={{ background: "var(--color-warm-white)" }}>
                    {producto.fotos_url?.[0] ? (
                      <Image src={producto.fotos_url[0]} alt={producto.nombre} fill className="object-cover" sizes="56px" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: "var(--color-gold)", opacity: 0.5 }}>
                          <path d="M12 4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2" /><path d="M12 8L3 17h18L12 8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-normal" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "1rem" }}>{producto.nombre}</p>
                    <p className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                      {producto.talla && `Talla ${producto.talla}`}
                    </p>
                  </div>
                  <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}>${producto.precio}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid rgba(200,169,110,0.3)" }}>
              <span style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.85rem" }}>Total</span>
              <span className="text-2xl" style={{ color: "var(--color-gold)", fontFamily: "var(--font-title)" }}>${total()}</span>
            </div>
          </div>

          {/* Pago */}
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}>
              Pago
            </h2>

            {!stripeReady ? (
              <div
                className="p-6 text-center"
                style={{ border: "1px solid rgba(200,169,110,0.3)", background: "var(--color-dark-surface)" }}
              >
                <p className="text-sm mb-3" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                  Stripe no está configurado aún.
                </p>
                <p className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", opacity: 0.7 }}>
                  Agrega <code style={{ color: "var(--color-gold)" }}>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> al .env.local para activar pagos.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-sm" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                  Serás redirigido a Stripe Checkout para completar tu pago de forma segura.
                </p>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="btn-gold px-6 py-3.5 text-xs w-full cursor-pointer disabled:opacity-40"
                >
                  {loading ? "Procesando..." : `Pagar $${total()}`}
                </button>
              </div>
            )}

            {/* WhatsApp alternativo */}
            <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(200,169,110,0.15)" }}>
              <p className="text-xs mb-3" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                ¿Prefieres coordinar por WhatsApp?
              </p>
              <a
                href={`https://wa.me/17874555405?text=${encodeURIComponent(`Hola, quiero comprar:\n${items.map(i => `• ${i.producto.nombre} · $${i.producto.precio}`).join("\n")}\nTotal: $${total()}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-2.5 text-xs w-full text-center flex items-center justify-center gap-2"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.115 1.522 5.847L.057 23.882l6.186-1.622A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.359-.213-3.712.974.99-3.614-.234-.372A9.818 9.818 0 1 1 12 21.818z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
