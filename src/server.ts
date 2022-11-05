import express from 'express'
import TravelRoute from '@routes/travel.route'
import ShipRoute from '@routes/ship.route'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: `api works! - ${Date.now()}` })
})

app.use(TravelRoute)
app.use(ShipRoute)

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
