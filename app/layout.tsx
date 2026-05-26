import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Páginalo — Presencia Digital para tu Negocio",
  description: "Sitios web profesionales, automatización con IA y presencia digital para PYMEs en Puerto Rico.",
  keywords: ["diseño web", "Puerto Rico", "páginas web", "inteligencia artificial", "marketing digital", "pymes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#090909] text-white font-sans">
        {/* Global Header */}
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
              <span className="font-sans font-bold text-2xl tracking-tight bg-gradient-to-r from-white via-white to-[#C8A96E] bg-clip-text text-transparent">
                Páginalo
              </span>
              <span className="rounded bg-[#C8A96E]/10 border border-[#C8A96E]/20 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-[#C8A96E] uppercase">
                PR
              </span>
            </Link>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#inicio" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="/#servicios" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="/#portafolio" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Portafolio
              </Link>
              <Link href="/#contacto" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>

            {/* CTA Button */}
            <a
              href="https://wa.me/17873543240"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-semibold tracking-wider text-white transition-all hover:bg-white hover:text-black hover:border-white"
            >
              <span>Hablar con nosotros</span>
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow flex flex-col">{children}</main>

        {/* Global Footer */}
        <footer className="border-t border-white/5 bg-black/20 py-12 text-center text-xs text-zinc-500 uppercase tracking-wider">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white tracking-wide">Páginalo PR</span>
              <span>· Presencia Digital</span>
            </div>
            <p>© {new Date().getFullYear()} Páginalo. Hecho con orgullo en Puerto Rico 🇵🇷</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
