import Image from "next/image";

export type LogoVariant = "hero" | "navbar" | "isotipo";

// Activos de marca reales, recortados del logo oficial (no recreados).
// Fondo transparente, acabado metálico y naranja conservados.
const ASSETS: Record<LogoVariant, { src: string; w: number; h: number }> = {
  hero: { src: "/logo-hero.png", w: 886, h: 513 },
  navbar: { src: "/logo-navbar.png", w: 1510, h: 235 },
  isotipo: { src: "/isotipo.png", w: 347, h: 401 },
};

export function Logo({
  variant = "navbar",
  className = "h-8 w-auto",
  priority = false,
  alt = "Idea Forge Studio",
}: {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  const a = ASSETS[variant];
  return (
    <Image
      src={a.src}
      alt={alt}
      width={a.w}
      height={a.h}
      priority={priority}
      sizes="(max-width: 768px) 60vw, 600px"
      className={className}
    />
  );
}
