'use client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-white/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-gold focus-visible:ring-gold/50 focus-visible:ring-[3px]',
        className
      )}
      {...props}
    />
  )
}

export function WaitlistCard() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedInput, setFocusedInput] = useState<string | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    // TODO: wire to Supabase waitlist table
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen w-full bg-charcoal relative overflow-hidden flex items-center justify-center">
      {/* Background gradient — warm gold tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/25 via-gold/15 to-charcoal" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Top radial glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-gold/15 blur-[80px]" />
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vh] h-[60vh] rounded-b-full bg-gold/15 blur-[60px]"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90vh] h-[90vh] rounded-t-full bg-gold/15 blur-[60px]"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', delay: 1 }}
      />

      {/* Ambient glow spots */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-pulse opacity-40" />
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-pulse opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm relative z-10 px-4"
        style={{ perspective: 1500 }}
      >
        <motion.div
          className="relative"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ z: 10 }}
        >
          <div className="relative group">
            {/* Card glow effect */}
            <motion.div
              className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"
              animate={{
                boxShadow: [
                  '0 0 10px 2px rgba(197,164,85,0.05)',
                  '0 0 15px 5px rgba(197,164,85,0.1)',
                  '0 0 10px 2px rgba(197,164,85,0.05)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
            />

            {/* Traveling light beams */}
            <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70"
                animate={{ left: ['-50%', '100%'], opacity: [0.3, 0.7, 0.3] }}
                transition={{ left: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: 'mirror' } }}
              />
              <motion.div
                className="absolute top-0 right-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-70"
                animate={{ top: ['-50%', '100%'], opacity: [0.3, 0.7, 0.3] }}
                transition={{ top: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: 0.6 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: 0.6 } }}
              />
              <motion.div
                className="absolute bottom-0 right-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70"
                animate={{ right: ['-50%', '100%'], opacity: [0.3, 0.7, 0.3] }}
                transition={{ right: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: 1.2 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: 1.2 } }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-gold to-transparent opacity-70"
                animate={{ bottom: ['-50%', '100%'], opacity: [0.3, 0.7, 0.3] }}
                transition={{ bottom: { duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: 1.8 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: 'mirror', delay: 1.8 } }}
              />
            </div>

            {/* Card border glow */}
            <div className="absolute -inset-[0.5px] rounded-2xl bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Glass card */}
            <div className="relative bg-charcoal/60 backdrop-blur-xl rounded-2xl p-6 border border-gold/10 shadow-2xl overflow-hidden">
              {/* Subtle inner pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(135deg, white 0.5px, transparent 0.5px), linear-gradient(45deg, white 0.5px, transparent 0.5px)`,
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Logo + Header */}
              <div className="text-center space-y-1 mb-5">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                  className="mx-auto w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center relative overflow-hidden"
                >
                  <img src="/logo.png" alt="Maison Chapuis" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-50" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-serif font-light bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                >
                  Join the Waitlist
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/60 text-xs leading-relaxed"
                >
                  Be the first to discover our handcrafted Moroccan brass lighting collection.
                </motion.p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-6 space-y-3"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-white font-serif text-lg">You're on the list</p>
                    <p className="text-white/50 text-xs">We'll notify you when our collection launches.</p>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-1 text-gold text-xs hover:text-gold-light transition-colors mt-2"
                    >
                      Back to home <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    {/* Email input */}
                    <motion.div
                      className={`relative ${focusedInput === 'email' ? 'z-10' : ''}`}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <div className="relative flex items-center overflow-hidden rounded-lg">
                        <Mail
                          className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                            focusedInput === 'email' ? 'text-gold' : 'text-white/40'
                          }`}
                        />
                        <Input
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedInput('email')}
                          onBlur={() => setFocusedInput(null)}
                          required
                          className="w-full bg-white/5 border-transparent focus:border-gold/30 text-white h-10 pl-10 pr-3 focus:bg-white/10"
                        />
                        {focusedInput === 'email' && (
                          <motion.div
                            layoutId="input-highlight"
                            className="absolute inset-0 bg-gold/5 -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* Submit button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className="w-full relative group/button mt-2"
                    >
                      <div className="absolute inset-0 bg-gold/20 rounded-lg blur-lg opacity-0 group-hover/button:opacity-70 transition-opacity duration-300" />

                      <div className="relative overflow-hidden bg-gold text-charcoal font-medium h-10 rounded-lg transition-all duration-300 flex items-center justify-center">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/30 to-gold/0 -z-10"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
                          style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 0.3s ease' }}
                        />

                        <AnimatePresence mode="wait">
                          {isLoading ? (
                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center">
                              <div className="w-4 h-4 border-2 border-charcoal/70 border-t-transparent rounded-full animate-spin" />
                            </motion.div>
                          ) : (
                            <motion.span key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1 text-sm font-medium tracking-wide">
                              Join the Waitlist
                              <ArrowRight className="w-3 h-3 group-hover/button:translate-x-1 transition-transform duration-300" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.button>

                    {/* Divider */}
                    <div className="relative mt-2 mb-3 flex items-center">
                      <div className="flex-grow border-t border-white/5" />
                      <motion.span
                        className="mx-3 text-xs text-white/40"
                        animate={{ opacity: [0.7, 0.9, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        or
                      </motion.span>
                      <div className="flex-grow border-t border-white/5" />
                    </div>

                    {/* Browse collection */}
                    <Link to="/shop">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full relative group/browse"
                      >
                        <div className="absolute inset-0 bg-white/5 rounded-lg blur opacity-0 group-hover/browse:opacity-70 transition-opacity duration-300" />

                        <div className="relative overflow-hidden bg-white/5 text-white font-medium h-10 rounded-lg border border-white/10 hover:border-gold/20 transition-all duration-300 flex items-center justify-center gap-2">
                          <span className="text-white/80 group-hover/browse:text-white transition-colors text-xs tracking-wide">
                            Browse the Collection
                          </span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                          />
                        </div>
                      </motion.div>
                    </Link>

                    {/* Story link */}
                    <motion.p
                      className="text-center text-xs text-white/60 mt-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Handcrafted in Morocco.{' '}
                      <Link to="/story" className="relative inline-block group/story">
                        <span className="relative z-10 text-gold group-hover/story:text-gold-light transition-colors duration-300 font-medium">
                          Read our story
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover/story:w-full transition-all duration-300" />
                      </Link>
                    </motion.p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default WaitlistCard
