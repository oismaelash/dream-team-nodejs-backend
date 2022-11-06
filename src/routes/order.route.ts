// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'
import * as OrderController from '@controllers/order.controller'
const router = express.Router()

const prefix = '/order'

router.post(prefix, async (request: Request, response: Response) => {
    const data = await OrderController.create(request.body)
    return response.json(data)
})

router.get(prefix, async (request: Request, response: Response) => {
    const data = await OrderController.readAll()
    return response.json(data)
})

router.get(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await OrderController.readOne(Number(request.params.id))
    return response.json(data)
})

router.put(prefix, async (request: Request, response: Response) => {
    const data = await OrderController.update(request.body)
    return response.json(data)
})

router.delete(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await OrderController.deleteOne(Number(request.params.id))
    return response.json(data)
})

export default router
