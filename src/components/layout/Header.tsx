import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, Heart, User, MapPin, X, ChevronRight } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import CountrySelector from './CountrySelector'

interface NavLink {
  to: string
  label: string
  mega?: MegaPanel
}

interface MegaPanel {
  columns: { title: string; links: { to: string; label: string }[] }[]
  feature: { to: string; image: string; alt: string; eyebrow: string; title: string }
}

const NAV_RIGHT: NavLink[] = [
  {
    to: '/shop',
    label: 'Products',
    mega: {
      columns: [
        {
          title: 'Lighting',
          links: [
            { to: '/lighting?cat=pendants', label: 'Pendants' },
            { to: '/lighting?cat=sconces', label: 'Wall Sconces' },
            { to: '/lighting?cat=lanterns', label: 'Lanterns' },
            { to: '/lighting', label: 'All Lighting' },
          ],
        },
        {
          title: 'Ceramics',
          links: [
            { to: '/ceramics', label: 'Tableware' },
            { to: '/ceramics', label: 'Vessels' },
            { to: '/ceramics', label: 'Spring 2026 preview' },
          ],
        },
        {
          title: 'The Atelier',
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
  { to: '/story', label: 'Atelier' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header
        className="sticky top-0 z-50"
        style={{ background: '#ffffff', borderBottom: '1px solid var(--color-sand)' }}
        onMouseLeave={() => setActiveMega(null)}
      >
        {/* Utility row — slim, right-aligned icons + region selector */}
        <div
          className="hidden sm:block"
          style={{ borderBottom: '1px solid var(--color-sand)' }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 18,
                minHeight: 36,
              }}
            >
              <CountrySelector />
              <span aria-hidden style={{ height: 14, width: 1, background: 'var(--color-sand)' }} />
              <UtilityIcon to="/shipping" label="Find a showroom"><MapPin size={16} strokeWidth={1.5} /></UtilityIcon>
              <UtilityIcon to="/cart" label={`Cart — ${itemCount} item${itemCount === 1 ? '' : 's'}`}>
                <span style={{ position: 'relative', display: 'inline-flex' }}>
                  <ShoppingBag size={16} strokeWidth={1.5} />
                  {itemCount > 0 && (
                    <span
                      aria-hidden
                      style={{
                        position: 'absolute',
                        top: -6,
                        right: -8,
                        minWidth: 14,
                        height: 14,
                        padding: '0 3px',
                        background: 'var(--color-ink)',
                        color: '#fff',
                        fontSize: 9,
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {itemCount}
                    </span>
                  )}
                </span>
              </UtilityIcon>
              <UtilityIcon to="/wishlist" label="Wishlist"><Heart size={16} strokeWidth={1.5} /></UtilityIcon>
              <UtilityIcon to="/account" label="Account"><User size={16} strokeWidth={1.5} /></UtilityIcon>
            </div>
          </div>
        </div>

        {/* Main row — MENU/SEARCH left · wordmark centered · PRODUCTS/ATELIER right */}
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              minHeight: 'clamp(60px, 7vw, 84px)',
              gap: 16,
            }}
          >
            {/* Left actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'transparent',
                  border: 0,
                  padding: 0,
                  cursor: 'pointer',
                  color: 'var(--color-ink)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                <Menu size={20} strokeWidth={1.75} />
                <span className="hidden lg:inline">Menu</span>
              </button>
              <button
                onClick={() => setSearchOpen((s) => !s)}
                aria-label="Open search"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'transparent',
                  border: 0,
                  padding: 0,
                  cursor: 'pointer',
                  color: 'var(--color-ink)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                <Search size={20} strokeWidth={1.75} />
                <span className="hidden lg:inline">Search</span>
              </button>
            </div>

            {/* Wordmark — centered */}
            <Link
              to="/"
              aria-label="Maison Chapuis — home"
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                lineHeight: 1,
                textDecoration: 'none',
                color: 'var(--color-ink)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  letterSpacing: '-0.005em',
                  textTransform: 'lowercase',
                }}
              >
                maison<span style={{ fontWeight: 400 }}>chapuis</span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: 9,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  marginTop: 2,
                }}
              >
                Marrakech
              </span>
            </Link>

            {/* Right nav */}
            <nav
              className="hidden sm:flex"
              style={{ justifyContent: 'flex-end', alignItems: 'center', gap: 36 }}
              aria-label="Primary"
            >
              {NAV_RIGHT.map((link) => (
                <div
                  key={link.label}
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
                      fontWeight: 600,
                      fontSize: 12,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink)',
                      textDecoration: 'none',
                      paddingBlock: 8,
                    }}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile-only cart pin (right) */}
            <Link
              to="/cart"
              className="sm:hidden"
              aria-label={`Cart — ${itemCount} item${itemCount === 1 ? '' : 's'}`}
              style={{
                gridColumnStart: 3,
                justifySelf: 'end',
                color: 'var(--color-ink)',
                position: 'relative',
              }}
            >
              <ShoppingBag size={20} strokeWidth={1.75} />
              {itemCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: -4,
                    right: -6,
                    minWidth: 14,
                    height: 14,
                    padding: '0 3px',
                    background: 'var(--color-ink)',
                    color: '#fff',
                    fontSize: 9,
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search drawer */}
        {searchOpen && (
          <div
            style={{
              borderTop: '1px solid var(--color-sand)',
              background: '#ffffff',
            }}
          >
            <div className="container" style={{ paddingTop: 14, paddingBottom: 14 }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSearchOpen(false)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  borderBottom: '1px solid var(--color-ink)',
                  paddingBottom: 6,
                }}
              >
                <Search size={18} strokeWidth={1.5} style={{ color: 'var(--color-muted)' }} />
                <input
                  autoFocus
                  placeholder="Search pendants, ceramics, journal…"
                  style={{
                    flex: 1,
                    border: 0,
                    outline: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 16,
                    color: 'var(--color-ink)',
                    background: 'transparent',
                    padding: '6px 0',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'var(--color-muted)' }}
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Mega-menu panel */}
        {activeMega &&
          NAV_RIGHT.find((n) => n.label === activeMega)?.mega && (
            <MegaMenuPanel
              panel={NAV_RIGHT.find((n) => n.label === activeMega)!.mega!}
              onClose={() => setActiveMega(null)}
            />
          )}
      </header>

      {/* Mobile menu drawer — full-screen overlay */}
      {mobileOpen && (
        <div
          className="sm:hidden"
          style={{
            position: 'fixed',
            inset: 0,
            background: '#ffffff',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 16,
                paddingBottom: 16,
                borderBottom: '1px solid var(--color-sand)',
              }}
            >
              <span className="eyebrow">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'var(--color-ink)' }}
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav style={{ paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { to: '/shop', label: 'All Products' },
                { to: '/lighting', label: 'Lighting' },
                { to: '/ceramics', label: 'Ceramics' },
                { to: '/story', label: 'The Atelier' },
                { to: '/journal', label: 'Journal' },
                { to: '/shipping', label: 'Shipping &amp; Returns' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link
                  key={l.to + l.label}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 0',
                    borderBottom: '1px solid var(--color-sand)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: 16,
                    color:
                      location.pathname === l.to ? 'var(--color-ink)' : 'var(--color-ink)',
                    textDecoration: 'none',
                  }}
                >
                  <span>{l.label}</span>
                  <ChevronRight size={16} strokeWidth={1.5} />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

function UtilityIcon({
  to,
  label,
  children,
}: {
  to: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      to={to}
      aria-label={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-ink)',
        opacity: 0.85,
        transition: 'opacity .15s ease',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
    >
      {children}
    </Link>
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
        background: '#ffffff',
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
                <h4 className="eyebrow" style={{ color: 'var(--color-muted)', marginBottom: 16 }}>
                  {col.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
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
              style={{ position: 'relative', background: 'var(--color-bg-alt)', overflow: 'hidden' }}
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
            <p className="eyebrow-gold" style={{ margin: '14px 0 4px 0' }}>
              {panel.feature.eyebrow}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: 16,
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
