import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { DeleteProductForm } from "@/components/DeleteProductButton"

export default async function AdminProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Productos</h1>
        <Link
          href="/admin/products/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
        >
          + Nuevo producto
        </Link>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Nombre</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Categoría</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Precio</th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">Destacado</th>
              <th className="text-right px-6 py-3 font-medium text-gray-500">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{p.name}</p>
                  <p className="text-sm text-gray-400">/{p.slug}</p>
                </td>
                <td className="px-6 py-4 text-gray-600 capitalize">{p.category}</td>
                <td className="px-6 py-4 text-gray-900">${p.price.toFixed(2)}</td>
                <td className="px-6 py-4">{p.featured ? <span className="text-green-600">Sí</span> : <span className="text-gray-400">No</span>}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Link
                    href={`/admin/products/${p.id}/edit`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Editar
                  </Link>
                  <DeleteProductForm productId={p.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
