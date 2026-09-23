# 🛍️ MBS Agent Store

A modern, full-stack e-commerce catalog application built with Next.js 16 App Router, React 19, Tailwind CSS v4, Prisma ORM with SQLite, and Zustand global state management.

---

## Project Overview

**MBS Agent Store** showcases an agent-friendly, modular architecture for web commerce applications. Built on Next.js 16 Server Components and Server Actions, it enforces strict separation between presentation and data mutation with complete type safety.

---

## Features

- **Next.js 16 App Router**: Hybrid rendering using React Server Components for fast content delivery.
- **Server Actions Persistence**: Data mutations executed through secure server actions in `src/lib/actions/`.
- **Prisma & SQLite**: Schema-first database workflow with zero-config local SQLite persistence.
- **Tailwind CSS v4**: Bleeding-edge CSS styling via `@import "tailwindcss"` with zero runtime overhead.
- **Zustand State Store**: Lightweight, predictable client-side state management for shopping carts and preferences.
- **Agent Architectural Guidelines**: Standardized rules defined in `AGENTS.md` for AI pair-programming and autonomous workflows.

---

## Prerequisites

- **Node.js**: `>= 18.18.0`
- **Package Manager**: `npm`, `pnpm`, or `yarn`

---

## Installation and Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Initialize the Database
Generate Prisma client artifacts and push the schema to SQLite:
```bash
npx prisma generate
npx prisma db push
```

### 4. Seed Sample Data (Optional)
```bash
npm run db:seed
```

### 5. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

---

## Database Management

Manage the local database with built-in scripts:
- **Prisma Studio (Web GUI)**: `npm run db:studio`
- **Generate Client**: `npm run db:generate`
- **Push Schema Changes**: `npm run db:push`

---

## Defensive Security Architecture

- **Server-Side Mutation Guard**: All create, update, and delete operations execute via authenticated Server Actions, avoiding client-side exposure of database credentials.
- **Parameterized Database Access**: Prisma translates all queries into parameterized SQL, eliminating SQL injection vectors.
- **Local Database Isolation**: SQLite database binaries (`prisma/dev.db`, `*.db-journal`) and environment keys are strictly excluded from version control.

---

## License

Proprietary. All rights reserved. Not licensed for redistribution, public sublicensing, or resale.
