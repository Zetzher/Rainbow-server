const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pub = new Schema({


pubs:{
    nombre: String,
    descripcion: String,
    calle: String,
    image_url: String
}
})
const Pub = mongoose.model ("Pub", pub)

module.exports = Pub