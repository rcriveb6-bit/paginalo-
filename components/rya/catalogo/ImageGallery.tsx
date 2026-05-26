"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  fotos: string[];
  nombre: string;
}

export default function ImageGallery({ fotos, nombre }: ImageGalleryProps) {
  const [active, setActive] = useState(0);

  if (fotos.length === 0) {
    return (
      <div
        className="w-full aspect-[3/4] flex items-center justify-center"
        style={{ background: "var(--color-warm-white)" }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)", opacity: 0.4 }}>
          <path d="M12 4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2" />
          <path d="M12 8L3 17h18L12 8z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-[3/4] overflow-hidden" style={{ background: "var(--color-warm-white)" }}>
        <Image
          src={fotos[active]}
          alt={`${nombre} — foto ${active + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {fotos.length > 1 && (
        <div className="flex gap-2">
          {fotos.map((foto, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative w-16 aspect-square overflow-hidden cursor-pointer transition-opacity"
              style={{
                border: `1px solid ${i === active ? "var(--color-gold)" : "transparent"}`,
                opacity: i === active ? 1 : 0.6,
              }}
            >
              <Image
                src={foto}
                alt={`${nombre} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
