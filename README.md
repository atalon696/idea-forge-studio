# IDEA FORGE STUDIO — Web corporativa

> Estudio de desarrollo de software a medida.
> Construimos software a medida para resolver problemas reales.

---

## Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | ^15.1.6 | Framework principal (App Router) |
| React | ^19.0.0 | UI |
| TypeScript | ^5.7.0 | Lenguaje (strict mode) |
| Tailwind CSS | ^3.4.17 | Estilos y sistema de diseño |
| Framer Motion | ^11.18.0 | Animaciones |
| OpenNext Cloudflare | ^1.0.0 | Adaptador para Cloudflare Workers |
| Wrangler | ^4.0.0 | CLI de Cloudflare Workers |

**Plataforma de despliegue:** Cloudflare Workers
**Entorno de desarrollo:** Node.js ≥ 20 LTS recomendado

---

## Requisitos previos

- **Node.js** ≥ 20 LTS ([nodejs.org](https://nodejs.org))
- **npm** ≥ 10 (incluido con Node.js 20)
- **Git**
- Una cuenta de **Cloudflare** (solo para despliegue)

---

## Instalación y desarrollo local

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd idea-forge-studio

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

> El servidor de desarrollo usa `next dev` estándar con integración opcional
> de los bindings de Cloudflare (via `initOpenNextCloudflareForDev()` en
> `next.config.mjs`). No requiere ninguna configuración adicional para desarrollo.

---

## Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| `dev` | `next dev` | Servidor de desarrollo local (http://localhost:3000) |
| `build` | `next build` | Build de Next.js (sin adaptador Cloudflare) |
| `start` | `next start` | Servidor de producción local (tras `build`) |
| `lint` | `next lint` | Linter ESLint |
| `preview` | `opennextjs-cloudflare build && opennextjs-cloudflare preview` | Build + preview local en runtime de Workers |
| `deploy` | `opennextjs-cloudflare build && opennextjs-cloudflare deploy` | Build + despliegue a Cloudflare producción |
| `upload` | `opennextjs-cloudflare build && opennextjs-cloudflare upload` | Build + upload sin desplegar |
| `cf-typegen` | `wrangler types ...` | Genera tipos TypeScript para bindings de Cloudflare |

---

## Estructura del proyecto

```
idea-forge-studio/
├── app/                          # Next.js App Router — páginas y layout
│   ├── layout.tsx               # Layout raíz (Navbar, Footer, fuentes, metadata)
│   ├── page.tsx                 # Página de inicio (/)
│   ├── globals.css              # Estilos globales (Tailwind layers + clases custom)
│   ├── servicios/page.tsx       # Servicios (/servicios)
│   ├── productos/page.tsx       # Productos (/productos)
│   ├── sobre-nosotros/page.tsx  # Estudio (/sobre-nosotros)
│   ├── contacto/page.tsx        # Contacto (/contacto)
│   ├── politica-privacidad/page.tsx
│   ├── aviso-legal/page.tsx
│   └── cookies/page.tsx
│
├── components/
│   ├── Navbar.tsx               # Header fijo con menú responsive
│   ├── Footer.tsx               # Pie de página con links
│   ├── Logo.tsx                 # Componente de logo (3 variantes)
│   ├── sections/                # Secciones completas de páginas
│   │   ├── Hero.tsx            # Hero animado de la home
│   │   ├── PageHero.tsx        # Hero para páginas interiores
│   │   ├── Problemas.tsx       # Sección de problemas del cliente
│   │   ├── WhatWeBuild.tsx     # Qué construimos
│   │   ├── ComoTrabajamos.tsx  # Cómo trabajamos
│   │   ├── ProductShowcase.tsx # Grid de productos (home)
│   │   ├── CTA.tsx             # Bloque call-to-action
│   │   ├── SectionHeading.tsx  # Encabezado de sección reutilizable
│   │   └── LegalShell.tsx      # Wrapper para páginas legales
│   ├── product/                 # Mockups visuales de productos
│   │   ├── LunaMockup.tsx
│   │   └── ForgeRouteMockup.tsx
│   └── ui/                      # Primitivos reutilizables
│       ├── Button.tsx           # Botón polimórfico (link/button, 3 variantes)
│       ├── Container.tsx        # Wrapper de ancho máximo (1120px)
│       ├── Eyebrow.tsx          # Label pequeño para encabezados
│       ├── Reveal.tsx           # Animaciones scroll-triggered
│       └── EmberField.tsx       # Efecto de partículas (brasas)
│
├── lib/                          # Datos centralizados (fuente de verdad)
│   ├── site.ts                  # Config global: nombre, email, nav, links
│   ├── services.ts              # 8 servicios definidos
│   └── products.ts              # 2 productos (Luna, Forge Route)
│
├── public/                       # Assets estáticos
│   ├── logo-hero.png            # Logo completo para hero (886×513px)
│   ├── logo-navbar.png          # Logo horizontal para navbar (1510×235px)
│   ├── isotipo.png              # Isotipo/marca (347×401px)
│   └── _headers                 # Cabeceras HTTP de Cloudflare
│
├── CLAUDE.md                     # Memoria técnica completa del proyecto
├── BRAND.md                      # Identidad de marca y tono de voz
├── PROJECT_CONTEXT.md            # Contexto estratégico del negocio
├── DECISIONS.md                  # Registro permanente de decisiones del proyecto
├── CHANGELOG_AI.md               # Historial de cambios de Claude
├── PROJECT_RULES.md              # Reglas de desarrollo
├── next.config.mjs               # Configuración de Next.js
├── tailwind.config.ts            # Sistema de diseño (tokens de color, etc.)
├── tsconfig.json                 # TypeScript (strict mode, path aliases)
├── wrangler.jsonc                # Cloudflare Workers (entry point, compat flags)
├── open-next.config.ts           # Adaptador OpenNext
├── postcss.config.mjs            # PostCSS
└── package.json                  # Dependencias y scripts
```

---

## Páginas

| Ruta | Página |
|---|---|
| `/` | Home |
| `/servicios` | Servicios (los 8 servicios del estudio) |
| `/productos` | Productos propios (Luna, Forge Route) |
| `/sobre-nosotros` | Sobre el estudio |
| `/contacto` | Contacto (email directo, sin formulario) |
| `/politica-privacidad` | Política de privacidad (provisional) |
| `/aviso-legal` | Aviso legal (provisional) |
| `/cookies` | Política de cookies (provisional) |

---

## Personalización del contenido

Todo el contenido editable del sitio está centralizado en `lib/`:

- **Datos del sitio** (nombre, email, tagline, navegación): `lib/site.ts`
- **Servicios**: `lib/services.ts`
- **Productos**: `lib/products.ts`
- **Tokens de diseño** (colores, fuentes, tamaños): `tailwind.config.ts`
- **Estilos globales**: `app/globals.css`
- **Logos**: `public/logo-hero.png`, `public/logo-navbar.png`, `public/isotipo.png`

---

## Despliegue en Cloudflare Workers

El proyecto usa el adaptador oficial `@opennextjs/cloudflare` (OpenNext).

### Despliegue automático via GitHub (recomendado)

1. Sube el repositorio a GitHub. Los archivos `wrangler.jsonc` y
   `open-next.config.ts` deben estar incluidos. El directorio `.open-next/`
   está en `.gitignore` y se regenera en cada build.

2. En el panel de Cloudflare: **Workers & Pages → Create → Workers →
   Import a repository** y conecta el repo.

3. Configura los comandos de build:
   - **Build command:** `npx opennextjs-cloudflare build`
   - **Deploy command:** `npx wrangler deploy`

4. A partir de aquí, cada `push` a `main` desencadena un build y despliegue
   automático. No se requieren pasos manuales.

### Despliegue manual desde local

```bash
# Autenticarse en Cloudflare (solo la primera vez)
npx wrangler login

# Preview local en el runtime de Cloudflare Workers
npm run preview

# Despliegue a producción
npm run deploy
```

### Notas técnicas del despliegue

- **Runtime:** Node.js (no edge). El flag `nodejs_compat` está activado en
  `wrangler.jsonc`.
- **Imágenes:** `next/image` con `unoptimized: true`. Los logos se sirven
  como assets estáticos sin necesitar Cloudflare Images.
- **Páginas estáticas:** Todas las páginas son SSG. No hay backend, API routes
  ni variables de entorno en runtime.
- **No hay `export const runtime = "edge"`** en ninguna página del proyecto.

---

## Contacto

El sitio no tiene formulario ni backend. El contacto es directo por correo:

**ideasforgestudio@gmail.com**

Si en el futuro se añade un formulario, será necesario:
1. Añadir un endpoint de backend (Cloudflare Workers function, o servicio externo).
2. Actualizar la Política de Privacidad antes de activarlo.

---

## Protección de datos

- El sitio es informativo. No recoge datos por formularios.
- Las páginas legales en `/politica-privacidad`, `/aviso-legal` y `/cookies`
  están enlazadas desde el footer.
- Las páginas legales son **provisionales** y se actualizarán cuando la empresa
  quede formalmente constituida.

---

## Documentación técnica

| Documento | Contenido |
|---|---|
| `CLAUDE.md` | Arquitectura, tecnologías, componentes, convenciones y reglas permanentes |
| `BRAND.md` | Identidad de marca, tono, voz y principios de comunicación |
| `PROJECT_CONTEXT.md` | Contexto estratégico del negocio (visión, clientes, principios, objetivos) |
| `DECISIONS.md` | Registro permanente de decisiones históricas del proyecto |
| `PROJECT_RULES.md` | Reglas de desarrollo, estándares de código y checklist de despliegue |
| `CHANGELOG_AI.md` | Historial de modificaciones realizadas por Claude |
