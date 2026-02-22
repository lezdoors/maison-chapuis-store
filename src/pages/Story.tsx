import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HeroScrollVideo from '@/components/ui/scroll-animated-video'

export default function Story() {
  return (
    <div>
      {/* Scroll-animated video hero */}
      <HeroScrollVideo
        title="Our Story"
        subtitle="Moroccan Craft, French Design"
        meta="Est. 2024"
        credits={
          <>
            <p>Maison Chapuis</p>
            <p>Marrakech to America</p>
          </>
        }
        media="/ryad-entrance.mp4"
        poster="/hero-tent.webp"
        overlay={{
          caption: "MAISON CHAPUIS",
          heading: "A Heritage of Light",
          paragraphs: [
            "For generations, the artisans of Marrakech, Fes, and the Atlas Mountains have shaped raw brass into extraordinary works of light.",
            "Maison Chapuis brings this living tradition to your home — each piece handcrafted, each pattern unique, each shadow a story.",
          ],
          extra: (
            <div style={{ marginTop: '1rem' }}>
              <Link to="/shop">
                <Button className="rounded-3xl bg-gold text-white hover:bg-gold-dark tracking-wider">
                  Explore the Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ),
        }}
        initialBoxSize={380}
        scrollHeightVh={300}
        smoothScroll={false}
      />

      {/* Content sections */}
      <section className="container py-16 sm:py-24">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal mb-4">
              Where Two Worlds Meet
            </h2>
            <p className="text-charcoal-light leading-relaxed">
              Maison Chapuis was born from a deep love for the artisan traditions of Morocco —
              the rhythmic hammering of brass in the medinas of Marrakech, the ancient geometry
              of Fes zellige tilework, the warm glow of pierced metal lanterns illuminating
              centuries-old riads.
            </p>
            <p className="text-charcoal-light leading-relaxed mt-4">
              We saw these extraordinary objects — crafted with techniques unchanged for
              generations — and recognized something the modern American home was missing:
              lighting and decor with soul, with story, with the unmistakable mark of the
              human hand.
            </p>
          </div>

          {/* Lifestyle image break */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/lifestyle-teardrop-lit.jpg"
              alt="Brass pendant light glowing in a Moroccan workshop"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal mb-4">
              The Artisans
            </h2>
            <p className="text-charcoal-light leading-relaxed">
              Every piece in our collection is handcrafted by master artisans — <em>maalems</em> —
              who have dedicated their lives to the ancient metalworking traditions of Morocco.
              Working in small workshops in Marrakech and the surrounding Atlas region, these
              artisans transform flat sheets of brass into extraordinary three-dimensional forms
              using techniques passed down through generations.
            </p>
            <p className="text-charcoal-light leading-relaxed mt-4">
              The pierced patterns that define our lighting are created one hole at a time,
              using hand tools and an extraordinary precision that no machine can replicate.
              A single pendant light can take days to complete. The result is not just a light
              fixture — it's a work of art that casts unique patterns of light and shadow,
              different with every piece.
            </p>
          </div>

          {/* Another lifestyle image */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/lifestyle-wall-sconce.jpg"
              alt="Intricate brass wall sconce pattern"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal mb-4">
              The French Touch
            </h2>
            <p className="text-charcoal-light leading-relaxed">
              While deeply rooted in Moroccan craft, Maison Chapuis brings a French design
              sensibility to each collection. We curate and name each piece, ensuring it
              bridges the gap between traditional Moroccan artisanship and contemporary
              interior design.
            </p>
            <p className="text-charcoal-light leading-relaxed mt-4">
              The result is a collection that feels both timeless and contemporary —
              pieces that are equally at home in a Brooklyn loft, a Los Angeles mid-century,
              or a Connecticut colonial.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal mb-4">
              Our Promise
            </h2>
            <p className="text-charcoal-light leading-relaxed">
              Every piece from Maison Chapuis is authentically handcrafted, ethically sourced,
              and carefully shipped. We work directly with artisan workshops, ensuring fair
              compensation and supporting the continuation of these vital craft traditions.
            </p>
            <p className="text-charcoal-light leading-relaxed mt-4">
              When you bring a Maison Chapuis piece into your home, you're not just adding
              beautiful lighting — you're preserving a living tradition and connecting your
              space to centuries of artisan mastery.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link to="/shop">
              <Button size="lg" className="rounded-3xl bg-gold text-white hover:bg-gold-dark tracking-wider group">
                Shop the Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
