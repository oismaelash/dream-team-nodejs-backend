import express from 'express'
import TravelRoute from '@routes/travel.route'
import ShipRoute from '@routes/ship.route'
import RouteRoute from '@routes/route.route'
import OrderRoute from '@routes/order.route'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  return response.json({ message: `api works! - ${Date.now()}` })
})

app.use(TravelRoute)
app.use(ShipRoute)
app.use(RouteRoute)
app.use(OrderRoute)

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
