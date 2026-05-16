import Link from "next/link"
import { prisma } from "@/lib/prisma"

export default async function AdminDashboard() {
  const totalProducts = await prisma.product.count()
  const totalCategories = await prisma.product.groupBy({ by: ["category"] })
  const latestProducts = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl border p-6">
          <p className="text-sm text-gray-500 mb-1">Total productos</p>
          <p className="text-3xl font-bold text-gray-900">{totalProducts}</p>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <p className="text-sm text-gray-500 mb-1">Categorías</p>
          <p className="text-3xl font-bold text-gray-900">{totalCategories.length}</p>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <p className="text-sm text-gray-500 mb-1">Productos nuevos (últimos)</p>
          <p className="text-3xl font-bold text-gray-900">{latestProducts.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border">
        <div className="px-6 py-4 border-b">
          <h2 className="font-semibold text-gray-900">Últimos productos</h2>
        </div>
        <div className="divide-y">
          {latestProducts.map((p) => (
            <div key={p.id} className="px-6 py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{p.name}</p>
                <p className="text-sm text-gray-500">{p.category} &middot; ${p.price.toFixed(2)}</p>
              </div>
              <Link
                href={`/admin/products/${p.id}/edit`}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Editar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
