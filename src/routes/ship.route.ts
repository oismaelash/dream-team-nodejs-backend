// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'
import * as ShipController from '@controllers/ship.controller'
const router = express.Router()

const prefix = '/ship'

router.post(prefix, async (request: Request, response: Response) => {
    const data = await ShipController.create(request.body)
    return response.json(data)
})

router.get(prefix, async (request: Request, response: Response) => {
    const data = await ShipController.readAll()
    return response.json(data)
})

router.get(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await ShipController.readOne(Number(request.params.id))
    return response.json(data)
})

router.put(prefix, async (request: Request, response: Response) => {
    const data = await ShipController.update(request.body)
    return response.json(data)
})

router.delete(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await ShipController.deleteOne(Number(request.params.id))
    return response.json(data)
})

export default router
