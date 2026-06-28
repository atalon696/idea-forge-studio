# PROJECT_CONTEXT.md — Contexto estratégico del proyecto

> Este documento recoge el conocimiento estratégico del proyecto que no puede
> deducirse leyendo el código. No contiene información técnica.
>
> Es una plantilla viva. Las secciones marcadas con `[PENDIENTE DE DEFINIR]`
> deben ser completadas por el propietario del proyecto. Las secciones sin esa
> marca contienen únicamente información verificable: extraída del código,
> del contenido real del sitio, o indicada explícitamente en sesiones anteriores.
>
> **Regla:** No inventar. Si algo no es verificable, marcarlo como pendiente.
> Cuando se complete, este documento será la referencia estratégica definitiva.
>
> **No duplica:** CLAUDE.md (arquitectura), BRAND.md (tono y voz),
> PROJECT_RULES.md (reglas técnicas), DECISIONS.md (decisiones específicas).

---

## 1. Identidad del estudio

### Qué somos

IDEA FORGE STUDIO es un estudio pequeño de desarrollo de software a medida.
El negocio principal es diseñar y construir software personalizado para empresas
que tienen un problema operativo real y no encuentran una solución adecuada en el
mercado.

**Fuente verificable:** `lib/site.ts` y `app/layout.tsx` (descripción del sitio),
declaración explícita del propietario.

### Lo que nos define

Estos rasgos han sido indicados explícitamente y nunca deben cuestionarse:

- **Somos pequeños.** No hay que fingir ni exagerar el tamaño del estudio.
- **Somos honestos.** Si no podemos ayudar a un cliente, se lo decimos.
- **No inventamos nada.** Cero clientes ficticios, cero métricas fabricadas,
  cero presencia internacional falsa, cero cifras sin verificar.
- **Construimos software real.** No vendemos promesas. Luna y Forge Route son
  demostraciones reales de capacidad técnica, no conceptos imaginarios.
- **Trabajamos con el cliente.** "Si existe un problema, trabajamos contigo para
  encontrar la mejor solución." (texto del Hero, verificable en `Hero.tsx`)

### Tagline oficial

> "Donde las ideas se transforman en soluciones."

**Fuente verificable:** `lib/site.ts` → campo `tagline`.

---

## 2. Origen del estudio

`[PENDIENTE DE DEFINIR]`

*¿Cómo surgió Idea Forge Studio? ¿Cuándo y en qué circunstancias se fundó?
¿Qué problema personal o profesional motivó su creación? ¿Hubo un primer
proyecto o cliente que lo impulsó?*

*Esta sección es importante para que cualquier colaborador entienda el contexto
humano del estudio, no solo el técnico.*

---

## 3. Visión a largo plazo

`[PENDIENTE DE DEFINIR]`

*¿Qué quieres que sea Idea Forge Studio en 5 años? ¿Un estudio pequeño pero
muy selecto? ¿Un estudio que crece con un equipo mayor? ¿Una empresa que
también comercializa productos propios? ¿Una referencia en un nicho específico?*

*Definir esto ayuda a Claude a entender si una propuesta de cambio apunta en la
dirección correcta o la contradice.*

---

## 4. Principios irrenunciables

Estos principios han sido declarados explícitamente y se aplican sin excepción.
No están sujetos a debate ni a "depende del contexto".

### 4.1 Honestidad radical

No se exagera el tamaño del estudio. No se inventan clientes. No se fabrican
cifras. No se afirma tener presencia en países donde no la hay. Si un cliente
pide algo que el estudio no puede hacer bien, se le dice.

Esta postura no es solo ética: es una ventaja competitiva. Un cliente que elige
a alguien que le dice la verdad confía más y vuelve.

### 4.2 El problema del cliente antes que la solución

Nunca se propone tecnología antes de entender el problema. La frase que lo resume,
extraída del contenido real del sitio:

> "Entiende primero, construye después."

### 4.3 La tecnología sirve al negocio, no al revés

El cliente no compra React, TypeScript ni arquitecturas de microservicios. Compra
que su equipo deja de hacer cosas a mano, que su proceso funciona, que su negocio
crece. La tecnología es el medio, no el mensaje.

### 4.4 Trato directo

El cliente habla con quien construye el software. No hay intermediarios, gestores
de cuenta ni comerciales. Esta es una promesa implícita del estudio y nunca debe
romperse añadiendo capas de intermediación entre el cliente y el equipo técnico.

**Fuente verificable:** Declaración explícita del propietario. Reflejado en el
contenido del sitio (BRAND.md §8: "Que el contacto sea directo con los que construyen").

---

## 5. Percepción buscada

Cuando un cliente potencial visita el sitio o tiene una primera conversación con
el estudio, debe percibir:

- **Competencia técnica real.** No hay que explicarla con listas de tecnologías;
  se demuestra con el software que se ha construido.
- **Honestidad sin adornos.** Sin promesas vacías, sin hipérboles, sin métricas
  que impresionen pero no signifiquen nada.
- **Personas, no una empresa abstracta.** El cliente debe sentir que habla con
  alguien que va a entender su problema y construir algo para él, no con un
  proceso de ventas industrial.
- **Selección mutua.** El estudio no acepta cualquier proyecto. Eso implica que
  cuando acepta uno, es porque puede hacerlo bien.

**Fuente verificable:** CLAUDE.md §1, BRAND.md §8, contenido de `Hero.tsx`.

---

## 6. Clientes que buscamos

### Perfil verificado

Los clientes objetivo son gerentes, directores de operaciones y responsables de
IT de **empresas medianas** que:

- Tienen un **problema operativo real**: un proceso que falla, sistemas que no se
  hablan, trabajo manual que consume tiempo del equipo.
- No han encontrado una solución adecuada en el mercado de software genérico.
- Están dispuestos a invertir en una solución a medida porque entienden que el
  mercado no les da lo que necesitan.

**Fuente verificable:** CLAUDE.md §1, BRAND.md §8, contenido de `lib/services.ts`
(campo `when` de cada servicio define la situación del cliente objetivo).

### Lo que el cliente ideal tiene claro

- Tiene un problema concreto, no una idea vaga de "quiero digitalizarme".
- Entiende que una solución a medida requiere tiempo y presupuesto real.
- Valora la honestidad por encima del marketing.
- Quiere hablar con quien va a construir, no con intermediarios.

### Perfil pendiente de definir

`[PENDIENTE DE DEFINIR]`

*¿Hay sectores o industrias prioritarias donde el estudio quiere posicionarse
(logística, salud, industria, retail...)? ¿Hay un tamaño mínimo o máximo de
empresa que sea el objetivo? ¿Hay preferencia por proyectos de larga duración
(mantenimiento, evolución continua) o por proyectos de entrega puntual?*

---

## 7. Clientes que NO buscamos

### Verificado explícitamente

- **Desarrolladores buscando código.** El sitio no está orientado a perfiles
  técnicos que quieren subcontratar horas de desarrollo.
- **Startups en busca de inversión.** No se construyen MVPs para presentar a
  inversores. El foco es en empresas con operaciones reales, no en startups en
  fase de idea.

**Fuente verificable:** CLAUDE.md §1: "No es una web para desarrolladores. No es
una web para startups en busca de rondas de inversión."

### Pendiente de definir

`[PENDIENTE DE DEFINIR]`

*¿Hay tipos de cliente con los que el estudio haya decidido no trabajar por
experiencia o convicción? Por ejemplo: clientes que solo buscan precio mínimo,
clientes sin presupuesto definido, clientes que quieren el software para uso
cuestionable, etc.*

---

## 8. Proyectos que hacemos

### Los 8 servicios verificados

La definición completa de cada servicio vive en `lib/services.ts`. Los tipos de
proyecto que el estudio construye son:

1. **Aplicaciones web** — Plataformas y portales donde centralizar información
   o digitalizar procesos.
2. **Aplicaciones móviles** — Para trabajo en campo, almacén, reparto o cualquier
   contexto donde el trabajo ocurre fuera de la oficina.
3. **Plataformas empresariales** — Sistemas centrales que sostienen la operación
   diaria: pedidos, clientes, inventario, procesos críticos.
4. **Automatización de procesos** — Eliminar trabajo repetitivo manual que siempre
   se hace igual.
5. **Integraciones con sistemas existentes** — Hacer que aplicaciones que ya se
   usan compartan información sin intervención manual.
6. **Herramientas internas** — Software que el mercado no vende porque es
   demasiado específico para ese negocio.
7. **Inteligencia Artificial** — Solo cuando aporta de verdad (ver §10).
8. **Soluciones completamente personalizadas** — Cuando la necesidad no encaja
   en ninguna categoría y hay que partir del problema desde cero.

**Fuente verificable:** `lib/services.ts` — datos reales del sitio.

### Lo que caracteriza un buen proyecto para el estudio

- Hay un **problema real** detrás, no un capricho tecnológico.
- El cliente **no puede resolverlo** con software genérico del mercado.
- La solución **aporta valor mensurable** al negocio del cliente (tiempo, dinero,
  calidad, fiabilidad).
- El cliente está dispuesto a **colaborar en la definición** del problema antes
  de construir.

---

## 9. Proyectos que no hacemos

### Parcialmente verificado

- **Proyectos donde la IA se añade porque está de moda.** La IA se usa solo
  cuando aporta de verdad. Si no aporta, se dice con franqueza.
  **Fuente verificable:** `lib/services.ts` → servicio "Inteligencia Artificial":
  *"Y si en tu caso no aporta, te lo decimos con franqueza."*

- **Proyectos donde hay que inventar clientes o métricas para justificar el
  trabajo.** Si el valor no es demostrable con honestidad, no es un proyecto
  para este estudio.

### Pendiente de definir

`[PENDIENTE DE DEFINIR]`

*¿Hay tipos de proyecto que el estudio rechaza de forma activa? Por ejemplo:
proyectos de puro mantenimiento sin evolución, proyectos en sectores concretos,
proyectos por debajo de cierto presupuesto, proyectos con plazos irreales,
proyectos donde el cliente quiere controlar cada decisión técnica sin margen
para opinar, proyectos donde el software podría usarse de forma cuestionable
éticamente...*

---

## 10. Cómo usamos la Inteligencia Artificial

### Postura verificada

La postura del estudio con la IA está declarada explícitamente en el contenido
del sitio y es irrenunciable:

> "Aplicamos inteligencia artificial únicamente donde aporta: anticipar una
> demanda, ordenar y clasificar información, ayudar a decidir. Y si en tu caso
> no aporta, te lo decimos con franqueza."

**Fuente verificable:** `lib/services.ts` → servicio "Inteligencia Artificial".

### Qué implica en la práctica

- No se propone IA por defecto en ningún proyecto.
- Antes de proponer IA, se analiza si hay datos suficientes y si el problema
  se beneficia de predicción, clasificación o decisión automatizada.
- Si la IA no aporta en un caso concreto, se comunica con claridad al cliente.
- La IA es una herramienta dentro del catálogo de servicios, no el argumento
  de venta principal del estudio.

---

## 11. Decisiones de negocio que deben respetarse siempre

Estas decisiones están tomadas y no deben cuestionarse sin aprobación explícita
del propietario del proyecto. Las razones técnicas de cada una están en
`DECISIONS.md`.

| Decisión | Estado | Ver |
|---|---|---|
| Sin formularios en el sitio | Activa | DECISIONS.md DEC-003 |
| Sin backend en el sitio | Activa | DECISIONS.md DEC-003 |
| El contacto es por email directo | Activa | DECISIONS.md DEC-003 |
| Luna se presenta como "En validación" | Activa | DECISIONS.md DEC-008 |
| Forge Route se presenta como "Uso interno" | Activa | DECISIONS.md DEC-009 |
| Sin métricas, clientes o cifras no verificadas | Activa | Este documento §4.1 |
| Las páginas legales son provisionales | Activa | README.md |

---

## 12. Qué nunca debe asumir Claude

Estas son las suposiciones prohibidas. Si Claude no tiene información explícita
sobre alguna de estas cuestiones, debe preguntar antes de actuar.

### Sobre el tamaño y la trayectoria

- **No asumir que el estudio tiene clientes anteriores documentados.** A menos que
  el propietario lo indique, no existe ningún historial de clientes publicable.
- **No asumir que el estudio tiene equipo más allá de lo indicado.** "Estudio
  pequeño" es la descripción oficial. No inventar ni insinuar un equipo numeroso.
- **No asumir presencia geográfica.** Sin información explícita, no mencionar
  ciudades, países ni "presencia internacional".

### Sobre los productos

- **No asumir que Luna tiene usuarios activos más allá de "usuarias reales en
  validación".** Eso es lo único verificable.
- **No asumir que Forge Route está disponible para clientes externos.** Su estado
  es "Uso interno".
- **No añadir features a los productos** que no estén en `lib/products.ts`.
- **No afirmar disponibilidad en App Store, Google Play ni ninguna plataforma**
  para Luna, a menos que el propietario lo confirme.

### Sobre el negocio

- **No asumir que el estudio busca crecer rápido.** La filosofía es calidad sobre
  volumen.
- **No asumir que el estudio quiere comercializar sus productos propios como SaaS.**
  Eso no está decidido.
- **No proponer añadir testimonios, casos de éxito o logotipos de clientes**
  al sitio sin que el propietario los proporcione explícitamente.

### Sobre el contenido

- **No escribir métricas que "suenen bien" sin respaldo real.** Ni porcentajes,
  ni "más de X clientes", ni "X años de experiencia".
- **No inferir el precio o modelo de negocio** del estudio a partir del sitio.
  Esa información no existe en el código y no debe inventarse.

---

## 13. Cambios que siempre requieren aprobación explícita

Antes de ejecutar cualquiera de estos cambios, Claude debe describirlo, justificarlo
y esperar confirmación del propietario. No son cambios que puedan hacerse "de
forma razonable" sin preguntar.

### Cambios de contenido

- Modificar el tagline o la descripción del estudio.
- Cambiar el estado de Luna o Forge Route.
- Añadir, eliminar o reformular alguno de los 8 servicios.
- Añadir cualquier afirmación sobre clientes, proyectos o resultados.
- Modificar las páginas legales (política de privacidad, aviso legal, cookies).

### Cambios de arquitectura y diseño

- Añadir un formulario de contacto (implica backend y actualización legal).
- Añadir un backend o API routes al sitio.
- Cambiar la plataforma de despliegue.
- Añadir nuevas dependencias de terceros.
- Modificar la paleta de colores del sistema de diseño.
- Añadir o eliminar páginas del sitio.

### Cambios de estrategia

- Añadir un tercer producto propio.
- Modificar el público objetivo del sitio.
- Cambiar el canal de contacto principal.
- Introducir cualquier métrica, testimonio o logo de cliente.

---

## 14. Objetivos del proyecto

### Objetivo verificado del sitio web

El objetivo de la web está documentado en CLAUDE.md §1:

> "Generar contactos de calidad: empresas con un problema real listas para invertir
> en una solución personalizada. El éxito de la web se mide en conversaciones
> iniciadas, no en tráfico."

### Objetivos de negocio a corto plazo

`[PENDIENTE DE DEFINIR]`

*¿Cuántos proyectos simultáneos se pueden gestionar? ¿Hay un objetivo de ingresos
para el primer año? ¿Hay algún sector en el que se quiera conseguir el primer
proyecto de referencia?*

### Objetivos de negocio a medio plazo (1-3 años)

`[PENDIENTE DE DEFINIR]`

*¿Se quiere mantener el tamaño actual o crecer con nuevas personas? ¿Hay planes
de constituir formalmente la empresa y en qué plazo? ¿Se contempla comercializar
Luna o Forge Route como productos independientes?*

### Objetivos a largo plazo (3+ años)

`[PENDIENTE DE DEFINIR]`

*¿Cómo quieres que sea Idea Forge Studio en 5 años? ¿Un estudio más grande,
un estudio pequeño pero muy selecto, una empresa de producto, algo diferente?*

---

## 15. Estilo de comunicación estratégica

> **Nota:** El tono, la voz y los ejemplos concretos de escritura están en
> `BRAND.md`. Esta sección recoge únicamente los principios estratégicos
> detrás de ese estilo — el porqué, no el cómo.

### Por qué hablamos como hablamos

El estilo de comunicación del estudio no es una elección estética. Es una
consecuencia directa de la filosofía del negocio:

- **Hablamos claro** porque el cliente al que nos dirigimos no tiene tiempo para
  descifrar jerga de marketing.
- **No usamos hipérboles** porque inventar grandeza donde no la hay destruye la
  confianza en el momento en que el cliente descubre la realidad.
- **Hablamos primero del problema** porque eso demuestra que entendemos al cliente
  antes de intentar venderle algo.
- **No usamos jerga tecnológica como argumento de venta** porque el cliente
  que necesita software a medida no evalúa frameworks: evalúa si confía en quien
  lo va a construir.

### Lo que este estilo comunica sobre el negocio

Un cliente que llega al sitio y lo lee debe concluir:

1. Estas personas saben de lo que hablan.
2. No me van a mentir.
3. Si me dicen que pueden ayudarme, es porque pueden.
4. Si me dicen que no pueden, me lo dirán.

Ese es el objetivo estratégico de la comunicación. No es branding por el branding.
Es construir confianza con el tipo de cliente que valora la honestidad por encima
del marketing.

---

## 16. Información pendiente de definir por el propietario del proyecto

Esta sección agrupa todas las preguntas marcadas como `[PENDIENTE DE DEFINIR]` en
este documento. Cuando el propietario las responda, deben integrarse en las
secciones correspondientes y esta lista debe actualizarse.

| # | Sección | Pregunta |
|---|---|---|
| P-01 | §2 Origen | ¿Cómo surgió Idea Forge Studio? ¿Cuándo y en qué circunstancias se fundó? |
| P-02 | §3 Visión | ¿Qué quieres que sea el estudio en 5 años? |
| P-03 | §6 Clientes | ¿Hay sectores prioritarios? ¿Tamaño mínimo/máximo de empresa? ¿Preferencia por proyectos largos o puntuales? |
| P-04 | §7 Clientes que no buscamos | ¿Hay tipos de cliente con los que hayas decidido no trabajar? |
| P-05 | §9 Proyectos que no hacemos | ¿Hay tipos de proyecto que rechazas de forma activa? |
| P-06 | §14 Objetivos corto plazo | ¿Cuántos proyectos simultáneos? ¿Objetivo de ingresos en el primer año? |
| P-07 | §14 Objetivos medio plazo | ¿Planes de crecimiento? ¿Constitución formal de la empresa? ¿Comercializar Luna o Forge Route? |
| P-08 | §14 Objetivos largo plazo | ¿Cómo quieres que sea el estudio en 5+ años? |

---

*Última actualización: 2026-06-28. Documento creado en base a información
verificable del código y declaraciones explícitas del propietario.*
