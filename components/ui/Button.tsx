import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-[0.08em] rounded-sm transition-all duration-200 focus-visible:outline-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "text-sm px-6 py-3",
  lg: "text-[15px] px-7 py-3.5",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-grad-molten shadow-molten hover:-translate-y-0.5 hover:shadow-molten-lg",
  secondary:
    "text-steel-100 bg-forge-600 border border-steel-700 hover:border-molten hover:text-molten-spark",
  ghost: "text-steel-300 hover:text-molten-spark",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  arrow = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const content = (
    <>
      {children}
      {arrow && (
        <span className="font-mono transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  const classes = `group ${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
