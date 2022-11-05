// eslint-disable-next-line no-unused-vars
import { PrismaClient, Ship } from '@prisma/client'
const prisma = new PrismaClient()

export async function create(ship: Ship): Promise<Ship> {
  const data = await prisma.ship.create({
    data: {
      name: ship.name,
      maximumLoad: ship.maximumLoad,
      maximumFuel: ship.maximumFuel,
      maximumSpeed: ship.maximumSpeed,
      model: ship.model
    }
  })
  return data
}

export async function readAll(): Promise<Array<Ship>> {
  const data = await prisma.ship.findMany()
  return data
}

export async function readOne(id: number): Promise<Ship> {
  const data = await prisma.ship.findUnique({
    where: {
      id: id
    }
  })
  return data
}

export async function update(ship: Ship): Promise<Ship> {
  const data = await prisma.ship.update({
    where: {
      id: ship.id
    },
    data: {
      name: ship.name,
      maximumLoad: ship.maximumLoad,
      maximumFuel: ship.maximumFuel,
      maximumSpeed: ship.maximumSpeed,
      model: ship.model
    }
  })
  return data
}

export async function deleteOne(id: number): Promise<Ship> {
  const data = await prisma.ship.delete({
    where: {
      id: id
    }
  })
  return data
}
