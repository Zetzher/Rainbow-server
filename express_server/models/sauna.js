const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sauna = new Schema({

saunas: {
    nombre: String,
    descripcion: String,
    calle: String,
    image_url: String
}
})
const Sauna = mongoose.model ("Sauna", sauna)

module.exports = Sauna