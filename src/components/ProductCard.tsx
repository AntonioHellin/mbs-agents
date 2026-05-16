import Link from "next/link"
import { MugSvg } from "@/components/MugSvg"
import { AddToCartButton } from "@/components/AddToCartButton"
import { Badge } from "@/components/ui/Badge"
import type { Product } from "@/types"

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square bg-gray-50 p-8 flex items-center justify-center">
          <MugSvg design={product.imageUrl} className="w-full h-full max-w-[180px]" />
        </div>
      </Link>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          {product.featured && <Badge variant="warning">Destacado</Badge>}
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <Badge>{product.category}</Badge>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}
