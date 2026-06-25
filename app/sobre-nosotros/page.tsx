import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "Un estudio de desarrollo de software a medida. Hablas directamente con quien diseña y programa.",
};

const principles = [
  {
    title: "Entender antes de construir",
    detail:
      "No empezamos por la tecnología. Empezamos por tu problema y por cómo trabaja tu empresa de verdad.",
  },
  {
    title: "Hablas con quien construye",
    detail:
      "Sin capas de comerciales ni intermediarios. Tratas directamente con las personas que diseñan y programan tu solución.",
  },
  {
    title: "El software es tuyo",
    detail:
      "Te entregamos un software claro y bien hecho. Puedes revisarlo, cambiarlo y llevártelo cuando quieras. Sin cajas negras ni dependencias ocultas.",
  },
  {
    title: "Honestidad antes que humo",
    detail:
      "Si algo no se puede hacer, o no merece la pena, te lo decimos. Preferimos un no honesto a un sí vacío.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Estudio"
        title="Un estudio de desarrollo de software"
        intro="Resolvemos problemas reales construyendo software a medida. Somos un equipo pequeño y directo: hablas con las mismas personas que diseñan y programan."
      />

      <section className="py-12 md:py-20">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-display text-2xl font-light leading-relaxed text-steel-100 md:text-3xl">
                No desarrollamos software por desarrollar. Analizamos un problema,
                diseñamos la solución y{" "}
                <span className="text-molten-gradient">la construimos.</span>
              </p>
              <p className="mt-6 text-lg text-steel-300">
                Cada empresa tiene sus procesos, sus reglas y sus
                particularidades. Por eso no creemos en las plantillas: creemos en
                adaptar el software a cómo trabajas tú. Y cuando la herramienta que
                necesitas no existe, la construimos. Para demostrar lo que sabemos
                hacer, también diseñamos y mantenemos nuestros propios productos,
                Luna y Forge Route.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Cómo somos"
            title="Cuatro cosas que puedes esperar"
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((v, i) => (
              <RevealItem key={v.title}>
                <div className="h-full rounded-xl border border-steel-700/60 bg-forge-600 p-8">
                  <span className="font-mono text-sm text-molten">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-steel-100">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-steel-300">{v.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTA
        title="¿Lo vemos juntos?"
        subtitle="Cuéntanos qué necesitas. Lo leemos nosotros y te respondemos con sinceridad."
      />
    </>
  );
}
