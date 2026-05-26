import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductoById } from "@/lib/rya/queries";
import ImageGallery from "@/components/rya/catalogo/ImageGallery";
import GoldDivider from "@/components/rya/ui/GoldDivider";
import AddToCartButton from "@/components/rya/catalogo/AddToCartButton";

interface ProductoPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductoPageProps) {
  const { id } = await params;
  const producto = await getProductoById(id);
  if (!producto) return { title: "Producto no encontrado — RYA Shop" };
  return {
    title: `${producto.nombre} — RYA Shop`,
    description: producto.descripcion ?? `${producto.nombre} · Talla ${producto.talla} · $${producto.precio}`,
  };
}

export default async function ProductoPage({ params }: ProductoPageProps) {
  const { id } = await params;
  const producto = await getProductoById(id);

  if (!producto) notFound();

  const whatsappText = encodeURIComponent(
    `Hola, me interesa: ${producto.nombre} · Talla ${producto.talla ?? "–"} · $${producto.precio}`
  );
  const whatsappUrl = `https://wa.me/17874555405?text=${whatsappText}`;

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "64px" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
          <Link href="/rya/catalogo" className="transition-colors hover:text-gold" style={{ color: "inherit" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-slate)")}
          >
            Catálogo
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-cream)" }}>{producto.nombre}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Galería */}
          <ImageGallery fotos={producto.fotos_url ?? []} nombre={producto.nombre} />

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Badge estado */}
            <span
              className="self-start text-xs px-3 py-1 uppercase tracking-widest"
              style={{
                border: "1px solid rgba(200,169,110,0.4)",
                color: "var(--color-gold)",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.15em",
                fontSize: "0.6rem",
              }}
            >
              {producto.estado}
            </span>

            <div>
              <h1
                className="font-normal leading-tight mb-2"
                style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {producto.nombre}
              </h1>
              {producto.categoria && (
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}>
                  {producto.categoria}
                  {producto.talla && ` · Talla ${producto.talla}`}
                </p>
              )}
            </div>

            <div className="text-3xl font-light" style={{ color: "var(--color-gold)", fontFamily: "var(--font-title)" }}>
              ${producto.precio}
            </div>

            <GoldDivider />

            {/* Descripción */}
            {producto.descripcion && (
              <p className="leading-relaxed" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
                {producto.descripcion}
              </p>
            )}

            {/* Medidas */}
            {producto.medidas && (
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}>
                  Medidas
                </p>
                <p className="text-sm" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                  {producto.medidas}
                </p>
              </div>
            )}

            <GoldDivider />

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <AddToCartButton producto={producto} />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-3.5 text-xs text-center flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                Consultar por WhatsApp
              </a>
            </div>

            {/* Nota única */}
            <p className="text-xs italic" style={{ color: "var(--color-slate)", fontFamily: "var(--font-title)", opacity: 0.7 }}>
              Cada pieza es única. Stock limitado a 1 unidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.115 1.522 5.847L.057 23.882l6.186-1.622A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.359-.213-3.712.974.99-3.614-.234-.372A9.818 9.818 0 1 1 12 21.818z" />
    </svg>
  );
}
