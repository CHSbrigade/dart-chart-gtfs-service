import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import config from './config.json'


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


// setup dummy route
app.get('*', (req, res) => res.status(200).send({
  message: "Dart Chart Says Hello"
}))


// listen for incoming requests
app.server.listen(process.env.PORT || config.port)


export default app
