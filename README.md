# Moda Italia — Next.js 14

Migration of the Moda Italia homepage from the React (Vite/CRA) SPA to
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**, matching the
approved homepage mockup.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's in here

```
app/
  layout.tsx       -> root layout, fonts (Playfair Display + Inter), SEO metadata
  page.tsx          -> homepage, assembles all sections + JSON-LD structured data
  globals.css       -> Tailwind base + brand tokens
components/
  AnnouncementBar.tsx     (Server Component)
  Header.tsx              (Server Component)
  Hero.tsx                (Client Component — slider state)
  LatestCollections.tsx   (Server Component)
  BrowseByCategory.tsx    (Server Component)
  OurServices.tsx         (Server Component)
  InternationalTradeFairs.tsx (Client Component — scroll carousel)
  WhyModaItalia.tsx       (Server Component)
  LatestNews.tsx          (Server Component)
  Newsletter.tsx          (Client Component — form state)
  Footer.tsx              (Server Component)
```

Server vs Client is split the way we discussed for the migration: anything
static stays a Server Component (rendered/streamed on the server, better for
SEO and initial load); only the slider, carousel and newsletter form are
`"use client"` since they need browser state/events.

## Brand tokens (Tailwind)

| Token | Value |
|---|---|
| `brand.orange` | `#E6531F` |
| `brand.black` | `#111111` |
| `brand.cream` | `#F6F3EE` |

## Images — action needed

All photos currently point to **Unsplash placeholder URLs** (`images.unsplash.com`)
since I don't have the real Moda Italia photography/logo in this session.
Swap these out with your actual assets:

1. Drop real files into `/public/images/...`
2. Replace the `src="https://images.unsplash.com/..."` strings in each
   component with `"/images/your-file.jpg"`
3. If you keep any remote hosts, add them to `next.config.js` → `images.remotePatterns`

The logo is currently a text wordmark (`Italia` + `MODA`) matching the mockup —
swap for your logo JPEG the same way if you'd rather use the image file.

## SEO wins vs. the old SPA

- Server-rendered HTML on first load (crawlable without JS execution)
- Per-page `metadata` export (title/description/OG tags) — extend this
  pattern on every route you add under `app/`
- `Organization` JSON-LD schema in the homepage `<head>`
- Semantic headings (`h1` in Hero, `h2` per section) instead of generic divs
- `next/image` for automatic responsive sizes + lazy loading

## Next steps

- Build out `/collections`, `/services`, `/about`, `/contact` etc. as their
  own routes under `app/` (each with its own `metadata` export)
- Add a `sitemap.ts` and `robots.ts` under `app/` once real routes exist
- Wire the Newsletter form to your actual email provider
