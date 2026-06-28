# DECISIONS.md — Registro de decisiones del proyecto

> Este documento es la memoria histórica del proyecto. Registra las decisiones
> importantes: por qué se tomaron, qué alternativas existían y qué consecuencias
> tienen. No es un changelog ni un roadmap.
>
> **Regla:** Nunca eliminar entradas. Solo añadir o actualizar el estado.
> Las decisiones obsoletas o sustituidas deben marcarse como tal, no borrarse.
>
> **Sobre la verificabilidad:** Todas las decisiones aquí documentadas son
> deducibles del código fuente o han sido indicadas explícitamente. Las
> alternativas listadas son las opciones técnicas habituales en el ecosistema,
> no necesariamente deliberaciones documentadas.

---

## Formato de entrada

```
## DEC-XXX — Título de la decisión

**Fecha:** YYYY-MM-DD
**Estado:** Activa / Sustituida / Obsoleta
**Categoría:** Arquitectura / Diseño / Producto / Negocio / Infraestructura / Branding / Seguridad / UX

### Contexto
Situación en la que se tomó la decisión.

### Problema
Qué necesitaba resolverse.

### Alternativas consideradas
Opciones que existían (solo documentar si son verificables).

### Decisión
Qué se decidió hacer.

### Motivo
Por qué se eligió esta opción.

### Consecuencias
Qué implica mantener esta decisión en el tiempo.

### Impacto técnico
Archivos y sistemas afectados.

### Impacto funcional
Qué experimenta el usuario o el desarrollador.
```

---

## DEC-001 — Framework: Next.js 15 con App Router

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Arquitectura

### Contexto
Elección del framework principal para la web corporativa de Idea Forge Studio.

### Problema
Necesitamos un framework que genere páginas estáticas de alta calidad, con soporte
nativo para SEO (metadata API), rendimiento optimizado y un ecosistema estable.

### Alternativas consideradas
- Next.js con Pages Router (la versión anterior del mismo framework)
- Astro (orientado a sites de contenido estático)
- Remix (orientado a SSR y formularios)
- SvelteKit (diferente ecosistema)

### Decisión
Next.js 15 con App Router.

### Motivo
- App Router habilita Server Components por defecto, reduciendo el JavaScript
  enviado al cliente.
- La Metadata API del App Router es nativa y tipada (no requiere librerías externas).
- `next/font` optimiza la carga de fuentes sin configuración adicional.
- `next/image` gestiona dimensiones y lazy loading de imágenes.
- Ecosistema maduro, compatible con Cloudflare Workers via OpenNext.
- La curva de aprendizaje es relevante para un estudio que ya usa React.

### Consecuencias
- Toda nueva página debe seguir el patrón del App Router (`page.tsx` en carpeta).
- La separación Server/Client Components es una restricción que hay que respetar.
- Las actualizaciones de Next.js pueden requerir revisión del adaptador OpenNext.

### Impacto técnico
- `app/` como directorio raíz de rutas.
- `"use client"` solo donde se necesita interactividad.
- Metadata exportada desde cada `page.tsx`.

### Impacto funcional
- Carga inicial más rápida (menos JS en el cliente).
- Navegación SPA después de la carga inicial (via `next/link`).

---

## DEC-002 — Infraestructura: Cloudflare Workers + OpenNext

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Infraestructura

### Contexto
Elección de la plataforma de despliegue para el sitio.

### Problema
Necesitamos una plataforma de despliegue que sea económica para un sitio
estático, con CDN global, alta disponibilidad y compatible con Next.js.

### Alternativas consideradas
- Vercel (la plataforma nativa de Next.js)
- Netlify
- Cloudflare Pages (en lugar de Workers)

### Decisión
Cloudflare Workers con el adaptador `@opennextjs/cloudflare` (OpenNext).

### Motivo
- CDN global de Cloudflare con latencia mínima en cualquier región.
- Protección DDoS incluida sin coste adicional.
- Coste mínimo para un sitio sin tráfico masivo.
- El flag `nodejs_compat` permite usar APIs de Node.js en el runtime.
- Workers es más flexible que Pages si en el futuro se añade lógica de servidor.
- El proyecto no depende de vendor lock-in a Vercel.

### Consecuencias
- Cada cambio en el adaptador OpenNext puede requerir revisión.
- El build requiere `opennextjs-cloudflare build` además del `next build` estándar.
- `.open-next/` no se commitea y se regenera en cada build.
- Las APIs exclusivas de Node.js que no están en `nodejs_compat` no funcionarán.

### Impacto técnico
- `wrangler.jsonc` como archivo de configuración del Worker.
- `open-next.config.ts` como configuración del adaptador.
- Scripts `preview` y `deploy` en `package.json`.
- CI/CD automático via GitHub → Cloudflare webhook.

### Impacto funcional
- Despliegue automático en cada push a `main`.
- Sin intervención manual para actualizar producción.

---

## DEC-003 — Contacto: email directo sin formulario

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Negocio / UX

### Contexto
Diseño del canal de contacto de la web corporativa.

### Problema
El sitio necesita una forma de que los clientes potenciales contacten con el
estudio. La opción más común es un formulario de contacto.

### Alternativas consideradas
- Formulario con backend propio (Workers function)
- Formulario con servicio externo (Formspree, EmailJS, etc.)
- Enlace `mailto:` directo

### Decisión
Contacto exclusivamente via enlace `mailto:` a `ideasforgestudio@gmail.com`.
Sin formulario, sin backend.

### Motivo
- Elimina completamente la complejidad de backend (validación, spam, almacenamiento).
- Elimina la necesidad de compliance RGPD por recogida de datos en formularios.
- Un cliente que escribe un email es un lead más cualificado que uno que rellena
  un formulario genérico.
- El volumen de contactos esperado en esta fase no justifica la infraestructura.
- Simplifica el despliegue: el sitio es 100% estático.

### Consecuencias
- Si en el futuro se añade un formulario, habrá que actualizar la Política de
  Privacidad antes de activarlo.
- El email debe tener filtros de spam adecuados (responsabilidad del propietario).

### Impacto técnico
- Sin API routes en el proyecto.
- Sin variables de entorno necesarias en runtime.
- La página `/contacto` usa un `<a href="mailto:...">` simple.

### Impacto funcional
- El usuario abre su cliente de email al hacer clic en contactar.
- No hay confirmación de envío ni autorespuesta.

---

## DEC-004 — Imágenes: `unoptimized: true` en next/image

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Infraestructura / Rendimiento

### Contexto
Configuración del componente `next/image` para el despliegue en Cloudflare Workers.

### Problema
`next/image` por defecto requiere un servidor de optimización de imágenes (o el
binding `CF_IMAGES` de Cloudflare) para procesar imágenes en runtime. Los logos
del proyecto son archivos PNG estáticos ya dimensionados correctamente.

### Alternativas consideradas
- Activar Cloudflare Image Optimization (requiere binding adicional y configuración)
- Usar `<img>` directamente (pierde lazy loading y dimensiones automáticas)
- Mantener `unoptimized: true` y servir los PNGs tal cual

### Decisión
`images.unoptimized: true` en `next.config.mjs`.

### Motivo
- Los logos son activos estáticos con dimensiones fijas, no imágenes de contenido.
- No hay imágenes de contenido dinámico que justifiquen un optimizador.
- Simplifica el despliegue: no requiere binding de Cloudflare Images.
- El componente `<Logo>` sigue usando `next/image` (lazy loading, `priority`, `alt`).

### Consecuencias
- Si en el futuro se añaden imágenes de contenido (fotos, screenshots), habrá que
  revisar esta decisión y potencialmente desactivar `unoptimized`.
- Los PNGs actuales no tienen fallback WebP.

### Impacto técnico
- `next.config.mjs` con `images: { unoptimized: true }`.
- Los logos se sirven desde `.open-next/assets/` como archivos estáticos.

### Impacto funcional
- Sin diferencia perceptible para el usuario final con los logos actuales.

---

## DEC-005 — Sistema de diseño: tokens Tailwind custom (molten/steel/forge)

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Diseño / Branding

### Contexto
Elección del sistema de estilos y la paleta de colores del sitio.

### Problema
Necesitamos un sistema de estilos coherente con la identidad visual del estudio
(industrial, oscuro, con acento naranja incandescente) que sea mantenible y
modificable desde un único punto.

### Alternativas consideradas
- Tailwind CSS con paleta por defecto (grises, azules)
- CSS Modules con variables CSS propias
- Styled Components o Emotion

### Decisión
Tailwind CSS con tokens de diseño custom definidos en `tailwind.config.ts`:
- `molten` — Acento incandescente (naranja)
- `steel` — Texto y contraste (blancos fríos y grises)
- `forge` — Fondos y superficies (azules muy oscuros, casi negros)

### Motivo
- Los tokens permiten cambiar toda la paleta desde un único archivo.
- La semántica de los nombres (`molten`, `steel`, `forge`) refuerza la metáfora
  de la fragua industrial y hace el código más legible.
- Tailwind purga el CSS no usado en build, manteniendo el bundle pequeño.
- No requiere archivos CSS separados ni runtime de estilos.

### Consecuencias
- Cualquier color fuera de la paleta rompe la identidad visual.
- Los colores de Tailwind por defecto no se usan en este proyecto.
- Los tokens son la única fuente de verdad para colores, sombras y gradientes.

### Impacto técnico
- `tailwind.config.ts` como fuente de todos los tokens de diseño.
- `app/globals.css` para clases custom que Tailwind no puede representar.

### Impacto funcional
- Identidad visual consistente en todo el sitio.
- Dark mode nativo (no hay modo claro).

---

## DEC-006 — Animaciones: Framer Motion como única librería

**Fecha:** 2025
**Estado:** Activa
**Categoría:** UX / Arquitectura

### Contexto
Elección de la librería de animaciones para el sitio.

### Problema
El sitio necesita animaciones de entrada scroll-triggered, transiciones de menú
y efectos de decoración. Las animaciones deben respetar la preferencia del usuario
(`prefers-reduced-motion`).

### Alternativas consideradas
- CSS puro (keyframes + transitions)
- GSAP (más potente pero más pesado)
- CSS puro + IntersectionObserver manual para scroll triggers

### Decisión
Framer Motion como única librería de animaciones.

### Motivo
- API declarativa que se integra naturalmente con React.
- `useReducedMotion()` built-in para accesibilidad.
- `whileInView` elimina la necesidad de gestionar IntersectionObserver manualmente.
- Curva de easing y duración configurables desde las props.
- Compatible con SSR (no accede al DOM en render de servidor).

### Consecuencias
- Toda animación del proyecto debe usar Framer Motion (no mezclar con GSAP u otras).
- La curva de easing estándar `[0.16, 1, 0.3, 1]` debe usarse en todos los componentes.
- Framer Motion añade ~50KB al bundle (cargado solo en Client Components).

### Impacto técnico
- Los componentes con animaciones tienen `"use client"`.
- `Reveal`, `RevealGroup`, `RevealItem` como abstracciones reutilizables.
- El menú móvil del Navbar usa `AnimatePresence` para la transición de apertura.

### Impacto funcional
- Animaciones coherentes en todo el sitio.
- Usuarios con `prefers-reduced-motion` activo no ven movimiento.

---

## DEC-007 — Contenido: centralizado en `lib/`

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Arquitectura

### Contexto
Organización del contenido editable del sitio (textos, datos de servicios,
productos, navegación, email).

### Problema
Sin una fuente centralizada de verdad, el contenido tiende a duplicarse en
componentes y páginas, dificultando las modificaciones y creando inconsistencias.

### Alternativas consideradas
- CMS headless (Contentful, Sanity, etc.)
- Archivos JSON en `public/`
- Datos directamente en los componentes que los usan

### Decisión
Todo el contenido editable centralizado en `lib/`:
- `lib/site.ts` — metadatos globales, navegación, email
- `lib/services.ts` — definición de los 8 servicios
- `lib/products.ts` — definición de los 2 productos

### Motivo
- El sitio es pequeño y estático; un CMS sería sobredimensionado.
- Los tipos TypeScript garantizan la integridad del contenido.
- Un único punto de modificación para cada tipo de contenido.
- Sin dependencias externas ni APIs de terceros.
- El contenido está versionado junto al código en Git.

### Consecuencias
- Si el contenido crece significativamente (más de 20 productos, por ejemplo),
  habrá que evaluar un CMS.
- No hay interfaz de edición visual; el contenido se edita directamente en código.
- Los cambios de contenido requieren un nuevo deploy.

### Impacto técnico
- `lib/` como única fuente de datos para todos los componentes.
- Nunca hardcodear en componentes texto que pertenece a `lib/`.

### Impacto funcional
- Sin panel de administración. Los textos se editan en VSCode.

---

## DEC-008 — Producto: Luna en fase de validación

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Producto

### Contexto
Presentación del producto Luna en la web corporativa.

### Problema
Luna está siendo validada con usuarias reales antes de su lanzamiento oficial.
La web debe presentarlo con honestidad sobre su estado.

### Decisión
Luna se presenta con estado explícito "En validación" en `lib/products.ts`.
No se menciona disponibilidad en tiendas de apps ni métricas de usuarios.

### Motivo
Honestidad radical: presentar un producto como lanzado cuando no lo está dañaría
la credibilidad del estudio ante clientes que valoran la transparencia.

### Consecuencias
- El estado de Luna debe actualizarse cuando cambie.
- Nunca añadir métricas de usuarios sin datos reales verificados.

### Impacto técnico
- `status: "En validación"` en `lib/products.ts`.

### Impacto funcional
- El CTA de Luna apunta a `/contacto` (no a una tienda de apps).

---

## DEC-009 — Producto: Forge Route como herramienta interna

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Producto

### Contexto
Presentación del producto Forge Route en la web corporativa.

### Problema
Forge Route es un motor de decisión logística desarrollado para resolver un problema
real en un entorno interno. No es un SaaS en venta al público general.

### Decisión
Forge Route se presenta con estado "Uso interno" en `lib/products.ts`. Se describe
como evidencia de capacidad técnica, no como producto en venta.

### Motivo
Presentarlo como SaaS disponible cuando no lo es sería deshonesto. Sin embargo,
es evidencia real de capacidad para construir sistemas empresariales complejos.

### Consecuencias
- El estado debe actualizarse si Forge Route se convierte en producto comercializable.
- Nunca afirmar que está en producción en múltiples clientes sin verificarlo.

### Impacto técnico
- `status: "Uso interno"` en `lib/products.ts`.

### Impacto funcional
- El CTA de Forge Route apunta a `/contacto`.

---

## DEC-010 — Branding: dark mode nativo, sin modo claro

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Diseño / Branding

### Contexto
Decisión sobre el esquema de color del sitio.

### Problema
La identidad visual del estudio (fragua industrial, metales, fuego) funciona
naturalmente en un esquema oscuro. Hay que decidir si se implementa modo dual.

### Decisión
Dark mode nativo exclusivo. No hay modo claro. El sitio es siempre oscuro.

### Motivo
- La metáfora de la fragua (oscuridad, fuego, metal) solo funciona en oscuro.
- Un modo claro requeriría rediseñar toda la paleta y duplicar el mantenimiento.
- La identidad de marca es premium e industrial: el fondo oscuro refuerza este mensaje.
- `globals.css` tiene `color-scheme: dark` para señalarlo al sistema operativo.

### Consecuencias
- Los colores `forge-*` no tienen equivalentes claros.
- No añadir variables de color claro ni detectar preferencia del sistema para
  cambiar el tema.

### Impacto técnico
- `:root { color-scheme: dark; }` en `globals.css`.
- La paleta `forge-*` actúa como fondos en todo el sitio.

### Impacto funcional
- El sitio siempre se muestra oscuro, independientemente de la preferencia del SO.

---

## DEC-011 — TypeScript: modo estricto obligatorio

**Fecha:** 2025
**Estado:** Activa
**Categoría:** Arquitectura

### Contexto
Configuración del lenguaje de tipado del proyecto.

### Problema
Sin strict mode, TypeScript permite patrones que pueden generar bugs en runtime
(`any` implícito, null checks omitidos, etc.).

### Decisión
`"strict": true` en `tsconfig.json`. Ninguna regla del bloque strict puede
desactivarse sin aprobación explícita.

### Motivo
- Strict mode elimina clases enteras de bugs en tiempo de compilación.
- El coste es mayor verbosidad en los tipos, pero la ganancia en confiabilidad
  lo justifica completamente.

### Consecuencias
- Todos los componentes deben tipar explícitamente sus props.
- No se puede usar `any` sin justificación.
- El CI/CD fallará si TypeScript reporta errores.

### Impacto técnico
- `tsconfig.json` con `"strict": true`.

### Impacto funcional
- Sin impacto directo en el usuario final.

---

## DEC-012 — Documentación: sistema permanente de memoria del proyecto

**Fecha:** 2026-06-28
**Estado:** Activa
**Categoría:** Arquitectura / Proceso

### Contexto
Al crecer el proyecto, cada sesión de trabajo partía de cero sin contexto sobre
las decisiones tomadas, la identidad de marca o las convenciones del código.

### Problema
Sin documentación permanente, cualquier colaborador (incluyendo asistentes de IA)
debe re-explorar el código para entender el contexto, con riesgo de introducir
cambios inconsistentes con la filosofía del proyecto.

### Decisión
Sistema de documentación de cinco documentos con responsabilidades distintas:
- `CLAUDE.md` — Memoria técnica completa (arquitectura, componentes, reglas)
- `BRAND.md` — Identidad de marca y principios de comunicación
- `DECISIONS.md` — Registro histórico de decisiones (este documento)
- `PROJECT_RULES.md` — Reglas técnicas de desarrollo con checklists
- `CHANGELOG_AI.md` — Historial de cambios realizados por Claude

### Motivo
Cada documento tiene una responsabilidad única y diferenciada. Ninguno puede
sustituir a otro. La separación permite actualizarlos de forma independiente.

### Consecuencias
- Cualquier cambio de arquitectura, diseño o producto debe registrarse en este documento.
- Cualquier cambio técnico de Claude debe registrarse en CHANGELOG_AI.md.
- Los documentos deben mantenerse actualizados, no solo crearse una vez.

### Impacto técnico
- Archivos `.md` en la raíz del proyecto, ignorados por el build de Next.js.
- Sin impacto en el bundle de producción.

### Impacto funcional
- Las futuras sesiones de Claude pueden leer CLAUDE.md y entender el proyecto
  sin necesidad de re-explorar el código.

---

<!-- Añadir nuevas decisiones debajo de esta línea -->
