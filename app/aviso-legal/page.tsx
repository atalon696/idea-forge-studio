import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal provisional de Idea Forge Studio.",
};

export default function AvisoLegalPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Aviso Legal"
      intro="Información sobre el estado actual del proyecto y el uso de este sitio web."
      updated="junio de 2026"
    >
      <h2>1. Proyecto en fase de lanzamiento</h2>
      <p>
        IDEA FORGE STUDIO es un proyecto que actualmente se encuentra en{" "}
        <strong>fase de lanzamiento</strong>. A día de hoy no existe todavía una
        sociedad constituida ni una actividad comercial iniciada de forma
        permanente.
      </p>
      <p>
        Por transparencia, preferimos indicarlo con claridad antes que publicar
        información jurídica que aún no es válida. La{" "}
        <strong>información legal definitiva</strong> (datos identificativos del
        titular, forma jurídica e identificación fiscal) se publicará en cuanto la
        actividad empresarial quede formalmente constituida.
      </p>

      <h2>2. Objeto del sitio</h2>
      <p>
        Esta web tiene <strong>carácter exclusivamente informativo</strong>. Su
        finalidad es presentar el proyecto y los servicios de desarrollo de
        software que pretende ofrecer. No constituye una oferta comercial
        vinculante.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y la navegación por este sitio implican la aceptación de la
        información aquí recogida. El usuario se compromete a hacer un uso
        adecuado de los contenidos y a no emplearlos con fines ilícitos o lesivos
        para terceros.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos de este sitio (textos, diseño, logotipo y elementos
        gráficos) pertenecen al promotor del proyecto o a terceros que han
        autorizado su uso. Queda prohibida su reproducción sin autorización
        expresa.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Para cualquier consulta sobre el proyecto puedes escribir a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
