import Link from "next/link";
import Image from "next/image";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-[#F7F5F1] text-[#1E3A5F]">
      <header className="sticky top-0 z-50 w-full bg-[#F7F5F1] border-b border-[#DDD9D2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/logo-paginalo.png" alt="Páginalo" width={140} height={40} className="h-9 w-auto object-contain" priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#servicios" className="text-sm font-medium text-[#1E3A5F]/70 hover:text-[#1E3A5F] transition-colors">Servicios</Link>
            <Link href="/#portafolio" className="text-sm font-medium text-[#1E3A5F]/70 hover:text-[#1E3A5F] transition-colors">Portafolio</Link>
            <Link href="/#contacto" className="text-sm font-medium text-[#1E3A5F]/70 hover:text-[#1E3A5F] transition-colors">Contacto</Link>
          </nav>
          <a href="https://wa.me/17875104504" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#00B5B5] px-5 py-2 text-xs font-semibold tracking-wide text-white hover:bg-[#009999] transition-colors">
            WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-grow flex flex-col">{children}</main>

      <footer className="border-t border-[#DDD9D2] bg-[#F7F5F1] py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#1E3A5F]/60">
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
