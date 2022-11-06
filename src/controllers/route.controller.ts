// eslint-disable-next-line no-unused-vars
import { PrismaClient, Route } from '@prisma/client'
const prisma = new PrismaClient()

export async function create(route: Route): Promise<Route> {
  const data = await prisma.route.create({
    data: {
      destinationAddress: route.destinationAddress,
      destinationDatetime: route.destinationDatetime,
      originAddress: route.originAddress,
      originDatetime: route.originDatetime,
      shipId: route.shipId,
      travelId: route.travelId
    }
  })
  return data
}

export async function readAll(): Promise<Array<Route>> {
  const data = await prisma.route.findMany()
  return data
}

export async function readOne(id: number): Promise<Route> {
  const data = await prisma.route.findUnique({
    where: {
      id: id
    }
  })
  return data
}

export async function update(route: Route): Promise<Route> {
  const data = await prisma.route.update({
    where: {
      id: route.id
    },
    data: {
      destinationAddress: route.destinationAddress,
      destinationDatetime: route.destinationDatetime,
      originAddress: route.originAddress,
      originDatetime: route.originDatetime,
      shipId: route.shipId,
      travelId: route.travelId
    }
  })
  return data
}

export async function deleteOne(id: number): Promise<Route> {
  const data = await prisma.route.delete({
    where: {
      id: id
    }
  })
  return data
}
