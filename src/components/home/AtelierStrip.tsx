import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

const featured = products.filter((p) => p.is_featured)

const categoryLabel = (category: string) => {
  switch (category) {
    case 'tagines': return 'Tagine'
    case 'ceramics': return 'Ceramic'
    case 'glassware': return 'Glassware'
    case 'rugs': return 'Rug'
    default: return ''
  }
}

export default function AtelierStrip() {
  return (
    <div
      className="scroll-strip grid grid-flow-col auto-cols-[82vw] md:auto-cols-[38%] lg:auto-cols-[24%] gap-2 overflow-x-auto"
      style={{
        marginTop: 'clamp(32px, 4vw, 56px)',
        scrollSnapType: 'x mandatory',
        paddingLeft: 'clamp(16px, 4vw, 32px)',
        paddingRight: 'clamp(16px, 4vw, 32px)',
        paddingBottom: 8,
      }}
    >
      {featured.map((product, i) => {
        const hasImage = product.images.length > 0 && !product.coming_soon
        const primary = product.images[0]
        const secondary = product.images[1] || product.images[0]

        const TileInner = (
          <div
            className="aspect-square"
            style={{
              position: 'relative',
              background: hasImage ? '#ffffff' : 'var(--color-bg-alt)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {hasImage ? (
              <>
                <img
                  src={primary}
                  alt={product.name}
                  loading="lazy"
                  className="group-hover:opacity-0"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: 'clamp(20px, 3vw, 32px)',
                    transition: 'opacity 500ms ease',
                  }}
                />
                <img
                  src={secondary}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="group-hover:opacity-100"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: 'clamp(20px, 3vw, 32px)',
                    opacity: 0,
                    transition: 'opacity 500ms ease',
                  }}
                />
              </>
            ) : (
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                }}
              >
                Spring 2026
              </span>
            )}
          </div>
        )

        const Meta = (
          <div style={{ padding: '16px 4px 24px' }}>
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
                margin: '4px 0 8px',
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
              {product.coming_soon ? 'Joining the catalogue' : formatPrice(product.price_usd)}
            </p>
          </div>
        )

        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: Math.min(i, 6) * 0.04 }}
            style={{ scrollSnapAlign: 'start' }}
          >
            {product.coming_soon ? (
              <div
                className="group"
                style={{ display: 'block', background: '#ffffff' }}
                aria-label={`${product.name} — ${categoryLabel(product.category)}, joining the catalogue`}
              >
                {TileInner}
                {Meta}
              </div>
            ) : (
              <Link
                to={`/product/${product.slug}`}
                className="group"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit', background: '#ffffff' }}
                aria-label={`${product.name} — ${categoryLabel(product.category)}, ${formatPrice(product.price_usd)}`}
              >
                {TileInner}
                {Meta}
              </Link>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
