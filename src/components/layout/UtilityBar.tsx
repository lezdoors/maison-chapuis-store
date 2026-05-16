import CountrySelector from './CountrySelector'

export default function UtilityBar() {
  return (
    <div
      style={{
        width: '100%',
        background: 'var(--color-ink)',
        color: 'rgba(255,255,255,0.78)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            minHeight: 36,
          }}
        >
          <div
            className="hidden sm:flex"
            style={{
              alignItems: 'center',
              gap: 24,
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            <span>Ships from Marrakech to the United States</span>
            <span aria-hidden style={{ opacity: 0.4 }}>·</span>
            <span>Free shipping over $300</span>
            <span aria-hidden style={{ opacity: 0.4 }}>·</span>
            <span>Trade enquiries welcome</span>
          </div>
          <div
            className="flex sm:hidden"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            <span>Free shipping over $300</span>
          </div>
          <CountrySelector />
        </div>
      </div>
    </div>
  )
}
