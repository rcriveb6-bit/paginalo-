interface GoldDividerProps {
  className?: string;
  width?: "full" | "narrow" | "wide";
}

export default function GoldDivider({ className = "", width = "full" }: GoldDividerProps) {
  const widthClass = width === "narrow" ? "w-16" : width === "wide" ? "w-48" : "w-full";

  return (
    <hr
      className={`border-0 border-t ${widthClass} ${className}`}
      style={{ borderColor: "var(--color-gold)", opacity: 0.6 }}
    />
  );
}
