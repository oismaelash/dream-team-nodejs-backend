// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'
import * as ShipController from '@controllers/ship.controller'
const router = express.Router()

router.post('/ship', async (request: Request, response: Response) => {
    const ship = await ShipController.create(request.body)
    return response.json(ship)
})

router.get('/ships', async (request: Request, response: Response) => {
    const ships = await ShipController.getAllShips()
    return response.json(ships)
})

export default router
