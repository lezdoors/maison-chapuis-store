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
          eyebrow="The Ceramics"
          heading="Clay from Fes and Safi."
          body="Tagines, bowls, plates, pitchers — hand-thrown in the workshops of Fes and Safi and finished in lead-free Moroccan pigment. The first pieces leave the kiln in Spring 2026."
          ctaLabel="Shop ceramics"
          ctaHref="/shop?cat=ceramics"
          image="/hero-tent.webp"
          imageAlt="A Moroccan table set with hand-painted tagines and ceramic bowls"
          imageSide="left"
        />
        <CampaignBanner
          eyebrow="The Glassware"
          heading="Mouth-blown in the medina."
          body="Moroccan tea glasses, decanters, and carafes — each one mouth-blown in the glassworks of the medina, then hand-painted or gilded at the rim."
          ctaLabel="View glassware"
          ctaHref="/shop?cat=glassware"
          image="/lifestyle-wall-sconce.jpg"
          imageAlt="A set of hand-painted Moroccan tea glasses gilded at the rim, beside a silver teapot"
          imageSide="right"
        />
        <CampaignBanner
          eyebrow="The Loom"
          heading="Hand-knotted in the Atlas."
          body="Beni Ourain, Boucherouite, and Azilal rugs — sourced directly from the women weavers of the high Atlas. No middlemen. Every rug signed by its weaver."
          ctaLabel="Discover the rugs"
          ctaHref="/shop?cat=rugs"
          image="/lifestyle-teardrop-lit.jpg"
          imageAlt="A hand-knotted Beni Ourain rug draped across a Moroccan floor in golden light"
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
          <h2 style={sectionHeading}>Tagines, ceramics, glassware, rugs — and the workshops behind them.</h2>
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
