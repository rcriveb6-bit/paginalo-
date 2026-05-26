"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Producto } from "./types";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (producto: Producto) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (producto) => {
        const existing = get().items.find((i) => i.producto.id === producto.id);
        if (existing) return; // thrift: cada pieza es única (stock 1)
        set((state) => ({
          items: [...state.items, { producto, cantidad: 1 }],
          isOpen: true,
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.producto.id !== id),
        }));
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      total: () =>
        get().items.reduce((sum, i) => sum + i.producto.precio * i.cantidad, 0),

      count: () => get().items.reduce((sum, i) => sum + i.cantidad, 0),
    }),
    { name: "rya-cart" }
  )
);
