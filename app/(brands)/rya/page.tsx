import type { Metadata } from "next";
import { getRyaProducts } from "@/lib/supabase";
import RyaClient from "./RyaClient";

export const metadata: Metadata = {
  title: "RYA Shop — Moda Curada de Segunda Mano · Puerto Rico",
  description: "Moda consciente para almas sofisticadas. Piezas únicas de segunda mano, curadas a mano en Puerto Rico. Instagram @rya.shop2025",
};

export default async function RyaPage() {
  const products = await getRyaProducts();
  return <RyaClient products={products} />;
}
