const mongoose = require('mongoose');

const databaseURL = 'mongodb://localhost:27017/flightsdb';


const options = { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false };


mongoose.connect(databaseURL, options)

module.exports = mongoose;