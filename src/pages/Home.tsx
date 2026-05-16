import HeroCarousel from '@/components/home/HeroCarousel'
import AtelierStrip from '@/components/home/AtelierStrip'
import CampaignBanner from '@/components/home/CampaignBanner'
import CategoryGrid from '@/components/home/CategoryGrid'
import JournalCarousel from '@/components/home/JournalCarousel'
import NewsletterStrip from '@/components/home/NewsletterStrip'

const sectionHeading = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  fontSize: 'clamp(24px, 2.8vw, 32px)',
  lineHeight: 1.15,
  letterSpacing: '-0.01em',
  margin: 0,
  color: 'var(--color-ink)',
}

export default function Home() {
  return (
    <>
      {/* Section 1 — FULL-BLEED HERO CAROUSEL */}
      <HeroCarousel />

      {/* Section 2 — ATELIER STRIP */}
      <section
        id="atelier-strip"
        style={{
          background: '#ffffff',
          padding: 'clamp(56px, 7vw, 112px) 0 clamp(40px, 5vw, 80px)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>The Atelier</p>
              <h2 style={sectionHeading}>Pieces from our Marrakech workshop.</h2>
            </div>
          </div>
        </div>
        <AtelierStrip />
      </section>

      {/* Section 3 — CAMPAIGN BANNERS */}
      <section id="campaign-banners">
        <CampaignBanner
          eyebrow="The Lighting"
          heading="Lighting from Marrakech."
          body="Three generations of metalwork in a single courtyard, hand-pierced one hole at a time. Every piece you buy keeps that courtyard lit."
          ctaLabel="Shop lighting"
          ctaHref="/lighting"
          image="/hero-tent.webp"
          imageAlt="Brass lanterns lit at dusk in a Moroccan tent setting"
          imageSide="left"
        />
        <CampaignBanner
          eyebrow="The Ceramics"
          heading="In the kiln."
          body="Stoneware thrown in the workshops of Fes and finished in lead-free Moroccan pigment. The first pieces leave the kiln in Spring 2026."
          ctaLabel="View ceramics"
          ctaHref="/ceramics"
          image="/lifestyle-wall-sconce.jpg"
          imageAlt="Hand-pierced brass wall sconce in soft daylight, suggesting the texture of forthcoming ceramic surfaces"
          imageSide="right"
        />
        <CampaignBanner
          eyebrow="The Workshop"
          heading="Direct from the atelier."
          body="No middlemen and no production runs. Every piece is signed and numbered by the maalem who shaped it."
          ctaLabel="Our story"
          ctaHref="/story"
          image="/lifestyle-teardrop-lit.jpg"
          imageAlt="Lit brass pendant casting geometric shadows in a Moroccan interior"
          imageSide="left"
        />
      </section>

      {/* Section 4 — CATEGORY GRID */}
      <section
        id="category-grid"
        style={{
          background: '#ffffff',
          padding: 'clamp(56px, 7vw, 112px) 0',
          borderTop: '1px solid var(--color-sand)',
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>The Collection</p>
          <h2 style={sectionHeading}>Lighting, ceramics, and the workshop behind them.</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Section 5 — JOURNAL */}
      <section
        id="journal"
        style={{
          background: 'var(--color-bg-alt)',
          padding: 'clamp(56px, 7vw, 112px) 0',
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Journal</p>
          <h2 style={sectionHeading}>Notes from the atelier.</h2>
        </div>
        <JournalCarousel />
      </section>

      {/* Section 6 — NEWSLETTER */}
      <section
        id="newsletter"
        style={{
          background: '#ffffff',
          padding: 'clamp(56px, 7vw, 112px) 0',
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
