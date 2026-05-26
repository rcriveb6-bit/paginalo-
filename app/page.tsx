import Link from "next/link";

export default function Page() {
  return (
    <div id="inicio" className="relative min-h-screen bg-[#090909] text-white selection:bg-[#C8A96E] selection:text-black overflow-hidden pb-12">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(200,169,110,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(200,169,110,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(200,169,110,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-4xl px-6 pt-24 pb-20 text-center md:pt-36 md:pb-28">
        <div className="mx-auto mb-6 flex max-w-max items-center gap-2 rounded-full border border-[#C8A96E]/20 bg-[#C8A96E]/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#C8A96E]">
          <span>✦ PÁGINAS WEB · CHATBOTS IA · GOOGLE MAPS</span>
        </div>

        <h1 className="font-outfit text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Tu negocio merece <br />
          <span className="bg-gradient-to-r from-white via-white to-[#C8A96E] bg-clip-text text-transparent italic">
            estar en internet.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
          Diseño web profesional, automatización con IA y presencia digital para PYMEs en Puerto Rico. Creamos tu ventana al mundo digital de forma rápida, moderna y 100% enfocada en atraer más clientes locales.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portafolio"
            className="rounded-full bg-[#C8A96E] px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Ver portafolio →
          </a>
          <a
            href="https://wa.me/17873543240"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-white transition-all hover:bg-white/10 hover:border-white"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative mx-auto max-w-6xl px-6 py-20 border-t border-white/5 scroll-mt-16">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C8A96E]">NUESTROS SERVICIOS</span>
          <h2 className="font-outfit text-3xl font-bold text-white mt-2 md:text-4xl">Cómo impulsamos tu marca</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-[#C8A96E]/40" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Service 1 */}
          <div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-all hover:bg-white/[0.03] hover:border-[#C8A96E]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96E]/10 text-[#C8A96E] mb-6">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.75-2.548a1 1 0 01.959-.718h1.522V10.5m-3.23 7.828l-.75 2.547A1 1 0 016.83 21H5.17a1 1 0 01-.958-.718l-.75-2.548A1 1 0 014.42 16.5h1.522m13.23 0l.75 2.548A1 1 0 0119.17 21h-1.66a1 1 0 01-.959-.718l-.75-2.547A1 1 0 0116.58 16.5h1.522m-3.23-6L14.12 7.953A1 1 0 0013.16 7.25h-2.32a1 1 0 00-.959.703L9.12 10.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-bold mb-3">🎨 Diseño Web Profesional</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              "Sitios modernos, rápidos y hechos para convertir". Landing pages elegantes y tiendas en línea completas, adaptadas perfectamente para dispositivos móviles.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-all hover:bg-white/[0.03] hover:border-[#C8A96E]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96E]/10 text-[#C8A96E] mb-6">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025 4.479 4.479 0 00-.069-.65C3.776 16.905 3 14.656 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-bold mb-3">🤖 Automatización con IA</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              "Recepcionistas virtuales, sistemas de citas, chatbots WhatsApp". Creamos agentes conversacionales para atender las dudas de tus clientes al instante, agendar reservas y automatizar procesos.
            </p>
          </div>

          {/* Service 3 */}
          <div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-all hover:bg-white/[0.03] hover:border-[#C8A96E]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96E]/10 text-[#C8A96E] mb-6">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <h3 className="font-outfit text-xl font-bold mb-3">📈 Presencia Digital</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              "Google, redes sociales, anuncios pagados". Posicionamos tu negocio local en Google Maps y estructuramos campañas de publicidad enfocadas para que tu clientela ideal te encuentre primero.
            </p>
          </div>
        </div>
      </section>

      {/* Portafolio Section */}
      <section id="portafolio" className="mx-auto max-w-6xl px-6 py-20 border-t border-white/5 scroll-mt-16">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C8A96E]">PORTAFOLIO DE PROYECTOS</span>
          <h2 className="font-outfit text-3xl font-bold text-white mt-2 md:text-4xl">Casos de Estudio</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400">
            Hacemos que las marcas locales de Puerto Rico brillen con presencia profesional e interactiva. Pulsa en ellas para explorar su experiencia.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1: LIORA */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-[#C8A96E]/30 transition-all duration-300">
            <div>
              {/* Image area placeholder */}
              <div className="aspect-[4/3] w-full relative bg-neutral-900 flex items-center justify-center p-8 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[#FAF7F1] opacity-95 transition-opacity group-hover:opacity-90 pointer-events-none" />
                <div className="relative z-10 text-center pointer-events-none">
                  <span className="font-serif text-3xl tracking-widest text-[#0d0d0d] font-bold block mb-1">LIORA</span>
                  <span className="text-[9px] tracking-widest uppercase text-[#C9A84C] font-semibold">CERA DE SOYA NATURAL</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-outfit text-xl font-bold mb-2 text-white">LIORA — Velas Artesanales</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  "Velas de soya artesanales hechas en San Juan". Tienda boutique minimalista y elegante para velas aromáticas vaciadas a mano.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <a
                href="https://liora.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8A96E] hover:text-white transition-colors"
              >
                <span>Visitar sitio →</span>
              </a>
            </div>
          </div>

          {/* Card 2: RYA SHOP */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-[#C8A96E]/30 transition-all duration-300">
            <div>
              {/* Image area placeholder */}
              <div className="aspect-[4/3] w-full relative bg-neutral-900 flex items-center justify-center p-8 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[#0D0D0D] opacity-95 transition-opacity group-hover:opacity-90 pointer-events-none" />
                <div className="relative z-10 text-center pointer-events-none">
                  <span className="font-serif text-3xl tracking-widest text-[#F7F5F1] block mb-1">RYA SHOP</span>
                  <span className="text-[9px] tracking-widest uppercase text-[#C8A96E] font-semibold">SEGUNDA MANO CURADA</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-outfit text-xl font-bold mb-2 text-white">RYA SHOP — Ropa de Segunda</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  "Moda consciente para almas sofisticadas — San Juan". Catálogo digital para prendas thrift únicas y exclusivas.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="/rya"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8A96E] hover:text-white transition-colors"
              >
                <span>Visitar sitio →</span>
              </Link>
            </div>
          </div>

          {/* Card 3: Solar CRM */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-[#C8A96E]/30 transition-all duration-300">
            <div>
              {/* Image area placeholder */}
              <div className="aspect-[4/3] w-full relative bg-neutral-900 flex items-center justify-center p-8 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-neutral-950 opacity-95 pointer-events-none" />
                {/* Subtle Solar SVG Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div className="relative z-10 text-center pointer-events-none">
                  <span className="font-outfit text-3xl tracking-widest text-[#F7F5F1] font-bold block mb-1">SOLAR CRM</span>
                  <span className="text-[9px] tracking-widest uppercase text-[#C8A96E] font-semibold">VENTAS & SISTEMAS SOLAR PR</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-outfit text-xl font-bold mb-2 text-white">SOLAR CRM — Gestión de Leads</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Plataforma avanzada de control de clientes, asignación de consultores solares y monitoreo de contratos de energía solar.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 cursor-not-allowed">
                <span>Acceso Privado</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contacto" className="relative mx-auto max-w-4xl px-6 py-20 text-center border-t border-white/5 scroll-mt-16">
        <h2 className="font-outfit text-3xl font-bold mb-4 text-white md:text-4xl">¿Hacemos brillar tu negocio?</h2>
        <p className="mx-auto max-w-lg text-sm text-zinc-400 leading-relaxed mb-8">
          Hablemos sin compromiso. Agenda una consulta gratuita para evaluar tus necesidades de diseño web, automatización con bots o presencia digital local.
        </p>
        <a
          href="https://wa.me/17873543240"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#C8A96E] px-10 py-4 text-xs font-bold tracking-widest uppercase text-black transition-transform hover:scale-[1.03] active:scale-[0.98] inline-block"
        >
          Hablemos por WhatsApp
        </a>
      </section>
    </div>
  );
}
