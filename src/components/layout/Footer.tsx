import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-dark">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold text-white mb-4">MAISON CHAPUIS</h3>
            <p className="text-sm leading-relaxed max-w-md text-cream-dark/80">
              A bridge between Moroccan artisan tradition and French design sensibility.
              Every piece is handcrafted by master artisans in Morocco, curated for the modern American home.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">Explore</h4>
            <div className="space-y-2.5">
              <Link to="/shop" className="block text-sm text-cream-dark/80 hover:text-gold transition-colors">Shop All</Link>
              <Link to="/story" className="block text-sm text-cream-dark/80 hover:text-gold transition-colors">Our Story</Link>
              <Link to="/shipping" className="block text-sm text-cream-dark/80 hover:text-gold transition-colors">Shipping & Returns</Link>
              <Link to="/contact" className="block text-sm text-cream-dark/80 hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">Information</h4>
            <div className="space-y-2.5">
              <Link to="/terms" className="block text-sm text-cream-dark/80 hover:text-gold transition-colors">Terms of Service</Link>
              <Link to="/terms#privacy" className="block text-sm text-cream-dark/80 hover:text-gold transition-colors">Privacy Policy</Link>
              <a href="mailto:hello@maison-chapuis.com" className="block text-sm text-cream-dark/80 hover:text-gold transition-colors">hello@maison-chapuis.com</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-dark/20 text-center text-xs text-cream-dark/50">
          &copy; {new Date().getFullYear()} Maison Chapuis. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
