const mongoose = require('./connection');

const BookingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    flight: {type: mongoose.Schema.Types.ObjectId, ref: 'flight'},
    fclass: {type: String, enum:['Economy', 'Business', ' First'], required: true},
    adult: {type: Number, required:true},
    child: {type: Number, required:true},
    infant: {type: Number, required:true}
});
const bookingModel = mongoose.model('bookings', BookingSchema);

exports.create = function(flighta,fclass,adult,child,infant,next){
    var booking = new bookingModel({ 
        flight : flighta,
    fclass : fclass,
    adult : adult,
    child : child,
    infant : infant
});
    booking.save(function(err,result){
        if(err) throw err
        next(result);
    })
}

exports.findAll = function(accnum, next){
    bookingModel.find({user: accnum}).sort({flightnum:1}),populate('flight').exec(function(err, result){
        if (err) throw err;
        var bookingObjects = [];
        result.forEach(function(doc){
            bookingObjects.push(doc.toObject());
        });
        next(bookingObjects);
    })
}