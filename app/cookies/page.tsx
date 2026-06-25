import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies provisional de Idea Forge Studio.",
};

export default function CookiesPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Política de Cookies"
      intro="Qué cookies utiliza este sitio durante la fase de lanzamiento."
      updated="junio de 2026"
    >
      <h2>1. Uso de cookies</h2>
      <p>
        Actualmente esta web <strong>no utiliza cookies de análisis ni de
        marketing</strong>, ni cookies de seguimiento de terceros.
      </p>

      <h2>2. Cookies técnicas</h2>
      <p>
        Solo podrían existir <strong>cookies técnicas imprescindibles</strong>
        {" "}para el funcionamiento del sitio, en caso de que las hubiera. Este
        tipo de cookies están exentas del deber de consentimiento.
      </p>

      <h2>3. Si en el futuro añadimos analítica</h2>
      <p>
        Si más adelante incorporamos herramientas de medición o de terceros,
        actualizaremos esta política y, cuando la ley lo requiera, solicitaremos
        tu consentimiento previo.
      </p>

      <h2>4. Contacto</h2>
      <p>
        Si tienes dudas sobre esta política, escríbenos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
