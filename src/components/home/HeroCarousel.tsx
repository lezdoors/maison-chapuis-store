import { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

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
  {
    image: '/lifestyle-teardrop.jpg',
    alt: 'Brass teardrop pendant in a softly lit Moroccan interior',
    eyebrow: 'Editorial · Spring 2026',
    heading: 'A house built around a workshop.',
    subtitle: 'The first ceramics pieces leave the kiln in Fes this spring. Sign up to be notified.',
    ctaLabel: 'Join the list',
    ctaHref: '/waitlist',
  },
]

const ROTATE_MS = 7000

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const timerRef = useRef<number | null>(null)
  const isPaused = hovered || userPaused

  const goTo = useCallback((i: number) => {
    setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    timerRef.current = window.setTimeout(() => {
      setActive((a) => (a + 1) % SLIDES.length)
    }, ROTATE_MS)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [active, isPaused])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Maison Chapuis editorial hero"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
            key={slide.image + i}
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
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0) 70%)',
              }}
            />
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

      {/* Prev / Next arrows — visible on hover */}
      <button
        type="button"
        onClick={() => goTo(active - 1)}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'clamp(8px, 2vw, 28px)',
          transform: 'translateY(-50%)',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.25)',
          color: '#ffffff',
          border: '1px solid rgba(255,255,255,0.35)',
          cursor: 'pointer',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease, background 0.2s ease',
          zIndex: 3,
        }}
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          top: '50%',
          right: 'clamp(8px, 2vw, 28px)',
          transform: 'translateY(-50%)',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.25)',
          color: '#ffffff',
          border: '1px solid rgba(255,255,255,0.35)',
          cursor: 'pointer',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease, background 0.2s ease',
          zIndex: 3,
        }}
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      {/* Pause / Play toggle */}
      <button
        type="button"
        onClick={() => setUserPaused((p) => !p)}
        aria-label={userPaused ? 'Play carousel' : 'Pause carousel'}
        aria-pressed={userPaused}
        style={{
          position: 'absolute',
          right: 'clamp(16px, 3vw, 32px)',
          bottom: 30,
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.25)',
          color: '#ffffff',
          border: '1px solid rgba(255,255,255,0.35)',
          cursor: 'pointer',
          zIndex: 3,
        }}
      >
        {userPaused ? <Play size={14} strokeWidth={1.5} /> : <Pause size={14} strokeWidth={1.5} />}
      </button>

      {/* Slide indicators */}
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
