// eslint-disable-next-line no-unused-vars
import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()

export async function create(product: Product): Promise<Product> {
  const data = await prisma.product.create({
    data: {
      quantity: product.quantity,
      orderId: product.orderId
    }
  })
  return data
}

export async function readAll(): Promise<Array<Product>> {
  const data = await prisma.product.findMany()
  return data
}

export async function readOne(id: number): Promise<Product> {
  const data = await prisma.product.findUnique({
    where: {
      id: id
    }
  })
  return data
}

export async function update(product: Product): Promise<Product> {
  const data = await prisma.product.update({
    where: {
      id: product.id
    },
    data: {
      quantity: product.quantity,
      orderId: product.orderId
    }
  })
  return data
}

export async function deleteOne(id: number): Promise<Product> {
  const data = await prisma.product.delete({
    where: {
      id: id
    }
  })
  return data
}
