"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string
  const slug = formData.get("slug") as string
  const description = formData.get("description") as string
  const price = parseFloat(formData.get("price") as string)
  const imageUrl = formData.get("imageUrl") as string
  const category = formData.get("category") as string
  const featured = formData.get("featured") === "on"

  await prisma.product.create({
    data: { name, slug, description, price, imageUrl, category, featured },
  })

  revalidatePath("/admin/products")
  redirect("/admin/products")
}

export async function updateProduct(id: string, formData: FormData) {
  const name = formData.get("name") as string
  const slug = formData.get("slug") as string
  const description = formData.get("description") as string
  const price = parseFloat(formData.get("price") as string)
  const imageUrl = formData.get("imageUrl") as string
  const category = formData.get("category") as string
  const featured = formData.get("featured") === "on"

  await prisma.product.update({
    where: { id },
    data: { name, slug, description, price, imageUrl, category, featured },
  })

  revalidatePath("/admin/products")
  redirect("/admin/products")
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } })
  revalidatePath("/admin/products")
}
