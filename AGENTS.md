# AGENTS.md

## Development Guidelines
- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Prisma + SQLite, Zustand.
- **CRUD Operations:** Always use **Server Actions** (`src/lib/actions/`) for any data modifications.
- **Components:**
  - Base UI components (Button, Badge) in `src/components/ui/`.
  - Logic and layout components in `src/components/`.
- **Database:** Prisma + SQLite. The client is generated in `src/lib/generated/` to prevent Turbopack conflicts on Windows.
- **Styling:** Tailwind CSS. Maintain clean, minimalistic UI design.

## Naming Conventions
- **Files:** UpperCamelCase (e.g., `UserProfile.tsx`, `AuthService.ts`).
- **Functions:** camelCase (e.g., `getUserData()`, `validateInput()`).
- **Class Member Variables:** Prefix with `m_` followed by `snake_case` (e.g., `m_user_id`, `m_is_authenticated`).
- **Local Variables:** `snake_case` (e.g., `current_user`, `is_active`).

## Architecture and Quality
- **Single Responsibility Principle:** Each component or function must have a clear, isolated responsibility.
- **Type Safety:** Strict TypeScript adherence. Avoid `any` under all circumstances.
- **Comments:** Document the "why", not the "what". Clean, self-documenting code is preferred over redundant commentary.
- **Server Actions:** All persistence logic must reside exclusively inside `src/lib/actions/`.

## Workflow
1. **Verification:** Run `npm run lint` before any commit or production build.
2. **Database Schema:** Execute `npx prisma db push` whenever `prisma/schema.prisma` is modified.
3. **Styles:** Tailwind v4 (via `@import "tailwindcss";` in `globals.css`).

## Available Agents
- **`build`**: Code refactoring, feature implementation, and business logic.
- **`plan`**: Architectural design and dependency decomposition before complex tasks.
- **`explore`**: Codebase surveying and architectural analysis (e.g., inspect cart state or product routes).
