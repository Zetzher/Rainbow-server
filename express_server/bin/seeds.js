const mongoose = require('mongoose');
const Ocio = require('../models/ocio');


mongoose.connect(`mongodb://localhost:27017/rainbow`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
Ocio.collection.drop();
// nombre: String,
// descripcion: String,
// calle: String,
// image_url: String
// type: ["pub", "sexshop"]

const ocio = [
    {
        nombre: "arena",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"] 
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    },
    {
        nombre: "holi",
        descripcion: "holi",
        calle: "holi",
        image_url: "holi",
        type: ["pub", "sexshop"]
    }
]


Ocio.create(ocio, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${ocio.length} locales`)
    mongoose.connection.close();
});