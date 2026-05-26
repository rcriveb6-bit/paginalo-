import Link from "next/link";

export default function HomePage() {
  const wa = "https://wa.me/17875104504";

  return (
    <>
      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20">
        <p className="mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-[#00B5B5]">
          Diseño web · Automatización IA · Puerto Rico
        </p>
        <h1 className="max-w-3xl text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#1E3A5F]">
          Tu negocio merece estar en internet
        </h1>
        <p className="mt-6 max-w-xl text-base text-[#1E3A5F]/60 leading-relaxed">
          Creamos sitios web profesionales, automatizamos procesos con inteligencia artificial y construimos tu presencia digital desde San Juan, Puerto Rico.
        </p>
        <div className="mt-10">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#1E3A5F] px-8 py-3 text-sm font-semibold text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all"
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* ── PORTAFOLIO ── */}
      <section id="portafolio" className="border-t border-[#DDD9D2]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-10 text-xs font-semibold tracking-[0.2em] uppercase text-[#1E3A5F]/40">
            Portafolio
          </p>

          <Link href="/liora" className="group flex items-center justify-between border-b border-[#DDD9D2] py-8 hover:bg-[#F0EDE7] -mx-6 px-6 transition-colors">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] group-hover:text-[#00B5B5] transition-colors">
                LIORA
              </h2>
              <p className="mt-1 text-sm text-[#1E3A5F]/50">
                Velas artesanales de soya · San Juan, Puerto Rico
              </p>
            </div>
            <span className="text-2xl text-[#FF7F7F] font-light transition-transform group-hover:translate-x-1">→</span>
          </Link>

          <Link href="/rya" className="group flex items-center justify-between border-b border-[#DDD9D2] py-8 hover:bg-[#F0EDE7] -mx-6 px-6 transition-colors">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] group-hover:text-[#00B5B5] transition-colors">
                RYA SHOP
              </h2>
              <p className="mt-1 text-sm text-[#1E3A5F]/50">
                Moda consciente de segunda mano curada · San Juan, Puerto Rico
              </p>
            </div>
            <span className="text-2xl text-[#FF7F7F] font-light transition-transform group-hover:translate-x-1">→</span>
          </Link>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-[#DDD9D2] py-8 hover:bg-[#F0EDE7] -mx-6 px-6 transition-colors"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F]/30 group-hover:text-[#00B5B5] transition-colors">
                TU PROYECTO
              </h2>
              <p className="mt-1 text-sm text-[#1E3A5F]/30">
                Reserva tu espacio · Hablemos por WhatsApp
              </p>
            </div>
            <span className="text-2xl text-[#FF7F7F]/40 font-light transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="border-t border-[#DDD9D2]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-12 text-xs font-semibold tracking-[0.2em] uppercase text-[#1E3A5F]/40">
            Servicios
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold text-[#1E3A5F]">Diseño Web</h3>
              <p className="mt-2 text-sm text-[#1E3A5F]/60 leading-relaxed">
                Sitios rápidos, modernos y optimizados para convertir visitantes en clientes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1E3A5F]">Automatización con IA</h3>
              <p className="mt-2 text-sm text-[#1E3A5F]/60 leading-relaxed">
                Chatbots, citas automáticas y flujos de WhatsApp que trabajan por ti 24/7.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1E3A5F]">Presencia Digital</h3>
              <p className="mt-2 text-sm text-[#1E3A5F]/60 leading-relaxed">
                Google Maps, redes sociales y anuncios para que te encuentren primero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contacto" className="border-t border-[#DDD9D2] bg-[#1E3A5F]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            ¿Hacemos brillar<br />tu negocio?
          </h2>
          <p className="mt-4 text-sm text-white/50">
            Consulta gratuita · Sin compromiso · Puerto Rico
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-[#00B5B5] px-10 py-4 text-sm font-semibold text-white hover:bg-[#FF7F7F] transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe5d] transition-colors"
      >
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
