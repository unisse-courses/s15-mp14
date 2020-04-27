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
exports.updateBooking = function(req,res){
    flightModel.find(req.body.num,function(result){
        const fnum = result._id;
        bookingModel.update(fnum,req.session.user,req.body.fclass,req.body.adult,req.body.child,req.body.infant, function(err,result){
            var resu;
        if(err){
            resu = {success: false}
            res.send(err,resu)
        }else{
            resu = {success:true}
            res.send(resu);
        }
        
        })
    })
}

exports.deleteBooking = function(req,res){
    flightModel.find(req.body.num,function(result){

        const fnum= result._id;
        bookingModel.deleteone(fnum,req.session.user, function(err,result){
            var resu;
        if(err){
            resu = {success: false}
            res.send(resu)
        }else{
            resu = {success:true}
            res.send(resu);
        }
        
        })
    })
}
exports.flightList = function(req,res){
    flightModel.findtable(function(result){
        res.render('client-home', {flights:result, username: req.session.name});
    })
}

exports.fillTable = function(req,res){
    bookingModel.findAll(req.session.user,function(result){
        res.render('client-table',{bookings:result,  username: req.session.name})
    })
}
exports.editForm = function(req,res){
    res.render('editBookings', {username: req.session.name });
}
exports.deleteAll = (req,res) => {
    bookingModel.delete(req.session.user, (result)=>{
        res.send(result);
    })
}

exports.searchBooking = (req,res) =>{
    flightModel.find(req.body.fnum,function(result){
        const flightid = result._id;
    
    bookingModel.find(req.session.user,flightid,(result)=>{
        res.send(result);
    });
});
}