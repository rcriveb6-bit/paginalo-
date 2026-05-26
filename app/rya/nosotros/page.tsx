import GoldDivider from "@/components/rya/ui/GoldDivider";
import Link from "next/link";

export const metadata = {
  title: "Nosotros — RYA Shop",
  description: "La historia detrás de RYA Shop, la primera marca de ropa de segunda mano curada de Puerto Rico.",
};

export default function NosotrosPage() {
  const valores = [
    { titulo: "Curaduría", desc: "Cada pieza pasa por nuestro proceso de selección. Si no lo usaríamos nosotros, no lo vendemos." },
    { titulo: "Sostenibilidad", desc: "La moda más sostenible es la que ya existe. Extendemos la vida de cada prenda." },
    { titulo: "Accesibilidad", desc: "Calidad no tiene que significar inaccesible. Piezas premium a precios justos." },
    { titulo: "Orgullo local", desc: "Somos 100% boricua. Operamos en San Juan y enviamos a toda la isla." },
  ];

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "64px" }}>
      {/* Hero */}
      <section className="py-20 dot-texture" style={{ borderBottom: "1px solid rgba(200,169,110,0.15)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <GoldDivider width="narrow" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em" }}>
              Nuestra historia
            </span>
            <GoldDivider width="narrow" />
          </div>
          <h1
            className="font-normal mb-8"
            style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            No es thrift.<br />
            <em>Es curaduría.</em>
          </h1>
        </div>
      </section>

      {/* Historia */}
      <section style={{ background: "var(--color-cream)", padding: "80px 0" }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex flex-col gap-6" style={{ color: "#333", fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: "1.8" }}>
            <p>
              RYA Shop nació de una idea simple: Puerto Rico merece una marca de segunda mano que trate la ropa con el respeto que se merece. Nada de racks desordenados ni piezas en mal estado.
            </p>
            <p>
              Operamos por Instagram, en pop ups en San Juan y ahora en esta página. Cada prenda que ves en nuestro catálogo fue seleccionada a mano, revisada en detalle y fotografiada con cuidado.
            </p>
            <p>
              Porque creemos que <strong>&ldquo;el lujo está en elegir con intención.&rdquo;</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section style={{ background: "var(--color-bg)", padding: "80px 0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <GoldDivider width="narrow" className="mx-auto mb-6" />
            <h2
              className="font-normal"
              style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Lo que nos mueve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valores.map((v, i) => (
              <div
                key={i}
                className="p-8 flex flex-col gap-3"
                style={{ border: "1px solid rgba(200,169,110,0.2)", background: "var(--color-dark-surface)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-px h-6" style={{ background: "var(--color-gold)" }} />
                  <h3
                    className="font-normal"
                    style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "1.4rem" }}
                  >
                    {v.titulo}
                  </h3>
                </div>
                <p style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: "1.7" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-cream)", padding: "60px 0" }}>
        <div className="max-w-lg mx-auto px-6 text-center">
          <h3
            className="font-normal italic mb-6"
            style={{ fontFamily: "var(--font-title)", color: "var(--color-bg)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            ¿Lista para elegir con intención?
          </h3>
          <Link
            href="/rya/catalogo"
            className="inline-block px-8 py-3.5 text-xs"
            style={{ border: "1px solid var(--color-bg)", color: "var(--color-bg)", fontFamily: "var(--font-body)", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.75rem", transition: "all 0.2s" }}
          >
            Ver Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
}
