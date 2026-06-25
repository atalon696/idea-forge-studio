import { Hero } from "@/components/sections/Hero";
import { Problemas } from "@/components/sections/Problemas";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { ComoTrabajamos } from "@/components/sections/ComoTrabajamos";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problemas />
      <WhatWeBuild />
      <ComoTrabajamos />
      <ProductShowcase />
      <CTA />
    </>
  );
}
