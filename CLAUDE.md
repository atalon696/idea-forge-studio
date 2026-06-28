# CLAUDE.md — Memoria permanente del proyecto

> Este documento es la fuente de verdad técnica del proyecto. Léelo completo
> antes de tocar cualquier archivo. Para el contexto estratégico del negocio
> (visión, clientes, principios, objetivos), ver `PROJECT_CONTEXT.md`.

---

## 1. Descripción del proyecto

### Qué es

**IDEA FORGE STUDIO** es un estudio pequeño de desarrollo de software a medida.
Su negocio principal es diseñar y construir software personalizado para empresas
que tienen un problema real y no encuentran una solución en el mercado.

Este repositorio es la web corporativa del estudio. Es un sitio informativo, sin
backend, sin formularios y sin recopilación de datos. El único canal de contacto
es el correo electrónico.

### Qué pretende transmitir

Competencia técnica real, honestidad radical y trato directo. El visitante debe
sentir que habla con personas que construyen software, no con una agencia de
marketing. La web no vende: informa y genera confianza.

### Filosofía

- **Entiende primero, construye después.** Nunca se propone una solución sin
  entender el problema.
- **Honestidad por encima del crecimiento.** Si la solución no encaja, se dice.
- **La tecnología no es protagonista.** El protagonista siempre es el problema
  del cliente y su resolución.
- **Sin exageraciones.** Cero cifras inventadas, cero clientes ficticios, cero
  presencia internacional falsa, cero métricas fabricadas.

### Público objetivo

Gerentes, directores de operaciones y responsables de IT de empresas medianas que
tienen un problema operativo real: procesos manuales, sistemas que no se hablan,
necesidad de automatización, herramientas que no existen en el mercado.

No es una web para desarrolladores. No es una web para startups en busca de
rondas de inversión. Es una web para empresas con problemas concretos.

### Posicionamiento

Estudio boutique de software a medida. No somos una gran agencia, no exageramos
nuestro tamaño, no fingimos ser algo que no somos. Somos pequeños, precisos y
comprometidos con cada proyecto.

### Objetivo comercial

Generar contactos de calidad: empresas con un problema real listas para invertir
en una solución personalizada. El éxito de la web se mide en conversaciones
iniciadas, no en tráfico.

---

## 2. Productos propios

### Luna

App de seguimiento menstrual con privacidad por diseño.

- **Estado:** En validación con usuarias reales.
- **No es un producto lanzado.** Es una demostración real de capacidad técnica
  en desarrollo consumer, UX de salud y privacidad de datos.
- **No inventar**: usuarios, métricas de adopción ni fecha de lanzamiento.
- El color de acento es `#C77DFF` (púrpura suave).

### Forge Route

Motor de decisión logística: determina automáticamente qué operador gestiona cada
envío para minimizar costes y respetar reglas de negocio.

- **Estado:** Uso interno. Desarrollado originalmente para resolver un problema
  real.
- **No es un producto SaaS en venta.** Es evidencia de capacidad técnica
  empresarial.
- Compatible con DSV, SEUR, TXT y otros (declarado en el producto).
- El color de acento es `#F56102` (molten, el mismo que la marca).

Ambos productos son **demostraciones reales de lo que el estudio puede construir**,
no promesas de futuro ni productos imaginarios.

---

## 3. Arquitectura

### Visión general

```
┌─────────────────────────────────────────────────────────┐
│                   IDEA FORGE STUDIO                     │
│              Web corporativa informativa                │
│                                                         │
│  Next.js 15 (App Router) + React 19 + TypeScript        │
│  Tailwind CSS + Framer Motion                           │
│  100% estático — sin backend — sin base de datos        │
│                                                         │
│  Despliegue: Cloudflare Workers via OpenNext            │
└─────────────────────────────────────────────────────────┘
```

### Patrón de renderizado

Todas las páginas son **generadas estáticamente en tiempo de build** (SSG).
No hay rutas dinámicas, no hay datos externos, no hay API calls en runtime.
Cloudflare Workers sirve assets estáticos pre-renderizados.

```
Build time:  Next.js → HTML estático por cada ruta
Runtime:     Cloudflare Workers sirve el HTML y los assets
Usuario:     Recibe HTML completo — sin hidratación inicial costosa
```

### Server Components vs Client Components

La regla es clara: **todo es Server Component por defecto**.
Solo se añade `"use client"` cuando el componente necesita:

- Hooks de React (`useState`, `useEffect`)
- Interactividad directa del usuario
- APIs del navegador
- Animaciones de Framer Motion con seguimiento de viewport

**Componentes Server (sin directiva):**
`Button`, `Container`, `Eyebrow`, `Logo`, `Footer`, `PageHero`, `SectionHeading`,
`CTA`, `LegalShell`, todas las páginas, todos los layouts.

**Componentes Client (`"use client"`):**
`Navbar` (scroll + menú hamburguesa), `Hero` (animaciones de entrada),
`Reveal` / `RevealGroup` / `RevealItem` (scroll animations), `EmberField`
(partículas animadas), `LunaMockup`, `ForgeRouteMockup`.

### App Router — estructura de rutas

```
/                → app/page.tsx
/servicios       → app/servicios/page.tsx
/productos       → app/productos/page.tsx
/sobre-nosotros  → app/sobre-nosotros/page.tsx
/contacto        → app/contacto/page.tsx
/politica-privacidad → app/politica-privacidad/page.tsx
/aviso-legal     → app/aviso-legal/page.tsx
/cookies         → app/cookies/page.tsx
```

`app/layout.tsx` es el layout raíz: aplica fuentes, metadata global, Navbar y
Footer a todas las páginas.

### Flujo de navegación

```
Usuario → Cloudflare CDN → Worker → HTML estático
                                  ↓
                           next/link (SPA transitions)
                           Prefetching automático
```

Next.js App Router gestiona la navegación client-side después de la carga inicial.
El Navbar usa `usePathname()` para marcar la ruta activa y cierra el menú móvil
automáticamente en cada cambio de ruta.

### Separación de responsabilidades

| Capa | Responsabilidad |
|---|---|
| `app/` | Rutas, metadata por página, composición de secciones |
| `components/sections/` | Bloques de contenido grandes, no reutilizables entre páginas |
| `components/ui/` | Primitivos reutilizables sin lógica de negocio |
| `components/product/` | Mockups visuales de los productos propios |
| `lib/` | Datos centralizados y configuración global |
| `public/` | Assets estáticos (logos, cabeceras HTTP) |
| Archivos raíz | Configuración de herramientas (Tailwind, TS, Wrangler, etc.) |

---

## 4. Tecnologías

### Next.js 15 (App Router)
Framework principal. Se eligió porque:
- App Router permite Server Components por defecto (mejor rendimiento).
- Generación estática integrada (SSG) sin configuración compleja.
- Metadata API nativa para SEO.
- `next/image` y `next/font` con optimizaciones integradas.
- Ecosistema maduro y soporte a largo plazo.

### React 19
Librería de UI. Se eligió junto a Next.js por ecosistema, estabilidad y
compatibilidad con Framer Motion. Version 19 porque es la requerida por Next.js 15.

### TypeScript 5.7 (modo estricto)
Todos los archivos son `.ts` o `.tsx`. Modo estricto activado en `tsconfig.json`.
Razón: elimina clases enteras de bugs en tiempo de desarrollo. Sin TypeScript no
se acepta ningún PR.

### Tailwind CSS 3.4
Sistema de estilos. Se eligió porque:
- Tokens de diseño centralizados en `tailwind.config.ts` (colores, fuentes, etc.).
- Clases directamente en el JSX, sin CSS modules ni archivos separados.
- Purga automática de CSS no usado en build.
- No hay CSS custom excepto en `globals.css` para patrones que Tailwind no cubre
  (`.forge-rule`, `.text-molten-gradient`, `.bg-blueprint`, `.legal`).

### Framer Motion 11
Librería de animaciones. Se eligió por:
- API declarativa compatible con React.
- `useReducedMotion()` para accesibilidad (respeta preferencias del SO).
- `whileInView` para animaciones scroll-triggered sin IntersectionObserver manual.
- Animaciones de layout complejas en el menú móvil del Navbar.

La curva de easing estándar del proyecto es `[0.16, 1, 0.3, 1]` (spring suave).
Se usa esta curva en **todos** los componentes animados para coherencia.

### Cloudflare Workers
Plataforma de despliegue. Se eligió porque:
- CDN global con latencia mínima.
- Workers serverless para SSR si fuera necesario en el futuro.
- `nodejs_compat` flag activa APIs de Node.js en el runtime.
- Protección DDoS incluida.
- Coste mínimo para un sitio estático.

### OpenNext (`@opennextjs/cloudflare`)
Adaptador que transforma el build de Next.js en un formato compatible con
Cloudflare Workers. Sin él, el output de `next build` no funcionaría en Workers.

Genera `.open-next/worker.js` (el entry point del Worker) y `.open-next/assets/`
(los assets estáticos servidos via binding ASSETS).

### Wrangler 4
CLI oficial de Cloudflare Workers. Gestiona autenticación, despliegue local
(preview) y despliegue a producción. La configuración vive en `wrangler.jsonc`.

### Node.js / NPM
Entorno de desarrollo local. No se requiere ninguna versión específica de Node
documentada, pero se recomienda LTS ≥ 20. NPM es el gestor de paquetes (no se
usa pnpm ni yarn en este proyecto).

### Git / GitHub
Control de versiones. La rama principal es `main`. Cloudflare está conectado al
repo de GitHub y despliega automáticamente en cada push a `main`.

---

## 5. Sistema de diseño

### Paleta de colores

```
MOLTEN (acento incandescente)
  DEFAULT:  #F56102   → Botones primarios, hover, foco, destacados
  spark:    #FF7A1A   → Hover states, gradientes cálidos
  deep:     #B8470A   → Bordes cálidos, sombras
  ember:    #7A2E05   → Fondos muy oscuros con temperatura
  50:       #FFE2CC
  100:      #FFBE8A
  300:      #FF9A4D
  500:      #F56102   (= DEFAULT)
  700:      #B8470A   (= deep)
  900:      #7A2E05   (= ember)

STEEL (texto y contraste)
  100:  #F2F4F5   → Títulos, texto de alta importancia
  300:  #C7CDD4   → Texto de cuerpo normal
  500:  #8A95A3   → Texto secundario, placeholders, labels
  700:  #3A4453   → Bordes, separadores, scrollbar

FORGE (fondos y superficies)
  900:  #020814   → Fondo más oscuro (body base) ← NO es el body principal
  800:  #050D19   → Fondo principal del body
  700:  #0A1422   → Superficies elevadas sobre el body
  600:  #111D2D   → Cards, paneles, inputs
  500:  #19273A   → Hover de cards y elementos interactivos
```

**Regla de uso:**
- Fondos de página: `forge-800` (body), `forge-900` (footer, header scrolled)
- Superficie de componentes: `forge-700`, `forge-600`
- Hover/activo de superficies: `forge-500`
- Texto principal: `steel-100`
- Texto cuerpo: `steel-300`
- Texto secundario/metadata: `steel-500`
- Bordes y separadores: `steel-700/60` (60% opacidad)
- Acento/CTA: `molten` (DEFAULT)

### Tipografía

| Variable CSS | Fuente | Uso |
|---|---|---|
| `--font-saira-cond` | Saira Semi Condensed | `font-display` — Títulos H1-H4, botones, labels grandes |
| `--font-saira` | Saira | `font-display` fallback — Títulos en pesos normales |
| `--font-inter` | Inter | `font-sans` — Texto de cuerpo, párrafos |
| `--font-jetbrains` | JetBrains Mono | `font-mono` — Eyebrows, labels técnicos, navegación, footer |

**Escalas tipográficas frecuentes:**
- H1 Hero: `text-4xl → sm:text-5xl → md:text-6xl → lg:text-[68px]`
- H1 Página: `text-4xl → sm:text-5xl → md:text-6xl`
- H2 Sección: `text-3xl → sm:text-4xl → md:text-[44px]`
- Eyebrow: `text-xs font-mono uppercase tracking-ultra` (0.32em)
- Navegación: `text-[13px] font-mono uppercase tracking-[0.14em]`
- Cuerpo: `text-lg md:text-xl font-display font-light`

### Espaciado y layout

- **Ancho máximo del sitio:** `max-w-site` = 1120px
- **Padding horizontal del Container:** `px-6` (24px en ambos lados)
- **Padding vertical de secciones:** `py-16 md:py-24` para secciones grandes,
  `py-12 md:py-20` para secciones medianas
- **Espacio entre secciones de página:** `mt-24` antes del Footer
- **Grid de tarjetas de servicios:** `grid-cols-1 → md:grid-cols-2 → lg:grid-cols-3`
- **Grid del Footer:** `grid-cols-1 → md:grid-cols-[1.4fr_1fr_1fr_1fr]`

### Radios de borde

| Clase Tailwind | Valor |
|---|---|
| `rounded-sm` | 6px |
| `rounded-md` | 10px |
| `rounded-lg` | 16px |
| `rounded-xl` | 24px |

### Sombras personalizadas

| Clase | Uso |
|---|---|
| `shadow-molten` | Botón primario en reposo: `0 0 24px rgba(245,97,2,0.45)` |
| `shadow-molten-lg` | Botón primario en hover: `0 0 40px rgba(245,97,2,0.55)` |
| `shadow-card` | Tarjetas elevadas: `0 24px 60px -20px rgba(2,8,20,0.8)` |

### Gradientes de texto

- `.text-molten-gradient` — Texto naranja incandescente (para énfasis en títulos)
- `.text-steel-gradient` — Texto metálico plateado (para títulos secundarios)

### Clases CSS personalizadas (globals.css)

| Clase | Descripción |
|---|---|
| `.forge-rule` | Divisor horizontal con punto naranja incandescente al centro |
| `.text-molten-gradient` | Gradiente naranja sobre texto (clip) |
| `.text-steel-gradient` | Gradiente metálico plateado sobre texto (clip) |
| `.bg-blueprint` | Rejilla técnica de fondo (líneas muy sutiles) |
| `.legal` | Prosa con estilos para páginas de texto legal |

### Animaciones

**Curva estándar del proyecto:** `ease: [0.16, 1, 0.3, 1]` — spring suave.
Usarla siempre. No inventar otras curvas sin justificación.

**Duración estándar:** 0.6s para transiciones de contenido, 1.1s para elementos
de decoración lentos.

**Patrones:**
- Entrada animada (Hero): `initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}`
- Scroll reveal (`Reveal`): `whileInView`, `viewport={{ once:true, margin:"-80px" }}`
- Stagger group (`RevealGroup`): `staggerChildren: 0.08`
- Menú móvil: `height: 0 → auto, opacity: 0 → 1`
- Brasas (`EmberField`): keyframe CSS `rise` — translateY(-160px) en 5s linear
- Línea decorativa: keyframe CSS `forgeLine` — width 0→100% en 2.6s

**Accesibilidad de animaciones:** Todos los componentes con Framer Motion usan
`useReducedMotion()`. Si está activo, no hay movimiento. En CSS, `globals.css`
tiene una regla `@media (prefers-reduced-motion: reduce)` que anula duraciones.

### Responsive

Mobile-first. Breakpoints estándar de Tailwind:
- `sm:` → 640px
- `md:` → 768px
- `lg:` → 1024px
- `xl:` → 1280px (raramente necesario dado el max-w-site de 1120px)

El Navbar usa `md:` para separar menú desktop de hamburguesa mobile.

### Identidad visual resumida

**Metáfora:** La fragua industrial. Fuego controlado, metal, precisión, calor.
**Personalidad visual:** Oscuro, limpio, premium, con destellos de naranja incandescente.
**No es:** Colorido, genérico, corporativo frío, minimalista blanco.

---

## 6. Organización del proyecto

### `app/`

Contiene exclusivamente páginas y el layout raíz. Cada subcarpeta es una ruta.

| Archivo | Responsabilidad |
|---|---|
| `layout.tsx` | Layout raíz: fuentes, metadata global, `<Navbar>`, `<Footer>` |
| `page.tsx` | Página de inicio |
| `globals.css` | Estilos globales: Tailwind layers + clases custom |
| `servicios/page.tsx` | Página de servicios (lista de los 8 servicios) |
| `productos/page.tsx` | Página de productos (Luna, Forge Route) |
| `sobre-nosotros/page.tsx` | Página "sobre el estudio" |
| `contacto/page.tsx` | Página de contacto (email link, sin formulario) |
| `politica-privacidad/page.tsx` | Política de privacidad (provisional) |
| `aviso-legal/page.tsx` | Aviso legal (provisional) |
| `cookies/page.tsx` | Política de cookies (provisional) |

### `components/`

Tres subcarpetas con responsabilidades distintas.

**`components/ui/`** — Primitivos reutilizables. Sin lógica de negocio.
Pueden usarse en cualquier página o sección.

| Componente | Descripción |
|---|---|
| `Button.tsx` | Botón polimórfico (link o button), 3 variantes, 2 tamaños |
| `Container.tsx` | Wrapper de ancho máximo (1120px) con padding horizontal |
| `Eyebrow.tsx` | Label pequeño en mayúsculas para encabezados de sección |
| `Reveal.tsx` | Animación fade+slide al entrar en viewport (+ `RevealGroup`, `RevealItem`) |
| `EmberField.tsx` | Efecto de partículas ascendentes (brasas ambientales) |

**`components/sections/`** — Bloques de contenido. Representan secciones
completas de una página. Pueden contener primitivos de `ui/`.

| Componente | Descripción |
|---|---|
| `Hero.tsx` | Hero de la home con animaciones de entrada |
| `PageHero.tsx` | Hero genérico para páginas interiores |
| `Problemas.tsx` | Sección de problemas del cliente (home) |
| `WhatWeBuild.tsx` | Qué construimos (home) |
| `ComoTrabajamos.tsx` | Cómo trabajamos (home) |
| `ProductShowcase.tsx` | Grid de productos (home) |
| `CTA.tsx` | Bloque call-to-action (personalizable vía props) |
| `SectionHeading.tsx` | Encabezado estándar de sección (eyebrow + título + intro) |
| `LegalShell.tsx` | Wrapper de layout para páginas legales |

**`components/product/`** — Mockups visuales de los productos. Solo se usan
en la página `/productos`.

| Componente | Descripción |
|---|---|
| `LunaMockup.tsx` | Representación visual del producto Luna |
| `ForgeRouteMockup.tsx` | Representación visual del producto Forge Route |

### `lib/`

Fuente única de verdad para el contenido del sitio. **Nunca duplicar contenido
que ya vive aquí.**

| Archivo | Contenido |
|---|---|
| `site.ts` | Nombre, tagline, descripción, URL, email, nav links, legal links |
| `services.ts` | Array de 8 servicios con tipo `Service` (title, desc, when, detail) |
| `products.ts` | Array de 2 productos con tipo `Product` (todos sus campos) |

### `public/`

Assets estáticos. Se sirven tal cual, sin procesamiento.

| Archivo | Descripción |
|---|---|
| `logo-hero.png` | Logo completo para hero (886×513px) |
| `logo-navbar.png` | Logo horizontal para navbar (1510×235px) |
| `isotipo.png` | Isotipo/marca para favicon o uso reducido (347×401px) |
| `_headers` | Cabeceras HTTP de Cloudflare (seguridad, caché) |

### Archivos de configuración raíz

| Archivo | Responsabilidad |
|---|---|
| `next.config.mjs` | Config de Next.js (imágenes sin optimizar, integración OpenNext dev) |
| `tailwind.config.ts` | Tokens de diseño (colores, fuentes, tamaños, sombras, animaciones) |
| `tsconfig.json` | TypeScript con strict mode, path aliases (`@/`) |
| `wrangler.jsonc` | Config de Cloudflare Workers (entry point, compat flags, assets) |
| `open-next.config.ts` | Config del adaptador OpenNext (vacía por ahora, lista para ISR/KV) |
| `postcss.config.mjs` | PostCSS con Tailwind y Autoprefixer |
| `package.json` | Dependencias y scripts de npm |

---

## 7. Componentes — guía de uso

### `Button`

```tsx
<Button href="/contacto" size="lg" arrow>Cuéntanos qué necesitas</Button>
<Button href="/servicios" size="lg" variant="secondary">Ver qué hacemos</Button>
<Button variant="ghost">Texto plano</Button>
<button onClick={fn} variant="primary">Acción</button>
```

- `href` → renderiza `<Link>` de Next.js. Sin `href` → `<button>`.
- `variant`: `primary` (naranja, CTA principal), `secondary` (oscuro, borde),
  `ghost` (solo texto).
- `size`: `md` (navbar, inline), `lg` (secciones hero y CTA).
- `arrow`: añade `→` con transición hover.
- **NO usar** para enlaces de texto en prosa o en el footer.

### `Container`

```tsx
<Container className="py-16">...</Container>
<Container className="relative">...</Container>
```

Siempre usar para centrar contenido al ancho del sitio. No hardcodear `max-w`
ni `px` en secciones: usar este componente.

### `Eyebrow`

```tsx
<Eyebrow>Desarrollo de software a medida</Eyebrow>
```

Texto pequeño en mayúsculas con `tracking-ultra`. Siempre antes del título H1 o H2
de una sección. **No usar** para texto de cuerpo ni etiquetas de formulario.

### `Reveal` / `RevealGroup` / `RevealItem`

```tsx
// Elemento individual con reveal
<Reveal delay={0.1}>
  <p>Contenido animado</p>
</Reveal>

// Grupo con stagger automático
<RevealGroup className="grid grid-cols-3 gap-6">
  <RevealItem><Card /></RevealItem>
  <RevealItem><Card /></RevealItem>
  <RevealItem><Card /></RevealItem>
</RevealGroup>
```

- Usar `Reveal` para elementos individuales (párrafos, títulos).
- Usar `RevealGroup` + `RevealItem` para listas o grids donde se quiere stagger.
- `viewport={{ once: true }}` — la animación ocurre solo la primera vez.
- **No anidar** `RevealGroup` dentro de otro `RevealGroup`.

### `SectionHeading`

```tsx
<SectionHeading
  eyebrow="Lo que construimos"
  title={<>Software que <span className="text-molten-gradient">encaja</span></>}
  intro="Párrafo introductorio de la sección."
  align="center" // opcional, default "left"
/>
```

Usar para encabezar cualquier sección de contenido. Ya incluye `Reveal`.
**No duplicar** esta estructura manualmente.

### `PageHero`

```tsx
<PageHero
  eyebrow="Estudio"
  title={<>Sobre <span className="text-molten-gradient">nosotros</span></>}
  intro="Descripción de la página."
/>
```

Usar en páginas interiores para el bloque hero. La home usa `Hero` (animado),
las páginas interiores usan `PageHero` (estático).

### `CTA`

```tsx
<CTA /> // Props por defecto
<CTA title="Título personalizado" subtitle="Subtítulo personalizado" />
```

Bloque de cierre de sección o página. Siempre incluye los dos botones:
"Cuéntanos qué necesitas" → `/contacto` y "Ver qué hacemos" → `/servicios`.
**No crear variantes ad-hoc** de este bloque; modificar los props si es necesario.

### `EmberField`

```tsx
<EmberField count={7} /> // count controla el número de brasas
```

Solo para decoración ambiental. Actualmente en el Hero. No añadir en secciones
donde distraiga. Respeta `prefers-reduced-motion`.

### `Logo`

```tsx
<Logo variant="navbar" className="h-8 w-auto" priority />
<Logo variant="hero" className="w-full max-w-lg" priority />
<Logo variant="isotipo" className="h-10 w-auto" />
```

Tres variantes según el contexto. Siempre `priority` cuando es above-the-fold.
**No usar rutas hardcodeadas** a los logos: usar este componente.

---

## 8. Gestión del contenido

### Cómo modificar la navegación principal

Editar `lib/site.ts` → array `nav`. El `Navbar` y el `Footer` lo leen
automáticamente. **No tocar** los componentes.

```ts
export const nav = [
  { label: "Servicios", href: "/servicios" },
  // Añadir aquí
];
```

### Cómo modificar los servicios

Editar `lib/services.ts` → array `services`. La página `/servicios` y la
sección `WhatWeBuild` de la home lo leen automáticamente.

Cada servicio tiene:
- `title` — Nombre del servicio
- `desc` — Frase corta (para la home)
- `when` — Cuándo tiene sentido (disparador de negocio)
- `detail` — Qué hacemos y qué resuelve

### Cómo modificar los productos

Editar `lib/products.ts` → array `products`. La página `/productos` y el
`Footer` lo leen automáticamente.

### Cómo modificar el email de contacto

Editar `lib/site.ts` → campo `email`. El `Footer` y la página `/contacto`
lo usan. **No hardcodear** el email en ningún componente.

### Cómo modificar metadata global (SEO)

Editar `lib/site.ts` → campos `name`, `tagline`, `description`, `url`.
El `layout.tsx` los usa para construir los `<meta>` de todas las páginas.

### Cómo modificar metadata por página

Exportar `metadata` en cada `page.tsx`:

```ts
export const metadata: Metadata = {
  title: "Título de la página",
  description: "Descripción específica.",
};
```

### Cómo modificar textos de CTA

El componente `CTA` acepta `title` y `subtitle` como props. Si el texto default
no sirve, pasar props desde la página. **No crear nuevos componentes CTA**.

### Cómo modificar páginas legales

Editar directamente `app/politica-privacidad/page.tsx`, `app/aviso-legal/page.tsx`
y `app/cookies/page.tsx`. Estas páginas usan `LegalShell` como wrapper y estilos
`.legal` para la prosa.

---

## 9. Flujo de despliegue

```
VS Code (edición local)
       ↓
git commit -m "mensaje"
       ↓
git push origin main
       ↓
GitHub (repositorio remoto)
       ↓
Cloudflare (detecta push via webhook)
       ↓
Build: npx opennextjs-cloudflare build
  → next build (genera páginas estáticas)
  → OpenNext transforma el output en Worker
  → Genera .open-next/worker.js + .open-next/assets/
       ↓
Deploy: npx wrangler deploy
  → Publica el Worker en Cloudflare
  → Actualiza los assets en el CDN
       ↓
Producción (https://ideaforge.studio)
```

### Scripts disponibles

```bash
npm run dev        # Desarrollo local: http://localhost:3000
npm run build      # Build de Next.js (sin OpenNext)
npm run preview    # Build + preview local en runtime de Workers
npm run deploy     # Build + despliegue a Cloudflare producción
npm run upload     # Build + upload sin desplegar (staging)
npm run lint       # ESLint
```

### Archivos que NO se commitean

`.open-next/` está en `.gitignore`. Se regenera en cada build.
Nunca commitear `.wrangler/` ni `node_modules/`.

### Configuración necesaria en Cloudflare (primera vez)

1. Workers & Pages → Create → Workers → Import a repository
2. Build command: `npx opennextjs-cloudflare build`
3. Deploy command: `npx wrangler deploy`
4. `wrangler.jsonc` y `open-next.config.ts` deben estar en el repo.

---

## 10. Convenciones de desarrollo

Las reglas completas viven en `PROJECT_RULES.md`. Resumen rápido de referencia:

1. **TypeScript estricto siempre.** Sin `any`, sin `@ts-ignore` injustificados.
2. **No duplicar código.** Si algo existe, reutilizarlo.
3. **No hardcodear contenido.** Todo en `lib/`.
4. **No romper Server/Client boundaries.** No añadir `"use client"` donde no hace falta.
5. **No modificar `globals.css` para estilos de un componente específico.** Usar clases Tailwind.
6. **No añadir dependencias sin justificación explícita.** El bundle debe mantenerse pequeño.
7. **No modificar la arquitectura sin aprobación previa.**
8. **Mantener la curva de easing `[0.16, 1, 0.3, 1]`** en todas las animaciones.
9. **Mantener `prefers-reduced-motion`** en cualquier animación nueva.
10. **Mantener SEO:** cada página debe tener `metadata` con `title` y `description` propios.
11. **No inventar contenido.** Nunca escribir datos, clientes, métricas o cifras no verificadas.
12. **Respetar la identidad visual.** Los colores del sistema de diseño son los únicos permitidos.

→ Ver `PROJECT_RULES.md` para las reglas completas con checklists y criterios de revisión.

---

## 11. Protocolo obligatorio de trabajo

Este protocolo se aplica en **todas las sesiones**, sin excepción.
No es opcional ni negociable. Cada fase debe completarse antes de pasar a la siguiente.

---

### Fase 1 — Comprensión

Antes de cualquier acción:

- Leer el contexto necesario del proyecto.
- Revisar los documentos relevantes según el tipo de cambio:
  - `CLAUDE.md` siempre.
  - `BRAND.md` si el cambio afecta a textos, tono o identidad visual.
  - `PROJECT_CONTEXT.md` si el cambio afecta a estrategia, clientes o productos.
  - `PROJECT_RULES.md` si el cambio afecta a código, estructura o dependencias.
  - `DECISIONS.md` si el cambio propone algo que podría contradecir una decisión ya tomada.
- Confirmar que se entiende el objetivo antes de continuar.

---

### Fase 2 — Análisis

Explicar antes de ejecutar:

- **Qué se pretende conseguir** — el objetivo del cambio en lenguaje claro.
- **Qué alternativas existen** — al menos las relevantes.
- **Cuál se recomienda** — con justificación.
- **Riesgos** — qué podría salir mal.
- **Impacto técnico** — archivos afectados, dependencias, compilación.
- **Impacto visual** — qué cambia en pantalla y en qué breakpoints.
- **Impacto en SEO** — si el cambio afecta a metadata, URLs, contenido indexable.
- **Impacto en accesibilidad** — si el cambio afecta a navegación por teclado, ARIA, contraste, motion.
- **Impacto en rendimiento** — si el cambio añade peso al bundle, bloquea render o incrementa peticiones.

No todos los puntos aplican a todos los cambios. Omitir los que sean irrelevantes,
pero justificar por qué no aplican si existe duda razonable.

---

### Fase 3 — Plan

Indicar exactamente:

- Lista de archivos que se modificarán, con su ruta completa.
- Motivo de cada modificación.
- Orden de ejecución si las modificaciones tienen dependencias entre sí.

**Esperar aprobación explícita** antes de implementar cuando el cambio:
- Afecte a más de un archivo.
- Modifique contenido visible en producción.
- Cambie la identidad visual, el sistema de diseño o el tono.
- Añada, elimine o modifique una página.
- Toque archivos de configuración (`next.config.mjs`, `tailwind.config.ts`, `wrangler.jsonc`).
- Implique una nueva dependencia.
- Contradiga o actualice alguna decisión registrada en `DECISIONS.md`.

Para cambios mínimos y totalmente reversibles (corrección tipográfica evidente,
arreglo de un import roto, ajuste de espaciado de un solo componente) se puede
actuar directamente indicando lo que se hará.

---

### Fase 4 — Implementación

- Modificar **únicamente** los archivos aprobados en la Fase 3.
- No realizar cambios adicionales "aprovechando" la edición en curso.
- Si durante la implementación se detecta un problema no previsto, detener y
  comunicarlo antes de continuar.

---

### Fase 5 — Verificación

Tras implementar, comprobar:

**Código:**
- [ ] El proyecto compila sin errores (`npm run build`)
- [ ] No hay errores de TypeScript
- [ ] No hay imports rotos ni componentes faltantes
- [ ] No hay texto hardcodeado que debería estar en `lib/`
- [ ] Los enlaces internos usan `<Link>` de Next.js, no `<a href>` directo

**Visual y UX:**
- [ ] El diseño es correcto en mobile (≥ 320px) y desktop (≥ 1280px)
- [ ] La paleta de colores no se ha alterado fuera del sistema de diseño
- [ ] Los estados de foco son visibles (`:focus-visible` con outline molten)
- [ ] Las animaciones respetan `prefers-reduced-motion`
- [ ] Los enlaces externos abren correctamente

**Contenido:**
- [ ] El contenido es honesto y no exagera capacidades del estudio
- [ ] No se han inventado clientes, métricas ni cifras
- [ ] El tono respeta las guías de `BRAND.md`

---

### Fase 6 — Documentación

Antes de dar el cambio por terminado, evaluar si requiere actualizar alguno de
estos documentos. Si la respuesta es sí, indicarlo explícitamente al propietario:

| Documento | Actualizar si… |
|---|---|
| `CLAUDE.md` | Cambia la arquitectura, los componentes, las rutas o las convenciones |
| `BRAND.md` | Cambia el tono, la voz, los CTAs o la identidad visual |
| `PROJECT_CONTEXT.md` | Cambia la estrategia, los clientes objetivo, los productos o los principios |
| `DECISIONS.md` | Se toma una nueva decisión relevante o se sustituye una anterior |
| `PROJECT_RULES.md` | Cambian las reglas técnicas, los checklists o los estándares de código |
| `CHANGELOG_AI.md` | Siempre que se realice cualquier cambio significativo en el proyecto |
| `README.md` | Cambian las instrucciones de instalación, la estructura o el despliegue |

**Nunca dar un cambio por terminado sin completar esta fase.**

---

## 13. Decisiones de arquitectura

El historial completo de decisiones técnicas, de diseño y de producto vive en
`DECISIONS.md`. Es el registro permanente del porqué de cada decisión importante.

→ Ver `DECISIONS.md` antes de proponer cambios que afecten a la arquitectura,
infraestructura, sistema de diseño o estrategia de producto.

---

## 14. Roadmap

### Pendiente
- Añadir `public/sitemap.xml`
- Añadir `public/robots.txt`
- Añadir cabeceras de seguridad HTTP completas en `public/_headers`
- Finalizar páginas legales (pendiente de constitución formal de la empresa)
- Optimizar/comprimir PNGs del logo
- Añadir OpenGraph images por página
- Integrar analytics (Cloudflare Analytics o Sentry)

### En desarrollo
_(ninguna tarea activa actualmente)_

### Finalizado
- Arquitectura base Next.js 15 + App Router
- Sistema de diseño (molten/steel/forge)
- 8 servicios definidos y documentados
- 2 productos propios (Luna, Forge Route)
- Despliegue en Cloudflare Workers via OpenNext
- CI/CD automático via GitHub
- Páginas legales provisionales
- Responsive completo (mobile-first)
- Accesibilidad básica (focus, aria, reduced-motion)

---

## 15. Reglas permanentes para Claude

Estas reglas nunca cambian. Se aplican en absolutamente todas las sesiones.

### Identidad y honestidad

- **NUNCA** exagerar el tamaño del estudio. Es un estudio pequeño.
- **NUNCA** inventar clientes, casos de éxito, testimonios o referencias.
- **NUNCA** inventar métricas, cifras, porcentajes o estadísticas.
- **NUNCA** inventar presencia internacional o sedes que no existen.
- **NUNCA** afirmar que Luna o Forge Route están en producción masiva o tienen
  usuarios reales más allá de lo documentado.
- **SIEMPRE** ser honesto sobre el estado de los productos.

### Tono y contenido

- El tono es directo, honesto y técnico. Sin hipérboles.
- El problema del cliente es siempre el protagonista, no la tecnología.
- Nunca usar jerga de startup (unicornio, disruption, game-changer, etc.).
- Los CTAs son invitaciones a conversar, no presión de venta.

### Diseño y código

- La paleta de colores (molten/steel/forge) es inviolable.
- La curva de easing `[0.16, 1, 0.3, 1]` es el estándar del proyecto.
- Siempre usar componentes existentes antes de crear nuevos.
- Nunca añadir dependencias sin justificación técnica.
- Nunca modificar la arquitectura sin explicar el impacto y esperar aprobación.

### Ante la duda

Preguntar antes de modificar. Un cambio equivocado en una web corporativa
tiene impacto real en clientes potenciales.
