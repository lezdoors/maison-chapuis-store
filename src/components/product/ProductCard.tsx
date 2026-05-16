import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { formatPrice } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

const categoryLabel = (category: string) => {
  switch (category) {
    case 'tagines': return 'Tagine'
    case 'ceramics': return 'Ceramic'
    case 'glassware': return 'Glassware'
    case 'rugs': return 'Rug'
    default: return ''
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  if (product.coming_soon) {
    return (
      <div className="group" style={{ background: '#ffffff' }}>
        <div
          className="aspect-square"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ffffff',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-muted)',
            }}
          >
            Coming soon
          </span>
        </div>
        <div style={{ padding: '16px 4px 0' }}>
          <h3
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: 16,
              color: 'var(--color-muted)',
              margin: 0,
            }}
          >
            {product.name}
          </h3>
        </div>
      </div>
    )
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group"
      style={{ display: 'block', textDecoration: 'none', color: 'inherit', background: '#ffffff' }}
    >
      <div
        className="aspect-square"
        style={{ position: 'relative', background: '#ffffff', overflow: 'hidden' }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            padding: 'clamp(20px, 3vw, 32px)',
            transition: 'transform 700ms ease',
          }}
          className="group-hover:scale-[1.03]"
        />
      </div>
      <div style={{ padding: '16px 4px 0' }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'var(--color-muted)',
            margin: 0,
          }}
        >
          {categoryLabel(product.category)}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 1.2,
            color: 'var(--color-ink)',
            margin: '4px 0 6px',
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: 14,
            color: 'var(--color-ink)',
            margin: 0,
          }}
        >
          {formatPrice(product.price_usd)}
        </p>
      </div>
    </Link>
  )
}
