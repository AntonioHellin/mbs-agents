import { createProduct } from "@/lib/actions/products"
import { Button } from "@/components/ui/Button"

const categories = [
  { value: "humor", label: "Humor" },
  { value: "lenguajes", label: "Lenguajes" },
  { value: "sistemas", label: "Sistemas" },
  { value: "herramientas", label: "Herramientas" },
]

const mugDesigns = [
  "love-coding",
  "works-on-machine",
  "localhost",
  "sleep-not-found",
  "sudo-coffee",
  "js-good-parts",
  "python-zen",
  "git-gud",
  "rust-ferris",
  "full-stack",
]

export default function NewProduct() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Nuevo producto</h1>

      <form action={createProduct} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg text-sm" />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input type="text" id="slug" name="slug" required className="w-full px-3 py-2 border rounded-lg text-sm" />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea id="description" name="description" required rows={4} className="w-full px-3 py-2 border rounded-lg text-sm" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
            <input type="number" id="price" name="price" step="0.01" required className="w-full px-3 py-2 border rounded-lg text-sm" />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
            <select id="category" name="category" required className="w-full px-3 py-2 border rounded-lg text-sm">
              {categories.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Diseño SVG</label>
          <select id="imageUrl" name="imageUrl" required className="w-full px-3 py-2 border rounded-lg text-sm">
            {mugDesigns.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="featured" name="featured" className="rounded border-gray-300" />
          <label htmlFor="featured" className="text-sm text-gray-700">Producto destacado</label>
        </div>

        <div className="flex gap-4">
          <Button type="submit">Crear producto</Button>
          <Button type="reset" variant="outline">Limpiar</Button>
        </div>
      </form>
    </div>
  )
}
