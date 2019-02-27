const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dataRouter = require('./controllers/datac')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const poller = require('./endpoint_poller')


mongoose.connect(config.mongoUrl, {useNewUrlParser: true})

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

app.use(middleware.logger)

app.use('/api/data', dataRouter)

app.use(middleware.error)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

setInterval(poller.handler, 3600000)

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}