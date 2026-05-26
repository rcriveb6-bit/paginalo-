import GoldDivider from "@/components/rya/ui/GoldDivider";
import { getEventos } from "@/lib/rya/queries";
import EventCard from "@/components/rya/popups/EventCard";

export const metadata = {
  title: "Pop Ups — RYA Shop",
  description: "Próximos pop ups y eventos de RYA Shop en San Juan, Puerto Rico.",
};

export default async function PopupsPage() {
  const eventos = await getEventos();

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "64px" }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <GoldDivider width="narrow" />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em" }}>
              Eventos
            </span>
          </div>
          <h1
            className="font-normal"
            style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Pop Ups
          </h1>
          <p className="mt-3 text-sm" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
            Nos encontrarás en San Juan y Área Metro. Síguenos en Instagram para enterarte primero.
          </p>
        </div>

        <GoldDivider className="mb-10" />

        {/* Eventos */}
        {eventos.length === 0 ? (
          <div className="text-center py-20">
            <p className="mb-4" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
              No hay eventos próximos anunciados.
            </p>
            <a
              href="https://instagram.com/rya.shop2025"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-6 py-2.5 text-xs inline-flex items-center gap-2"
            >
              Seguir en Instagram para novedades
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {eventos.map((evento) => (
              <EventCard key={evento.id} evento={evento} />
            ))}
          </div>
        )}

        {/* Instagram CTA */}
        <div
          className="mt-16 p-8 text-center"
          style={{ border: "1px solid rgba(200,169,110,0.2)", background: "var(--color-dark-surface)" }}
        >
          <p
            className="font-normal italic mb-4"
            style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "1.3rem" }}
          >
            Los drops y fechas van primero en Instagram
          </p>
          <a
            href="https://instagram.com/rya.shop2025"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-2.5 text-xs inline-flex items-center gap-2"
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
