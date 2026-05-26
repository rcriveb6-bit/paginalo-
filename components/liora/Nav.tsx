"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/store/liora/cart";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, toggleCart } = useCart();
  const cartCount = count();

  return (
    <>
      <nav
        style={{
          position: "sticky", top: 0, zIndex: 200,
          background: "var(--cream)",
          borderBottom: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 6%", height: 64,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "var(--black)", letterSpacing: "0.08em", lineHeight: 1 }}>
            LI<span style={{ color: "var(--gold)" }}>O</span>RA
          </span>
          <span style={{ fontSize: 9, fontWeight: 400, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginTop: 1 }}>
            Be The Light
          </span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }} className="hidden md:flex">
          {[["#productos", "Colección"], ["#nosotros", "Nosotros"], ["#catalogo", "Aromas"]].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gray-mid)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--black)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-mid)")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/liorayco"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 34, height: 34, border: "1px solid var(--border-gold)",
              color: "var(--gold)", textDecoration: "none", borderRadius: "50%",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--white)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* Cart */}
          <button
            onClick={toggleCart}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "none", border: "1px solid var(--border)",
              padding: "7px 15px", cursor: "pointer",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: 11,
              fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--gray-mid)", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--gray-mid)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            Carrito
            <span style={{
              background: "var(--gold)", color: "var(--black)",
              width: 18, height: 18, borderRadius: "50%",
              fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500,
            }}>
              {cartCount}
            </span>
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--black)", padding: 4,
            }}
            aria-label="Menú"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "sticky", top: 64, zIndex: 199,
            background: "var(--cream)", borderBottom: "1px solid var(--border)",
            padding: "1.5rem 6%",
          }}
        >
          {[["#productos", "Colección"], ["#nosotros", "Nosotros"], ["#catalogo", "Aromas"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "0.75rem 0",
                fontSize: 12, fontWeight: 400, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--gray-mid)",
                textDecoration: "none", borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
