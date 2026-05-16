"use client"

import { useFormStatus } from "react-dom"
import { deleteProduct } from "@/lib/actions/products"

function DeleteButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="text-red-500 hover:text-red-700 text-sm disabled:opacity-50"
    >
      {pending ? "Eliminando..." : "Eliminar"}
    </button>
  )
}

export function DeleteProductForm({ productId }: { productId: string }) {
  return (
    <form action={deleteProduct.bind(null, productId)} className="inline">
      <DeleteButton />
    </form>
  )
}
