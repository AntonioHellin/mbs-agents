import { notFound } from "next/navigation"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { MugSvg } from "@/components/MugSvg"
import { AddToCartButton } from "@/components/AddToCartButton"
import { Badge } from "@/components/ui/Badge"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await prisma.product.findUnique({ where: { id } })

  if (!product) notFound()

  const related = await prisma.product.findMany({
    where: { category: product.category, id: { not: product.id } },
    take: 3,
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
        &larr; Volver a tienda
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 rounded-xl p-12 flex items-center justify-center">
          <MugSvg design={product.imageUrl} className="w-full max-w-sm" />
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            {product.featured && <Badge variant="warning">Destacado</Badge>}
          </div>

          <Badge>{product.category}</Badge>

          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</div>

          <AddToCartButton product={product} />

          <p className="text-sm text-gray-400">
            SKU: {product.id} &middot; Creado el {new Date(product.createdAt).toLocaleDateString("es")}
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/products/${r.id}`}
                className="block bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gray-50 rounded-lg mb-3 flex items-center justify-center p-4">
                  <MugSvg design={r.imageUrl} className="w-full max-w-[120px]" />
                </div>
                <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">{r.name}</h3>
                <span className="text-lg font-bold text-gray-900">${r.price.toFixed(2)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
