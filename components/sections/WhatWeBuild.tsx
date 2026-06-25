import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { services } from "@/lib/services";

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 stroke-molten"
      fill="none"
      strokeWidth="2.2"
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatWeBuild() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="¿Qué podemos construir para tu empresa?"
        />

        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-xl border border-steel-700/60 bg-steel-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <div className="flex h-full gap-3 bg-forge-800 p-7">
                <Check />
                <div>
                  <h3 className="font-display text-lg font-semibold text-steel-100">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-steel-300">{s.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10">
          <p className="max-w-2xl font-display text-xl font-light leading-relaxed text-steel-100 md:text-2xl">
            No creemos en adaptar las empresas al software.{" "}
            <span className="text-molten-gradient">
              Creemos en adaptar el software a las empresas.
            </span>{" "}
            Cada empresa es distinta. Cada solución también.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
