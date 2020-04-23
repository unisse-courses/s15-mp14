const flightModel = require('../models/flights');

exports.getFlight = function(req,res){
    flightModel.findAll(function(result){
        res.send(result);
    });
};

exports.createFlight = function(req,res){
    var deptdate= req.body.ddate,
    depttime= req.body.dtime,
    deptarea= req.body.deptairport,
    desti= req.body.destination,
    arrivdate= req.body.adate,
    arrivtime= req.body.artime,
    arrivport= req.body.aport,
    flightnum=req.body.flight

    flightModel.create(deptdate,depttime,deptarea,desti,arrivdate,arrivtime,arrivport,flightnum,function(result){
        res.send(result);
    })
}

exports.updateFlight = function(req,res){
    var fnum = req.body.num;
    var ddate = req.body.ddate;
    var dtime = req.body.dtime;
    var darea = req.body.dport;
    var adate = req.body.adate;
    var atime = req.body.atime;
    var aport = req.body.aport;

    flightModel.update(fnum,ddate,dtime,darea,adate,atime,aport, function(result){
        res.send(result);
    })
}

exports.deleteone = function(req,res){
    fnum = req.body.num;

    flightModel.delete(fnum,function(result){
        res.send(result);
    })
}
exports.deleteAll = function(req,res){
    flightModel.deleteAll(function(result){
        res.send(result);
    })
}
exports.flightList = function(req,res){
    flightModel.findtable(function(result){
        res.render('admin-table', {flights: result});
    })
}
exports.AddForm = function(req,res){
    res.render('flights');
}

exports.Home= function(req,res){
    res.rendeer('admin-home');
}
exports.editForm = function(req,res){
    res.render('editflights');
}