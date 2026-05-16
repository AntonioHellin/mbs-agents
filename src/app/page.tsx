import { prisma } from "@/lib/prisma"
import { ProductGrid } from "@/components/ProductGrid"
import { Badge } from "@/components/ui/Badge"
import { PromoBanner } from "@/components/PromoBanner"
import Link from "next/link"

const categories = [
  { slug: "humor", label: "Humor" },
  { slug: "lenguajes", label: "Lenguajes" },
  { slug: "sistemas", label: "Sistemas" },
  { slug: "herramientas", label: "Herramientas" },
]

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}) {
  const { categoria } = await searchParams

  const products = await prisma.product.findMany({
    where: categoria ? { category: categoria } : undefined,
    orderBy: { createdAt: "desc" },
  })

  const featured = await prisma.product.findMany({
    where: { featured: true },
    take: 3,
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <PromoBanner />
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tazas para programadores
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          La mejor colección de tazas temáticas para desarrolladores. Elige tu lenguaje, framework o meme favorito.
        </p>
      </section>

      {!categoria && featured.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featured.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow p-6"
              >
                <Badge variant="warning" className="absolute top-3 right-3">Destacado</Badge>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-1">{product.description}</p>
                <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <span className="text-sm font-medium text-gray-700">Filtrar:</span>
          <Link
            href="/"
            className={`px-3 py-1 rounded-full text-sm ${!categoria ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            Todas
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/?categoria=${cat.slug}`}
              className={`px-3 py-1 rounded-full text-sm ${categoria === cat.slug ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
        {products.length === 0 ? (
          <p className="text-gray-500 text-center py-12">No hay productos en esta categoría</p>
        ) : (
          <ProductGrid products={products} />
        )}
      </section>
    </div>
  )
}
