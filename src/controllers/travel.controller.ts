// eslint-disable-next-line no-unused-vars
import { Travel, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getAllTravels(): Promise<Array<Travel>> {
  const travels = await prisma.travel.findMany()
  return travels
}
