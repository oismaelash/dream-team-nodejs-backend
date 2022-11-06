// eslint-disable-next-line no-unused-vars
import { PrismaClient, Order } from '@prisma/client'
const prisma = new PrismaClient()

export async function create(order: Order): Promise<Order> {
  const data = await prisma.order.create({
    data: {
      priority: order.priority
    }
  })
  return data
}

export async function readAll(): Promise<Array<Order>> {
  const data = await prisma.order.findMany()
  return data
}

export async function readOne(id: number): Promise<Order> {
  const data = await prisma.order.findUnique({
    where: {
      id: id
    }
  })
  return data
}

export async function update(order: Order): Promise<Order> {
  const data = await prisma.order.update({
    where: {
      id: order.id
    },
    data: {
      priority: order.priority
    }
  })
  return data
}

export async function deleteOne(id: number): Promise<Order> {
  const data = await prisma.order.delete({
    where: {
      id: id
    }
  })
  return data
}
