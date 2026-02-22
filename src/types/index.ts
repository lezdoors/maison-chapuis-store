export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: 'pendants' | 'wall-sconces' | 'ceramics'
  price_usd: number
  dimensions: {
    height?: string
    width?: string
    depth?: string
    chain_length?: string
  } | null
  materials: string
  weight_kg: number | null
  images: string[]
  in_stock: boolean
  is_featured: boolean
  coming_soon: boolean
  sort_order: number
  created_at: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface ContactMessage {
  name: string
  email: string
  message: string
}
