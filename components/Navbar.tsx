"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-steel-700/60 bg-forge-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-6">
        <Link href="/" aria-label="Inicio">
          <Logo variant="navbar" priority className="h-8 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-mono text-[13px] uppercase tracking-[0.14em] transition-colors ${
                  active
                    ? "text-steel-100"
                    : "text-steel-500 hover:text-steel-100"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-molten" />
                )}
              </Link>
            );
          })}
          <Button href="/contacto" size="md" arrow>Hablemos</Button>
        </div>

        {/* Toggle móvil */}
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-steel-100 transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-steel-100 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-steel-100 transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-steel-700/60 bg-forge-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 font-display text-lg uppercase tracking-[0.06em] text-steel-100 transition-colors hover:bg-forge-600"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contacto" className="mt-3 w-full" arrow>Hablemos</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
