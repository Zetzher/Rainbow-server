const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Evento = require ("../models/event")

//GET
router.get('/', (req,res,next)=>{

    Eventos
    .find()
    .then(() => {
        res.status(200)
    }
    )
})

//POST
router.post('/', (req,res,next)=>{
    const {nombre,descripcion,lugar} = req.body
    console.log(req.body)
    Evento
    .create({nombre,descripcion,lugar})
    .then(() => {
        res.status(200)
    })

})


module.exports = router;