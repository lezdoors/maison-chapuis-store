import { Link } from 'react-router-dom'

interface Tile {
  title: string
  href: string
  image: string
  imageAlt: string
  pieces: string
  ariaLabel: string
}

const TILES: Tile[] = [
  {
    title: 'Pendants',
    href: '/lighting?cat=pendants',
    image: '/products/halo-de-casablanca.jpg',
    imageAlt: 'Halo de Casablanca pendant — hand-pierced brass sphere',
    pieces: '8 pieces',
    ariaLabel: 'Pendants — 8 pieces',
  },
  {
    title: 'Wall sconces',
    href: '/lighting?cat=sconces',
    image: '/products/etoile-de-fes.jpg',
    imageAlt: 'Étoile de Fès wall sconce — geometric pierced brass',
    pieces: '2 pieces',
    ariaLabel: 'Wall Sconces — 2 pieces',
  },
  {
    title: 'Ceramics',
    href: '/ceramics',
    image: '',
    imageAlt: '',
    pieces: 'Spring 2026',
    ariaLabel: 'Ceramics — coming Spring 2026',
  },
  {
    title: 'All pieces',
    href: '/shop',
    image: '/lifestyle-teardrop.jpg',
    imageAlt: 'Brass teardrop pendant in a Moroccan interior',
    pieces: 'View all',
    ariaLabel: 'All pieces — view full collection',
  },
]

export default function CategoryGrid() {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3"
      style={{ marginTop: 'clamp(32px, 4vw, 48px)' }}
    >
      {TILES.map((tile) => {
        const isCeramics = tile.title === 'Ceramics'
        return (
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
              {isCeramics ? (
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
                    In the kiln
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
                    Stoneware.<br />Spring 2026.
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
                    Hand-thrown from the workshops of Fes.
                  </p>
                </div>
              ) : (
                <img
                  src={tile.image}
                  alt={tile.imageAlt}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: 'clamp(20px, 3vw, 32px)',
                    transition: 'transform 700ms ease',
                  }}
                  className="group-hover:scale-[1.03]"
                />
              )}
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
        )
      })}
    </div>
  )
}
