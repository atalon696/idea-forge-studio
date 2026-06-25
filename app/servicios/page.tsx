import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Qué podemos hacer por tu empresa y en qué situación tiene sentido cada cosa: aplicaciones, automatización, integraciones, herramientas internas e IA.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Qué hacemos"
        title="Lo que podemos hacer por tu empresa"
        intro="No te listamos tecnologías. Te explicamos en qué situación tiene sentido cada cosa que construimos, para que veas dónde encaja en tu negocio."
      />

      <section className="py-12 md:py-16">
        <Container>
          <RevealGroup className="grid gap-px overflow-hidden rounded-xl border border-steel-700/60 bg-steel-700/40 md:grid-cols-2">
            {services.map((s, i) => (
              <RevealItem key={s.title}>
                <article className="flex h-full flex-col bg-forge-800 p-8 md:p-10">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-molten">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-steel-700" />
                  </div>

                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-[0.01em] text-steel-100">
                    {s.title}
                  </h2>

                  <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-molten">
                    Cuándo tiene sentido
                  </p>
                  <p className="mt-2 font-display text-lg font-light leading-snug text-steel-100">
                    {s.when}
                  </p>

                  <p className="mt-5 text-steel-300">{s.detail}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-12">
            <div className="rounded-2xl border border-molten-deep/40 bg-forge-700 p-8 md:p-12">
              <p className="max-w-2xl font-display text-2xl font-light leading-relaxed text-steel-100 md:text-3xl">
                No creemos en adaptar las empresas al software.{" "}
                <span className="text-molten-gradient">
                  Creemos en adaptar el software a las empresas.
                </span>{" "}
                Cada empresa es distinta. Cada solución también.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTA
        title="¿Hablamos de tu caso?"
        subtitle="Cuéntanos el proceso o el problema, sin compromiso. Te respondemos con sinceridad y, si no somos la mejor opción, también te lo diremos."
      />
    </>
  );
}
