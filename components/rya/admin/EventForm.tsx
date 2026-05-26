"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Evento } from "@/lib/rya/types";

interface EventFormProps {
  evento?: Evento;
}

export default function EventForm({ evento }: EventFormProps) {
  const router = useRouter();
  const isEdit = !!evento;

  const [form, setForm] = useState({
    titulo: evento?.titulo ?? "",
    fecha: evento?.fecha ?? "",
    hora_inicio: evento?.hora_inicio ?? "",
    hora_fin: evento?.hora_fin ?? "",
    ubicacion: evento?.ubicacion ?? "",
    descripcion: evento?.descripcion ?? "",
    activo: evento?.activo ?? true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputStyle = {
    background: "var(--color-bg)",
    border: "1px solid rgba(200,169,110,0.3)",
    color: "var(--color-cream)",
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    padding: "10px 14px",
    width: "100%",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    color: "var(--color-slate)",
    fontFamily: "var(--font-body)",
    fontSize: "0.65rem",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    display: "block",
    marginBottom: "6px",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const url = isEdit ? `/api/rya/admin/eventos?id=${evento!.id}` : "/api/rya/admin/eventos";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push("/rya/admin");
        router.refresh();
      } else {
        const d = await res.json();
        setError(d.error ?? "Error guardando evento");
      }
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("¿Eliminar este evento?")) return;
    setLoading(true);
    try {
      await fetch(`/api/rya/admin/eventos?id=${evento!.id}`, { method: "DELETE" });
      router.push("/rya/admin");
      router.refresh();
    } catch {
      setError("Error eliminando evento");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
      <div>
        <label style={labelStyle}>Título *</label>
        <input type="text" required value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} placeholder="Pop Up — Condado" style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label style={labelStyle}>Fecha *</label>
          <input type="date" required value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Hora inicio</label>
          <input type="text" value={form.hora_inicio} onChange={(e) => setForm({ ...form, hora_inicio: e.target.value })} placeholder="10:00 AM" style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Hora fin</label>
          <input type="text" value={form.hora_fin} onChange={(e) => setForm({ ...form, hora_fin: e.target.value })} placeholder="5:00 PM" style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Ubicación</label>
        <input type="text" value={form.ubicacion} onChange={(e) => setForm({ ...form, ubicacion: e.target.value })} placeholder="El Gancho, Condado, San Juan" style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      <div>
        <label style={labelStyle}>Descripción</label>
        <textarea rows={3} value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} placeholder="Detalles del evento..." style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={form.activo} onChange={(e) => setForm({ ...form, activo: e.target.checked })} style={{ accentColor: "var(--color-gold)" }} />
        <span className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>Evento activo (visible en la web)</span>
      </label>

      {error && <p className="text-xs" style={{ color: "#e74c3c", fontFamily: "var(--font-body)" }}>{error}</p>}

      <div className="flex items-center gap-4">
        <button type="submit" disabled={loading} className="btn-gold px-6 py-3 text-xs cursor-pointer disabled:opacity-40">
          {loading ? "Guardando..." : isEdit ? "Guardar cambios" : "Crear evento"}
        </button>
        {isEdit && (
          <button type="button" onClick={handleDelete} disabled={loading} className="text-xs px-4 py-3 cursor-pointer"
            style={{ border: "1px solid rgba(231,76,60,0.4)", color: "#e74c3c", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Eliminar
          </button>
        )}
      </div>
    </form>
  );
}
