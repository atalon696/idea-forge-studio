import { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-xs font-medium uppercase tracking-ultra text-molten ${className}`}
    >
      {children}
    </span>
  );
}
