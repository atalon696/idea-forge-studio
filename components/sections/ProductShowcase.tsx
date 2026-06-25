import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { LunaMockup } from "@/components/product/LunaMockup";
import { ForgeRouteMockup } from "@/components/product/ForgeRouteMockup";
import { products } from "@/lib/products";

const mockups: Record<string, React.ReactNode> = {
  luna: <LunaMockup />,
  "forge-route": <ForgeRouteMockup />,
};

export function ProductShowcase() {
  return (
    <section className="relative py-12 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 0%, rgba(245,97,2,0.06), transparent 60%)",
        }}
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Productos propios"
          title="También construimos lo nuestro"
          intro="Además de desarrollar software para nuestros clientes, también diseñamos y mantenemos nuestros propios productos. Creemos que la mejor forma de demostrar lo que sabemos hacer es construir herramientas reales."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.12}>
          {products.map((p) => (
            <RevealItem key={p.slug}>
              <article className="relative h-full overflow-hidden rounded-2xl border border-steel-700/60 bg-forge-600 p-8 md:p-9">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.16] blur-3xl"
                  style={{ background: p.accent }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-500">
                      {p.category}
                    </span>
                    <span className="rounded-full border border-steel-700 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-steel-300">
                      {p.status}
                    </span>
                  </div>
                  <h3
                    className="mt-2.5 font-display text-4xl font-bold tracking-[0.02em]"
                    style={{ color: p.accent }}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-1.5 font-display text-lg text-steel-100">
                    {p.tagline}
                  </p>
                  <p className="mt-3 max-w-[44ch] text-sm text-steel-300">
                    {p.description}
                  </p>
                  {p.note && (
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-steel-500">
                      {p.note}
                    </p>
                  )}

                  {/* Hechos verdaderos, sin métricas inventadas */}
                  <ul className="mt-6 flex flex-col gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-sm text-steel-100"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rotate-45"
                          style={{ background: p.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">{mockups[p.slug]}</div>

                  <div className="mt-7">
                    <Link
                      href={p.cta.href}
                      className="group inline-flex items-center gap-2 rounded-sm border border-steel-700 bg-forge-700 px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-steel-100 transition-colors hover:border-molten hover:text-molten-spark"
                    >
                      {p.cta.label}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
