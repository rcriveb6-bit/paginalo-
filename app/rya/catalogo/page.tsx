import { Suspense } from "react";
import FilterBar from "@/components/rya/catalogo/FilterBar";
import { getProductos } from "@/lib/rya/queries";
import ProductCard from "@/components/rya/catalogo/ProductCard";
import GoldDivider from "@/components/rya/ui/GoldDivider";
import { Categoria } from "@/lib/rya/types";

interface CatalogoPageProps {
  searchParams: Promise<{ categoria?: string; talla?: string }>;
}

export const metadata = {
  title: "Catálogo — RYA Shop",
  description: "Explora nuestro catálogo de ropa de segunda mano curada.",
};

export default async function CatalogoPage({ searchParams }: CatalogoPageProps) {
  const params = await searchParams;
  const categoria = params.categoria as Categoria | undefined;
  const talla = params.talla;

  const productos = await getProductos({ categoria, talla });

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "64px" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <GoldDivider width="narrow" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em" }}>
              Colección
            </span>
          </div>
          <h1
            className="font-normal"
            style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Catálogo
          </h1>
          <p className="mt-2 text-sm" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
            {productos.length} {productos.length === 1 ? "pieza disponible" : "piezas disponibles"}
          </p>
        </div>

        {/* Filters */}
        <Suspense>
          <FilterBar />
        </Suspense>

        {/* Grid */}
        <div className="mt-8">
          {productos.length === 0 ? (
            <div className="text-center py-20">
              <p style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                No hay piezas con esos filtros en este momento.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {productos.map((producto) => (
                <ProductCard key={producto.id} producto={producto} theme="dark" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
