const express = require("express");
const router = express.Router();
const User = require("../models/user");


//POST
router.get('/', (req,res,next)=>{
const userId = req.session.currentUser._id
//console.log('session :', req.session.currentUser._id);
    User
    .findById(userId)
    .then(dbResponse => {
        console.log(dbResponse)
        res.status(200)
        .json(dbResponse)
    }
    )
    .catch(err => console.log('En metodo GET de profile ha ocurrido:', err))
})

//EDIT PERFIL
router.post('/edit/:id', async (req, res, next) => {
	try {
		//console.log(req.body);
		const {username, nombre,apellido,edad,email, photo_url} = req.body;
		console.log(req.body)
		//const profilePicture = req.file ? req.file.secure_url : req.session.currentUser.photo_url;
		await User.findByIdAndUpdate({
            _id: req.params.id
            
		}, { username, nombre,apellido,edad,email, photo_url});
        
            res.status(200)
            .json({username, nombre,apellido,edad,email, photo_url})
        
	} catch (error) {
		//console.log(error);
	}
});

module.exports = router;