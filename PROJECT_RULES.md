# PROJECT_RULES.md — Reglas de desarrollo de IDEA FORGE STUDIO

> Estas reglas son permanentes y se aplican en todas las sesiones de trabajo,
> independientemente de quién las ejecute. Su objetivo es garantizar que el
> proyecto se mantenga coherente, seguro, mantenible y de alta calidad durante
> años de evolución.

---

## 1. Estructura del código

### 1.1 Organización de archivos

- `app/` — Solo páginas (`.page.tsx`), layout raíz y `globals.css`.
  No colocar componentes aquí.
- `components/ui/` — Primitivos reutilizables sin lógica de negocio.
- `components/sections/` — Secciones de página. No reutilizables entre páginas.
- `components/product/` — Mockups visuales de productos propios. Solo para `/productos`.
- `lib/` — Datos, tipos y configuración global. Todo el contenido editable vive aquí.
- `public/` — Assets estáticos. Solo logos y archivos de configuración de servidor.

### 1.2 Nomenclatura

- **Componentes:** PascalCase → `HeroSection.tsx`, `ProductCard.tsx`
- **Archivos de datos:** camelCase → `services.ts`, `products.ts`
- **Archivos de configuración:** kebab-case → `tailwind.config.ts`
- **Rutas (carpetas en `app/`):** kebab-case → `sobre-nosotros/`, `politica-privacidad/`
- **Variables y funciones:** camelCase → `const siteConfig`, `function Button()`
- **Tipos TypeScript:** PascalCase → `type Service`, `type Product`, `type LogoVariant`
- **Constantes globales:** camelCase (arrays y objetos) → `const services`, `const nav`

### 1.3 Path aliases

Usar siempre `@/` para imports absolutos desde la raíz del proyecto:

```tsx
// Correcto
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

// Incorrecto
import { Button } from "../../components/ui/Button";
```

### 1.4 Exportaciones

- Usar named exports (no default) en componentes: `export function Button()`
- Usar default export solo para configuraciones de herramientas:
  `export default nextConfig`
- Exportar tipos con `export type` cuando corresponda

---

## 2. TypeScript

### 2.1 Modo estricto

El `tsconfig.json` tiene `"strict": true`. Ninguna regla de este bloque puede
desactivarse sin aprobación explícita.

### 2.2 Reglas

- **Sin `any` implícito.** Si el tipo no se conoce, usar `unknown` y narrowing.
- **Sin `@ts-ignore`** salvo casos excepcionales documentados con un comentario
  explicando por qué.
- **Sin `as` innecesario.** Si necesitas un cast frecuente, revisa la definición
  del tipo.
- **Props siempre tipadas.** Todos los componentes tienen su tipo de props explícito.
- **Tipos de retorno explícitos** para funciones de utilidad. En componentes React
  se infieren automáticamente.

### 2.3 Tipos del proyecto

Los tipos centrales viven en `lib/`:
- `Service` — en `lib/services.ts`
- `Product` — en `lib/products.ts`
- `LogoVariant` — en `components/Logo.tsx`

No duplicar estas definiciones. Importar desde su origen.

---

## 3. Componentes React

### 3.1 Server vs Client Components

**Regla por defecto: Server Component.** No añadir `"use client"` sin razón.

Añadir `"use client"` SOLO cuando el componente necesita:
- `useState`, `useEffect`, `useRef` u otros hooks de estado/ciclo de vida
- `usePathname`, `useRouter` u otros hooks de navegación
- `useReducedMotion` o `useInView` de Framer Motion
- Event listeners del DOM (`onClick` no basta — `<button onClick>` funciona en
  Server Components si el handler está en un Client Component hijo)
- APIs del browser (`window`, `document`, `localStorage`)

### 3.2 Composición

- Preferir composición sobre herencia.
- Preferir props explícitas sobre context cuando el árbol es pequeño.
- No crear variantes de componentes sin antes revisar si el componente existente
  puede extenderse con props nuevas.

### 3.3 Animaciones

- Toda animación usa Framer Motion con `useReducedMotion()`.
- Si `reduce === true`, no hay movimiento (opacity puede mantenerse si es necesario).
- La curva estándar es `[0.16, 1, 0.3, 1]`. No inventar curvas nuevas.
- Duración estándar de transiciones de contenido: 0.6s.
- Los `Reveal` tienen `viewport={{ once: true }}` — se animan una sola vez.

### 3.4 Accesibilidad

- Todo elemento interactivo tiene texto accesible (`aria-label` si el texto
  visible no es suficiente).
- Navegación por teclado: los botones y links son focusables.
- El focus visible usa el outline estándar del proyecto (naranja molten 2px).
- `aria-hidden` en todos los elementos puramente decorativos.
- Imágenes con `alt` descriptivo siempre (vacío `alt=""` para decorativas).

---

## 4. Estilos (Tailwind)

### 4.1 Principios

- Usar clases de Tailwind en el JSX. No crear CSS custom excepto en `globals.css`
  para patrones que Tailwind no puede representar.
- No usar estilos en línea (`style={}`) para estilos estáticos. Solo para valores
  dinámicos calculados en JS (gradientes con variables, posiciones calculadas).
- No crear `className` en `globals.css` para un componente específico. Eso rompe
  el principio de colocation.

### 4.2 Colores

Solo usar los tokens del sistema de diseño:
- `molten`, `molten-spark`, `molten-deep`, `molten-ember`
- `steel-100`, `steel-300`, `steel-500`, `steel-700`
- `forge-900`, `forge-800`, `forge-700`, `forge-600`, `forge-500`

No usar colores de Tailwind por defecto (`blue-500`, `gray-700`, etc.) salvo
justificación documentada.

### 4.3 Responsive

Mobile-first siempre. El CSS sin prefijo de breakpoint es para mobile.

```tsx
// Correcto (mobile-first)
className="text-2xl md:text-4xl lg:text-5xl"

// Incorrecto (desktop-first)
className="text-5xl lg:text-5xl md:text-4xl"
```

### 4.4 Clases custom en globals.css

Solo añadir clases custom en `globals.css` si:
1. Tailwind no puede generar el estilo equivalente.
2. El patrón se usa en más de 3 lugares.
3. Está documentado con un comentario de propósito.

Las clases actuales son: `.forge-rule`, `.text-molten-gradient`,
`.text-steel-gradient`, `.bg-blueprint`, `.legal`.

---

## 5. Contenido y datos

### 5.1 Fuente única de verdad

Todo el contenido editable del sitio vive en `lib/`:
- `lib/site.ts` — Nombre, tagline, email, navegación, links legales.
- `lib/services.ts` — Los 8 servicios.
- `lib/products.ts` — Los 2 productos.

**NUNCA hardcodear** en componentes texto que pertenece a `lib/`.

### 5.2 Integridad del contenido

- No inventar clientes, testimonios, métricas o casos de éxito no verificados.
- No modificar el estado de Luna o Forge Route sin confirmación del usuario.
- No añadir servicios o productos que no existan realmente.

### 5.3 Metadata y SEO

- Cada página debe tener su propia exportación `metadata` con `title` y
  `description` únicos.
- El `title` sigue el template `%s · Idea Forge Studio`.
- La `description` debe tener entre 120 y 160 caracteres.
- `metadataBase` está configurado en el layout raíz; no duplicarlo en las páginas.

---

## 6. Rendimiento

### 6.1 Bundle size

- No añadir dependencias grandes sin justificar el impacto en el bundle.
- Antes de instalar un paquete, evaluar si la funcionalidad puede conseguirse
  con las dependencias existentes o con código nativo.
- Las dependencias actuales son las mínimas necesarias. Mantenerlas así.

### 6.2 Imágenes

- Siempre usar el componente `<Logo>` en lugar de `<img>` o `<Image>` directo
  para los assets del logo.
- Los logos tienen `priority` cuando están above-the-fold.
- No añadir imágenes en `public/` sin comprimir primero. Objetivo: < 100KB por imagen.
- Si en el futuro se añaden imágenes de contenido (no logos), evaluar habilitar
  Cloudflare Image Optimization y eliminar `unoptimized: true`.

### 6.3 Fuentes

- Las 4 fuentes del proyecto tienen `display: "swap"`. No cambiar esto.
- No añadir fuentes adicionales sin aprobación. Cada fuente nueva es una petición
  de red adicional.

### 6.4 Generación estática

Todas las páginas deben ser estáticas (SSG). No añadir `dynamic = 'force-dynamic'`,
`export const revalidate` ni ningún mecanismo de rendering dinámico sin una razón
de peso documentada. La ventaja principal de este proyecto es su cero latencia de
servidor. Este proyecto usa App Router (Next.js 15); `getServerSideProps` no existe
en este contexto.

---

## 7. Seguridad

### 7.1 Sin secrets en el código

No commitear claves de API, tokens, contraseñas ni credentials en ningún archivo.
El proyecto no necesita variables de entorno actualmente. Si en el futuro se
necesitan, usar Cloudflare Workers Secrets, nunca archivos `.env` commiteados.

### 7.2 Cabeceras HTTP

El archivo `public/_headers` debe incluir al menos:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### 7.3 Links externos

Si se añaden links a recursos externos, usar siempre `rel="noopener noreferrer"`
en los `<a target="_blank">`.

### 7.4 Inputs y formularios

El sitio no tiene formularios actualmente. Si en el futuro se añaden:
- Validar en cliente Y en servidor.
- Nunca confiar en el input del usuario sin sanitizar.
- Actualizar la Política de Privacidad antes de activar cualquier formulario.

---

## 8. Despliegue

### 8.1 Antes de hacer push a main

Verificar localmente:
- [ ] `npm run build` completa sin errores
- [ ] `npm run preview` funciona y el site se ve correcto
- [ ] No hay errores de TypeScript (`npx tsc --noEmit`)
- [ ] Los cambios visuales se han revisado en mobile y desktop

### 8.2 Commits

- Usar mensajes de commit descriptivos en español o inglés (coherente con el historial).
- Un commit por cambio lógico. No mezclar features con fixes en el mismo commit.
- No commitear `.open-next/`, `.wrangler/`, `node_modules/` ni `.env`.

### 8.3 Rama principal

- La rama principal es `main`.
- No hacer push directo de cambios grandes sin revisar el build.
- Todo push a `main` desencadena un despliegue automático en Cloudflare.

### 8.4 Rollback

Si un despliegue rompe el sitio:
1. Cloudflare Workers permite hacer rollback desde el panel a una versión anterior.
2. También se puede hacer `git revert` del commit problemático y volver a hacer push.

---

## 9. Revisión antes de publicar cambios de contenido

Antes de modificar cualquier texto visible en producción, verificar:

- [ ] El texto es honesto y no exagera capacidades.
- [ ] No se han inventado clientes, métricas ni cifras.
- [ ] El estado de Luna y Forge Route es el correcto.
- [ ] El tono sigue las guías de `BRAND.md`.
- [ ] Los CTAs apuntan a URLs existentes.
- [ ] La ortografía y gramática son correctas.
- [ ] Los textos en `lib/` son la fuente (no hay duplicados en componentes).

---

## 10. Revisión antes de añadir un componente nuevo

Antes de crear un componente nuevo, responder estas preguntas:

1. ¿Existe ya un componente que pueda extenderse con nuevas props?
2. ¿Se usará en más de un lugar? (Si no, tal vez no necesita ser componente)
3. ¿Va en `ui/` (primitivo reutilizable) o en `sections/` (sección de página)?
4. ¿Necesita `"use client"`? Si sí, ¿por qué?
5. ¿Las props están bien tipadas en TypeScript?
6. ¿Respeta el sistema de diseño (colores, fuentes, espaciados)?
7. ¿Tiene animaciones? ¿Respetan `prefers-reduced-motion`?

---

## 11. Revisión antes de añadir una dependencia

Antes de instalar cualquier paquete nuevo (`npm install X`):

1. ¿Qué problema resuelve que no está resuelto ya?
2. ¿Cuánto pesa? (revisar en bundlephobia.com)
3. ¿Está mantenido activamente? (ver última publicación en npm)
4. ¿Tiene TypeScript types incluidos o en `@types/`?
5. ¿Es compatible con Next.js 15 y React 19?
6. ¿Es compatible con Cloudflare Workers (no puede usar APIs Node.js no disponibles)?

Si la respuesta a alguna de estas preguntas genera dudas, no instalar sin aprobación.

---

## 12. Reglas que nunca cambian

Estas reglas son inviolables sin aprobación explícita del propietario del proyecto:

1. **Sin backend.** Si se necesita backend, es una decisión arquitectónica mayor.
2. **Sin formularios activos.** Mientras no haya backend, sin formularios.
3. **Sin analytics que violen privacidad.** Solo analytics de privacy-first.
4. **Sin colores fuera del sistema de diseño.**
5. **Sin fuentes fuera del sistema tipográfico.**
6. **Sin inventar contenido.** Nunca.
7. **Sin modificar páginas legales sin aprobación del propietario.**
8. **Sin cambios de arquitectura sin documentar en `CLAUDE.md` y registrar la decisión en `DECISIONS.md`.**
