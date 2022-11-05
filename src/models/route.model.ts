// eslint-disable-next-line no-unused-vars
import { Travel } from './travel.model'

export class Route {
  id: number
  createdAt: Date
  updatedAt: Date
  originAddress: String
  originDatetime: Date
  destinationAddress: String
  destinationDatetime: Date
  shipId: number
  travel: Travel
  travelId: number
}
