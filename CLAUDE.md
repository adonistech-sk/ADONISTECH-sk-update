# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**NexusFlow** — a static SaaS landing page for a workflow automation product. Built with React 19, TypeScript, Vite 6, and Tailwind CSS v4. Originally scaffolded via Google AI Studio.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build to dist/
npm run preview      # Serve the production build locally
npm run lint         # Type-check with tsc --noEmit (no test suite)
npm run clean        # Remove dist/
```

Requires a `.env.local` file with `GEMINI_API_KEY` set (used by `@google/genai` if AI features are added).

## Architecture

This is a **single-page React app** with no routing. All page sections are defined as components in [src/App.tsx](src/App.tsx) and rendered in sequence:

```
main.tsx → App.tsx
  ├── Navbar          (sticky, scroll-aware)
  ├── HeroSection     (src/components/ui/glassmorphism-trust-hero.tsx)
  ├── Logo Cloud      (inline in App.tsx)
  ├── Features        (inline in App.tsx)
  ├── CTA Section     (inline in App.tsx)
  ├── Pricing         (inline in App.tsx)
  └── Footer          (inline in App.tsx)
```

`HeroSection` is the only extracted component — it lives in [src/components/ui/glassmorphism-trust-hero.tsx](src/components/ui/glassmorphism-trust-hero.tsx). All other sections (`Navbar`, `Features`, `Pricing`, `Footer`) are defined and exported directly in `App.tsx`.

## Styling

- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin — no `tailwind.config.*` file needed.
- Custom fonts defined in [src/index.css](src/index.css) using `@theme`: `font-sans` = Inter, `font-display` = Space Grotesk.
- Animations (`motion/react`) are used for page-load fade-ins and hover effects on feature cards.
- The hero section uses scoped `<style>` tags for its `fadeSlideIn` and `marquee` keyframe animations.

## Path Aliases

`@` resolves to the project root (configured in both `vite.config.ts` and `tsconfig.json`), so `@/src/components/...` maps to `./src/components/...`.
