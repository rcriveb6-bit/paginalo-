import type { Metadata } from "next";
import Header from "@/components/rya/layout/Header";
import Footer from "@/components/rya/layout/Footer";
import CartDrawer from "@/components/rya/carrito/CartDrawer";

export const metadata: Metadata = {
  title: "RYA Shop — Moda consciente para almas sofisticadas",
  description: "Ropa de segunda mano curada. Piezas únicas, seleccionadas a mano. San Juan, Puerto Rico.",
  keywords: ["thrift", "segunda mano", "ropa curada", "Puerto Rico", "moda consciente"],
};

export default function RyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rya-brand min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
