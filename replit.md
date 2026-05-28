# Bunzo - Egyptian Street Burgers

A restaurant web app showcasing authentic Egyptian burgers, blog posts, and brand identity for Bunzo.

## Run & Operate

- `pnpm --filter @workspace/bunzo run dev` — run the frontend (workflow: `artifacts/bunzo: web`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7 + Tailwind CSS v4
- Routing: react-router-dom v7
- Animations: AOS (Animate On Scroll)
- Slider: Swiper
- Rich text: Draft.js + react-draft-wysiwyg
- Data: local static data (no backend required)

## Where things live

- `artifacts/bunzo/src/` — all frontend source code
- `artifacts/bunzo/src/pages/` — page components (Home, Burgers, BurgerDetails, Blog, BlogList, About, Contact)
- `artifacts/bunzo/src/components/` — shared UI components
- `artifacts/bunzo/src/data/` — local static data (burgers, blog posts, etc.)
- `artifacts/bunzo/src/hooks/` — custom React hooks
- `artifacts/bunzo/src/services/` — service classes (data access layer)
- `artifacts/bunzo/src/assets/` — images and icons
- `artifacts/bunzo/src/styles/` — CSS files (gradients, swiper, rich text editor)

## Architecture decisions

- App is fully client-rendered with no backend — all data comes from local static files in `src/data/`
- react-router-dom (not wouter) is used for routing since the original project used it
- `global: "window"` is defined in vite.config.ts to support draft-js
- BrowserRouter uses `basename={import.meta.env.BASE_URL}` to support Replit's path-based routing

## Product

- Home page with hero section, burger categories, featured burgers, community section, Instagram feed
- Menu/Burgers page with full burger listing, search, and filtering
- Burger detail page with ingredients, directions, nutrition info
- Blog listing and detail pages with rich text content
- About and Contact pages
- Admin role can add/edit/delete burgers and blog posts

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- react-draft-wysiwyg has peer dep warnings against React 19 but works fine at runtime
- `global: "window"` must remain in vite.config.ts for draft-js compatibility

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
