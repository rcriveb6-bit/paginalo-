import type { CartItem } from "@/store/liora/cart";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "17871234567";

export function buildWhatsAppUrl(items: CartItem[]): string {
  if (items.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;

  const lines = items.map(
    (item) => `• ${item.name} × ${item.qty} — $${(item.price * item.qty).toFixed(2)}`
  );
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const message = [
    "¡Hola LIORA! 🕯️ Quiero hacer un pedido:",
    "",
    ...lines,
    "",
    `*Total: $${total.toFixed(2)}*`,
    "",
    "¿Cómo coordino el pago y la entrega? Gracias 🙏",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
