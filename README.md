# Implementación de CRUD de productos en DynamoDB

El sistema debe permitir la gestión de productos a través de una API REST utilizando Express y DynamoDB. Los productos tienen los siguientes atributos: ID, nombre, descripción, precio y stock. El sistema debe validar que los nombres de los productos no se dupliquen y que los precios no sean negativos. Además, se deben implementar pruebas unitarias con Jest para cubrir las operaciones CRUD.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | CRUD de productos con Express y DynamoDB |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del entorno y creación de la API

**Objetivo:** Configurar el entorno de desarrollo y crear la estructura básica de la API REST para productos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configurar el entorno de desarrollo con Node y Express.
- Crear la estructura básica de la API con rutas para las operaciones CRUD de productos.
- Implementar la conexión a DynamoDB.

**Entregable:** API REST básica con rutas para CRUD de productos y conexión a DynamoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Configuración de entornos de desarrollo con Node.
- Creación de APIs REST con Express.
- Conexión a bases de datos NoSQL como DynamoDB.

</details>

### Fase 2: Implementación de operaciones CRUD

**Objetivo:** Implementar las operaciones CRUD para productos, incluyendo validaciones de negocio.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar las operaciones CREATE, READ, UPDATE y DELETE para productos.
- Agregar validaciones para asegurar que los nombres de los productos no se dupliquen y que los precios no sean negativos.

**Entregable:** Operaciones CRUD completas para productos con validaciones de negocio implementadas.

<details>
<summary>Pistas de conocimiento</summary>

- Implementación de operaciones CRUD en una API REST.
- Validación de datos en el nivel de la lógica de negocio.

</details>

### Fase 3: Implementación de pruebas unitarias

**Objetivo:** Cubrir las operaciones CRUD con pruebas unitarias utilizando Jest.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Escribir pruebas unitarias para cada operación CRUD de productos.
- Asegurar que las pruebas cubran tanto los casos exitosos como los casos de error.

**Entregable:** Pruebas unitarias completas para las operaciones CRUD de productos utilizando Jest.

<details>
<summary>Pistas de conocimiento</summary>

- Escrituras de pruebas unitarias con Jest.
- Cobertura de casos exitosos y de error en las pruebas.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una API REST y cómo se utiliza para gestionar recursos?
- **paraQueSirve**: ¿Para qué sirve validar los datos en el nivel de la lógica de negocio?
- **comoSeUsa**: ¿Cómo se implementan las operaciones CRUD en una API REST?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones en una API REST?
- **queDecisionesImplica**: ¿Qué decisiones implica escribir pruebas unitarias para una API REST?

## Criterios de Evaluacion

- Configuración del entorno de desarrollo y creación de la estructura básica de la API.
- Implementación de las operaciones CRUD para productos con validaciones de negocio.
- Escrituras de pruebas unitarias para las operaciones CRUD de productos.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `app` | (raiz) | practice, chapter | server | Node | Express, DynamoDB, Jest |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `npm install --no-audit --no-fund && npm run build` — componente `app` (practice, chapter).

### Contratos entre componentes

- `app` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`
  - `GET /products`

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
