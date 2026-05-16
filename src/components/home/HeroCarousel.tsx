import { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

interface Slide {
  image: string
  alt: string
  eyebrow: string
  heading: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
}

const SLIDES: Slide[] = [
  {
    image: '/hero-tent.webp',
    alt: 'Hand-pierced brass lanterns illuminating a Moroccan tent at dusk',
    eyebrow: 'The Lighting',
    heading: 'Brass, pierced by hand.',
    subtitle: 'Pendants and sconces shaped one piece at a time, in the workshops of Marrakech.',
    ctaLabel: 'Shop Lighting',
    ctaHref: '/lighting',
  },
  {
    image: '/lifestyle-teardrop-lit.jpg',
    alt: 'Lit brass pendant casting geometric shadows across a plaster wall',
    eyebrow: 'The Atelier',
    heading: 'Made in Marrakech.',
    subtitle: 'Direct from the workshop. No middlemen. Each piece signed by its maker.',
    ctaLabel: 'Shop the Atelier',
    ctaHref: '/shop',
  },
  {
    image: '/lifestyle-wall-sconce.jpg',
    alt: 'Brass wall sconce against a textured plaster wall in soft daylight',
    eyebrow: 'The Story',
    heading: 'From workshop to home.',
    subtitle: 'A family-run atelier, three generations of metalwork, brought to the United States.',
    ctaLabel: 'Read the Story',
    ctaHref: '/story',
  },
]

const ROTATE_MS = 7000

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<number | null>(null)

  const goTo = useCallback((i: number) => {
    setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused) return
    timerRef.current = window.setTimeout(() => {
      setActive((a) => (a + 1) % SLIDES.length)
    }, ROTATE_MS)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [active, paused])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Maison Chapuis editorial hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(520px, 78vh, 860px)',
        overflow: 'hidden',
        background: 'var(--color-ink)',
      }}
    >
      {SLIDES.map((slide, i) => {
        const isActive = i === active
        return (
          <div
            key={slide.image}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slide.eyebrow} — slide ${i + 1} of ${SLIDES.length}`}
            aria-hidden={!isActive}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
            />
            {/* Gradient overlay — left-darker fading to transparent at 70% */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0) 70%)',
              }}
            />
            {/* Text panel — bottom-left, max 560px */}
            <div
              style={{
                position: 'absolute',
                left: 'clamp(20px, 5vw, 64px)',
                bottom: 'clamp(80px, 12vh, 140px)',
                maxWidth: 560,
                color: '#ffffff',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                  margin: '0 0 18px 0',
                }}
              >
                {slide.eyebrow}
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 300,
                  fontSize: 'clamp(40px, 5.4vw, 72px)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.01em',
                  margin: '0 0 18px 0',
                }}
              >
                {slide.heading}
              </h1>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.85)',
                  maxWidth: 440,
                  margin: '0 0 28px 0',
                }}
              >
                {slide.subtitle}
              </p>
              <Link to={slide.ctaHref} className="cta-outline-white" tabIndex={isActive ? 0 : -1}>
                {slide.ctaLabel}
              </Link>
            </div>
          </div>
        )
      })}

      {/* Slide indicators — thin horizontal lines */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 36,
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 8,
          zIndex: 2,
        }}
        role="tablist"
        aria-label="Carousel slides"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === active ? 40 : 24,
              height: 2,
              background: i === active ? '#ffffff' : 'rgba(255,255,255,0.45)',
              border: 0,
              padding: 0,
              cursor: 'pointer',
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
