"use client"

import Link from "next/link"
import { useCart } from "@/store/cart"
import { Button } from "@/components/ui/Button"

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-600 mb-8">Añade algunos productos para empezar</p>
        <Link href="/">
          <Button>Ver productos</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Carrito</h1>
        <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700">
          Vaciar carrito
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white border rounded-xl p-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-500 shrink-0">
              {item.imageUrl}
            </div>
            <div className="flex-1 min-w-0">
              <Link href={`/products/${item.id}`} className="font-semibold text-gray-900 hover:text-blue-600">
                {item.name}
              </Link>
              <p className="text-sm text-gray-500">${item.price.toFixed(2)} c/u</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded border text-sm hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded border text-sm hover:bg-gray-50"
              >
                +
              </button>
            </div>
            <div className="text-right min-w-[80px]">
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-400 hover:text-red-600 text-lg"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-3">
        <div className="flex justify-between text-lg">
          <span className="text-gray-600">Subtotal</span>
          <span>${totalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="text-gray-600">Envío</span>
          <span className="text-green-600">Gratis</span>
        </div>
        <hr />
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${totalPrice().toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-400 text-center pt-2">
          Proyecto MVP — Sin integración de pagos por ahora
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <Link href="/">
          <Button variant="outline">Seguir comprando</Button>
        </Link>
      </div>
    </div>
  )
}
