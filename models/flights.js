const mongoose = require('mongoose');

const databaseURL = 'mongodb://localhost:27017/flightsdb';


const options = { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false };


mongoose.connect(databaseURL, options)

const FlightSchema = new mongoose.Schema({
 deptdate: {type:String, required: true, },
 depttime: { type : String, required : true} ,
 deptarea: { type : String, required : true} ,
 arrivdate: { type : String, required : true} ,
arrivtime: { type : String, required : true}

});

module.exports = mongoose.model('flight', FlightSchema);
