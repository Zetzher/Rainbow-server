const express = require("express");
const router = express.Router();
const User = require("../models/user");

//POST
router.get("/", (req, res, next) => {
  const userId = req.session.currentUser._id;
  User.findById(userId)
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((err) => console.log("En metodo GET de profile ha ocurrido:", err));
});

//EDIT PERFIL
router.put("/edit/:id", async (req, res, next) => {
  try {
    const { nombre, apellido, edad, photo_url } = req.body;
    //const profilePicture = req.file ? req.file.secure_url : req.session.currentUser.photo_url;
    
    await User.findByIdAndUpdate(
      req.params.id,

      { nombre, apellido, edad, photo_url },
      { new: true }
    );

    res.status(200);
  } catch (error) {
    //console.log(error);
  }
});

module.exports = router;
