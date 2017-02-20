import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import config from './config.json'
// mock data
import {
  routeData,
  routesData
} from './data'


// create server
let app = express()
app.server = http.createServer(app)


// setup logger
app.use(morgan('dev'))


// setup middlewares
app.use(cors({
  exposedHeaders: config.corsHeaders
}))

app.use(bodyParser.json({
  limit: config.bodyLimit
}))


// routes
app.get('/routes', (req, res) => res.status(200).send({
  data: routesData,
  status: "success"
}))

app.get('/routes/:routeId', (req, res) => {
  const data = routeData[req.params.routeId]
  if (data) {
    res.status(200).send({
      data: data,
      status: "success"
    })
  } else {
    res.status(404).send({
      message: `No route found with ID: ${req.params.routeId}`,
      status: "error"
    })
  }
})


// If URL not matched by this point, then return 404
app.get('*', (req, res) => res.status(404).send({
  message: "Resource not found",
  status: "error"
}))


// listen for incoming requests
app.server.listen(process.env.PORT || config.port)


export default app
