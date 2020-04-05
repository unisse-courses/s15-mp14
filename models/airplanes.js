const mongoose = require('mongoose');

const databaseURL = 'mongodb://localhost:27017/flightsdb';


const options = { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false };


mongoose.connect(databaseURL, options)

const AirplaneSchema = new mongoose.Schema({
 Company: {type:String, required: true },
 PlaneNum: { type : String, required : true} 

});

module.exports = mongoose.model('planes', AirplaneSchema);
