"use client";

import { motion, type Variants } from "framer-motion";
import type { RyaProduct } from "@/lib/types";

const wa = "https://wa.me/17874555405?text=Hola%20RYA%2C%20vi%20su%20p%C3%A1gina%20y%20me%20interesa%20una%20pieza";
const ig = "https://instagram.com/rya.shop2025";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function HangerIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 8 a6 6 0 0 1 6 6 c0 3-2 5-6 7" />
      <path d="M32 21 L6 46 h52 L32 21 z" />
      <line x1="4" y1="46" x2="60" y2="46" />
    </svg>
  );
}

function ProductCard({ product }: { product: RyaProduct }) {
  const waLink = `https://wa.me/17874555405?text=Hola%20RYA%2C%20me%20interesa%20la%20pieza%3A%20${encodeURIComponent(product.name)}`;

  return (
    <motion.a
      href={product.sold ? undefined : waLink}
      target={product.sold ? undefined : "_blank"}
      rel="noopener noreferrer"
      variants={fadeUp}
      className="group relative block cursor-pointer"
      style={{ pointerEvents: product.sold ? "none" : "auto" }}
    >
      <div className="relative aspect-square overflow-hidden mb-3" style={{ backgroundColor: "#1a1a1a" }}>
        {product.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ color: "#C8A96E", opacity: 0.3 }}>
            <div className="w-12 h-12"><HangerIcon /></div>
          </div>
        )}

        {/* 1 of 1 badge */}
        {!product.sold && (
          <span className="absolute top-3 left-3 text-[9px] font-semibold tracking-[0.2em] uppercase px-2 py-1"
            style={{ backgroundColor: "rgba(13,13,13,0.85)", color: "#C8A96E", border: "1px solid rgba(200,169,110,0.4)" }}>
            1 of 1
          </span>
        )}

        {/* Sold overlay */}
        {product.sold && (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(13,13,13,0.75)" }}>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#C8A96E" }}>Vendida</span>
          </div>
        )}

        {/* Hover CTA */}
        {!product.sold && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: "rgba(13,13,13,0.6)" }}>
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-2"
              style={{ backgroundColor: "#C8A96E", color: "#0D0D0D" }}>
              Preguntar
            </span>
          </div>
        )}
      </div>

      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#C8A96E", opacity: 0.6 }}>
        {product.category ?? "Pieza única"}
      </p>
      <h3 className="text-base font-medium mb-1" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F7F5F1", fontSize: "1.1rem" }}>
        {product.name}
      </h3>
      {product.price && (
        <p className="text-sm font-semibold" style={{ color: "#C8A96E" }}>
          ${product.price}
        </p>
      )}
    </motion.a>
  );
}

interface Props {
  products: RyaProduct[];
}

export default function RyaClient({ products }: Props) {
  return (
    <div className="rya-brand min-h-screen">

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "92vh", backgroundColor: "#0D0D0D" }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(200,169,110,0.1) 0%, transparent 60%)"
        }} />

        {/* Decorative corner lines */}
        <div className="absolute top-8 left-8 w-12 h-12" style={{ borderTop: "1px solid rgba(200,169,110,0.3)", borderLeft: "1px solid rgba(200,169,110,0.3)" }} />
        <div className="absolute top-8 right-8 w-12 h-12" style={{ borderTop: "1px solid rgba(200,169,110,0.3)", borderRight: "1px solid rgba(200,169,110,0.3)" }} />
        <div className="absolute bottom-8 left-8 w-12 h-12" style={{ borderBottom: "1px solid rgba(200,169,110,0.3)", borderLeft: "1px solid rgba(200,169,110,0.3)" }} />
        <div className="absolute bottom-8 right-8 w-12 h-12" style={{ borderBottom: "1px solid rgba(200,169,110,0.3)", borderRight: "1px solid rgba(200,169,110,0.3)" }} />

        <motion.div
          className="relative z-10 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Gold separator bar */}
          <motion.div variants={fadeUp} className="mx-auto mb-8" style={{ width: "40px", height: "1px", backgroundColor: "#C8A96E" }} />

          <motion.p variants={fadeUp} className="mb-4 text-xs font-medium tracking-[0.35em] uppercase" style={{ color: "#C8A96E" }}>
            San Juan · Puerto Rico · Est. 2025
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl italic mb-6"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "#F7F5F1", fontWeight: 400, lineHeight: 1.1 }}
          >
            Moda consciente<br />
            para almas <span style={{ color: "#C8A96E" }}>sofisticadas.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mx-auto my-6" style={{ width: "40px", height: "1px", backgroundColor: "rgba(200,169,110,0.35)" }} />

          <motion.p variants={fadeUp} className="text-sm mb-10 leading-relaxed" style={{ color: "rgba(247,245,241,0.5)", maxWidth: "420px", margin: "0 auto 2.5rem" }}>
            Piezas únicas de segunda mano, curadas a mano. Cada prenda fue elegida con intención.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#coleccion"
              className="px-10 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all"
              style={{ backgroundColor: "#C8A96E", color: "#0D0D0D" }}>
              Ver Colección
            </a>
            <a href={ig} target="_blank" rel="noopener noreferrer"
              className="px-10 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all"
              style={{ border: "1px solid rgba(200,169,110,0.45)", color: "#C8A96E" }}>
              @rya.shop2025
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(200,169,110,0.4)" }}>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, #C8A96E)" }} />
          <span className="text-[9px] tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── COLECCIÓN / DROP ACTUAL ── */}
      <section id="coleccion" style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              {/* Gold bar */}
              <div className="mx-auto mb-5" style={{ width: "32px", height: "1px", backgroundColor: "#C8A96E" }} />
              <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: "#C8A96E" }}>Drop Actual</p>
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F7F5F1" }}>
                Piezas disponibles
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
              {products.map(p => <ProductCard key={p.id} product={p} />)}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mt-12">
              <p className="text-xs mb-5" style={{ color: "rgba(247,245,241,0.35)", letterSpacing: "0.05em" }}>
                Cada pieza es única · Stock limitado · Envíos a toda Puerto Rico
              </p>
              <a href={wa} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold tracking-widest uppercase transition-all"
                style={{ border: "1px solid rgba(200,169,110,0.4)", color: "#C8A96E" }}>
                Consultar por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SOBRE RYA ── */}
      <section style={{ backgroundColor: "#141414", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
        <div className="mx-auto max-w-5xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-5" style={{ width: "32px", height: "1px", backgroundColor: "#C8A96E" }} />
            <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: "#C8A96E" }}>
              Sobre RYA
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F7F5F1" }}>
              La primera marca<br />thrift curada de PR
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm leading-relaxed mb-4" style={{ color: "rgba(247,245,241,0.55)" }}>
              RYA Shop nació de una convicción: que vestir bien y vivir conscientemente no son cosas opuestas. Somos la primera marca de ropa de segunda mano curada de Puerto Rico.
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm leading-relaxed mb-8" style={{ color: "rgba(247,245,241,0.55)" }}>
              Cada pieza es seleccionada a mano — por su calidad, su historia y su singularidad. Nada está aquí por accidente. Lujo sin culpa, estilo con propósito.
            </motion.p>
            <motion.div variants={stagger} className="flex flex-col gap-3">
              {[
                { label: "Sostenibilidad", desc: "Cada prenda vendida es una menos en el vertedero." },
                { label: "Curaduría", desc: "Seleccionamos cada pieza con criterio de boutique." },
                { label: "Orgullo Boricua", desc: "Nacimos en PR. Crecemos en PR." },
              ].map(v => (
                <motion.div key={v.label} variants={fadeUp} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0" style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C8A96E", display: "block" }} />
                  <div>
                    <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#C8A96E" }}>{v.label}</span>
                    <span className="text-xs ml-2" style={{ color: "rgba(247,245,241,0.4)" }}>{v.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hanger decorative */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden md:flex items-center justify-center"
            style={{ color: "#C8A96E", opacity: 0.15, height: "300px" }}
          >
            <div style={{ width: "220px", height: "220px" }}>
              <HangerIcon />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CÓMO COMPRAR ── */}
      <section style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
        <div className="mx-auto max-w-5xl px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="mx-auto mb-5" style={{ width: "32px", height: "1px", backgroundColor: "#C8A96E" }} />
              <p className="text-xs font-medium tracking-[0.3em] uppercase mb-3" style={{ color: "#C8A96E" }}>Proceso</p>
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F7F5F1" }}>
                Cómo comprar
              </h2>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { num: "01", title: "Encuentra tu pieza", desc: "Explora el drop actual o síguenos en Instagram para ver los nuevos arrivals." },
                { num: "02", title: "Escríbenos", desc: "Mándanos un DM a @rya.shop2025 o por WhatsApp. Te respondemos rápido." },
                { num: "03", title: "Recibe en tu puerta", desc: "Coordinamos el pago y enviamos por USPS a toda Puerto Rico." },
              ].map(step => (
                <motion.div key={step.num} variants={fadeUp} className="text-center">
                  <p className="text-5xl font-medium mb-4" style={{ fontFamily: "var(--font-cormorant), serif", color: "rgba(200,169,110,0.2)" }}>
                    {step.num}
                  </p>
                  <div className="mx-auto mb-4" style={{ width: "24px", height: "1px", backgroundColor: "#C8A96E" }} />
                  <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "#F7F5F1" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(247,245,241,0.45)" }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INSTAGRAM BANNER ── */}
      <section style={{ backgroundColor: "#141414", borderTop: "1px solid rgba(200,169,110,0.12)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mx-auto mb-6" style={{ width: "32px", height: "1px", backgroundColor: "#C8A96E" }} />
            <motion.p variants={fadeUp} className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: "#C8A96E" }}>
              Síguenos
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="text-5xl md:text-6xl italic mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif", color: "#F7F5F1" }}
            >
              @rya.shop2025
            </motion.h3>
            <motion.p variants={fadeUp} className="text-sm mb-8" style={{ color: "rgba(247,245,241,0.4)" }}>
              Nuevos drops todas las semanas · Behind the scenes · Pop ups en San Juan
            </motion.p>
            <motion.a
              variants={fadeUp}
              href={ig}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold tracking-widest uppercase transition-all"
              style={{ border: "1px solid rgba(200,169,110,0.45)", color: "#C8A96E" }}
            >
              Ver en Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ backgroundColor: "#C8A96E" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mx-auto mb-6" style={{ width: "32px", height: "1px", backgroundColor: "rgba(13,13,13,0.3)" }} />
          <h3 className="text-4xl md:text-5xl italic mb-3" style={{ fontFamily: "var(--font-cormorant), serif", color: "#0D0D0D" }}>
            ¿Lista para vestir consciente?
          </h3>
          <p className="text-sm mb-10" style={{ color: "rgba(13,13,13,0.55)" }}>
            Envíos a toda Puerto Rico · USPS · Pago por transferencia
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="px-10 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all"
              style={{ backgroundColor: "#0D0D0D", color: "#C8A96E" }}>
              WhatsApp
            </a>
            <a href="mailto:shopatrya@gmail.com"
              className="px-10 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all"
              style={{ border: "1px solid rgba(13,13,13,0.4)", color: "#0D0D0D" }}>
              shopatrya@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER MARCA ── */}
      <div className="text-center py-6" style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(200,169,110,0.08)" }}>
        <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(200,169,110,0.25)" }}>
          RYA Shop · Puerto Rico · "Viste bien. Viste consciente. Viste RYA."
        </p>
      </div>

    </div>
  );
}
