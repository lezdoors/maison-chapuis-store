import { Link } from 'react-router-dom'

interface CampaignBannerProps {
  eyebrow: string
  heading: string
  body: string
  ctaLabel: string
  ctaHref: string
  image: string
  imageAlt: string
  imageSide?: 'left' | 'right'
  variant?: 'split' | 'overlay'
}

export default function CampaignBanner({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  imageSide = 'left',
  variant = 'split',
}: CampaignBannerProps) {
  if (variant === 'overlay') {
    return (
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 'clamp(420px, 64vh, 640px)',
          background: 'var(--color-ink)',
          overflow: 'hidden',
          borderTop: '1px solid var(--color-sand)',
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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 80%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 'clamp(20px, 5vw, 80px)',
            bottom: 'clamp(48px, 8vh, 96px)',
            maxWidth: 520,
            color: '#ffffff',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 18px 0',
            }}
          >
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(32px, 4.4vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              margin: '0 0 18px 0',
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 440,
              margin: '0 0 28px 0',
            }}
          >
            {body}
          </p>
          <Link to={ctaHref} className="cta-outline-white">
            {ctaLabel}
          </Link>
        </div>
      </section>
    )
  }

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
