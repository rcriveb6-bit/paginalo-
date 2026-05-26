import Link from "next/link";
import GoldDivider from "@/components/rya/ui/GoldDivider";

export const metadata = {
  title: "¡Gracias por tu compra! — RYA Shop",
};

export default function SuccessPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center dot-texture"
      style={{ background: "var(--color-bg)", paddingTop: "64px" }}
    >
      <div className="max-w-lg mx-auto px-6 text-center">
        {/* Check icon */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ border: "1px solid var(--color-gold)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)" }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <GoldDivider width="narrow" className="mx-auto mb-8" />

        <h1
          className="font-normal mb-4"
          style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          ¡Gracias por tu compra!
        </h1>

        <p
          className="mb-3 leading-relaxed"
          style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}
        >
          Tu pedido fue recibido. Te contactaremos a la brevedad para coordinar el envío a toda Puerto Rico.
        </p>

        <p
          className="italic mb-10"
          style={{ color: "var(--color-gold)", fontFamily: "var(--font-title)", fontSize: "1.1rem" }}
        >
          &ldquo;Elegiste con intención. Eso es RYA.&rdquo;
        </p>

        <GoldDivider width="narrow" className="mx-auto mb-10" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/rya/catalogo" className="btn-outline px-8 py-3.5 text-xs">
            Seguir explorando
          </Link>
          <a
            href="https://instagram.com/rya.shop2025"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 text-xs flex items-center gap-2"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @rya.shop2025
          </a>
        </div>
      </div>
    </div>
  );
}
