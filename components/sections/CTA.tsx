import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CTA({
  title = "¿Te suena alguno de estos problemas?",
  subtitle = "Cuéntanoslo sin compromiso. Lo leemos nosotros, no un comercial, y te decimos con sinceridad si podemos ayudarte.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-molten-deep/50 bg-forge-700 px-8 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(500px 400px at 50% 120%, rgba(245,97,2,0.28), rgba(184,71,10,0.06) 45%, transparent 72%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold uppercase tracking-[0.02em] sm:text-4xl md:text-5xl md:leading-[1.05]">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-steel-300">{subtitle}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button href="/contacto" size="lg" arrow>
                  Cuéntanos qué necesitas
                </Button>
                <Button href="/servicios" size="lg" variant="secondary">
                  Ver qué hacemos
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
