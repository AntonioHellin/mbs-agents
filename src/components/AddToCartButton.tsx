"use client"

import { useCart } from "@/store/cart"
import { Button } from "@/components/ui/Button"
import type { Product } from "@/types"

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <Button
      onClick={() =>
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity: 1,
        })
      }
    >
      Añadir al carrito
    </Button>
  )
}
