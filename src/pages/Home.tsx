import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const featured = products.filter(p => p.is_featured)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                Where Moroccan
                <br />
                <span className="text-gold italic">craft</span> meets
                <br />
                French <span className="text-gold italic">design</span>
              </h1>
              <p className="mt-6 text-lg text-cream-dark/80 max-w-lg mx-auto lg:mx-0">
                Handcrafted brass lighting and ceramics, made by master artisans
                in Morocco. Each piece tells a story of centuries-old tradition.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3.5 text-sm font-medium tracking-wide transition-colors"
                >
                  Shop the Collection
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/story"
                  className="inline-flex items-center justify-center gap-2 border border-cream-dark/30 text-cream-dark hover:border-gold hover:text-gold px-8 py-3.5 text-sm font-medium tracking-wide transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/products/poire-andalouse.jpg"
                alt="Poire Andalouse pendant light"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

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
