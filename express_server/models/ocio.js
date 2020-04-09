const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ocio = new Schema({

    nombre: String,
    descripcion: String,
    calle: String,
    image_url: String,
    type: Array
})
const Ocio = mongoose.model ("Ocio", ocio)

module.exports = Ocio