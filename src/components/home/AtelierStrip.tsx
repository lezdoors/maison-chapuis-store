import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

const inStock = products.filter((p) => p.in_stock && !p.coming_soon)

const categoryLabel = (category: string) =>
  category === 'pendants' ? 'Pendant' : category === 'wall-sconces' ? 'Wall Sconce' : 'Ceramic'

export default function AtelierStrip() {
  return (
    <div
      className="scroll-strip grid grid-flow-col auto-cols-[84vw] md:auto-cols-[40%] lg:auto-cols-[28%] gap-4 overflow-x-auto"
      style={{
        marginTop: 'clamp(40px, 5vw, 64px)',
        scrollSnapType: 'x mandatory',
        paddingLeft: 'clamp(16px, 4vw, 32px)',
        paddingRight: 'clamp(16px, 4vw, 32px)',
        paddingBottom: 8,
      }}
    >
      {inStock.map((product, i) => {
        const primary = product.images[0]
        const secondary = product.images[1] || product.images[0]
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: Math.min(i, 6) * 0.05 }}
            style={{ scrollSnapAlign: 'start' }}
          >
            <Link
              to={`/product/${product.slug}`}
              className="group"
              style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              aria-label={`${product.name} — ${categoryLabel(product.category)}, ${formatPrice(product.price_usd)}`}
            >
              <div
                className="aspect-[4/5]"
                style={{
                  position: 'relative',
                  background: 'var(--color-ink)',
                  overflow: 'hidden',
                }}
              >
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
                    padding: 'clamp(28px, 4vw, 40px)',
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
                    padding: 'clamp(28px, 4vw, 40px)',
                    opacity: 0,
                    transition: 'opacity 500ms ease',
                  }}
                />
              </div>
              <div style={{ background: '#FFFFFF', padding: '20px 24px 24px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    color: 'var(--color-muted)',
                    margin: 0,
                  }}
                >
                  {categoryLabel(product.category)}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 300,
                    fontSize: 22,
                    lineHeight: 1.15,
                    color: 'var(--color-ink)',
                    letterSpacing: '-0.005em',
                    margin: '4px 0 8px',
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: 15,
                    color: 'var(--color-ink)',
                    margin: 0,
                  }}
                >
                  {formatPrice(product.price_usd)}
                </p>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
