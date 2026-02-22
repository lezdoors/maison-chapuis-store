export default function Story() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-white leading-tight">
            Our <span className="text-gold italic">Story</span>
          </h1>
          <p className="mt-6 text-lg text-cream-dark/80 leading-relaxed">
            A bridge between Moroccan artisan tradition and French design sensibility
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="prose-custom space-y-8">
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
        </div>
      </section>
    </div>
  )
}
