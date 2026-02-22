import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { HeroSection } from '@/components/ui/hero-section'

const featured = products.filter(p => p.is_featured)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        logo={{
          url: '/logo.png',
          alt: 'Maison Chapuis',
          text: 'MAISON CHAPUIS',
        }}
        slogan="MOROCCAN CRAFT, FRENCH DESIGN"
        title={
          <>
            Where Moroccan
            <br />
            <span className="text-gold italic">craft</span> meets
            <br />
            French <span className="text-gold italic">design</span>
          </>
        }
        subtitle="Handcrafted brass lighting and ceramics, made by master artisans in Morocco. Each piece tells a story of centuries-old tradition."
        callToAction={{
          text: 'SHOP THE COLLECTION',
          href: '/shop',
        }}
        secondaryAction={{
          text: 'Our Story',
          href: '/story',
        }}
        backgroundImage="/hero-tent.webp"
        trustSignals={{
          line1: 'maison-chapuis.com',
          line2: 'Free US shipping over $300',
          line3: 'Handcrafted in Morocco',
        }}
        className="min-h-[600px] md:min-h-[700px]"
      />

      {/* Trust strip */}
      <section className="bg-cream-dark border-y border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-xs sm:text-sm text-charcoal-light tracking-wide">
            <span>Handcrafted in Morocco</span>
            <span className="hidden sm:inline">|</span>
            <span>Free US Shipping over $300</span>
            <span className="hidden sm:inline">|</span>
            <span>Artisan Direct</span>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal">Featured Pieces</h2>
          <p className="mt-3 text-charcoal-light">Statement lighting, handmade by Moroccan master artisans</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold tracking-wide transition-colors"
          >
            View All Pieces
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Brand teaser */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              A Heritage of <span className="text-gold italic">Light</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-cream-dark/80 leading-relaxed">
              For generations, the artisans of Marrakech, Fes, and the Atlas Mountains have
              shaped raw brass into extraordinary works of light. Maison Chapuis brings this
              living tradition to your home — each piece handcrafted, each pattern unique,
              each shadow a story.
            </p>
            <Link
              to="/story"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-gold hover:text-gold-light tracking-wide transition-colors"
            >
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
