const mongoose = require('mongoose');

const databaseURL = 'mongodb://localhost:27017/flightsdb';


const options = { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false };


mongoose.connect(databaseURL, options)

const FlightSchema = new mongoose.Schema({
 deptdate: {type:String, default: Date.now },
 depttime: { type : String, required : true} ,
 deptarea: { type : String, required : true} ,
 desti: {type:String, required:true },
 arrivdate: { type : String ,default: Date.now} ,
arrivtime: { type : String, required : true},
arrivport: {type:String, required:true},
flightnum: {type:String, required:true},
airport: {type: mongoose.Schema.Types.ObjectId, ref: 'planes'}

});

module.exports = mongoose.model('flight', FlightSchema);
