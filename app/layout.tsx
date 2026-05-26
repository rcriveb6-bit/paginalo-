import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Páginalo — Presencia Digital para tu Negocio",
  description: "Sitios web profesionales, automatización con IA y presencia digital para PYMEs en Puerto Rico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
