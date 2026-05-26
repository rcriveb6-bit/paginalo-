"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GoldDivider from "@/components/rya/ui/GoldDivider";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/rya/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/rya/admin");
        router.refresh();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center dot-texture"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="w-full max-w-sm px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6" style={{ fontFamily: "var(--font-title)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)" }}>
              <path d="M12 4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2" /><path d="M12 8L3 17h18L12 8z" />
            </svg>
            <span className="text-xl tracking-widest uppercase" style={{ color: "var(--color-cream)", letterSpacing: "0.3em" }}>RYA</span>
          </div>
          <GoldDivider width="narrow" className="mx-auto mb-4" />
          <h1 className="font-normal text-2xl" style={{ fontFamily: "var(--font-title)", color: "var(--color-cream)" }}>
            Panel Admin
          </h1>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              background: "var(--color-dark-surface)",
              border: `1px solid ${error ? "#e74c3c" : "rgba(200,169,110,0.3)"}`,
              color: "var(--color-cream)",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              padding: "12px 16px",
              width: "100%",
              outline: "none",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = error ? "#e74c3c" : "rgba(200,169,110,0.3)")}
          />
          {error && (
            <p className="text-xs" style={{ color: "#e74c3c", fontFamily: "var(--font-body)" }}>
              Contraseña incorrecta.
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn-gold px-6 py-3.5 text-xs w-full cursor-pointer disabled:opacity-40"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
