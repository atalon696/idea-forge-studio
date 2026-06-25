export type Product = {
  slug: string;
  name: string;
  category: string;
  status: string;
  tagline: string;
  description: string;
  note?: string;
  audience: string;
  highlights: string[];
  features: { title: string; detail: string }[];
  accent: string;
  cta: { label: string; href: string };
};

export const products: Product[] = [
  {
    slug: "luna",
    name: "Luna",
    category: "Consumer · Salud digital",
    status: "En validación",
    tagline: "Tu ciclo, con elegancia y privacidad.",
    description:
      "Luna es una app de seguimiento menstrual con predicciones y privacidad por diseño. Actualmente está en fase de validación con usuarias reales, antes de su lanzamiento oficial.",
    audience:
      "Para personas que quieren entender su cuerpo sin renunciar a su privacidad.",
    accent: "#C77DFF",
    cta: { label: "Conocer Luna", href: "/contacto" },
    highlights: [
      "Predicciones que aprenden de ti",
      "Cifrado de extremo a extremo",
      "Tus datos no se venden",
    ],
    features: [
      {
        title: "Predicciones que aprenden",
        detail:
          "Anticipa fases y síntomas con un modelo que mejora cuanto más conoce tu ciclo.",
      },
      {
        title: "Privacidad por diseño",
        detail:
          "Cifrado de extremo a extremo. Los datos sensibles no se venden ni se comparten.",
      },
      {
        title: "Diseño que cuida",
        detail:
          "Una interfaz serena, pensada para acompañar, no para presionar ni alarmar.",
      },
    ],
  },
  {
    slug: "forge-route",
    name: "Forge Route",
    category: "Enterprise · Decisión logística",
    status: "Uso interno",
    tagline: "La decisión correcta para cada envío.",
    description:
      "Forge Route es un motor de decisión logística: determina automáticamente qué operador debe gestionar cada envío para minimizar costes y respetar las reglas de negocio. Lo desarrollamos inicialmente para resolver un problema real.",
    note: "Compatible con operadores como DSV, SEUR, TXT y otros.",
    audience:
      "Para equipos de logística cansados de decidir a mano qué agencia usar en cada envío.",
    accent: "#F56102",
    cta: { label: "Saber más", href: "/contacto" },
    highlights: [
      "Evalúa cada operador",
      "Aplica tus reglas de negocio",
      "Elige el coste mínimo válido",
    ],
    features: [
      {
        title: "Motor de decisión",
        detail:
          "Evalúa automáticamente qué operador debe realizar cada envío, expedición a expedición.",
      },
      {
        title: "Reglas personalizadas",
        detail:
          "Respeta las condiciones de cada agencia y las políticas internas: tarifas, límites de peso, restricciones y condiciones especiales.",
      },
      {
        title: "Optimización de costes",
        detail:
          "Elige siempre la opción más barata que cumple todas las restricciones.",
      },
      {
        title: "Integración",
        detail:
          "Se adapta a tus procesos existentes: Excel, ERPs y los sistemas que ya usas.",
      },
    ],
  },
];
