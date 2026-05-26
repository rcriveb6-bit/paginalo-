"use client";

import Link from "next/link";
import GoldDivider from "@/components/rya/ui/GoldDivider";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-bg)", borderTop: "1px solid rgba(200,169,110,0.2)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-3" style={{ fontFamily: "var(--font-title)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)" }}>
                <path d="M12 4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2" />
                <path d="M12 8L3 17h18L12 8z" />
              </svg>
              <span className="text-lg tracking-widest uppercase" style={{ color: "var(--color-cream)", letterSpacing: "0.3em" }}>RYA</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
              Moda consciente para almas sofisticadas.<br />
              San Juan, Puerto Rico.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}>Navegación</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/rya/catalogo", label: "Catálogo" },
                { href: "/rya/nosotros", label: "Nosotros" },
                { href: "/rya/popups", label: "Pop Ups" },
                { href: "/rya/contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs transition-colors duration-200"
                  style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cream)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-slate)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}>Contacto</p>
            <div className="flex flex-col gap-2 text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
              <a href="mailto:shopatrya@gmail.com" className="transition-colors hover:text-cream" style={{ color: "inherit" }}>
                shopatrya@gmail.com
              </a>
              <a href="https://instagram.com/rya.shop2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors" style={{ color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-slate)")}
              >
                <InstagramIcon />
                @rya.shop2025
              </a>
              <span>(787) 455-5405</span>
            </div>
          </div>
        </div>

        <GoldDivider className="mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs italic" style={{ color: "var(--color-slate)", fontFamily: "var(--font-title)" }}>
          &ldquo;Viste bien. Viste consciente. Viste RYA.&rdquo;
          </p>
          <p className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} RYA Shop. Puerto Rico.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
