# Ashima Adya — Portfolio

A personal portfolio website for Ashima Adya, Senior Software Engineer specializing in Backend Engineering, Data Engineering, and Distributed Systems.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (port assigned by workflow)
- `pnpm --filter @workspace/portfolio run typecheck` — typecheck the frontend

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React 19 + Vite 7
- Tailwind CSS v4
- Framer Motion for animations
- react-icons/si for tech stack icons
- wouter for routing
- No backend — purely frontend

## Where things live

- `artifacts/portfolio/src/App.tsx` — router and layout shell
- `artifacts/portfolio/src/index.css` — theme variables (dark navy / electric cyan palette)
- `artifacts/portfolio/src/components/sections/` — one file per section (Hero, Impact, Experience, TechStack, Education, Contact)
- `artifacts/portfolio/src/components/ui/` — shared UI components (AnimatedCounter, SectionHeading, etc.)

## Architecture decisions

- Single-page scroll portfolio — no routing to sub-pages, all sections on `/`
- Framer Motion `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations
- Animated counters (`AnimatedCounter`) count up when Impact section scrolls into view
- Dark theme enforced in `:root` CSS variables — no light mode toggle needed for a portfolio
- `react-icons/si` icons: `SiJava` and `SiMicrosoftazure` do NOT exist in v5.x — use `null` (text fallback) for Java and Azure/Cosmos DB

## Product

Single-page portfolio with sections: Hero · Impact Metrics · Experience Timeline · Tech Stack · Education & Certifications · Contact

## User preferences

_Populate as you build._

## Gotchas

- `react-icons/si` v5.x does NOT export `SiJava` or `SiMicrosoftazure` — both are absent from the package. Use `null` icon and the text-initial fallback for those.
- Framer Motion `transition.type` must be typed `as const` (e.g. `"spring" as const`) inside variant objects to satisfy TS strict mode.
- Always run `pnpm --filter @workspace/portfolio run typecheck` after editing component files.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
