"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/liora", label: "Liora & Co.", sub: "Velas artesanales" },
  { href: "/rya", label: "RYA International", sub: "Consultoría" },
  { href: "/", label: "Páginalo", sub: "Agencia digital" },
];

export default function TabBar() {
  const pathname = usePathname();

  const activeColor = pathname === "/liora"
    ? "#C9A84C"
    : pathname === "/rya"
    ? "#C8A96E"
    : "#00B5B5";

  const bgColor = pathname === "/rya" ? "#0A0A0A" : "#FAF7F1";
  const textColor = pathname === "/rya" ? "#F0EBE1" : "#2C1A0E";
  const mutedColor = pathname === "/rya" ? "rgba(240,235,225,0.45)" : "rgba(44,26,14,0.45)";
  const borderColor = pathname === "/rya" ? "rgba(200,169,110,0.15)" : "#E8E0D4";

  return (
    <nav
      className="sticky top-0 z-50 w-full overflow-x-auto"
      style={{ backgroundColor: bgColor, borderBottom: `1px solid ${borderColor}` }}
    >
      <div className="flex items-stretch min-w-max mx-auto max-w-6xl px-6">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-start justify-center px-6 py-3.5 mr-2 transition-all relative"
              style={{ color: isActive ? activeColor : mutedColor }}
            >
              <span className="text-sm font-semibold whitespace-nowrap">{tab.label}</span>
              <span className="text-[10px] whitespace-nowrap" style={{ color: mutedColor }}>{tab.sub}</span>
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: activeColor }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
