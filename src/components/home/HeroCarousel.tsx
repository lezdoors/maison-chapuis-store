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
    alt: 'A Moroccan table set with hand-painted tagines and tea glasses at dusk',
    eyebrow: 'Spring Editorial 2026',
    heading: 'CLAY, BY HAND.',
    subtitle: 'Tagines, ceramics, and glassware shaped one piece at a time, in the workshops of Marrakech and Fes.',
    ctaLabel: 'Discover the ceramics',
    ctaHref: '/shop?cat=ceramics',
  },
  {
    image: '/lifestyle-teardrop-lit.jpg',
    alt: 'Hand-painted ceramic bowls drying in a Moroccan courtyard workshop',
    eyebrow: 'The Atelier',
    heading: 'MADE IN MARRAKECH.',
    subtitle: 'Direct from the workshop. No middlemen. Each piece signed by its maker.',
    ctaLabel: 'Shop the atelier',
    ctaHref: '/shop',
  },
  {
    image: '/lifestyle-wall-sconce.jpg',
    alt: 'A hand-knotted Beni Ourain rug draped across a sun-washed Moroccan floor',
    eyebrow: 'The Loom',
    heading: 'WOVEN IN THE ATLAS.',
    subtitle: 'Beni Ourain, Boucherouite, Azilal — hand-knotted rugs from the women weavers of the high Atlas.',
    ctaLabel: 'Discover the rugs',
    ctaHref: '/shop?cat=rugs',
  },
  {
    image: '/lifestyle-teardrop.jpg',
    alt: 'Hand-painted Moroccan tea glasses and a silver pot at golden hour',
    eyebrow: 'Coming Spring 2026',
    heading: 'EVERYTHING — IN THE KILN.',
    subtitle: 'The first pieces leave the kilns this spring. Join the list for early access.',
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
        height: 'clamp(560px, 82vh, 920px)',
        overflow: 'hidden',
        background: 'var(--color-bg-alt)',
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
            {/* Center overlay text — bold sans display */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(24px, 5vw, 64px)',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  maxWidth: 920,
                  textAlign: 'center',
                  color: '#ffffff',
                  textShadow: '0 2px 24px rgba(0,0,0,0.32)',
                  pointerEvents: 'auto',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.92)',
                    margin: '0 0 22px 0',
                  }}
                >
                  {slide.eyebrow}
                </p>
                <h1
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: 'clamp(40px, 6.4vw, 96px)',
                    lineHeight: 1.02,
                    letterSpacing: '-0.02em',
                    margin: '0 0 24px 0',
                  }}
                >
                  {slide.heading}
                </h1>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: 'rgba(255,255,255,0.92)',
                    maxWidth: 560,
                    margin: '0 auto 36px',
                  }}
                >
                  {slide.subtitle}
                </p>
                <Link to={slide.ctaHref} className="cta-outline-white" tabIndex={isActive ? 0 : -1}>
                  {slide.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        )
      })}

      {/* Prev / Next arrows */}
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
          background: 'rgba(0,0,0,0.18)',
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
          background: 'rgba(0,0,0,0.18)',
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

      {/* Pause / Play toggle + slide counter — bottom-left */}
      <div
        style={{
          position: 'absolute',
          left: 'clamp(16px, 3vw, 32px)',
          bottom: 'clamp(20px, 3vw, 32px)',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          zIndex: 3,
        }}
      >
        <button
          type="button"
          onClick={() => setUserPaused((p) => !p)}
          aria-label={userPaused ? 'Play carousel' : 'Pause carousel'}
          aria-pressed={userPaused}
          style={{
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.18)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.5)',
            cursor: 'pointer',
          }}
        >
          {userPaused ? <Play size={14} strokeWidth={1.75} /> : <Pause size={14} strokeWidth={1.75} />}
        </button>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: 11,
            letterSpacing: '0.22em',
            color: '#ffffff',
            opacity: 0.85,
          }}
        >
          {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  )
}
