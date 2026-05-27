import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Outfit, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const jost = Jost({ variable: "--font-jost", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paginalo-two.vercel.app"),
  title: "Páginalo — Agencia Digital Puerto Rico | Web + IA en 2 Semanas",
  description: "Sitio web profesional + chatbot IA + Google Business para tu negocio en Puerto Rico. Todo incluido, entregamos en 2 semanas. Consulta gratis sin compromiso.",
  openGraph: {
    title: "Páginalo — Tu Negocio Completo en Internet en 2 Semanas",
    description: "Sitio web + chatbot IA + presencia en Google. Todo incluido para negocios en Puerto Rico. Entregamos en 2 semanas.",
    siteName: "Páginalo",
    images: [{ url: "/paginalo-hero.png", width: 1200, height: 630, alt: "Páginalo — Agencia Digital Puerto Rico" }],
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Páginalo — Tu Negocio Completo en Internet en 2 Semanas",
    description: "Sitio web + chatbot IA + presencia en Google. Todo incluido para negocios en Puerto Rico.",
    images: ["/paginalo-hero.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${outfit.variable} ${jost.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Páginalo",
              description: "Agencia digital en Puerto Rico. Sitios web profesionales, automatización con IA y presencia en Google.",
              telephone: "+17875104504",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Juan",
                addressRegion: "PR",
                addressCountry: "US",
              },
              sameAs: ["https://www.instagram.com/paginalo"],
              serviceArea: { "@type": "AdministrativeArea", name: "Puerto Rico" },
              priceRange: "$$",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
