import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { LunaMockup } from "@/components/product/LunaMockup";
import { ForgeRouteMockup } from "@/components/product/ForgeRouteMockup";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Luna, app de seguimiento menstrual con privacidad, y Forge Route, plataforma de optimización logística.",
};

const mockups: Record<string, React.ReactNode> = {
  luna: <LunaMockup />,
  "forge-route": <ForgeRouteMockup />,
};

export default function ProductosPage() {
  return (
    <>
      <PageHero
        eyebrow="Productos"
        title="Nuestros productos propios"
        intro="Una demostración de lo que sabemos hacer. Herramientas reales que diseñamos y mantenemos nosotros mismos."
      />

      <section className="py-12 md:py-16">
        <Container className="flex flex-col gap-8">
          {products.map((p) => (
            <Reveal key={p.slug}>
              <article
                id={p.slug}
                className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-steel-700/60 bg-forge-600"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.16] blur-3xl"
                  style={{ background: p.accent }}
                />
                <div className="relative grid gap-10 p-8 md:grid-cols-2 md:p-12">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-500">
                      {p.category} · {p.status}
                    </span>
                    <h2
                      className="mt-4 font-display text-5xl font-bold tracking-[0.02em] md:text-6xl"
                      style={{ color: p.accent }}
                    >
                      {p.name}
                    </h2>
                    <p className="mt-4 font-display text-xl text-steel-100">
                      {p.tagline}
                    </p>
                    <p className="mt-4 max-w-md text-steel-300">
                      {p.description}
                    </p>
                    {p.note && (
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-steel-500">
                        {p.note}
                      </p>
                    )}

                    <ul className="mt-7 flex flex-col gap-2.5">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2.5 text-steel-100"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rotate-45"
                            style={{ background: p.accent }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <p
                      className="mt-7 border-l-2 pl-4 text-sm italic text-steel-500"
                      style={{ borderColor: p.accent }}
                    >
                      {p.audience}
                    </p>

                    <RevealGroup className="mt-7 flex flex-col gap-px overflow-hidden rounded-lg border border-steel-700/60 bg-steel-700/40">
                      {p.features.map((f) => (
                        <RevealItem key={f.title}>
                          <div className="bg-forge-700 p-5">
                            <h3 className="font-display text-base font-semibold text-steel-100">
                              {f.title}
                            </h3>
                            <p className="mt-1.5 text-sm text-steel-300">
                              {f.detail}
                            </p>
                          </div>
                        </RevealItem>
                      ))}
                    </RevealGroup>

                    <Link
                      href={p.cta.href}
                      className="group mt-7 inline-flex items-center gap-2 rounded-sm bg-grad-molten px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-molten transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {p.cta.label}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>

                  <div className="self-start md:sticky md:top-24">
                    {mockups[p.slug]}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTA
        title="¿Hablamos de tu problema?"
        subtitle="Si te pasa algo parecido en tu empresa, cuéntanoslo. Lo vemos juntos y sin compromiso."
      />
    </>
  );
}
