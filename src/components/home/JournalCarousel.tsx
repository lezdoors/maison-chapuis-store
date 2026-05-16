import { motion } from 'framer-motion'

interface JournalCard {
  tag: string
  title: string
  dek: string
  date: string
  image: string
  imageAlt: string
}

const CARDS: JournalCard[] = [
  {
    tag: 'Atelier',
    title: 'The Marrakech brass workshop',
    dek: 'Inside a courtyard atelier where three generations of maalems still pierce brass by hand.',
    date: 'May 2026',
    image: '/hero-tent.webp',
    imageAlt: 'Brass lanterns hanging in a Moroccan workshop courtyard',
  },
  {
    tag: 'Craft',
    title: 'Pierce patterns and light',
    dek: 'Why every Maison Chapuis pendant casts a different shadow — and why no two are identical.',
    date: 'April 2026',
    image: '/lifestyle-teardrop-lit.jpg',
    imageAlt: 'Lit brass pendant casting geometric shadows on a plaster wall',
  },
  {
    tag: 'Ceramics',
    title: 'What is Fes-style stoneware?',
    dek: 'A short field guide to the lead-free glazes and earthen forms of Morocco’s oldest pottery city.',
    date: 'March 2026',
    image: '/lifestyle-wall-sconce.jpg',
    imageAlt: 'Brass wall sconce against textured plaster in soft daylight',
  },
]

export default function JournalCarousel() {
  return (
    <div
      className="scroll-strip grid grid-flow-col auto-cols-[86vw] md:auto-cols-[calc(33%-12px)] gap-6 overflow-x-auto"
      style={{
        marginTop: 'clamp(40px, 5vw, 64px)',
        scrollSnapType: 'x mandatory',
        paddingLeft: 'clamp(16px, 4vw, 32px)',
        paddingRight: 'clamp(16px, 4vw, 32px)',
        paddingBottom: 8,
      }}
    >
      {CARDS.map((card, i) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
          style={{ scrollSnapAlign: 'start' }}
        >
          <div
            className="aspect-[4/3]"
            style={{
              position: 'relative',
              background: 'var(--color-ink)',
              overflow: 'hidden',
            }}
          >
            <img
              src={card.image}
              alt={card.imageAlt}
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div style={{ paddingTop: 18 }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-gold-dark)',
                margin: 0,
              }}
            >
              {card.tag}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: 20,
                lineHeight: 1.2,
                color: 'var(--color-ink)',
                letterSpacing: '-0.005em',
                margin: '10px 0 8px',
                maxWidth: '32ch',
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                lineHeight: 1.55,
                color: 'var(--color-muted)',
                margin: '0 0 12px 0',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {card.dek}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: 'var(--color-muted)',
                margin: 0,
              }}
            >
              {card.date}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
