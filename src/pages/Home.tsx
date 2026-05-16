import HeroCarousel from '@/components/home/HeroCarousel'

// =============================================================================
// HANDOFF NOTE — see HANDOFF.md at repo root
//
// Section 1 (HeroCarousel) is fully built in src/components/home/HeroCarousel.tsx.
// Sections 2–7 are scaffolded as placeholder elements below — each one needs a
// real component built in src/components/home/ per the brief. Keep the section
// IDs and the order as-is so the design rhythm holds.
// =============================================================================

export default function Home() {
  return (
    <>
      {/* Section 1 — FULL-BLEED HERO CAROUSEL */}
      <HeroCarousel />

      {/* Section 2 — ATELIER STRIP (horizontal scroll-snap product spotlight)
          TODO: build src/components/home/AtelierStrip.tsx
          - Section bg #F5F1EB (var --color-cream-warm)
          - Eyebrow "The Atelier" + h2 "Pieces from our Marrakech workshop"
          - Horizontal scroll-snap, grid-auto-flow: column
          - 6 product cards from products.filter(p => p.is_featured)
            NOTE: products.ts currently has only 3 featured — broaden the
            filter to slice(0,6) or set 3 more is_featured: true if intended
          - Hover: primary→secondary image opacity crossfade (500ms)
      */}
      <section
        id="atelier-strip"
        style={{
          background: 'var(--color-cream-warm)',
          padding: 'clamp(64px, 8vw, 120px) 0',
        }}
      >
        <div className="container">
          <p className="eyebrow-gold" style={{ marginBottom: 18 }}>The Atelier</p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(28px, 3.4vw, 38px)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              maxWidth: 640,
              margin: 0,
            }}
          >
            Pieces from our Marrakech workshop
          </h2>
          {/* TODO (other agent): horizontal scroll-snap strip here */}
          <div style={{ marginTop: 48, color: 'var(--color-muted)', fontSize: 14 }}>
            [Atelier strip — to be built per HANDOFF.md]
          </div>
        </div>
      </section>

      {/* Section 3 — CAMPAIGN BANNERS (3 stacked, alternating image/text)
          TODO: build src/components/home/CampaignBanner.tsx and instantiate 3 times.
          Themes: "Lighting from Marrakech" / "Ceramics — In the Kiln (Spring 2026)"
                  / "Direct from the Workshop"
          Alternation: image LEFT / image RIGHT / image LEFT
          Each ~520px tall, 50/50 split, cream text side, outline CTA.
      */}
      <section id="campaign-banners">
        {/* TODO: <CampaignBanner /> × 3 */}
      </section>

      {/* Section 4 — CATEGORY GRID (4 tiles)
          TODO: build src/components/home/CategoryGrid.tsx
          - 4 tiles row desktop / 2×2 mobile
          - Pendants (8) / Wall Sconces (2) / Ceramics (coming) / All Pieces
          - Ceramics tile: render editorial "In the kiln · Stoneware. Spring 2026."
            empty state, no broken images.
      */}
      <section id="category-grid" style={{ padding: 'clamp(64px, 8vw, 120px) 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>The Collection</p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(28px, 3.4vw, 38px)',
              maxWidth: 640,
              margin: 0,
            }}
          >
            Lighting, ceramics, and the workshop behind them.
          </h2>
          {/* TODO (other agent): 4-tile category grid */}
        </div>
      </section>

      {/* Section 5 — JOURNAL / EDITORIAL CAROUSEL
          TODO: build src/components/home/JournalCarousel.tsx
          - Horizontal scroll, 3 visible desktop
          - aspect-[4/3] image + tag + Cormorant title + 2-line dek + date
          - Stubs: "The Marrakech Brass Workshop" / "Pierce Patterns and Light"
                   / "What is Fes-style Stoneware?"
      */}
      <section
        id="journal"
        style={{
          background: 'var(--color-cream-warm)',
          padding: 'clamp(64px, 8vw, 120px) 0',
        }}
      >
        <div className="container">
          <p className="eyebrow-gold" style={{ marginBottom: 12 }}>Journal</p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(28px, 3.4vw, 38px)',
              maxWidth: 640,
              margin: 0,
            }}
          >
            Notes from the atelier.
          </h2>
          {/* TODO (other agent): 3-card editorial carousel */}
        </div>
      </section>

      {/* Section 6 — NEWSLETTER STRIP
          TODO: build src/components/home/NewsletterStrip.tsx
          - Cream bg, two-column
          - Left: h2 "Stay in the workshop" + 1-sentence body
          - Right: email input + square submit button
      */}
      <section id="newsletter" style={{ padding: 'clamp(64px, 8vw, 120px) 0' }}>
        <div className="container">
          {/* TODO (other agent): newsletter form */}
          <div style={{ color: 'var(--color-muted)', fontSize: 14 }}>
            [Newsletter strip — to be built per HANDOFF.md]
          </div>
        </div>
      </section>
    </>
  )
}
