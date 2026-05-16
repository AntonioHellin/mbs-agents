export interface CartItem {
  id: string
  name: string
  price: number
  imageUrl: string
  quantity: number
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  imageUrl: string
  category: string
  featured: boolean
  createdAt: Date
  updatedAt: Date
}
