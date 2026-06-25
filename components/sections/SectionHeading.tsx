import { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[0.03em] sm:text-4xl md:text-[44px] md:leading-[1.05]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 font-display text-lg font-light text-steel-300">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
