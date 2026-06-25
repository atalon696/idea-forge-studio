"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

/** Brasas incandescentes que ascienden de forma ambiental. */
export function EmberField({ count = 14 }: { count?: number }) {
  const reduce = useReducedMotion();

  const embers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 4,
        size: 2 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count],
  );

  if (reduce) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {embers.map((e) => (
        <span
          key={e.id}
          className="absolute bottom-0 rounded-full bg-molten animate-rise"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            opacity: e.opacity,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            boxShadow: "0 0 10px rgba(245,97,2,0.8)",
          }}
        />
      ))}
    </div>
  );
}
