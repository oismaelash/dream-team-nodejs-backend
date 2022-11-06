// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'
import * as TravelController from '@controllers/travel.controller'
const router = express.Router()

const prefix = '/travel'

router.post(prefix, async (request: Request, response: Response) => {
    const data = await TravelController.create(request.body)
    return response.json(data)
})

router.get(prefix, async (request: Request, response: Response) => {
    const data = await TravelController.readAll()
    return response.json(data)
})

router.get(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await TravelController.readOne(Number(request.params.id))
    return response.json(data)
})

router.put(prefix, async (request: Request, response: Response) => {
    const data = await TravelController.update(request.body)
    return response.json(data)
})

router.delete(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await TravelController.deleteOne(Number(request.params.id))
    return response.json(data)
})

export default router
