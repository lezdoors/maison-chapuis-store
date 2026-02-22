import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Truck, Shield, Package } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/lib/utils'
import ProductGallery from '@/components/product/ProductGallery'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { addItem } = useCart()

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold-dark hover:text-gold">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-charcoal-light hover:text-gold-dark transition-colors mb-8">
        <ArrowLeft size={14} />
        Back to Collection
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Details */}
        <div>
          <p className="text-xs font-medium tracking-widest text-gold-dark uppercase mb-2">
            {product.category === 'pendants' ? 'Pendant Light' : 'Wall Sconce'}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-charcoal">{product.name}</h1>
          <p className="mt-3 text-2xl text-charcoal">{formatPrice(product.price_usd)}</p>

          <p className="mt-6 text-charcoal-light leading-relaxed">{product.description}</p>

          {/* Add to cart */}
          <button
            onClick={() => addItem(product)}
            className="mt-8 w-full bg-charcoal hover:bg-charcoal-light text-white py-4 px-8 text-sm font-medium tracking-wide transition-colors"
          >
            Add to Cart
          </button>

          {/* Details grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            {product.dimensions && (
              <>
                {product.dimensions.height && (
                  <div>
                    <span className="text-charcoal-light">Height</span>
                    <p className="mt-0.5 font-medium">{product.dimensions.height}</p>
                  </div>
                )}
                {product.dimensions.width && (
                  <div>
                    <span className="text-charcoal-light">Width</span>
                    <p className="mt-0.5 font-medium">{product.dimensions.width}</p>
                  </div>
                )}
                {product.dimensions.chain_length && (
                  <div>
                    <span className="text-charcoal-light">Chain Length</span>
                    <p className="mt-0.5 font-medium">{product.dimensions.chain_length}</p>
                  </div>
                )}
                {product.dimensions.depth && (
                  <div>
                    <span className="text-charcoal-light">Depth</span>
                    <p className="mt-0.5 font-medium">{product.dimensions.depth}</p>
                  </div>
                )}
              </>
            )}
            <div>
              <span className="text-charcoal-light">Materials</span>
              <p className="mt-0.5 font-medium">{product.materials}</p>
            </div>
            {product.weight_kg && (
              <div>
                <span className="text-charcoal-light">Weight</span>
                <p className="mt-0.5 font-medium">{product.weight_kg} kg</p>
              </div>
            )}
          </div>

          {/* Trust signals */}
          <div className="mt-8 pt-8 border-t border-sand space-y-4">
            <div className="flex items-start gap-3">
              <Truck size={18} className="text-gold-dark mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="font-medium">Ships from Morocco</p>
                <p className="text-charcoal-light">Estimated delivery: 2-4 weeks to the US</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield size={18} className="text-gold-dark mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="font-medium">Authenticity Guaranteed</p>
                <p className="text-charcoal-light">Every piece is handcrafted and unique</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package size={18} className="text-gold-dark mt-0.5 shrink-0" />
              <div className="text-sm">
                <p className="font-medium">Carefully Packaged</p>
                <p className="text-charcoal-light">Custom crating for safe international shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-serif text-2xl font-light text-charcoal mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
