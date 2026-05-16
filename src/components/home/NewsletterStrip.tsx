import { useState, type FormEvent } from 'react'

export default function NewsletterStrip() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ gap: 'clamp(32px, 5vw, 80px)', alignItems: 'center' }}
    >
      <div>
        <p className="eyebrow" style={{ margin: '0 0 16px 0' }}>
          The Journal
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(28px, 3.4vw, 38px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--color-ink)',
            margin: '0 0 16px 0',
            maxWidth: 440,
          }}
        >
          Stay in the workshop.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
            lineHeight: 1.55,
            color: 'var(--color-muted)',
            maxWidth: 460,
            margin: 0,
          }}
        >
          Quarterly notes from Marrakech and Fes. New pieces, workshop visits, the occasional field guide.
        </p>
      </div>

      <div>
        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            style={{
              borderTop: '1px solid var(--color-sand)',
              borderBottom: '1px solid var(--color-sand)',
              padding: '28px 0',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: 22,
                color: 'var(--color-ink)',
                margin: 0,
                letterSpacing: '-0.005em',
              }}
            >
              Thank you — we&rsquo;ll be in touch.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: 'var(--color-muted)',
                margin: '6px 0 0 0',
              }}
            >
              First letter goes out at the next workshop visit.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 0,
              borderBottom: '1px solid var(--color-ink)',
            }}
          >
            <label htmlFor="newsletter-email" style={{ position: 'absolute', left: -9999 }}>
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              autoComplete="email"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: 'var(--color-ink)',
                background: 'transparent',
                border: 0,
                outline: 'none',
                padding: '16px 0',
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-ink)',
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
                padding: '0 4px',
              }}
            >
              Subscribe
            </button>
          </form>
        )}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'var(--color-muted)',
            margin: '12px 0 0 0',
          }}
        >
          No spam. Unsubscribe in one click.
        </p>
      </div>
    </div>
  )
}
