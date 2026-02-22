import { Truck, Package, RefreshCw, HelpCircle } from 'lucide-react'

export default function Shipping() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-10">Shipping & Returns</h1>

      <div className="space-y-10">
        <div className="flex gap-4">
          <Truck size={24} className="text-gold-dark shrink-0 mt-1" />
          <div>
            <h2 className="font-serif text-xl font-medium text-charcoal mb-2">Shipping</h2>
            <div className="text-charcoal-light leading-relaxed space-y-3">
              <p>
                All orders ship directly from our artisan workshops in Morocco.
                Estimated delivery time to the continental United States is <strong>2-4 weeks</strong>.
              </p>
              <p>
                <strong>Free shipping</strong> on all orders over $300. Orders under $300 ship
                for a flat rate of $45.
              </p>
              <p>
                You will receive a tracking number via email once your order has shipped.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Package size={24} className="text-gold-dark shrink-0 mt-1" />
          <div>
            <h2 className="font-serif text-xl font-medium text-charcoal mb-2">Packaging</h2>
            <p className="text-charcoal-light leading-relaxed">
              Each piece is carefully wrapped and custom-crated to ensure safe transit
              from Morocco to your door. Our brass lighting is durable, but we take every
              precaution to prevent damage during shipping.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <HelpCircle size={24} className="text-gold-dark shrink-0 mt-1" />
          <div>
            <h2 className="font-serif text-xl font-medium text-charcoal mb-2">Customs & Duties</h2>
            <p className="text-charcoal-light leading-relaxed">
              Orders shipped to the US may be subject to customs duties and import taxes.
              These charges are the responsibility of the buyer and are not included in
              our pricing. Most orders under $800 enter the US duty-free.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <RefreshCw size={24} className="text-gold-dark shrink-0 mt-1" />
          <div>
            <h2 className="font-serif text-xl font-medium text-charcoal mb-2">Returns & Exchanges</h2>
            <div className="text-charcoal-light leading-relaxed space-y-3">
              <p>
                We want you to love your Maison Chapuis piece. If you're not completely
                satisfied, you may return undamaged items within <strong>30 days</strong> of
                delivery for a full refund, minus return shipping costs.
              </p>
              <p>
                Due to the handcrafted nature of our products, slight variations in color,
                pattern, and finish are normal and part of what makes each piece unique.
                These are not considered defects.
              </p>
              <p>
                To initiate a return, please contact us at{' '}
                <a href="mailto:hello@maison-chapuis.com" className="text-gold-dark hover:text-gold underline">
                  hello@maison-chapuis.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
