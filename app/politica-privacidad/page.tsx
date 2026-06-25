import type { Metadata } from "next";
import { LegalShell } from "@/components/sections/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad provisional de Idea Forge Studio.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Política de Privacidad"
      intro="Cómo tratamos los datos personales en relación con este sitio web durante la fase de lanzamiento."
      updated="junio de 2026"
    >
      <h2>1. Web de carácter informativo</h2>
      <p>
        Esta web tiene <strong>únicamente carácter informativo</strong>.
        Actualmente <strong>no incluye formularios de contacto</strong> ni ningún
        otro mecanismo que recoja datos personales a través del sitio, y{" "}
        <strong>no se recogen datos personales de forma automática</strong>.
      </p>

      <h2>2. Único medio de contacto</h2>
      <p>
        El único medio de contacto es el correo electrónico:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>3. Datos facilitados por correo electrónico</h2>
      <p>
        Los datos que nos facilites voluntariamente al escribirnos (tu dirección
        de correo, tu nombre y el contenido de tu mensaje) se utilizarán{" "}
        <strong>únicamente para responder a la consulta realizada</strong>. No se
        emplean para envíos comerciales no solicitados ni para ninguna otra
        finalidad.
      </p>

      <h2>4. Conservación</h2>
      <p>
        Conservamos la comunicación durante el tiempo necesario para atender tu
        consulta. Si no deseas que conservemos tu mensaje, puedes solicitarlo en
        la misma dirección de correo.
      </p>

      <h2>5. Información definitiva</h2>
      <p>
        IDEA FORGE STUDIO se encuentra en fase de lanzamiento. Cuando la actividad
        quede formalmente constituida, publicaremos la política de privacidad
        definitiva con la identificación completa del responsable del
        tratamiento. Si en el futuro se añaden formularios u otras formas de
        recogida de datos, esta política se actualizará antes de activarlos.
      </p>
    </LegalShell>
  );
}
