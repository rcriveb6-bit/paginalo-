import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

async function isAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get("rya_admin_session");
  return session?.value === process.env.ADMIN_SESSION_TOKEN;
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await isAuthenticated();
  if (!auth) redirect("/rya/admin/login");

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      {/* Admin nav */}
      <nav
        className="sticky top-0 z-40 px-6 h-14 flex items-center justify-between"
        style={{ background: "var(--color-dark-surface)", borderBottom: "1px solid rgba(200,169,110,0.2)" }}
      >
        <div className="flex items-center gap-6">
          <span className="text-sm tracking-widest uppercase" style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)", letterSpacing: "0.2em", fontSize: "0.7rem" }}>
            RYA Admin
          </span>
          <div className="hidden sm:flex items-center gap-4">
            {[
              { href: "/rya/admin", label: "Dashboard" },
              { href: "/rya/admin/productos/nuevo", label: "Nuevo Producto" },
              { href: "/rya/admin/eventos/nuevo", label: "Nuevo Evento" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-slate)")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/rya" className="text-xs" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            ← Ver web
          </Link>
          <form action="/api/rya/admin/auth" method="POST">
            <input type="hidden" name="action" value="logout" />
            <button type="submit" className="text-xs cursor-pointer" style={{ color: "var(--color-slate)", fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Salir
            </button>
          </form>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </div>
    </div>
  );
}
