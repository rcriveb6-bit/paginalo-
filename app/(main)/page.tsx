import Link from "next/link";

export default function HomePage() {
  const wa = "https://wa.me/17875104504";

  return (
    <div className="bg-[#F7F5F1] text-[#1E3A5F]">

      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">
          Diseño web · Automatización IA · Puerto Rico
        </p>
        <h1 className="max-w-3xl text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#1E3A5F]">
          Tu negocio merece estar en internet
        </h1>
        <p className="mt-5 max-w-xl text-base text-[#1E3A5F]/60 leading-relaxed">
          Creamos sitios web profesionales, automatizamos procesos con IA y construimos tu presencia digital desde San Juan, Puerto Rico.
        </p>
        <div className="mt-8">
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center border border-[#1E3A5F] px-8 py-3 text-sm font-semibold text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all">
            Contáctanos
          </a>
        </div>
      </section>

      {/* ── HUB VISUAL — tarjetas de marca ── */}
      <section id="portafolio" className="border-t border-[#DDD9D2]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-10 text-xs font-semibold tracking-[0.2em] uppercase text-[#1E3A5F]/40">Clientes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card Liora */}
            <Link href="/liora" className="group relative overflow-hidden block" style={{ backgroundColor: "#F5EDE0", minHeight: "280px" }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 70% 30%, rgba(201,168,76,0.15) 0%, transparent 60%)" }} />
              <div className="relative p-10 h-full flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#A0522D" }}>Velas · Toa Alta PR</p>
                  <h2 className="text-5xl font-medium italic mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "#2C1A0E" }}>
                    Liora & Co.
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(44,26,14,0.55)", maxWidth: "260px" }}>
                    Velas artesanales de soya, hechas a mano con aromas únicos.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8">
                  <span className="text-sm font-semibold" style={{ color: "#C9A84C" }}>Ver proyecto</span>
                  <span className="text-lg transition-transform group-hover:translate-x-1" style={{ color: "#C9A84C" }}>→</span>
                </div>
              </div>
            </Link>

            {/* Card RYA International */}
            <Link href="/rya" className="group relative overflow-hidden block" style={{ backgroundColor: "#0A0A0A", minHeight: "280px" }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 30% 70%, rgba(200,169,110,0.12) 0%, transparent 60%)" }} />
              <div className="relative p-10 h-full flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#C8A96E" }}>Consultoría · Miami FL</p>
                  <h2 className="text-5xl font-medium mb-3" style={{ fontFamily: "var(--font-playfair), serif", color: "#F0EBE1" }}>
                    RYA International
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,235,225,0.45)", maxWidth: "260px" }}>
                    Consultoría estratégica para transformar negocios en imperios.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8">
                  <span className="text-sm font-semibold" style={{ color: "#C8A96E" }}>Ver proyecto</span>
                  <span className="text-lg transition-transform group-hover:translate-x-1" style={{ color: "#C8A96E" }}>→</span>
                </div>
              </div>
            </Link>

            {/* Card Tu proyecto */}
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden block border border-dashed border-[#DDD9D2] hover:border-[#00B5B5] transition-colors md:col-span-2"
              style={{ minHeight: "100px" }}>
              <div className="p-10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#1E3A5F]/25 group-hover:text-[#00B5B5] transition-colors">TU PROYECTO</h2>
                  <p className="text-sm text-[#1E3A5F]/25 mt-1">Reserva tu espacio · Hablemos por WhatsApp</p>
                </div>
                <span className="text-2xl text-[#1E3A5F]/20 group-hover:text-[#00B5B5] group-hover:translate-x-1 transition-all">→</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="border-t border-[#DDD9D2]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-12 text-xs font-semibold tracking-[0.2em] uppercase text-[#1E3A5F]/40">Servicios</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Diseño Web", body: "Sitios rápidos, modernos y optimizados para convertir visitantes en clientes." },
              { title: "Automatización con IA", body: "Chatbots, citas automáticas y flujos de WhatsApp que trabajan por ti 24/7." },
              { title: "Presencia Digital", body: "Google Maps, redes sociales y anuncios para que te encuentren primero." },
            ].map(s => (
              <div key={s.title}>
                <h3 className="text-lg font-bold text-[#1E3A5F]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#1E3A5F]/60 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contacto" className="border-t border-[#DDD9D2] bg-[#1E3A5F]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">¿Hacemos brillar<br />tu negocio?</h2>
          <p className="mt-4 text-sm text-white/50">Consulta gratuita · Sin compromiso · Puerto Rico</p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-[#00B5B5] px-10 py-4 text-sm font-semibold text-white hover:bg-[#FF7F7F] transition-colors">
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe5d] transition-colors">
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  );
}
