import { useState } from 'react'
import { products } from '@/data/products'
import ProductGrid from '@/components/product/ProductGrid'

type Category = 'all' | 'pendants' | 'wall-sconces'

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pendants', label: 'Pendants' },
  { value: 'wall-sconces', label: 'Wall Sconces' },
]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-light text-charcoal">The Collection</h1>
        <p className="mt-3 text-charcoal-light">Handcrafted Moroccan brass lighting</p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-5 py-2 text-sm font-medium tracking-wide transition-colors rounded-full ${
              activeCategory === cat.value
                ? 'bg-charcoal text-white'
                : 'bg-cream-dark text-charcoal-light hover:bg-sand'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products */}
      <ProductGrid products={filtered} />

      {/* Coming Soon: Ceramics */}
      <div className="mt-20 text-center py-16 bg-sand/30 rounded-2xl">
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal">Ceramics Collection</h2>
        <p className="mt-3 text-charcoal-light max-w-md mx-auto">
          Hand-painted Moroccan ceramics are coming soon. Tagines, bowls, and decorative pieces
          crafted in the traditional workshops of Fes.
        </p>
        <p className="mt-4 text-sm text-gold-dark font-medium tracking-wide">Coming Spring 2026</p>
      </div>
    </div>
  )
}
