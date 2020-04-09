const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sexshop = new Schema({


sexshops:{
    nombre: String,
    descripcion: String,
    calle: String,
    image_url: String
}
})
const sexshop = mongoose.model ("Sexshop", sexshop)

module.exports = sexshop