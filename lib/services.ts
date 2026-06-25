export type Service = {
  title: string;
  desc: string; // frase corta para la home
  when: string; // ¿en qué situación tiene sentido? (disparador de negocio)
  detail: string; // qué hacemos y qué resuelve, en lenguaje de negocio
};

export const services: Service[] = [
  {
    title: "Aplicaciones web",
    desc: "Plataformas y portales a medida, rápidos y fáciles de mantener.",
    when: "Cuando tu empresa necesita centralizar información dispersa o digitalizar un proceso que hoy vive en papel, correos o cabezas.",
    detail:
      "Creamos una plataforma a la que tu equipo accede desde el navegador, con toda la información en un único sitio fiable y siempre actualizado. Se acabó buscar el archivo correcto o preguntar quién tiene la última versión.",
  },
  {
    title: "Aplicaciones móviles",
    desc: "Pensadas para usarse de verdad, no solo para existir.",
    when: "Cuando el trabajo ocurre fuera de la oficina: comerciales en ruta, técnicos en campo, almacén o reparto.",
    detail:
      "Llevamos tus procesos al móvil para que tu equipo pueda registrar, consultar y actuar sobre la marcha, esté donde esté. La información llega al instante, sin esperar a volver al ordenador.",
  },
  {
    title: "Plataformas empresariales",
    desc: "Sistemas que sostienen la operación diaria de tu negocio.",
    when: "Cuando tu operativa diaria depende de un sistema que tiene que aguantar, crecer contigo y no fallar.",
    detail:
      "Construimos el sistema central sobre el que funciona tu negocio —pedidos, clientes, inventario, lo que necesites gestionar— pensado para tu forma de trabajar y preparado para crecer sin rehacerlo cada año.",
  },
  {
    title: "Automatización de procesos",
    desc: "Quitamos de tu equipo el trabajo repetitivo que hoy hace a mano.",
    when: "Cuando tu equipo pierde horas en tareas repetitivas que siempre se hacen igual: informes, traspasos de datos, avisos, comprobaciones.",
    detail:
      "Hacemos que esas tareas ocurran solas y sin errores. Tu equipo recupera tiempo para lo que de verdad aporta, y dejas de depender de que alguien se acuerde de hacerlas.",
  },
  {
    title: "Integraciones con sistemas existentes",
    desc: "Hacemos que las aplicaciones que ya usas se entiendan entre sí.",
    when: "Cuando usas varias aplicaciones que no comparten información y alguien tiene que copiar datos de una a otra.",
    detail:
      "Conectamos lo que ya tienes para que la información fluya sola entre tus aplicaciones. Menos copiar y pegar, menos errores y un único dato fiable en lugar de varias versiones.",
  },
  {
    title: "Herramientas internas",
    desc: "El software que tu empresa necesita y que no vende nadie.",
    when: "Cuando el software del mercado no se adapta a cómo trabajáis y acabáis forzando vuestra forma de trabajar para que encaje en él.",
    detail:
      "Construimos la herramienta a la medida de tu proceso real, no al revés. Solo lo que necesitas, como lo necesitas, sin pagar por funciones que nunca vas a usar.",
  },
  {
    title: "Inteligencia Artificial",
    desc: "La usamos solo cuando aporta de verdad.",
    when: "Cuando tienes datos o decisiones que se repiten y quieres que el software anticipe o proponga, no solo que guarde información.",
    detail:
      "Aplicamos inteligencia artificial únicamente donde aporta: anticipar una demanda, ordenar y clasificar información, ayudar a decidir. Y si en tu caso no aporta, te lo decimos con franqueza.",
  },
  {
    title: "Soluciones completamente personalizadas",
    desc: "Si tu necesidad no encaja en ninguna casilla, la construimos desde cero.",
    when: "Cuando tu necesidad no encaja en ninguna categoría y nadie te ofrece exactamente lo que buscas.",
    detail:
      "Partimos de tu problema concreto y diseñamos la solución desde cero, a tu medida. Es, de hecho, lo que más nos gusta hacer: cuando no existe la herramienta, la construimos.",
  },
];
