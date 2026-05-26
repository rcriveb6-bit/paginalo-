"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/rya/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--color-dark-surface)",
    border: "1px solid rgba(200,169,110,0.3)",
    color: "var(--color-cream)",
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    color: "var(--color-slate)",
    fontFamily: "var(--font-body)",
    fontSize: "0.65rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label style={labelStyle}>Nombre</label>
        <input
          type="text"
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          placeholder="Tu nombre"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      <div>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="tu@email.com"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      <div>
        <label style={labelStyle}>Mensaje</label>
        <textarea
          required
          rows={5}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          placeholder="¿En qué podemos ayudarte?"
          style={{ ...inputStyle, resize: "vertical" as const }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      {status === "success" && (
        <p className="text-sm" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}>
          ¡Mensaje enviado! Te responderemos pronto.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm" style={{ color: "#e74c3c", fontFamily: "var(--font-body)" }}>
          Hubo un error. Intenta de nuevo o escríbenos directamente a shopatrya@gmail.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold px-6 py-3.5 text-xs w-full cursor-pointer disabled:opacity-40"
      >
        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}
