import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 80% -10%, rgba(245,97,2,0.12), transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-blueprint opacity-30" />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1] tracking-[0.02em] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl font-display text-lg font-light text-steel-300 md:text-xl">
          {intro}
        </p>
      </Container>
    </section>
  );
}
