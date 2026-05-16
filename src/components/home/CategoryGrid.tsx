import { Link } from 'react-router-dom'

interface Tile {
  title: string
  href: string
  pieces: string
  ariaLabel: string
  eyebrow: string
  blurb: string
}

const TILES: Tile[] = [
  {
    title: 'Tagines',
    href: '/shop?cat=tagines',
    pieces: '3 pieces',
    ariaLabel: 'Tagines — 3 pieces',
    eyebrow: 'On the fire',
    blurb: 'From Marrakech, Fes, and Safi.',
  },
  {
    title: 'Ceramics',
    href: '/shop?cat=ceramics',
    pieces: '3 pieces',
    ariaLabel: 'Ceramics — 3 pieces',
    eyebrow: 'On the wheel',
    blurb: 'Hand-thrown stoneware, hand-painted glaze.',
  },
  {
    title: 'Glassware',
    href: '/shop?cat=glassware',
    pieces: '3 pieces',
    ariaLabel: 'Glassware — 3 pieces',
    eyebrow: 'Mouth-blown',
    blurb: 'Tea glasses and decanters from the medina.',
  },
  {
    title: 'Rugs',
    href: '/shop?cat=rugs',
    pieces: '3 pieces',
    ariaLabel: 'Rugs — 3 pieces',
    eyebrow: 'On the loom',
    blurb: 'Beni Ourain, Boucherouite, Azilal.',
  },
]

export default function CategoryGrid() {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3"
      style={{ marginTop: 'clamp(32px, 4vw, 48px)' }}
    >
      {TILES.map((tile) => (
        <Link
          key={tile.title}
          to={tile.href}
          className="group"
          style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          aria-label={tile.ariaLabel}
        >
          <div
            className="aspect-square"
            style={{
              position: 'relative',
              background: 'var(--color-bg-alt)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(20px, 3vw, 32px)',
                textAlign: 'center',
              }}
            >
              <p className="eyebrow-gold" style={{ margin: '0 0 16px 0' }}>
                {tile.eyebrow}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-ink)',
                  margin: '0 0 10px 0',
                }}
              >
                {tile.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  color: 'var(--color-muted)',
                  maxWidth: 240,
                  margin: 0,
                }}
              >
                {tile.blurb}
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              padding: '14px 4px 0',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: 14,
                color: 'var(--color-ink)',
              }}
            >
              {tile.title}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: 'var(--color-muted)',
              }}
            >
              {tile.pieces}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
