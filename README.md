# IDEA FORGE STUDIO — Web corporativa

Estudio de desarrollo de software a medida. Web premium, oscura e industrial.
_Construimos software a medida para resolver problemas reales._

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (tokens de marca) + **Framer Motion**
- Logos oficiales recortados en `/public` + componente `Logo` con `next/image`

## Arrancar

```bash
npm install
npm run dev      # http://localhost:3000
```

Producción: `npm run build && npm start`

## Páginas

| Ruta                   | Página                              |
| ---------------------- | ----------------------------------- |
| `/`                    | Home                                |
| `/servicios`           | Servicios (protagonista)            |
| `/productos`           | Productos propios (Luna, Forge Route) |
| `/sobre-nosotros`      | Estudio                             |
| `/contacto`            | Contacto (solo email, sin formulario) |
| `/politica-privacidad` | Política de Privacidad              |
| `/aviso-legal`         | Aviso Legal                         |
| `/cookies`             | Política de Cookies                 |

## Contacto

La web **no tiene formulario ni backend**: el contacto es directo por correo
(`mailto:`) a **ideasforgestudio@gmail.com**. No se recogen ni almacenan datos.
Si en el futuro quieres añadir un formulario, habrá que reintroducir el endpoint
y actualizar la Política de Privacidad antes de activarlo.

## Protección de datos

- Páginas legales en `/politica-privacidad`, `/aviso-legal`, `/cookies`, enlazadas
  desde el pie de página.
- La Política de Privacidad refleja que el sitio es informativo y **no recoge datos
  por formularios**; el contacto es por email.
- Las páginas legales son **provisionales** (proyecto en fase de lanzamiento): no contienen datos ficticios. Se sustituirán por las definitivas cuando la empresa quede formalmente constituida.

## Personalización

- Contenido: `lib/site.ts`, `lib/services.ts`, `lib/products.ts`.
- Logos: `/public/logo-hero.png`, `/public/logo-navbar.png`, `/public/isotipo.png`.
- Tokens de diseño: `tailwind.config.ts` y `app/globals.css`.

## Despliegue en Cloudflare Workers (OpenNext)

El proyecto está adaptado con el adaptador oficial **`@opennextjs/cloudflare`** (OpenNext sobre Workers). Archivos de infraestructura: `wrangler.jsonc`, `open-next.config.ts`, `public/_headers` y los scripts `preview`/`deploy` en `package.json`.

### Desde GitHub, sin pasos manuales

1. Sube el repositorio a GitHub (con `wrangler.jsonc`, `open-next.config.ts` y `package.json` incluidos; `.open-next` está en `.gitignore` y se regenera en cada build).
2. En el panel de Cloudflare: **Workers & Pages → Create → Workers → Import a repository** y conecta el repo.
3. Configura los comandos del build:
   - **Build command:** `npx opennextjs-cloudflare build`
   - **Deploy command:** `npx wrangler deploy` (valor por defecto)
4. Cloudflare detecta Next.js, ejecuta `next build`, OpenNext lo transforma en un Worker y lo despliega. Cada `push` a la rama principal vuelve a desplegar automáticamente.

> Importante: deja `wrangler.jsonc` y `open-next.config.ts` en el repo. Así Cloudflare usa tu configuración en lugar de autogenerar una que podría entrar en conflicto.

### Desde tu máquina (opcional)

```bash
npx wrangler login                 # una sola vez
npm run preview                    # build + previsualización en el runtime de Workers (local)
npm run deploy                     # build + despliegue a Cloudflare
```

### Notas técnicas

- Runtime **Node.js** (no edge): `nodejs_compat` activado en `wrangler.jsonc`. No existe `export const runtime = "edge"` en el proyecto.
- `next/image` con `images.unoptimized: true`: los logos se sirven como assets estáticos, sin necesitar el binding de Cloudflare Images.
- Todas las páginas son estáticas; no hay backend, API ni variables de entorno requeridas en runtime.
