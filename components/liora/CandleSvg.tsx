"use client";

interface CandleSvgProps {
  size?: "sm" | "md" | "lg";
  scent?: string;
  waxColor?: string;
  animationDelay?: number;
}

const sizes = {
  sm: { jar: 74, lid: 80, wick: 10, flame: 18 },
  md: { jar: 100, lid: 108, wick: 13, flame: 24 },
  lg: { jar: 120, lid: 130, wick: 16, flame: 30 },
};

export default function CandleSvg({ size = "md", scent = "LIORA", waxColor = "rgba(245,235,205,0.4)", animationDelay = 0 }: CandleSvgProps) {
  const s = sizes[size];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Flame */}
      <div className="flicker" style={{ width: s.flame, animationDelay: `${animationDelay}s` }}>
        <svg viewBox="0 0 30 44" fill="none" style={{ width: "100%" }}>
          <path d="M15 42C22 42 28 34 28 24C28 14 22 6 19 1C17 6 14 8 13 13C11 8 13 2 15 0C6 7 2 16 2 24C2 34 8 42 15 42Z" fill="#C9A84C" opacity="0.88" />
          <path d="M15 35C19 35 23 29 23 23C23 17 19 11 18 7C17.5 10 16 13 15 16C14 12 15 7 17 4C10 10 8 18 8 23C8 29 11 35 15 35Z" fill="#E8D280" />
          <path d="M15 28C18 28 20 24 20 21C20 17 18 12 17.5 9.5C17 12 16 14.5 15.5 17C15 14 16 11 17 9C12 14 10 18 10 21C10 24 12 28 15 28Z" fill="#FFFAE0" />
        </svg>
      </div>
      {/* Wick */}
      <div style={{ width: 2, height: s.wick, background: "#888" }} />
      {/* Jar */}
      <div style={{
        width: s.jar, height: s.jar,
        borderRadius: "5px 5px 3px 3px",
        border: "1px solid rgba(0,0,0,0.12)",
        background: "rgba(255,255,255,0.85)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "82%", background: waxColor, borderTop: "1px solid rgba(0,0,0,0.05)" }} />
        <div style={{
          position: "absolute", bottom: size === "sm" ? 9 : size === "md" ? 11 : 14,
          left: size === "sm" ? 5 : 8, right: size === "sm" ? 5 : 8,
          background: "#fff", border: "0.5px solid #000",
          padding: size === "sm" ? "3px" : "5px 4px",
        }}>
          <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: size === "sm" ? 6 : 8, fontWeight: 700, textAlign: "center", letterSpacing: "0.1em" }}>LIORA</div>
          <div style={{ fontSize: size === "sm" ? 5.5 : 7, textAlign: "center", color: "#555", letterSpacing: "0.04em" }}>{scent}</div>
        </div>
      </div>
      {/* Lid */}
      <div style={{ width: s.lid, height: size === "sm" ? 9 : 11, background: "linear-gradient(180deg,#E0D080,#B89830)", borderRadius: "2px 2px 0 0", marginBottom: 1 }} />
      {/* Base */}
      <div style={{ width: s.jar - 4, height: size === "sm" ? 5 : 7, background: "rgba(0,0,0,0.05)", borderRadius: "0 0 4px 4px" }} />
    </div>
  );
}
