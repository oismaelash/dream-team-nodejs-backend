// eslint-disable-next-line no-unused-vars
import { PrismaClient, Travel } from '@prisma/client'
const prisma = new PrismaClient()

export async function create(ship: Travel): Promise<Travel> {
  const data = await prisma.travel.create({
    data: {
      shipId: ship.shipId
    }
  })
  return data
}

export async function readAll(id: number): Promise<Array<Travel>> {
  const data = await prisma.travel.findMany({ where: { shipId: id }, include: { ship: true, routes: true } })
  return data
}

export async function readOne(id: number): Promise<Travel> {
  const data = await prisma.travel.findUnique({
    where: {
      id: id
    },
    include: {
      ship: true,
      routes: true
    }
  })
  return data
}

export async function update(ship: Travel): Promise<Travel> {
  const data = await prisma.travel.update({
    where: {
      id: ship.id
    },
    data: {}
  })
  return data
}

export async function deleteOne(id: number): Promise<Travel> {
  const data = await prisma.travel.delete({
    where: {
      id: id
    }
  })
  return data
}
