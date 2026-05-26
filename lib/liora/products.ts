export type Category = "all" | "frutal" | "floral" | "fresco" | "especial";

export interface Product {
  id: number;
  name: string;
  category: Exclude<Category, "all">;
  note: string;
  price: number;
  bgColor: string;
  waxColor: string;
  stripePriceId?: string;
  imageUrl?: string;
  stock: number;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: "Brisa Marina",     category: "fresco",   note: "Fresco · Marino · Limpio",          bgColor: "#E8EEF5", waxColor: "rgba(210,228,242,0.4)", price: 15, stock: 99, imageUrl: "/candles/brisa-marina.png" },
  { id: 2, name: "Sweet Vainilla",   category: "especial", note: "Dulce · Cálido · Sedoso",           bgColor: "#F5EFE3", waxColor: "rgba(242,226,186,0.4)", price: 15, stock: 99, imageUrl: "/candles/sweet-vainilla.png" },
  { id: 3, name: "Mango Mai Tai",    category: "frutal",   note: "Tropical · Dulce · Exótico",        bgColor: "#F2EAE4", waxColor: "rgba(242,206,162,0.4)", price: 15, stock: 99, imageUrl: "/candles/mango-mai-tai.png" },
  { id: 4, name: "Lavanda",          category: "floral",   note: "Relajante · Suave · Floral",        bgColor: "#EEE8F3", waxColor: "rgba(218,208,238,0.4)", price: 15, stock: 99, imageUrl: "/candles/lavanda.png" },
  { id: 5, name: "Café",             category: "especial", note: "Cálido · Intenso · Reconfortante",  bgColor: "#F5EFE3", waxColor: "rgba(206,180,148,0.4)", price: 15, stock: 99, imageUrl: "/candles/cafe.png" },
  { id: 6, name: "Cranberry Citrus", category: "frutal",   note: "Ácido · Vibrante · Fresco",         bgColor: "#F3EAE2", waxColor: "rgba(242,192,192,0.4)", price: 15, stock: 99, imageUrl: "/candles/cranberry-citrus.png" },
  { id: 7, name: "Brisa Tropical",   category: "fresco",   note: "Frutal · Ligero · Veraniega",       bgColor: "#E8F0EC", waxColor: "rgba(196,236,216,0.4)", price: 15, stock: 99, imageUrl: "/candles/brisa-tropical.png" },
  { id: 8, name: "Pura Almendra",    category: "especial", note: "Dulce · Cremoso · Suave",           bgColor: "#F0EEE2", waxColor: "rgba(238,226,198,0.4)", price: 15, stock: 99, imageUrl: "/candles/pura-almendra.png" },
];

export const SCENTS_PERMANENTES = [
  "Eucalipto", "Menta", "Lavanda", "Sweet Vainilla", "Abercrombie",
  "Bleu de Chanel", "Sweet Piña", "Toronja", "China Sorbet", "Cabernet",
  "Beery Wine", "Cranberry Citrus", "Mango Mai Tai", "Jazmín y Melon",
  "Limón", "Tropi Mango (Coco Mango)", "Melón de Agua", "Brisa Tropical",
  "Brisa Marina", "Tropi Mix", "Pura Almendra", "Café",
];

export const SCENTS_TEMPORADA = [
  "Pino", "Paseo en Trineo", "Apple Pie", "Pumpkin Spice",
  "Pumpkin Merengue", "Spicy Cinnamon", "Calabaza", "Merry Pine",
];
