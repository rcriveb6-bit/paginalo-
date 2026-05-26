import Link from "next/link";
import Image from "next/image";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-[#0F1B2D] text-white">
      <header className="sticky top-0 z-50 w-full bg-[#0F1B2D]/90 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo-paginalo.png"
              alt="Páginalo"
              width={140}
              height={40}
              className="h-9 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#servicios" className="text-sm font-medium text-white/60 hover:text-[#00B5B5] transition-colors">Servicios</Link>
            <Link href="/#portafolio" className="text-sm font-medium text-white/60 hover:text-[#00B5B5] transition-colors">Portafolio</Link>
            <Link href="/#contacto" className="text-sm font-medium text-white/60 hover:text-[#00B5B5] transition-colors">Contacto</Link>
          </nav>
          <a
            href="https://wa.me/17875104504"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#00B5B5] px-5 py-2 text-xs font-semibold tracking-wide text-[#00B5B5] hover:bg-[#00B5B5] hover:text-white transition-all duration-200"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-grow flex flex-col">{children}</main>

      <footer className="border-t border-white/5 bg-[#0A1220] py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>Páginalo © 2025 · San Juan, Puerto Rico 🇵🇷</p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/paginalo.pr" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B5B5] transition-colors">Instagram</a>
            <a href="https://facebook.com/paginalo.pr" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B5B5] transition-colors">Facebook</a>
            <a href="https://wa.me/17875104504" target="_blank" rel="noopener noreferrer" className="hover:text-[#00B5B5] transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
