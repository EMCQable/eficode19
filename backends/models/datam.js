const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  date: String,
  sensor1: Number,
  sensor2: Number,
  sensor3: Number,
  sensor4: Number
},{
  versionKey: false
})

dataSchema.statics.format = (data) => {
  return {
    date: data.date,
    sensor1: data.sensor1,
    sensor2: data.sensor2,
    sensor3: data.sensor3,
    sensor4: data.sensor4
  }
}

const Data = mongoose.model('Data', dataSchema)

module.exports = Data