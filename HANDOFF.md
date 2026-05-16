# Maison Chapuis — RB design pass HANDOFF

This document was written on branch `design/claude-rb-pass`, which has been merged into `main`. **Branch your next PR off `main`, not off `design/claude-rb-pass`.** Use a name like `design/sections-2-6` or similar.

The foundation pass laid Section 1 (Hero) and the global Header / Footer / theme tokens. Sections 2–6 of the Home page are scaffolded with TODO comments in `src/pages/Home.tsx` and need real components.

The goal is **Roche-Bobois register** — editorial, cinematic, photography-led, restraint over decoration. The operational reference for proven UX patterns and copy register is **maisonizem.com** (our sister brand, same parent Akal Ltd).

---

## What's DONE in this branch

### 1. Theme tokens (`src/index.css`)
- All `--radius-*` zeroed for hard-edge RB feel
- New `--color-cream-warm: #F5F1EB` for atelier / alt sections
- Editorial utility classes: `.eyebrow`, `.eyebrow-gold`, `.cta-outline`, `.cta-outline-white`, `.cta-solid`, `.skip-link`, `.scroll-strip`
- Body type: Inter 400 15px / line-height 1.55
- Headings: Cormorant Garamond 300, letter-spacing -0.01em

### 2. Global layout
- **`Header.tsx`** — sticky, cream bg, sand border-bottom, uppercase Cormorant wordmark tracked 0.15em, 4 nav links (Shop · Lighting · Ceramics · Story), square cart badge, mobile hamburger
- **`Footer.tsx`** — charcoal bg, 4 columns (brand col-span-2 + Explore + Information + Contact), plain-text social links (no icons)
- **`Layout.tsx`** — adds `id="main-content"` to the `<main>` element so the skip-link works
- **Skip-to-content link** wired in Header for a11y

### 3. Hero (Section 1)
- **`src/components/home/HeroCarousel.tsx`** — fully built
- 3 slides auto-rotating every 7s with **1.2s CSS opacity crossfade** (no Framer — pure CSS transitions for this component, as briefed)
- Slide indicators: thin horizontal lines (active 40px white, inactive 24px white/45) — **not** dots
- Left-darker gradient overlay `rgba(0,0,0,0.32) → 0` at 70%
- White text panel bottom-left, max 560px: eyebrow / Cormorant h1 / 15px subtitle / `cta-outline-white`
- Pauses rotation on hover
- a11y: `aria-roledescription="carousel"`, `aria-label` per slide, descriptive alt text
- LCP optimisation: slide 1 image has `loading="eager"` + `fetchPriority="high"`

### 4. Infrastructure
- **`vercel.json`** — SPA rewrite fixed from `destination: "/"` to `destination: "/index.html"` (correct hard-refresh fallback)
- **Deleted `src/lib/supabase.ts`** — orphan with no importers, referenced a removed dep, contained a hardcoded anon key. Safe deletion.
- **Build verified:** `npm run build` passes clean (1.09s, ~150KB gzip JS)

---

## What's LEFT — sections 2 through 6

Each section in `src/pages/Home.tsx` is scaffolded as a placeholder with a TODO comment naming the file to build. Keep the section IDs and the order. The TODOs are summarized here:

### Section 2 — Atelier Strip
**File to create:** `src/components/home/AtelierStrip.tsx`

- Section bg already set in `Home.tsx` to `var(--color-cream-warm)` ✓
- Eyebrow + h2 already rendered in `Home.tsx` ✓
- **You build** the horizontal scroll-snap strip:
  - `display: grid; grid-auto-flow: column; grid-auto-columns: 88vw` on mobile, `32%` on desktop
  - `gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory`
  - Use the `.scroll-strip` utility class to hide the scrollbar
  - Each card has `scroll-snap-align: start`
  - Cards: `aspect-[4/5]` image area, white card body below with category + Cormorant 300 22px name + 15px medium price
  - Hover: primary image (`product.images[0]`) fades to secondary (`product.images[1]`) via 500ms opacity transition

**Data issue to resolve:** `products.ts` currently has only **3** `is_featured: true` SKUs but the brief wants **6** cards. Either:
- Set 3 more SKUs to `is_featured: true` in `src/data/products.ts`, OR
- Use `products.slice(0, 6)` instead of `products.filter(p => p.is_featured)`

Recommendation: set 3 more to featured (Aiguille Saharienne, Anneau Doré, Sphère d'Aït Benhaddou are strong candidates with both `-alt` images present).

**Framer is allowed here** — use Framer Motion for the reveal-on-scroll card stagger if you want.

### Section 3 — Campaign Banners
**File to create:** `src/components/home/CampaignBanner.tsx` and instantiate 3 times in `Home.tsx`

- 3 stacked banners, each ~520px tall, 50/50 image + text split full-width
- Image side: full-bleed lifestyle photo from `/public/` (re-use `hero-tent.webp`, `lifestyle-teardrop-lit.jpg`, `lifestyle-wall-sconce.jpg`)
- Text side: `var(--color-cream)` bg, padding `clamp(40px, 6vw, 96px)`, vertically centred
- Each banner: eyebrow + Cormorant 300 h2 (36–44px) + 2-sentence body + outline CTA
- Alternation: banner 1 image LEFT / banner 2 image RIGHT / banner 3 image LEFT
- Themes & copy direction:
  1. **"Lighting from Marrakech"** — CTA → `/lighting`
  2. **"Ceramics — In the kiln (Spring 2026)"** — CTA → `/ceramics` (drops to the empty state, see Section 4)
  3. **"Direct from the Workshop"** — CTA → `/story`

### Section 4 — Category Grid
**File to create:** `src/components/home/CategoryGrid.tsx`

- 4 tiles in one row desktop, 2×2 mobile
- Each tile: `aspect-[4/5]` image + caption row below (category name 13px tracked + piece count muted)
- No borders, no shadows, edge-to-edge images on cream
- Categories:
  1. **Pendants** (8) — `/lighting?cat=pendants`
  2. **Wall Sconces** (2) — `/lighting?cat=sconces`
  3. **Ceramics** (coming) — `/ceramics` — render the editorial empty state, NOT a product grid
  4. **All Pieces** — `/shop`

For the Ceramics tile + `/ceramics` route: editorial empty state — eyebrow "In the kiln", Cormorant h2 "Stoneware. Spring 2026.", 1-line dek, no products grid.

### Section 5 — Journal Carousel
**File to create:** `src/components/home/JournalCarousel.tsx`

- Horizontal scroll, 3 cards visible on desktop, 1.1 on mobile
- Each card: `aspect-[4/3]` image + 12px uppercase tag + 20px Cormorant 300 title + 2-line dek + date
- Stub 3 cards (placeholder copy is fine, no real content yet):
  1. **"The Marrakech Brass Workshop"** — tag: Atelier
  2. **"Pierce Patterns and Light"** — tag: Craft
  3. **"What is Fes-style Stoneware?"** — tag: Ceramics

Use the same `.scroll-strip` utility for the scrollbar hiding.

### Section 6 — Newsletter Strip
**File to create:** `src/components/home/NewsletterStrip.tsx`

- `var(--color-cream)` bg, two-column
- Left: Cormorant h2 "Stay in the workshop" + 1-sentence body
- Right: email `<input>` + **square** submit button (no rounded corners, no border-radius)
- Wire `onSubmit` to a no-op (don't add Supabase or any API — that's a separate phase)

---

## Hard constraints (from the brief — DO NOT violate)

- **No border-radius anywhere** (all `--radius-*` tokens are zero — verified)
- **No box-shadow anywhere** — use borders + gradients only
- **No emoji**
- Cream/off-white page backgrounds throughout
- Mobile-first, 768px and 1024px breakpoints
- **Do not add new dependencies** — everything you need is in `package.json` already
- **Do not touch** Cart, Contact, Shipping, Terms, Waitlist pages — separate phase
- **Do not wire any DB calls** — `src/data/products.ts` is the only data source
- **Do not generate or import new product images** — use existing `/public/` assets
- **Do not pull Framer Motion into the HeroCarousel** — CSS transitions only there (already done). Framer is allowed in the Atelier/Journal scroll strips for stagger reveals.

---

## Verification checklist before opening the next PR

1. `npm run build` passes with zero TypeScript errors
2. `npm run preview` → open in browser → hard-refresh `/products/halo-de-casablanca` → must render the PDP, not a 404 (confirms SPA routing works with the fixed `vercel.json`)
3. Lighthouse a11y score ≥ 90 on the home page in mobile mode (Chrome DevTools)
4. No `console.error` or `console.warn` in dev mode
5. Visual sanity:
   - Hero carousel auto-rotates every 7s with smooth crossfade
   - Slide indicators are thin lines, not dots
   - Pause-on-hover works
   - Cart badge is a square, not a circle
   - Skip-to-content link appears on Tab keypress as the first focusable element

---

## File map — what changed in this branch

```
Added:
  src/components/home/HeroCarousel.tsx
  HANDOFF.md  ← this file

Modified:
  src/index.css                            (theme tokens flattened, editorial utilities added)
  src/components/layout/Header.tsx         (RB-register refinement)
  src/components/layout/Footer.tsx         (4-column charcoal, plain-text socials)
  src/components/layout/Layout.tsx         (added id="main-content" for skip-link target)
  src/pages/Home.tsx                       (full rewrite — section 1 wired, 2–6 scaffolded)
  vercel.json                              (SPA rewrite destination fixed)

Deleted:
  src/lib/supabase.ts                      (orphan, removed dep, hardcoded key — safe delete)
```
