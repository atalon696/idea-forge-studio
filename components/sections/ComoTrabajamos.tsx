import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Analizamos",
    detail:
      "Empezamos por entender tu problema y cómo trabaja tu empresa de verdad. No proponemos tecnología hasta saber qué hace falta.",
  },
  {
    n: "02",
    title: "Diseñamos",
    detail:
      "Definimos la solución a medida: qué construir, cómo encaja en tus procesos y por dónde empezar para ver resultados pronto.",
  },
  {
    n: "03",
    title: "Construimos",
    detail:
      "Desarrollamos la solución, la ponemos en marcha contigo y te acompañamos después. El software es tuyo: puedes cambiarlo, ampliarlo y llevártelo. Sin cajas negras.",
  },
];

export function ComoTrabajamos() {
  return (
    <section className="border-y border-steel-700/50 bg-forge-900 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="No desarrollamos por desarrollar"
          intro="Analizamos el problema, diseñamos la solución y la construimos. Un proceso simple, sin promesas que no podamos cumplir."
        />
        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-xl border border-steel-700/60 bg-steel-700/40 md:grid-cols-3">
          {steps.map((s) => (
            <RevealItem key={s.n}>
              <div className="h-full bg-forge-800 p-8">
                <span className="font-mono text-sm text-molten">{s.n}</span>
                <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-[0.04em] text-steel-100">
                  {s.title}
                </h3>
                <p className="mt-3 text-steel-300">{s.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
