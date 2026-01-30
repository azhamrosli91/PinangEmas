# Repository Guidelines

## Project Structure & Module Organization
- `App.tsx` is the main React entry for the UI flow; `index.tsx` mounts the app and `index.html` is the Vite HTML shell.
- `components/` holds page sections and UI elements (PascalCase `*.tsx` files like `Header.tsx`, `ServiceDetailPage.tsx`).
- `assets/` contains static images and media used by the UI.
- Shared constants live in `constants.tsx`, and shared types in `types.ts`.
- Local runtime config goes in `.env.local` (do not commit secrets).

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server for local development.
- `npm run build`: build a production bundle into `dist/`.
- `npm run preview`: serve the production build locally for smoke checks.

## Coding Style & Naming Conventions
- Language stack: React + TypeScript (ESM) with Vite.
- Indentation: 2 spaces; keep imports grouped at the top of files.
- Components and files use PascalCase (`Hero.tsx`), hooks/locals use camelCase.
- No formatter or linter is configured in `package.json`; keep edits consistent with existing style.

## Testing Guidelines
- There are no automated tests configured yet (no test scripts or frameworks in `package.json`).
- When adding tests, prefer colocating with components or adding a `tests/` directory, and document the new commands here.

## Commit & Pull Request Guidelines
- Commit history follows Conventional Commits (e.g., `feat(scope): ...`, `fix(scope): ...`). Keep messages short and scoped to the change.
- PRs should include a brief summary, screenshots for UI changes, and a note about any required env vars (e.g., `GEMINI_API_KEY`).

## Security & Configuration Tips
- Store API keys in `.env.local` (see `README.md`), never in tracked files.
- If you add new configuration keys, update `README.md` and this guide.
