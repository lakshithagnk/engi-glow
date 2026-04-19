## Portfolio Website

A React + TypeScript single-page portfolio built with Vite, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- React 18 + TypeScript
- Vite (SWC React plugin)
- Tailwind CSS + tailwindcss-animate
- shadcn/ui (Radix UI primitives)
- Framer Motion
- React Router
- TanStack React Query
- Vitest + Testing Library

## Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm 9+

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

- Local URL: http://localhost:8080
- If port 8080 is already in use, stop the conflicting process or change `server.port` in `vite.config.ts`.

## Build for Production

```bash
npm run build
```

- Output directory: `dist/`

## Preview Production Build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Test

Run tests once:

```bash
npm run test
```

Watch mode:

```bash
npm run test:watch
```

Current test environment:

- `jsdom`
- Setup file: `src/test/setup.ts`
- Test match pattern: `src/**/*.{test,spec}.{ts,tsx}`

## Project Structure

```text
src/
	components/
		sections/       # Landing page sections (Hero, About, Skills, Projects, etc.)
		ui/             # Reusable shadcn/ui primitives
	hooks/            # Custom hooks (theme, active section, mobile)
	lib/              # Shared utilities and motion variants
	pages/            # Route-level pages (Index, NotFound)
	test/             # Vitest setup and tests
```

## Architecture Notes

- `src/App.tsx` wires providers and routing:
	- `QueryClientProvider`
	- `ThemeProvider`
	- `TooltipProvider`
	- `BrowserRouter`
- `src/pages/Index.tsx` composes the homepage sections in this order:
	- Hero, About, Skills, Projects, Experience, Education, Services, Testimonials, Blog, Contact
- Theme is class-based (`dark` on document root) and persisted in `localStorage` via `src/hooks/useTheme.tsx`.

## Important Details

- There is currently no `.env` usage in the codebase.
- Path alias `@` maps to `src` (configured in Vite and Vitest).
- Vite dev server is configured for host `::` and port `8080`.
- The test suite is currently minimal (`src/test/example.test.ts`), so add component/integration tests as the next quality step.

## Optional Bun Commands

If you prefer Bun (there is a `bun.lockb` file), equivalents are:

```bash
bun install
bun run dev
bun run build
bun run preview
bun run lint
bun run test
```

