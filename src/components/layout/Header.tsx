import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/lighting', label: 'Lighting' },
  { to: '/ceramics', label: 'Ceramics' },
  { to: '/story', label: 'Story' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header
        className="sticky top-0 z-50 bg-cream"
        style={{ borderBottom: '1px solid var(--color-sand)' }}
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
            <nav className="hidden sm:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: 11,
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

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 -mr-2 text-ink hover:text-gold-dark transition-colors"
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

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="sm:hidden bg-cream px-4 py-4 space-y-1"
            style={{ borderTop: '1px solid var(--color-sand)' }}
          >
            {navLinks.map(link => (
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
