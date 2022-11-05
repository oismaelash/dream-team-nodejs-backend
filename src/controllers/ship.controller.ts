// eslint-disable-next-line no-unused-vars
import { PrismaClient, Ship } from '@prisma/client'
const prisma = new PrismaClient()

export async function create(ship: Ship): Promise<Ship> {
  const shipCreated = await prisma.ship.create({
    data: {
      name: ship.name,
      maximumLoad: ship.maximumLoad,
      maximumFuel: ship.maximumFuel,
      maximumSpeed: ship.maximumSpeed,
      model: ship.model
    }
  })
  return shipCreated
}

export async function getAllShips(): Promise<Array<Ship>> {
  const ships = await prisma.ship.findMany()
  return ships
}
