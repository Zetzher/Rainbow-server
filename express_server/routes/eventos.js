const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Evento = require ("../models/event")

//GET
router.get('/', (req,res,next)=>{

    Evento
    .find()
    .then(dbResponse => {
        console.log(dbResponse)
        res.status(200)
        .json(dbResponse)
    }
    )
    .catch(err => console.log('En metodo GET de Eventos ha ocurrido:', err))
})

//POST
router.post('/', (req,res,next)=>{
    const {nombre,descripcion,lugar} = req.body
    console.log(req.body)
    Evento
    .create({nombre,descripcion,lugar})
    .then((dbResponse) => {
        res.status(200)
        .json(dbResponse)
    })
    .catch(err => console.log('En metodo POST de Eventos ha ocurrido:', err))
})


module.exports = router;