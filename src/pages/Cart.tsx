import { Link } from 'react-router-dom'
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/lib/utils'

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingBag size={48} className="mx-auto text-sand mb-4" />
        <h1 className="font-serif text-3xl text-charcoal">Your cart is empty</h1>
        <p className="mt-2 text-charcoal-light">Discover our handcrafted collection</p>
        <Link
          to="/shop"
          className="inline-block mt-6 bg-charcoal hover:bg-charcoal-light text-white px-8 py-3 text-sm font-medium tracking-wide transition-colors"
        >
          Shop Now
        </Link>
      </div>
    )
  }

  const shippingNote = subtotal >= 300 ? 'Free' : 'Calculated at checkout'

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-charcoal-light hover:text-gold-dark transition-colors mb-8">
        <ArrowLeft size={14} />
        Continue Shopping
      </Link>

      <h1 className="font-serif text-3xl font-light text-charcoal mb-8">Your Cart</h1>

      <div className="space-y-6">
        {items.map(item => (
          <div key={item.product.id} className="flex gap-4 sm:gap-6 py-6 border-b border-sand">
            <Link to={`/product/${item.product.slug}`} className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-md overflow-hidden shrink-0">
              <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-contain p-2" />
            </Link>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <Link to={`/product/${item.product.slug}`}>
                  <h3 className="font-serif text-lg text-charcoal hover:text-gold-dark transition-colors">{item.product.name}</h3>
                </Link>
                <button onClick={() => removeItem(item.product.id)} className="text-charcoal-light hover:text-charcoal p-1" aria-label="Remove">
                  <X size={16} />
                </button>
              </div>
              <p className="text-sm text-charcoal-light mt-1">{formatPrice(item.product.price_usd)}</p>
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center border border-sand rounded hover:border-charcoal transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-sand rounded hover:border-charcoal transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="font-medium">{formatPrice(item.product.price_usd * item.quantity)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 pt-6 border-t border-sand">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-charcoal-light">Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <span className="text-charcoal-light">Shipping</span>
          <span className="text-charcoal-light">{shippingNote}</span>
        </div>
        <div className="flex justify-between text-lg font-serif pt-4 border-t border-sand">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        <button
          disabled
          className="mt-6 w-full bg-charcoal/50 text-white py-4 px-8 text-sm font-medium tracking-wide cursor-not-allowed"
        >
          Checkout Coming Soon
        </button>
        <p className="mt-3 text-xs text-center text-charcoal-light">
          Secure checkout with Stripe. Launching soon.
        </p>
      </div>
    </div>
  )
}
