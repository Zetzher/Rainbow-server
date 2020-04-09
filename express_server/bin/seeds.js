const mongoose = require('mongoose');
const Card = require('../models/Card');
const Project = require('../models/Project');
const User = require('../models/User');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const cards = [

    {
        description: 'Tú a Frontend y yo a UX.',
        type: 'A',
    }

]

Card.create(cards, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${cards.length} cards`)
    mongoose.connection.close();
});