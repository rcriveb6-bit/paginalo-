"use client";

import { useCart } from "@/lib/rya/cart";
import { Producto } from "@/lib/rya/types";

export default function AddToCartButton({ producto }: { producto: Producto }) {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.producto.id === producto.id);
  const outOfStock = producto.stock === 0;

  return (
    <button
      onClick={() => addItem(producto)}
      disabled={inCart || outOfStock}
      className="btn-gold px-6 py-3.5 text-xs w-full cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {outOfStock ? "Agotado" : inCart ? "Ya está en tu carrito" : "Agregar al carrito"}
    </button>
  );
}
