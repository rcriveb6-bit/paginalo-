import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LIORA — Be The Light",
  description: "Velas artesanales hechas a mano en Toa Alta, Puerto Rico. Cera de soya 100% natural, pabilo de algodón, +20 aromas.",
  keywords: ["velas", "candles", "Puerto Rico", "soy wax", "handmade", "LIORA"],
};

export default function LioraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="liora-brand min-h-screen flex flex-col">
      {children}
    </div>
  );
}
