import HeroCarousel from '@/components/home/HeroCarousel'
import AtelierStrip from '@/components/home/AtelierStrip'
import CampaignBanner from '@/components/home/CampaignBanner'
import CategoryGrid from '@/components/home/CategoryGrid'
import JournalCarousel from '@/components/home/JournalCarousel'
import NewsletterStrip from '@/components/home/NewsletterStrip'

export default function Home() {
  return (
    <>
      {/* Section 1 — FULL-BLEED HERO CAROUSEL */}
      <HeroCarousel />

      {/* Section 2 — ATELIER STRIP (horizontal scroll-snap product spotlight) */}
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
            Pieces from our Marrakech workshop.
          </h2>
        </div>
        <AtelierStrip />
      </section>

      {/* Section 3 — CAMPAIGN BANNERS (3 stacked, alternating image/text) */}
      <section id="campaign-banners">
        <CampaignBanner
          eyebrow="The Lighting"
          heading="Lighting from Marrakech."
          body="Three generations of metalwork in a single courtyard, hand-pierced one hole at a time. Every piece you buy keeps that courtyard lit."
          ctaLabel="Shop Lighting"
          ctaHref="/lighting"
          image="/hero-tent.webp"
          imageAlt="Brass lanterns lit at dusk in a Moroccan tent setting"
          imageSide="left"
        />
        <CampaignBanner
          eyebrow="The Ceramics"
          heading="In the kiln."
          body="Stoneware thrown in the workshops of Fes and finished in lead-free Moroccan pigment. The first pieces leave the kiln in Spring 2026."
          ctaLabel="View Ceramics"
          ctaHref="/ceramics"
          image="/lifestyle-wall-sconce.jpg"
          imageAlt="Hand-pierced brass wall sconce in soft daylight, suggesting the texture of forthcoming ceramic surfaces"
          imageSide="right"
        />
        <CampaignBanner
          eyebrow="The Workshop"
          heading="Direct from the atelier."
          body="No middlemen and no production runs. Every piece is signed and numbered by the maalem who shaped it."
          ctaLabel="Our Story"
          ctaHref="/story"
          image="/lifestyle-teardrop-lit.jpg"
          imageAlt="Lit brass pendant casting geometric shadows in a Moroccan interior"
          imageSide="left"
        />
      </section>

      {/* Section 4 — CATEGORY GRID (4 tiles, Ceramics renders editorial empty state) */}
      <section
        id="category-grid"
        style={{
          padding: 'clamp(64px, 8vw, 120px) 0',
          borderTop: '1px solid var(--color-sand)',
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>The Collection</p>
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
            Lighting, ceramics, and the workshop behind them.
          </h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Section 5 — JOURNAL / EDITORIAL CAROUSEL */}
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
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              maxWidth: 640,
              margin: 0,
            }}
          >
            Notes from the atelier.
          </h2>
        </div>
        <JournalCarousel />
      </section>

      {/* Section 6 — NEWSLETTER STRIP (no-op form, client-side only) */}
      <section
        id="newsletter"
        style={{
          padding: 'clamp(64px, 8vw, 120px) 0',
          borderTop: '1px solid var(--color-sand)',
        }}
      >
        <div className="container">
          <NewsletterStrip />
        </div>
      </section>
    </>
  )
}
