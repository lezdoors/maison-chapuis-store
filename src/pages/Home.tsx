import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Mail,
  MapPin,
  Globe,
  Truck,
  Instagram,
  ArrowUpRight,
  Sparkles,
  Shield,
  HandMetal,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const featured = products.filter(p => p.is_featured)

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full overflow-hidden">
        <div className="container py-8 md:py-0">
          <div className="rounded-3xl border border-border overflow-hidden bg-gradient-to-br from-charcoal to-charcoal-light">
            <div className="grid gap-0 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-6 p-8 md:p-12 lg:p-16"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-3xl bg-white/10 px-4 py-1.5 text-sm text-gold"
                  >
                    <Sparkles className="mr-2 h-3.5 w-3.5" />
                    Moroccan Craft, French Design
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl xl:text-6xl"
                  >
                    Where Moroccan{' '}
                    <span className="text-gold italic">craft</span> meets
                    French <span className="text-gold italic">design</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[500px] text-cream-dark/70 md:text-lg"
                  >
                    Handcrafted brass lighting and ceramics, made by master artisans in Morocco. Each piece tells a story of centuries-old tradition.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <Link to="/shop">
                    <Button size="lg" className="rounded-3xl bg-gold text-white hover:bg-gold-dark tracking-wider group">
                      SHOP THE COLLECTION
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/story">
                    <Button variant="outline" size="lg" className="rounded-3xl border-cream-dark/30 text-cream-dark hover:border-gold hover:text-gold">
                      Our Story
                    </Button>
                  </Link>
                </motion.div>
                {/* Trust signals */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-6 pt-4 text-xs text-cream-dark/50"
                >
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-gold/60" />
                    <span>maison-chapuis.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck size={14} className="text-gold/60" />
                    <span>Free US shipping over $300</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-gold/60" />
                    <span>Handcrafted in Morocco</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative min-h-[350px] md:min-h-[500px] lg:min-h-full"
              >
                <img
                  src="/hero-tent.webp"
                  alt="Moroccan brass lanterns in a luxury tent setting"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent lg:from-charcoal/20" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="w-full py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-xs sm:text-sm text-charcoal-light tracking-wide">
            <span>Handcrafted in Morocco</span>
            <span className="hidden sm:inline text-sand">|</span>
            <span>Free US Shipping over $300</span>
            <span className="hidden sm:inline text-sand">|</span>
            <span>Artisan Direct</span>
          </div>
        </div>
      </section>

      {/* Portfolio / Bento Grid */}
      <section className="w-full py-12 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-3xl bg-muted px-4 py-1.5 text-sm text-muted-foreground"
            >
              The Collection
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-serif text-3xl font-light tracking-tight sm:text-4xl md:text-5xl"
            >
              Artisan Craftsmanship
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[700px] text-muted-foreground md:text-lg"
            >
              Each piece is hand-pierced by master artisans in the workshops of Marrakech and Fes
            </motion.p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-4 md:grid-rows-2"
          >
            {/* Large feature — tent/lifestyle */}
            <motion.div
              variants={itemFadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 h-[400px] md:h-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />
              <img
                src="/hero-tent.webp"
                alt="Moroccan lighting in luxury setting"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                <h3 className="font-serif text-2xl">Statement Lighting</h3>
                <p className="text-sm text-white/80">Transform any space with the warm glow of hand-pierced brass</p>
                <div className="mt-3">
                  <Link to="/shop">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-3xl bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
                    >
                      Shop Now <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Wall sconce */}
            <motion.div
              variants={itemFadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl h-[250px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />
              <img
                src="/lifestyle-wall-sconce.jpg"
                alt="Brass wall sconce with intricate patterns"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                <h3 className="font-serif text-xl">Wall Sconces</h3>
                <p className="text-sm text-white/80">Geometric patterns of light</p>
              </div>
            </motion.div>

            {/* Teardrop unlit */}
            <motion.div
              variants={itemFadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl h-[250px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />
              <img
                src="/lifestyle-teardrop.jpg"
                alt="Brass teardrop pendant light"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                <h3 className="font-serif text-xl">Pendant Lights</h3>
                <p className="text-sm text-white/80">Hand-pierced brass pendants</p>
              </div>
            </motion.div>

            {/* Teardrop lit — spans 2 cols */}
            <motion.div
              variants={itemFadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl md:col-span-2 h-[250px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />
              <img
                src="/lifestyle-teardrop-lit.jpg"
                alt="Brass pendant casting warm golden light"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                <h3 className="font-serif text-2xl">The Warm Glow of Brass</h3>
                <p className="text-sm text-white/80">When lit, each pendant transforms into a constellation of light and shadow</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex justify-center pt-10">
            <Link to="/shop">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="rounded-3xl bg-gold text-white hover:bg-gold-dark tracking-wider group">
                  View All Pieces
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container"
        >
          <div className="rounded-3xl border border-border bg-muted/20 p-8 md:p-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center pb-10">
              <div className="inline-block rounded-3xl bg-background px-4 py-1.5 text-sm text-muted-foreground">
                Featured
              </div>
              <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
                Featured Pieces
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Statement lighting, handmade by Moroccan master artisans
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {featured.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <Link to={`/product/${product.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-3xl bg-charcoal aspect-square">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                        style={{ filter: 'drop-shadow(0 20px 40px rgba(197,164,85,0.3))' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="mt-4 space-y-1">
                      <h3 className="font-serif text-lg font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category === 'pendants' ? 'Pendant Light' : 'Wall Sconce'}</p>
                      <p className="text-gold font-medium">{formatPrice(product.price_usd)}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center pt-10">
              <Link to="/shop">
                <Button variant="outline" size="lg" className="rounded-3xl tracking-wider group">
                  View All Pieces
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Maison Chapuis / Services-style */}
      <section className="w-full py-12 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container"
        >
          <div className="rounded-3xl border border-border p-8 md:p-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center pb-10">
              <div className="inline-block rounded-3xl bg-muted px-4 py-1.5 text-sm text-muted-foreground">
                Our Promise
              </div>
              <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
                Why Maison Chapuis
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <HandMetal className="h-10 w-10 text-gold" />,
                  title: 'Master Artisans',
                  description: 'Every piece is hand-pierced by artisans whose families have practiced the craft for generations in Marrakech and Fes.',
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-gold" />,
                  title: 'French Curation',
                  description: 'We bridge Moroccan tradition with French design sensibility, selecting pieces that complement modern interiors.',
                },
                {
                  icon: <Shield className="h-10 w-10 text-gold" />,
                  title: 'Authenticity Guaranteed',
                  description: 'Direct from the workshops of Morocco. No middlemen, no mass production. Each piece is one-of-a-kind.',
                },
                {
                  icon: <Truck className="h-10 w-10 text-gold" />,
                  title: 'Free US Shipping',
                  description: 'Complimentary shipping on orders over $300. Each piece is carefully packaged for safe transit from Morocco.',
                },
                {
                  icon: <Globe className="h-10 w-10 text-gold" />,
                  title: 'Heritage Materials',
                  description: 'Solid brass, hand-selected for quality. No plating, no shortcuts — materials that age beautifully over decades.',
                },
                {
                  icon: <Mail className="h-10 w-10 text-gold" />,
                  title: 'Design Consultation',
                  description: 'Need help choosing the perfect piece? Our team offers complimentary design advice for trade professionals.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl border border-border p-6 shadow-sm transition-all hover:shadow-md bg-background"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-all duration-300" />
                  <div className="relative space-y-3">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Brand Story Section */}
      <section className="w-full py-12 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container"
        >
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              >
                <div className="inline-block rounded-3xl bg-muted px-4 py-1.5 text-sm text-muted-foreground w-fit">
                  Our Story
                </div>
                <h2 className="font-serif text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
                  A Heritage of <span className="text-gold italic">Light</span>
                </h2>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  For generations, the artisans of Marrakech, Fes, and the Atlas Mountains have shaped raw brass into extraordinary works of light. Maison Chapuis brings this living tradition to your home.
                </p>
                <p className="text-muted-foreground md:text-lg leading-relaxed">
                  Each piece is handcrafted, each pattern unique, each shadow a story. We work directly with master artisans, ensuring fair wages and preserving techniques passed down through centuries.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/story">
                    <Button variant="outline" size="lg" className="rounded-3xl group">
                      Read Our Story
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[400px] lg:min-h-full"
              >
                <img
                  src="/lifestyle-teardrop-lit.jpg"
                  alt="Brass pendant light glowing warmly"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container"
        >
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 p-8 md:p-12"
              >
                <div className="inline-block rounded-3xl bg-muted px-4 py-1.5 text-sm text-muted-foreground">
                  Contact
                </div>
                <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
                  Get in Touch
                </h2>
                <p className="max-w-[500px] text-muted-foreground md:text-lg">
                  Questions about our pieces, custom orders, or trade pricing? We'd love to hear from you.
                </p>
                <div className="space-y-4 pt-4">
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                    <div className="rounded-2xl bg-muted p-2.5">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-sm text-muted-foreground">hello@maison-chapuis.com</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                    <div className="rounded-2xl bg-muted p-2.5">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Showroom</h3>
                      <p className="text-sm text-muted-foreground">By appointment only</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                    <div className="rounded-2xl bg-muted p-2.5">
                      <Instagram className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">Follow Us</h3>
                      <p className="text-sm text-muted-foreground">@maisonchapuis</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-muted/30 p-8 md:p-12"
              >
                <h3 className="text-xl font-semibold">Send Us a Message</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We'll get back to you within 24 hours.
                </p>
                <form className="mt-6 space-y-4" onSubmit={e => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                      <Input id="first-name" placeholder="Your first name" className="rounded-2xl" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                      <Input id="last-name" placeholder="Your last name" className="rounded-2xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" className="rounded-2xl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Tell us about your project or question..." className="min-h-[120px] rounded-2xl" />
                  </div>
                  <Button type="submit" className="w-full rounded-3xl bg-gold text-white hover:bg-gold-dark tracking-wider">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
