import express from 'express'
import TravelRoute from '@routes/travel.route'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'api works!' })
})

app.use(TravelRoute)

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
