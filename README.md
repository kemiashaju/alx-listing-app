# ALX Listing App


A small Next.js + TypeScript + Tailwind project scaffold for building a listing page (Airbnb-like listing view).


## Goals
- Provide a minimal, well-structured starter for a listings UI using the Next.js Pages Router.
- Include reusable components (Card, Button), TypeScript interfaces, constants, and an assets folder.


## Project structure
- `components/` — React components used across the app. `components/common` contains shared UI components like `Card` and `Button`.
- `interfaces/` — TypeScript interfaces (shapes and props) used across the project.
- `constants/` — app-wide constants such as app title, placeholder image location, and API URLs.
- `public/assets/` — images and SVGs used by the app. Add placeholder images here.
- `pages/` — Next.js Pages Router files. `pages/index.tsx` is the listing page and `pages/_app.tsx` includes global styles.
- `styles/globals.css` — Tailwind imports.


## Setup & Run
1. Scaffold the project (if not already):


```bash
npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir