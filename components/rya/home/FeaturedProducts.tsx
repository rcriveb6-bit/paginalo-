import Link from "next/link";
import GoldDivider from "@/components/rya/ui/GoldDivider";
import { getProductosDestacados } from "@/lib/rya/queries";
import ProductCard from "@/components/rya/catalogo/ProductCard";

export default async function FeaturedProducts() {
  const productos = await getProductosDestacados();

  if (productos.length === 0) return null;

  return (
    <section style={{ background: "var(--color-cream)", padding: "80px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <GoldDivider width="narrow" />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em" }}
            >
              Selección
            </span>
            <GoldDivider width="narrow" />
          </div>
          <h2
            className="font-normal"
            style={{
              fontFamily: "var(--font-title)",
              color: "var(--color-bg)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Piezas Destacadas
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} theme="light" />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/rya/catalogo"
            className="btn-outline px-8 py-3.5 text-xs"
            style={{ borderColor: "var(--color-bg)", color: "var(--color-bg)" }}
          >
            Ver todo el catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
