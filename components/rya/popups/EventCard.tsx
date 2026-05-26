import { Evento } from "@/lib/rya/types";

interface EventCardProps {
  evento: Evento;
}

export default function EventCard({ evento }: EventCardProps) {
  const fecha = new Date(evento.fecha + "T12:00:00");

  return (
    <div
      className="flex flex-col md:flex-row gap-6 p-6"
      style={{ border: "1px solid rgba(200,169,110,0.2)", background: "var(--color-dark-surface)" }}
    >
      {/* Fecha badge */}
      <div
        className="flex-shrink-0 w-20 h-20 flex flex-col items-center justify-center text-center"
        style={{ border: "1px solid var(--color-gold)", background: "transparent" }}
      >
        <span
          className="text-2xl font-normal leading-none"
          style={{ fontFamily: "var(--font-title)", color: "var(--color-gold)" }}
        >
          {fecha.getDate()}
        </span>
        <span
          className="text-xs uppercase mt-1"
          style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.1em", opacity: 0.8 }}
        >
          {fecha.toLocaleDateString("es-PR", { month: "short" })}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3
          className="font-normal mb-2"
          style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "1.5rem" }}
        >
          {evento.titulo}
        </h3>

        <div className="flex flex-wrap gap-4 mb-3">
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)" }}>
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
              {evento.hora_inicio}{evento.hora_fin && ` — ${evento.hora_fin}`}
            </span>
          </div>

          {evento.ubicacion && (
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)" }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                {evento.ubicacion}
              </span>
            </div>
          )}
        </div>

        {evento.descripcion && (
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
            {evento.descripcion}
          </p>
        )}
      </div>
    </div>
  );
}
