import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import config from './config.json'
// mock data
import {
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
  data: routesData
}))


// If URL not matched by this point, then return 404
app.get('*', (req, res) => res.status(404).send({
  message: "Resource not found",
  status: "error"
}))


// listen for incoming requests
app.server.listen(process.env.PORT || config.port)


export default app
