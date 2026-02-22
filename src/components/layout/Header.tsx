import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/story', label: 'Our Story' },
  { to: '/shipping', label: 'Shipping' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden p-2 -ml-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-charcoal">
              MAISON CHAPUIS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-dark ${
                  location.pathname === link.to ? 'text-gold-dark' : 'text-charcoal-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart */}
          <Link to="/cart" className="relative p-2 -mr-2 text-charcoal hover:text-gold-dark transition-colors">
            <ShoppingBag size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="sm:hidden border-t border-sand bg-cream px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-base font-medium py-2 ${
                location.pathname === link.to ? 'text-gold-dark' : 'text-charcoal-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
