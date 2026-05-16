# AGENTS.md

## Reglas de Desarrollo
- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Prisma + SQLite, Zustand.
- **Flujo de CRUD:** Usar siempre **Server Actions** (`src/lib/actions/`) para cualquier modificación de datos.
- **Componentes:**
  - Componentes UI básicos (Button, Badge) en `src/components/ui/`.
  - Componentes de lógica en `src/components/`.
- **Base de Datos:** Prisma + SQLite. El cliente se genera en `src/lib/generated/` para evitar conflictos con Turbopack en Windows.
- **Estilos:** Tailwind CSS. Mantener el diseño limpio y minimalista.

## Flujo de Trabajo
1. **Verificación:** Antes de cada commit o build, ejecutar `npm run lint`.
2. **Base de Datos:** Para cambios en el schema (`prisma/schema.prisma`), ejecutar siempre `npx prisma db push`.
3. **Estilos:** Usar Tailwind v4 (vía `@import "tailwindcss";` en `globals.css`).

## Agentes Disponibles
- **`build`**: Usar para refactorización, creación de nuevos componentes y lógica de negocio.
- **`plan`**: Usar antes de cualquier tarea compleja.
- **`explore`**: Usar para analizar el estado actual del proyecto (ej. "¿Cómo está implementado el carrito?").

# Reglas de fichero 

- Cada nuevo que crees lo vasa crear en CamelCase