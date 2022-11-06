// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'
import * as ProductController from '@controllers/product.controller'
const router = express.Router()

const prefix = '/product'

router.post(prefix, async (request: Request, response: Response) => {
    const data = await ProductController.create(request.body)
    return response.json(data)
})

router.get(prefix, async (request: Request, response: Response) => {
    const data = await ProductController.readAll()
    return response.json(data)
})

router.get(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await ProductController.readOne(Number(request.params.id))
    return response.json(data)
})

router.put(prefix, async (request: Request, response: Response) => {
    const data = await ProductController.update(request.body)
    return response.json(data)
})

router.delete(`${prefix}/:id`, async (request: Request, response: Response) => {
    const data = await ProductController.deleteOne(Number(request.params.id))
    return response.json(data)
})

export default router
