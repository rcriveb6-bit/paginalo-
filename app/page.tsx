import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#090909] text-white selection:bg-[#C8A96E] selection:text-black overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(200,169,110,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(200,169,110,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(200,169,110,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* Floating Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="font-playfair text-xl font-bold tracking-widest text-[#C8A96E]">PÁGINALO</span>
            <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white/50 uppercase">PR</span>
          </div>
          <a
            href="https://wa.me/17874555405"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white/5 px-5 py-2 text-xs font-medium tracking-wider text-[#C8A96E] transition-all hover:bg-white/10 hover:text-white"
          >
            <span>Hablemos</span>
            <svg
              className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 text-center md:pt-32">
        <div className="mx-auto mb-6 flex max-w-max items-center gap-2 rounded-full border border-[#C8A96E]/20 bg-[#C8A96E]/5 px-3.5 py-1 text-[10px] uppercase tracking-widest text-[#C8A96E]">
          <span>✦ PRESENCIA DIGITAL DE ALTO IMPACTO</span>
        </div>
        
        <h1 className="font-playfair text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Tu negocio existe. <br />
          <span className="bg-gradient-to-r from-white via-white to-[#C8A96E] bg-clip-text text-transparent italic">
            Haz que lo encuentren.
          </span>
        </h1>
        
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
          Desarrollamos sitios web profesionales en 48–72 horas, automatizaciones con IA y estrategias de presencia local en Google para dueños de negocios en Puerto Rico. Sin complicaciones técnicas.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#trabajos"
            className="rounded-none bg-[#C8A96E] px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-black transition-colors hover:bg-white"
          >
            Ver Trabajos
          </a>
          <a
            href="https://wa.me/17874555405"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none border border-white/20 bg-transparent px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-white transition-all hover:bg-white hover:text-black hover:border-white"
          >
            Consulta Gratis
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl font-bold text-white md:text-4xl">¿Qué Hacemos por tu Negocio?</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-[#C8A96E]/40" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-[#C8A96E]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96E]/10 text-[#C8A96E] mb-6">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Diseño Web en 48–72h</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Páginas de aterrizaje o e-commerce completos optimizados para celulares. Rápidas, modernas y enfocadas en vender tus servicios o productos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-[#C8A96E]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96E]/10 text-[#C8A96E] mb-6">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Automatización e IA</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Chatbots inteligentes para WhatsApp y agendas automáticas de citas. Deja que la inteligencia artificial responda las dudas comunes de tus clientes 24/7.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-[#C8A96E]/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8A96E]/10 text-[#C8A96E] mb-6">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Presencia en Google</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Posicionamiento en Google Maps y Google Business. Cuando alguien en tu pueblo busque lo que ofreces, tú aparecerás primero con excelentes reseñas.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="trabajos" className="mx-auto max-w-6xl px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C8A96E]">PORTAFOLIO EN VIVO</span>
          <h2 className="font-playfair text-3xl font-bold text-white mt-2 md:text-4xl">Casos de Éxito Reales</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400">
            Explora las webs que hemos diseñado y optimizado para negocios locales. Pulsa en cada una para probar la experiencia real.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Work 1: RYA Shop */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 transition-all hover:-translate-y-1 hover:border-[#C8A96E]/30">
            <div className="aspect-video w-full relative bg-neutral-900 flex items-center justify-center p-8 overflow-hidden">
              {/* Fake UI Preview */}
              <div className="absolute inset-0 bg-[#0D0D0D] opacity-90 transition-opacity group-hover:opacity-85 pointer-events-none" />
              <div className="relative z-10 text-center pointer-events-none">
                <span className="font-cormorant text-5xl tracking-widest text-[#F7F5F1] block mb-2">RYA SHOP</span>
                <span className="text-[10px] tracking-widest uppercase text-[#C8A96E] font-jost">Puerto Rico · Segunda Mano Curada</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/20 px-3 py-1 text-[9px] uppercase tracking-wider text-[#C8A96E]">
                <span>E-Commerce Live</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-playfair text-2xl font-bold mb-3 text-white">RYA Shop</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Primera tienda thrift curada de moda consciente en Puerto Rico. Cuenta con catálogo rápido por tallas, carrito de compras integrado y checkout inmediato.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-[10px] text-zinc-400">
                <span className="bg-white/5 px-2.5 py-1 rounded">Next.js 15</span>
                <span className="bg-white/5 px-2.5 py-1 rounded">Tailwind CSS</span>
                <span className="bg-white/5 px-2.5 py-1 rounded">Zustand Cart</span>
                <span className="bg-white/5 px-2.5 py-1 rounded">WhatsApp Checkout</span>
              </div>
              <Link
                href="/rya"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8A96E] hover:text-white transition-colors"
              >
                <span>Visitar Demo RYA</span>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Work 2: LIORA */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 transition-all hover:-translate-y-1 hover:border-[#C8A96E]/30">
            <div className="aspect-video w-full relative bg-neutral-900 flex items-center justify-center p-8 overflow-hidden">
              {/* Fake UI Preview */}
              <div className="absolute inset-0 bg-[#FAF7F1] opacity-95 transition-opacity group-hover:opacity-90 pointer-events-none" />
              <div className="relative z-10 text-center pointer-events-none">
                <span className="font-playfair text-5xl tracking-widest text-[#0d0d0d] block font-bold mb-1">LI<span className="text-[#C9A84C]">O</span>RA</span>
                <span className="text-[10px] tracking-widest uppercase text-[#C9A84C] font-outfit">Toa Alta, PR · Est. 2025</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-3 py-1 text-[9px] uppercase tracking-wider text-[#C9A84C]">
                <span>E-Commerce Live</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-playfair text-2xl font-bold mb-3 text-white">LIORA Candles</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Marca exclusiva de velas artesanales de cera de soya con intención real. Interfaz visual exquisita y limpia en tonos crema y dorados, con filtros avanzados de aromas.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-[10px] text-zinc-400">
                <span className="bg-white/5 px-2.5 py-1 rounded">Next.js 16</span>
                <span className="bg-white/5 px-2.5 py-1 rounded">Vanilla Inline CSS</span>
                <span className="bg-white/5 px-2.5 py-1 rounded">SVG Animations</span>
                <span className="bg-white/5 px-2.5 py-1 rounded">WhatsApp Checkout</span>
              </div>
              <Link
                href="/liora"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9A84C] hover:text-white transition-colors"
              >
                <span>Visitar Demo LIORA</span>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto max-w-4xl px-6 py-24 text-center border-t border-white/5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(200,169,110,0.06)_0%,transparent_70%)] pointer-events-none" />
        <h2 className="font-playfair text-4xl font-bold mb-6 text-white md:text-5xl">¿Llevamos tu negocio al internet?</h2>
        <p className="mx-auto max-w-lg text-sm text-zinc-400 leading-relaxed mb-10">
          No dejes que tu negocio siga invisible. Diseñamos, optimizamos y publicamos tu página web llave en mano para que comiences a recibir clientes.
        </p>
        <a
          href="https://wa.me/17874555405"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-none bg-[#C8A96E] px-10 py-4 text-xs font-bold tracking-widest uppercase text-black transition-colors hover:bg-white inline-block"
        >
          Consulta Gratis por WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-[10px] tracking-wider text-zinc-500 uppercase">
        <div className="mx-auto max-w-6xl px-6">
          <p>© {new Date().getFullYear()} Páginalo PR. Hecho en Toa Alta, Puerto Rico 🇵🇷</p>
        </div>
      </footer>
    </div>
  );
}
