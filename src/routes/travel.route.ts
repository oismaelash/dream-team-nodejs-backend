// eslint-disable-next-line no-unused-vars
import express, { Request, Response } from 'express'
import * as TravelController from '@controllers/travel.controller'
const router = express.Router()

router.post('/travel', async (request: Request, response: Response) => {
    const travel = await TravelController.create()
    return response.json(travel)
})

router.get('/travel', async (request: Request, response: Response) => {
    const travels = await TravelController.getAllTravels()
    return response.json(travels)
})

export default router
