import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const problemas = [
  {
    title: "Procesos manuales que consumen demasiado tiempo",
    detail:
      "Tareas que tu equipo hace a mano y que cada semana se llevan horas que podríais dedicar a otra cosa.",
  },
  {
    title: "Información repartida entre varios Excel",
    detail:
      "Datos sueltos en hojas de cálculo, sin una única versión fiable que todos consulten.",
  },
  {
    title: "Aplicaciones que no se comunican entre sí",
    detail:
      "Programas que no se entienden y te obligan a copiar y pegar la misma información de un sitio a otro.",
  },
  {
    title: "Una herramienta que necesitas y no existe",
    detail:
      "Has buscado un software para tu caso concreto y en el mercado no hay nada que encaje de verdad.",
  },
  {
    title: "Tareas repetitivas que se podrían automatizar",
    detail:
      "Acciones mecánicas que se repiten igual cada día: candidatas perfectas para que las haga el software.",
  },
  {
    title: "Procesos internos aún sin digitalizar",
    detail:
      "Gestiones que todavía dependen del papel, del correo o de que alguien se acuerde.",
  },
  {
    title: "Inteligencia artificial, pero solo si aporta",
    detail:
      "Quieres aprovechar la IA sin humo: únicamente donde resuelva algo real y te ahorre trabajo.",
  },
];

export function Problemas() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Nuestra tecnología al servicio de tu negocio"
          title="¿Con qué tipo de problemas podemos ayudarte?"
          intro="No necesitas saber qué tecnología hace falta. Si reconoces alguna de estas situaciones, es muy probable que podamos ayudarte."
        />

        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-xl border border-steel-700/60 bg-steel-700/40 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((p) => (
            <RevealItem key={p.title}>
              <div className="flex h-full gap-3 bg-forge-800 p-7">
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-molten"
                />
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug text-steel-100">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel-300">{p.detail}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10">
          <p className="font-display text-xl font-light text-steel-100 md:text-2xl">
            ¿Te suena alguno?{" "}
            <span className="text-molten-gradient">
              Cuéntanoslo y lo vemos juntos.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
