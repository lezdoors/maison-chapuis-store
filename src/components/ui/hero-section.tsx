import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Globe, MapPin, Truck } from 'lucide-react'

interface HeroSectionProps {
  className?: string
  logo?: {
    url: string
    alt: string
    text?: string
  }
  slogan?: string
  title: React.ReactNode
  subtitle: string
  callToAction: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  backgroundImage: string
  trustSignals?: {
    line1: string
    line2: string
    line3: string
  }
}

function HeroSection({
  className,
  logo,
  slogan,
  title,
  subtitle,
  callToAction,
  secondaryAction,
  backgroundImage,
  trustSignals,
}: HeroSectionProps) {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    }

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut' as const,
        },
      },
    }

    return (
      <motion.section
        className={cn(
          'relative flex w-full flex-col overflow-hidden bg-charcoal text-cream md:flex-row',
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          {/* Top Section: Logo & Main Content */}
          <div>
            <motion.header className="mb-12" variants={itemVariants}>
              {logo && (
                <div className="flex items-center">
                  <img src={logo.url} alt={logo.alt} className="mr-3 h-10 w-10 rounded-full object-cover" />
                  <div>
                    {logo.text && (
                      <p className="font-serif text-lg font-semibold tracking-wide text-white">
                        {logo.text}
                      </p>
                    )}
                    {slogan && (
                      <p className="text-[10px] font-medium tracking-[0.2em] text-gold">
                        {slogan}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.header>

            <motion.div variants={containerVariants}>
              <motion.h1
                className="font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-6 h-[2px] w-20 bg-gold"
                variants={itemVariants}
              />
              <motion.p
                className="mb-8 max-w-md text-base leading-relaxed text-cream-dark/80"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
              <motion.div className="flex flex-col gap-4 sm:flex-row" variants={itemVariants}>
                <a
                  href={callToAction.href}
                  className="inline-flex items-center justify-center bg-gold px-8 py-3.5 text-sm font-medium tracking-widest text-white transition-colors hover:bg-gold-dark"
                >
                  {callToAction.text}
                </a>
                {secondaryAction && (
                  <a
                    href={secondaryAction.href}
                    className="inline-flex items-center justify-center border border-cream-dark/30 px-8 py-3.5 text-sm font-medium tracking-wide text-cream-dark transition-colors hover:border-gold hover:text-gold"
                  >
                    {secondaryAction.text}
                  </a>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section: Trust Signals */}
          {trustSignals && (
            <motion.footer className="mt-12 w-full" variants={itemVariants}>
              <div className="grid grid-cols-1 gap-5 text-xs text-cream-dark/60 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Globe size={16} className="shrink-0 text-gold/70" />
                  <span>{trustSignals.line1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="shrink-0 text-gold/70" />
                  <span>{trustSignals.line2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="shrink-0 text-gold/70" />
                  <span>{trustSignals.line3}</span>
                </div>
              </div>
            </motion.footer>
          )}
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div
          className="min-h-[350px] w-full bg-cover bg-center md:min-h-full md:w-1/2 lg:w-2/5"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: 'circOut' }}
        />
      </motion.section>
    )
}

export { HeroSection }
