// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'
import * as RouteController from '@controllers/route.controller'
const router = express.Router()

const prefix = '/route'

router.post(prefix, async (request: Request, response: Response) => {
    const data = await RouteController.create(request.body)
    return response.json(data)
})

router.get(prefix, async (request: Request, response: Response) => {
    const data = await RouteController.readAll()
    return response.json(data)
})

router.get(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await RouteController.readOne(Number(request.params.id))
    return response.json(data)
})

router.put(prefix, async (request: Request, response: Response) => {
    const data = await RouteController.update(request.body)
    return response.json(data)
})

router.delete(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await RouteController.deleteOne(Number(request.params.id))
    return response.json(data)
})

export default router
