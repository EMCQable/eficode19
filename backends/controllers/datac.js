const dataRouter = require('express').Router()
const Data = require('../models/datam')

dataRouter.get('/', async (request, response) => {
  let data = await Data
    .find({})
  response.json(data.map(Data.format))
})

module.exports = dataRouter