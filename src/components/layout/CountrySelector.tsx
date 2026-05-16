import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Region {
  label: string
  currency: string
}

const REGIONS: Region[] = [
  { label: 'United States', currency: 'USD' },
  { label: 'Canada', currency: 'CAD' },
  { label: 'United Kingdom', currency: 'GBP' },
  { label: 'European Union', currency: 'EUR' },
]

export default function CountrySelector() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Region>(REGIONS[0])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDocClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [open])

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select region"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: 'transparent',
          border: 0,
          padding: '6px 4px',
          cursor: 'pointer',
          color: 'inherit',
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        <span>
          {active.label} · {active.currency}
        </span>
        <ChevronDown size={12} strokeWidth={1.5} style={{ opacity: 0.7 }} />
      </button>
      {open && (
        <ul
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            right: 0,
            minWidth: 220,
            background: 'var(--color-ink)',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '6px 0',
            margin: 0,
            listStyle: 'none',
            zIndex: 60,
          }}
        >
          {REGIONS.map((r) => {
            const isActive = r.label === active.label
            return (
              <li key={r.label}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setActive(r)
                    setOpen(false)
                  }}
                  style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 16px',
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 12,
                    letterSpacing: '0.1em',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                  }}
                >
                  <span>{r.label}</span>
                  <span style={{ opacity: 0.6, fontSize: 11 }}>{r.currency}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
