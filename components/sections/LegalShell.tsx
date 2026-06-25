import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export function LegalShell({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="pb-24 pt-4 md:pb-32">
        <Container>
          <div className="legal max-w-3xl">
            <div className="rounded-lg border border-molten-deep/40 bg-molten/5 p-4 text-sm text-steel-300">
              <strong className="text-steel-100">Documentación provisional.</strong>{" "}
              IDEA FORGE STUDIO se encuentra en fase de lanzamiento. Esta página
              es temporal y se sustituirá por su versión definitiva cuando la
              actividad empresarial quede formalmente constituida. Última
              actualización: {updated}.
            </div>
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
