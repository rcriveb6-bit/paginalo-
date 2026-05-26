"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Producto } from "@/lib/rya/types";

interface ProductFormProps {
  producto?: Producto;
}

const ESTADOS = ["Excelente", "Como nuevo", "Bueno", "Aceptable"];
const CATEGORIAS = ["mujer", "hombre", "accesorios"];

export default function ProductForm({ producto }: ProductFormProps) {
  const router = useRouter();
  const isEdit = !!producto;

  const [form, setForm] = useState({
    nombre: producto?.nombre ?? "",
    precio: String(producto?.precio ?? ""),
    talla: producto?.talla ?? "",
    categoria: producto?.categoria ?? "mujer",
    estado: producto?.estado ?? "Excelente",
    descripcion: producto?.descripcion ?? "",
    medidas: producto?.medidas ?? "",
    stock: String(producto?.stock ?? "1"),
    destacado: producto?.destacado ?? false,
    activo: producto?.activo ?? true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [fotos, setFotos] = useState<string[]>(producto?.fotos_url ?? []);

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

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingPhoto(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/rya/admin/productos/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) setFotos((prev) => [...prev, data.url]);
    } catch {
      setError("Error subiendo foto");
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const body = {
        ...form,
        precio: parseFloat(form.precio),
        stock: parseInt(form.stock),
        fotos_url: fotos,
      };
      const url = isEdit ? `/api/rya/admin/productos?id=${producto!.id}` : "/api/rya/admin/productos";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        router.push("/rya/admin");
        router.refresh();
      } else {
        const d = await res.json();
        setError(d.error ?? "Error guardando producto");
      }
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("¿Eliminar este producto?")) return;
    setLoading(true);
    try {
      await fetch(`/api/rya/admin/productos?id=${producto!.id}`, { method: "DELETE" });
      router.push("/rya/admin");
      router.refresh();
    } catch {
      setError("Error eliminando producto");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
      {/* Nombre */}
      <div>
        <label style={labelStyle}>Nombre *</label>
        <input
          type="text"
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          placeholder="Ej: Blazer Vintage Camel"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      {/* Precio + Talla */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Precio ($) *</label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={form.precio}
            onChange={(e) => setForm({ ...form, precio: e.target.value })}
            placeholder="35"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Talla</label>
          <input
            type="text"
            value={form.talla}
            onChange={(e) => setForm({ ...form, talla: e.target.value })}
            placeholder="M, L, 28..."
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
          />
        </div>
      </div>

      {/* Categoría + Estado */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Categoría</label>
          <select
            value={form.categoria}
            onChange={(e) => setForm({ ...form, categoria: e.target.value as "mujer" | "hombre" | "accesorios" })}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            {CATEGORIAS.map((c) => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Estado</label>
          <select
            value={form.estado}
            onChange={(e) => setForm({ ...form, estado: e.target.value })}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            {ESTADOS.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>
      </div>

      {/* Stock */}
      <div>
        <label style={labelStyle}>Stock</label>
        <input
          type="number"
          min="0"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          style={{ ...inputStyle, maxWidth: "120px" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      {/* Descripción */}
      <div>
        <label style={labelStyle}>Descripción</label>
        <textarea
          rows={4}
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
          placeholder="Descripción de la prenda..."
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      {/* Medidas */}
      <div>
        <label style={labelStyle}>Medidas</label>
        <input
          type="text"
          value={form.medidas}
          onChange={(e) => setForm({ ...form, medidas: e.target.value })}
          placeholder="Hombros 42cm · Largo 68cm · Busto 96cm"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
        />
      </div>

      {/* Fotos */}
      <div>
        <label style={labelStyle}>Fotos ({fotos.length})</label>
        <div className="flex gap-3 flex-wrap mb-3">
          {fotos.map((url, i) => (
            <div key={i} className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`foto ${i + 1}`} className="w-20 h-24 object-cover" style={{ border: "1px solid rgba(200,169,110,0.3)" }} />
              <button
                type="button"
                onClick={() => setFotos(fotos.filter((_, j) => j !== i))}
                className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs cursor-pointer"
                style={{ background: "#e74c3c", color: "white", borderRadius: "50%" }}
              >×</button>
            </div>
          ))}
        </div>
        <label
          className="cursor-pointer inline-flex items-center gap-2 text-xs px-4 py-2.5"
          style={{ border: "1px dashed rgba(200,169,110,0.4)", color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
        >
          <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
          {uploadingPhoto ? "Subiendo..." : "+ Agregar foto"}
        </label>
      </div>

      {/* Toggles */}
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.destacado}
            onChange={(e) => setForm({ ...form, destacado: e.target.checked })}
            style={{ accentColor: "var(--color-gold)" }}
          />
          <span className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>Destacado en homepage</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.activo}
            onChange={(e) => setForm({ ...form, activo: e.target.checked })}
            style={{ accentColor: "var(--color-gold)" }}
          />
          <span className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>Activo (visible en catálogo)</span>
        </label>
      </div>

      {error && <p className="text-xs" style={{ color: "#e74c3c", fontFamily: "var(--font-body)" }}>{error}</p>}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="btn-gold px-6 py-3 text-xs cursor-pointer disabled:opacity-40"
        >
          {loading ? "Guardando..." : isEdit ? "Guardar cambios" : "Crear producto"}
        </button>
        {isEdit && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="text-xs px-4 py-3 cursor-pointer transition-colors"
            style={{ border: "1px solid rgba(231,76,60,0.4)", color: "#e74c3c", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Eliminar
          </button>
        )}
      </div>
    </form>
  );
}
