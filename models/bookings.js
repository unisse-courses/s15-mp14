const mongoose = require('mongoose');

const databaseURL = 'mongodb://localhost:27017/flightsdb';


const options = { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false };


mongoose.connect(databaseURL, options)

const BookingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    flight: {type: mongoose.Schema.Types.ObjectId, ref: 'flight'},
    fclass: {type: String, enum:['Economy', 'Business', ' First'], required: true},
    adult: {type: Number, required:true},
    child: {type: Number, required:true},
    infant: {type: Number, required:true}
});
module.exports = mongoose.model('bookings', BookingSchema);