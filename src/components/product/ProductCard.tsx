import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  if (product.coming_soon) {
    return (
      <div className="group">
        <div className="aspect-square bg-sand/50 rounded-lg flex items-center justify-center">
          <span className="text-charcoal-light font-serif text-lg italic">Coming Soon</span>
        </div>
        <div className="mt-4">
          <h3 className="font-serif text-lg text-charcoal-light">{product.name}</h3>
        </div>
      </div>
    )
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="aspect-square bg-white rounded-lg overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-lg text-charcoal group-hover:text-gold-dark transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-charcoal-light">{formatPrice(product.price_usd)}</p>
      </div>
    </Link>
  )
}
