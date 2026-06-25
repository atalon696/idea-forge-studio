import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Si tu empresa tiene un problema que crees que puede resolverse con software, escríbenos.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos"
        intro="Si tu empresa tiene un problema que crees que puede resolverse mediante software, estaremos encantados de escucharte."
      />

      <section className="pb-24 pt-4 md:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-steel-700/60 bg-forge-600 p-10 md:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(500px 360px at 50% 120%, rgba(245,97,2,0.18), transparent 70%)",
                }}
              />
              <div className="relative max-w-xl">
                <p className="font-display text-2xl font-light leading-relaxed text-steel-100 md:text-3xl">
                  Cuéntanos qué necesitas. Lo leemos nosotros —no un comercial— y
                  te respondemos con una valoración honesta.
                </p>

                <div className="mt-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-molten">
                    Escríbenos
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 inline-block font-display text-xl text-steel-100 transition-colors hover:text-molten-spark md:text-2xl"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="mt-9">
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(
                      "Consulta de proyecto · Idea Forge Studio",
                    )}`}
                    className="group inline-flex items-center gap-2 rounded-sm bg-grad-molten px-7 py-3.5 font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-white shadow-molten transition-all duration-200 hover:-translate-y-0.5 hover:shadow-molten-lg"
                  >
                    Escribir un correo
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
