const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = new Schema({

    nombre: String,
    apellido: String,
    edad: Number,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        unique: true,
        requiered: true,
    },
    photo_url: String,
    eventos: { type: Schema.Types.ObjectId, ref: evento }

})
const User = mongoose.model ("User", user)

module.exports = User;