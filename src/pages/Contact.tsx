import { useState, type FormEvent } from 'react'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // TODO: Wire to Supabase contact_messages table
    await new Promise(r => setTimeout(r, 800))

    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Thank You</h1>
        <p className="mt-3 text-charcoal-light">We'll get back to you within 24-48 hours.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-4">Get in Touch</h1>
      <p className="text-charcoal-light mb-10">
        Questions about a piece, custom orders, or trade inquiries — we'd love to hear from you.
      </p>

      <div className="grid lg:grid-cols-3 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 bg-white border border-sand rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 bg-white border border-sand rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-white border border-sand rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-charcoal hover:bg-charcoal-light text-white px-8 py-3 text-sm font-medium tracking-wide transition-colors disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="space-y-6">
          <div className="flex gap-3">
            <Mail size={18} className="text-gold-dark mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <a href="mailto:hello@maison-chapuis.com" className="text-sm text-charcoal-light hover:text-gold-dark">
                hello@maison-chapuis.com
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin size={18} className="text-gold-dark mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Trade Inquiries</p>
              <p className="text-sm text-charcoal-light">
                Interior designers and retailers — contact us for trade pricing and custom orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
