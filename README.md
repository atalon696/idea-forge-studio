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
