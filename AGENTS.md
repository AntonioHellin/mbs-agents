# AGENTS.md

## Reglas de Desarrollo
- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Prisma + SQLite, Zustand.
- **Flujo de CRUD:** Usar siempre **Server Actions** (`src/lib/actions/`) para cualquier modificación de datos.
- **Componentes:**
  - Componentes UI básicos (Button, Badge) en `src/components/ui/`.
  - Componentes de lógica en `src/components/`.
- **Base de Datos:** Prisma + SQLite. El cliente se genera en `src/lib/generated/` para evitar conflictos con Turbopack en Windows.
- **Estilos:** Tailwind CSS. Mantener el diseño limpio y minimalista.

## Convenciones de Nomenclatura
- **Archivos:** Siempre en `CamelCase` (ej. `UserProfile.tsx`, `AuthService.ts`).
- **Funciones:** Siempre en `CamelCase` (ej. `getUserData()`, `validateInput()`).
- **Variables de Clase (Miembros):** Usar el prefijo `m_` seguido de `snake_case` (ej. `m_user_id`, `m_is_authenticated`).
- **Variables Locales:** Usar `snake_case` (ej. `current_user`, `is_active`).

## Arquitectura y Calidad
- **Principio de Responsabilidad Única:** Cada componente o función debe tener un único propósito claro.
- **Tipado:** Uso estricto de TypeScript. Evitar `any` a toda costa.
- **Comentarios:** Deben explicar el "por qué" y no el "qué". Código limpio es preferible a comentarios explicativos.
- **Server Actions:** Toda lógica de datos debe residir exclusivamente en `src/lib/actions/`.

## Flujo de Trabajo
1. **Verificación:** Antes de cada commit o build, ejecutar `npm run lint`.
2. **Base de Datos:** Para cambios en el schema (`prisma/schema.prisma`), ejecutar siempre `npx prisma db push`.
3. **Estilos:** Usar Tailwind v4 (vía `@import "tailwindcss";` en `globals.css`).

## Agentes Disponibles
- **`build`**: Usar para refactorización, creación de nuevos componentes y lógica de negocio.
- **`plan`**: Usar antes de cualquier tarea compleja.
- **`explore`**: Usar para analizar el estado actual del proyecto (ej. "¿Cómo está implementado el carrito?").
