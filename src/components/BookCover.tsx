import React from "react";
import Image from "next/image";

type BookCoverProps = {
  coverSrc: string; // the image to place on the book cover
  alt: string;
  width?: number;
  height?: number;
  baseSrc?: string; // the underlying book mockup
  // Inset (percentages of total width/height) for where the cover should sit on the base
  coverInsetPct?: { top: number; left: number; right: number; bottom: number };
  fit?: "cover" | "contain";
  coverBorderRadius?: number;
  className?: string;
  coverTransform?: string; // optional extra transforms to better match perspective
};

export default function BookCover({
  coverSrc,
  alt,
  width = 320,
  height = 440,
  baseSrc = "/istockphoto-466564401-612x612.jpg",
  coverInsetPct = { top: 11, left: 14, right: 22, bottom: 13 },
  fit = "cover",
  coverBorderRadius = 12,
  className = "",
  coverTransform,
}: BookCoverProps) {
  const insetStyle = {
    top: `${coverInsetPct.top}%`,
    left: `${coverInsetPct.left}%`,
    right: `${coverInsetPct.right}%`,
    bottom: `${coverInsetPct.bottom}%`,
  } as React.CSSProperties;

  return (
    <div className={`relative inline-block ${className}`} style={{ width, height }}>
      {/* Base 3D book mockup */}
      <div className="absolute inset-0">
        <Image src={baseSrc} alt="Book mockup" fill className="object-contain" priority />
      </div>

      {/* Cover overlay positioned over the front face area */}
      <div
        className="absolute overflow-hidden shadow-md"
        style={{
          ...insetStyle,
          borderRadius: coverBorderRadius,
          transform: coverTransform,
        }}
      >
        <Image
          src={coverSrc}
          alt={alt}
          fill
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>

      {/* Subtle shadow to anchor */}
      <div className="pointer-events-none absolute -bottom-2 left-4 right-6 h-4 rounded-full blur-md bg-black/15" />
    </div>
  );
}


