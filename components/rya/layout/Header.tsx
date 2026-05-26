"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/rya/cart";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const cartCount = count();

  const navLinks = [
    { href: "/rya/catalogo", label: "Catálogo" },
    { href: "/rya/nosotros", label: "Nosotros" },
    { href: "/rya/popups", label: "Pop Ups" },
    { href: "/rya/contacto", label: "Contacto" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(13,13,13,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(200,169,110,0.15)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/rya" className="flex items-center gap-2" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)" }}>
          <HangerIcon />
          <span className="text-xl font-normal tracking-widest uppercase" style={{ letterSpacing: "0.3em" }}>RYA</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-slate)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart + mobile menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative transition-colors duration-200 cursor-pointer"
            style={{ color: "var(--color-cream)" }}
            aria-label="Carrito de compras"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full text-black font-medium"
                style={{ background: "var(--color-gold)", fontSize: "0.6rem" }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden cursor-pointer"
            style={{ color: "var(--color-cream)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{ background: "var(--color-bg)", borderColor: "rgba(200,169,110,0.15)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase"
              style={{ color: "var(--color-cream)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function HangerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2" />
      <path d="M12 8L3 17h18L12 8z" />
      <path d="M12 6c0 0 0 2 0 2" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
