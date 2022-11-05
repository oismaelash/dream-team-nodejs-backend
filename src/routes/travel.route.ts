import express from 'express'
import * as TravelController from '@controllers/travel.controller'
const router = express.Router()

router.get('/travels', async (request, response) => {
    const travels = await TravelController.getAllTravels()
    return response.json(travels)
})

export default router
