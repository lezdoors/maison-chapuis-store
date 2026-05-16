import { Link } from 'react-router-dom'

interface CampaignBannerProps {
  eyebrow: string
  heading: string
  body: string
  ctaLabel: string
  ctaHref: string
  image: string
  imageAlt: string
  imageSide: 'left' | 'right'
}

export default function CampaignBanner({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  imageSide,
}: CampaignBannerProps) {
  const imageOrder = imageSide === 'left' ? 0 : 1
  const textOrder = imageSide === 'left' ? 1 : 0

  return (
    <section
      style={{
        width: '100%',
        background: 'var(--color-cream)',
        borderTop: '1px solid var(--color-sand)',
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ minHeight: 'clamp(420px, 56vh, 560px)' }}
      >
        <div
          style={{
            order: imageOrder,
            position: 'relative',
            minHeight: 'clamp(280px, 42vh, 560px)',
            background: 'var(--color-ink)',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          style={{
            order: textOrder,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(40px, 6vw, 96px)',
          }}
        >
          <p className="eyebrow-gold" style={{ margin: '0 0 18px 0' }}>
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 44px)',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: 'var(--color-ink)',
              margin: '0 0 20px 0',
              maxWidth: 480,
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              lineHeight: 1.6,
              color: 'var(--color-muted)',
              maxWidth: 460,
              margin: '0 0 32px 0',
            }}
          >
            {body}
          </p>
          <div>
            <Link to={ctaHref} className="cta-outline">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
