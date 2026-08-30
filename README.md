# BNI Better Together — Hybrid SPA

A responsive React + Vite implementation of the BNI India experience discussed in the chat.

## Architecture

- `/` — visual BNI homepage with animated network, spotlight cards, metrics, member/chapter/event previews, Why BNI and CTA.
- `/members` — dedicated member directory with search, category, chapter and city filters + pagination.
- `/members/:id` — member profile detail.
- `/chapters` — dedicated chapter directory with search, region filter and interactive India map.
- `/chapters/:id` — chapter detail.
- `/events` — dedicated events directory with search and event-type filter.
- `/events/:id` — event detail.
- `/membership`, `/about`, `/contact` — supporting pages.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Notes

- No backend is required. Demo data is stored in `src/main.jsx` so the filters and interactions work immediately.
- Replace the demo arrays with API calls when connecting to the real BNI backend.
- The India map is a lightweight inline SVG designed for the UI; map pins are interactive and synchronized with the chapter results.
- The app uses normal routes (`/members`, `/chapters`, `/events`) rather than hash routes. Vite dev/preview provides SPA fallback. If deploying to a static host, configure its fallback/rewrite to `index.html`.
