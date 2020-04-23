const bookingModel = require("../models/bookings");
const flightModel = require("../models/flights");

exports.createBooking = function(req,res){
    flightModel.find(req.body.flightnum,function(result){
        const flighta = result_.id;
        var 
        fclass = req.body.fclass,
        adult = req.body.adults,
        child = req.body.child,
        infant = req.body.infant
        bookingModel.create(flighta,fclass,adult,child,infant,function(result){
            res.send(result);
        })
    });
}

exports.flightList = function(req,res){
    flightModel.findtable(function(result){
        res.render('client-home', {flights:result});
    })
}

exports.fillTable = function(req,res){
    bookingModel.findAll(req.body.accnum,function(result){
        res.render('client-table',{bookings:result})
    })
}