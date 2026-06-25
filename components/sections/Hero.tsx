"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EmberField } from "@/components/ui/EmberField";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 80% -10%, rgba(245,97,2,0.12), transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-30" />
      <EmberField count={7} />

      <motion.div
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.75 }}
        transition={{ duration: 1.1, delay: 0.3, ease }}
        className="absolute right-[-8%] top-[12%] h-[3px] w-2/3 origin-left rounded bg-grad-molten shadow-molten"
        style={{ transform: "rotate(-17deg)" }}
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <Eyebrow>Desarrollo de software a medida</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-6 max-w-[20ch] font-display text-4xl font-bold uppercase leading-[1.02] tracking-[0.02em] sm:text-5xl md:text-6xl lg:text-[68px]"
        >
          Construimos software a medida para resolver{" "}
          <span className="text-molten-gradient">problemas reales</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-8 max-w-[58ch] space-y-4 text-lg text-steel-300 md:text-xl"
        >
          <p className="font-display font-light">
            Cada empresa tiene procesos, reglas y necesidades distintas. Diseñamos
            y desarrollamos aplicaciones, plataformas e inteligencia artificial
            adaptadas a cada cliente.
          </p>
          <p className="font-display font-light text-steel-100">
            Si existe un problema, trabajamos contigo para encontrar la mejor
            solución. Y si no existe una herramienta para resolverlo, la
            construimos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/contacto" size="lg" arrow>
            Cuéntanos qué necesitas
          </Button>
          <Button href="/servicios" size="lg" variant="secondary">
            Ver qué hacemos
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
