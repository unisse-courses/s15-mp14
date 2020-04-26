const bookingModel = require("../models/bookings");
const moment = require('moment');
const flightModel = require("../models/flights");
exports.createBooking = function(req,res){
   
    flightModel.find(req.body.flightnum,function(result){
        console.log(result._id);
        const flighta = result._id;
        var fclass = req.body.fclass,
        adult = req.body.adults,
        child = req.body.child,
        infant = req.body.infa
        bookingModel.create(req.session.user,flighta,fclass,adult,child,infant,function(result){
            res.send(result);
        });

});
}

exports.flightList = function(req,res){
    flightModel.findtable(function(result){
        res.render('client-home', {flights:result, username: req.session.name});
    })
}

exports.fillTable = function(req,res){
    bookingModel.findAll(req.session.user,function(result){
        console.log(result);
        res.render('client-table',{bookings:result,  username: req.session.name})
    })
}
exports.deleteAll = (req,res) => {
    bookingModel.delete(req.session.user, (result)=>{
        res.send(result);
    })
}