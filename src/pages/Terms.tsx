export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-10">Terms of Service</h1>

      <div className="space-y-8 text-sm text-charcoal-light leading-relaxed">
        <section>
          <h2 className="font-serif text-xl font-medium text-charcoal mb-3">General</h2>
          <p>
            By accessing and placing an order with Maison Chapuis, you confirm that you are in agreement
            with and bound by the terms of service contained herein. These terms apply to the entire
            website and any email or other type of communication between you and Maison Chapuis.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-medium text-charcoal mb-3">Products</h2>
          <p>
            All products are handcrafted and may have slight variations in color, pattern, and finish.
            These variations are inherent to handmade goods and are considered a feature, not a defect.
            Product images are representative but may not capture every detail of the specific piece you receive.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-medium text-charcoal mb-3">Pricing</h2>
          <p>
            All prices are listed in US Dollars (USD). We reserve the right to change prices without
            notice. Prices at the time of purchase will be honored for that transaction.
          </p>
        </section>

        <section id="privacy">
          <h2 className="font-serif text-xl font-medium text-charcoal mb-3">Privacy Policy</h2>
          <p>
            We collect personal information (name, email, shipping address) solely to process your
            orders and communicate with you about your purchases. We do not sell or share your
            personal information with third parties for marketing purposes.
          </p>
          <p className="mt-3">
            Payment processing is handled securely by Stripe. We do not store credit card information
            on our servers.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-medium text-charcoal mb-3">Contact</h2>
          <p>
            For any questions regarding these terms, please contact us at{' '}
            <a href="mailto:hello@maison-chapuis.com" className="text-gold-dark hover:text-gold underline">
              hello@maison-chapuis.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
