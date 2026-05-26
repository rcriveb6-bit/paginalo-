import HeroSection from "@/components/rya/home/HeroSection";
import FeaturedProducts from "@/components/rya/home/FeaturedProducts";
import GoldDivider from "@/components/rya/ui/GoldDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <BrandStatement />
      <InstagramBanner />
    </>
  );
}

function BrandStatement() {
  return (
    <section
      className="dot-texture py-20"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <GoldDivider width="narrow" className="mx-auto mb-10" />
        <blockquote
          className="font-normal italic leading-relaxed mb-8"
          style={{
            fontFamily: "var(--font-title)",
            color: "var(--color-cream)",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          &ldquo;El lujo está en elegir con intención.&rdquo;
        </blockquote>
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em" }}
        >
          — RYA Shop
        </p>
        <GoldDivider width="narrow" className="mx-auto mt-10" />
      </div>
    </section>
  );
}

function InstagramBanner() {
  return (
    <section style={{ background: "var(--color-dark-surface)", padding: "60px 0" }}>
      <div className="max-w-xl mx-auto px-6 text-center">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em" }}
        >
          Síguenos
        </p>
        <h3
          className="font-normal mb-6"
          style={{
            fontFamily: "var(--font-title)",
            color: "var(--color-cream)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          }}
        >
          @rya.shop2025
        </h3>
        <p
          className="text-sm mb-8 leading-relaxed"
          style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}
        >
          Drops semanales, behind the scenes y los mejores looks en Instagram.
        </p>
        <a
          href="https://instagram.com/rya.shop2025"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline px-8 py-3.5 text-xs inline-flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          Ver Instagram
        </a>
      </div>
    </section>
  );
}
