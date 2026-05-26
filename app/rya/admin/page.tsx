import Link from "next/link";
import { getProductos, getEventos } from "@/lib/rya/queries";
import GoldDivider from "@/components/rya/ui/GoldDivider";

export const metadata = { title: "Admin — RYA Shop" };

export default async function AdminDashboard() {
  const [productos, eventos] = await Promise.all([getProductos(), getEventos()]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-normal" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)", fontSize: "2.5rem" }}>
          Dashboard
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
          Gestiona tu catálogo y eventos desde aquí.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Productos activos", value: productos.length },
          { label: "Piezas en stock", value: productos.filter(p => p.stock > 0).length },
          { label: "Destacados", value: productos.filter(p => p.destacado).length },
          { label: "Próximos eventos", value: eventos.length },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-5"
            style={{ border: "1px solid rgba(200,169,110,0.2)", background: "var(--color-dark-surface)" }}
          >
            <p className="text-3xl font-normal mb-1" style={{ fontFamily: "var(--font-title)", color: "var(--color-gold)" }}>
              {stat.value}
            </p>
            <p className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <GoldDivider className="mb-8" />

      {/* Productos */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-normal text-xl" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)" }}>
            Productos
          </h2>
          <Link href="/rya/admin/productos/nuevo" className="btn-gold px-4 py-2 text-xs">
            + Nuevo
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(200,169,110,0.2)" }}>
                {["Nombre", "Precio", "Talla", "Categoría", "Estado", "Stock", ""].map((h) => (
                  <th key={h} className="text-left py-3 px-2 text-xs uppercase tracking-widest"
                    style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.1em", fontWeight: 400 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr
                  key={p.id}
                  style={{ borderBottom: "1px solid rgba(200,169,110,0.1)" }}
                >
                  <td className="py-3 px-2" style={{ color: "var(--color-cream)", fontFamily: "var(--font-body)" }}>
                    {p.nombre}
                  </td>
                  <td className="py-3 px-2" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}>
                    ${p.precio}
                  </td>
                  <td className="py-3 px-2" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                    {p.talla ?? "–"}
                  </td>
                  <td className="py-3 px-2 capitalize" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                    {p.categoria ?? "–"}
                  </td>
                  <td className="py-3 px-2" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                    {p.estado}
                  </td>
                  <td className="py-3 px-2">
                    <span
                      className="text-xs px-2 py-0.5"
                      style={{
                        background: p.stock > 0 ? "rgba(200,169,110,0.15)" : "rgba(231,76,60,0.15)",
                        color: p.stock > 0 ? "var(--color-gold)" : "#e74c3c",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {p.stock}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <Link
                      href={`/rya/admin/productos/${p.id}`}
                      className="text-xs transition-colors"
                      style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}
                    >
                      Editar →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Eventos */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-normal text-xl" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)" }}>
            Eventos
          </h2>
          <Link href="/rya/admin/eventos/nuevo" className="btn-gold px-4 py-2 text-xs">
            + Nuevo
          </Link>
        </div>

        {eventos.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
            No hay eventos activos.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {eventos.map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between p-4"
                style={{ border: "1px solid rgba(200,169,110,0.15)", background: "var(--color-dark-surface)" }}
              >
                <div>
                  <p style={{ color: "var(--color-cream)", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>{e.titulo}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                    {new Date(e.fecha + "T12:00:00").toLocaleDateString("es-PR", { year: "numeric", month: "long", day: "numeric" })}
                    {e.ubicacion && ` · ${e.ubicacion}`}
                  </p>
                </div>
                <Link
                  href={`/rya/admin/eventos/${e.id}`}
                  className="text-xs"
                  style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)" }}
                >
                  Editar →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
