const mongoose = require('mongoose')
const Schema = mongoose.Schema
const discoteca = new Schema({


discotecas:{
    nombre: String,
    descripcion: String,
    calle: String,
    image_url: String
}
})
const Discoteca = mongoose.model ("Discoteca", discoteca)

module.exports = Discoteca