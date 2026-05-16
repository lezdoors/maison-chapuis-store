import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products'
import ProductGrid from '@/components/product/ProductGrid'

type Category = 'all' | 'tagines' | 'ceramics' | 'glassware' | 'rugs'

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'tagines', label: 'Tagines' },
  { value: 'ceramics', label: 'Ceramics' },
  { value: 'glassware', label: 'Glassware' },
  { value: 'rugs', label: 'Rugs' },
]

const isCategory = (v: string | null): v is Category =>
  v === 'all' || v === 'tagines' || v === 'ceramics' || v === 'glassware' || v === 'rugs'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initial = searchParams.get('cat')
  const [activeCategory, setActiveCategory] = useState<Category>(
    isCategory(initial) ? initial : 'all',
  )

  useEffect(() => {
    const next = searchParams.get('cat')
    if (isCategory(next) && next !== activeCategory) setActiveCategory(next)
  }, [searchParams, activeCategory])

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory],
  )

  const onSelect = (value: Category) => {
    setActiveCategory(value)
    if (value === 'all') setSearchParams({})
    else setSearchParams({ cat: value })
  }

  return (
    <div className="container" style={{ padding: 'clamp(56px, 7vw, 96px) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 56px)' }}>
        <p className="eyebrow" style={{ marginBottom: 12 }}>The Collection</p>
        <h1
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: 'clamp(28px, 3.4vw, 40px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--color-ink)',
            margin: 0,
          }}
        >
          Tagines, ceramics, glassware, rugs.
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          marginBottom: 'clamp(32px, 4vw, 56px)',
          flexWrap: 'wrap',
          borderBottom: '1px solid var(--color-sand)',
          paddingBottom: 16,
        }}
        role="tablist"
        aria-label="Filter by category"
      >
        {categories.map((cat) => {
          const active = activeCategory === cat.value
          return (
            <button
              key={cat.value}
              role="tab"
              aria-selected={active}
              onClick={() => onSelect(cat.value)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: active ? 600 : 500,
                fontSize: 13,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: active ? 'var(--color-ink)' : 'var(--color-muted)',
                background: 'transparent',
                border: 0,
                padding: '6px 0',
                borderBottom: active ? '2px solid var(--color-ink)' : '2px solid transparent',
                cursor: 'pointer',
                marginBottom: -17,
              }}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      <ProductGrid products={filtered} />
    </div>
  )
}
