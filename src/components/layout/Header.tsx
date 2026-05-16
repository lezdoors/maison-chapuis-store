import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

interface NavLink {
  to: string
  label: string
  mega?: MegaPanel
}

interface MegaPanel {
  eyebrow: string
  heading: string
  columns: { title: string; links: { to: string; label: string }[] }[]
  feature: { to: string; image: string; alt: string; eyebrow: string; title: string }
}

const NAV: NavLink[] = [
  { to: '/shop', label: 'Shop' },
  {
    to: '/lighting',
    label: 'Lighting',
    mega: {
      eyebrow: 'Brass, pierced by hand',
      heading: 'Lighting from Marrakech.',
      columns: [
        {
          title: 'By form',
          links: [
            { to: '/lighting?cat=pendants', label: 'Pendants' },
            { to: '/lighting?cat=sconces', label: 'Wall Sconces' },
            { to: '/lighting?cat=lanterns', label: 'Lanterns' },
          ],
        },
        {
          title: 'By price',
          links: [
            { to: '/lighting?price=under-500', label: 'Under $500' },
            { to: '/lighting?price=500-1000', label: '$500 — $1,000' },
            { to: '/lighting?price=over-1000', label: 'Over $1,000' },
          ],
        },
        {
          title: 'The workshop',
          links: [
            { to: '/story', label: 'Our maalems' },
            { to: '/story#materials', label: 'Brass and patina' },
            { to: '/shipping', label: 'Lead times and care' },
          ],
        },
      ],
      feature: {
        to: '/product/halo-de-casablanca',
        image: '/products/halo-de-casablanca.jpg',
        alt: 'Halo de Casablanca pendant — hand-pierced brass sphere',
        eyebrow: 'New this season',
        title: 'Halo de Casablanca',
      },
    },
  },
  { to: '/ceramics', label: 'Ceramics' },
  { to: '/story', label: 'Story' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const { itemCount } = useCart()
  const location = useLocation()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header
        className="sticky top-0 z-50 bg-cream"
        style={{ borderBottom: '1px solid var(--color-sand)' }}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="sm:hidden p-2 -ml-2 text-ink"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Wordmark */}
            <Link to="/" className="flex items-center" aria-label="Maison Chapuis — home">
              <span
                className="font-serif text-ink"
                style={{
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 1.6vw, 20px)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Maison Chapuis
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-10" aria-label="Primary">
              {NAV.map((link) => (
                <div
                  key={link.to}
                  onMouseEnter={() => link.mega && setActiveMega(link.label)}
                  style={{ position: 'static' }}
                >
                  <Link
                    to={link.to}
                    aria-haspopup={link.mega ? 'true' : undefined}
                    aria-expanded={link.mega ? activeMega === link.label : undefined}
                    onFocus={() => link.mega && setActiveMega(link.label)}
                    onBlur={(e) => {
                      const next = e.relatedTarget as HTMLElement | null
                      if (!next || !next.closest('[data-mega-panel]')) setActiveMega(null)
                    }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color:
                        location.pathname === link.to || activeMega === link.label
                          ? 'var(--color-ink)'
                          : 'var(--color-muted)',
                      paddingBlock: 8,
                    }}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 -mr-2 text-ink transition-colors"
              aria-label={`Cart — ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 flex items-center justify-center"
                  style={{
                    background: 'var(--color-ink)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 10,
                    width: 18,
                    height: 18,
                  }}
                >
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mega-menu panel */}
        {activeMega &&
          NAV.find((n) => n.label === activeMega)?.mega && (
            <MegaMenuPanel
              panel={NAV.find((n) => n.label === activeMega)!.mega!}
              onClose={() => setActiveMega(null)}
            />
          )}

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="sm:hidden bg-cream px-4 py-4 space-y-1"
            style={{ borderTop: '1px solid var(--color-sand)' }}
            aria-label="Mobile"
          >
            {NAV.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block py-3"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color:
                    location.pathname === link.to
                      ? 'var(--color-ink)'
                      : 'var(--color-muted)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}

function MegaMenuPanel({ panel, onClose }: { panel: MegaPanel; onClose: () => void }) {
  return (
    <div
      data-mega-panel
      className="hidden sm:block"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: '100%',
        background: 'var(--color-cream)',
        borderTop: '1px solid var(--color-sand)',
        borderBottom: '1px solid var(--color-sand)',
      }}
      onMouseLeave={onClose}
    >
      <div className="container" style={{ paddingTop: 40, paddingBottom: 48 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1.3fr',
            gap: 48,
          }}
        >
          <div style={{ gridColumn: 'span 3', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {panel.columns.map((col) => (
              <div key={col.title}>
                <h4
                  className="eyebrow"
                  style={{ color: 'var(--color-muted)', marginBottom: 16 }}
                >
                  {col.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 14,
                          color: 'var(--color-ink)',
                          textDecoration: 'none',
                        }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            to={panel.feature.to}
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className="aspect-[4/5]"
              style={{ position: 'relative', background: 'var(--color-ink)', overflow: 'hidden' }}
            >
              <img
                src={panel.feature.image}
                alt={panel.feature.alt}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: 28,
                }}
              />
            </div>
            <p
              className="eyebrow-gold"
              style={{ margin: '14px 0 4px 0' }}
            >
              {panel.feature.eyebrow}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: 20,
                color: 'var(--color-ink)',
                margin: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {panel.feature.title}
              <ChevronRight size={14} strokeWidth={1.5} />
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
