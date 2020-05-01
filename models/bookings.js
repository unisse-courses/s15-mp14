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

exports.create = function(user,flighta,fclass,adult,child,infant,next){
    var booking = new bookingModel({ 
    user: user,
    flight : flighta,
    fclass : fclass,
    adult : adult,
    child : child,
    infant : infant
});
    booking.save(function(err,result){
        if(err) throw err
        next(err,result);
    })
}
exports.deleteone = function(flight,acc,next){
    filter = {flight:flight,user:acc};
    bookingModel.deleteOne(filter,(err,result)=>{
        next(err,result);
    })
}
exports.update = function(num,accnum,fclass,adult,child,infant,next){
    var filter = {flight: num,user:accnum};
    var update = {  
        $set: {
            fclass:fclass,
            adult:adult,
            child:child,
            infant:infant
        }
    };
        bookingModel.updateOne (filter,update,(err,result)=>{
                if(err) throw err;
                next(err,result);
        });
}
exports.findAll = function(accnum, next){
    bookingModel.find({user: accnum}).populate('flight').exec(function(err, result){
  
        var bookingObjects = [];
        result.forEach(function(doc){
            bookingObjects.push(doc.toObject());
        });
        next(bookingObjects);
    })
}   

exports.delete = function(accnum,next){
    bookingModel.deleteMany({user:accnum},(err,result) =>{
        next(result);
    })
}
exports.deleteAll = function(next){
    bookingModel.deleteMany({},function(err,result){
        next(result);
    })
}
exports.deleteBookings = function(flightnum, next){
    bookingModel.deleteMany({flight:flightnum},(err,result)=>{
        next(result)
    })
}

exports.find = function(accnum,fnum,next){
    query = {user:accnum, flight:fnum};
    bookingModel.findOne(query).populate('flight').exec(function(err,result){
        if(err) throw err;
        next(result);
    })
}