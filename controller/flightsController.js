const flightModel = require('../models/flights');
const planeModel = require('../models/airplanes');
exports.getFlight = function(req,res){
    flightModel.findAll(function(result){
        res.send(result);
    });
};

exports.createFlight = function(req,res){
    planeModel.findNUpdate(req.body.port,function(result){
        const planeid = result._id;
    var deptdate= req.body.ddate,
    depttime= req.body.dtime,
    deptarea= req.body.deptairport,
    arrivdate= req.body.adate,
    arrivtime= req.body.artime,
    arrivport= req.body.aport,
    flightnum=req.body.flight

    flightModel.create(planeid,deptdate,depttime,deptarea,arrivdate,arrivtime,arrivport,flightnum,function(result){
        res.send(result);
    })
});
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
        for(var i =0; i< result.length; i++)
        {
         var temp1 = new Date(result[i].deptdate);
         var temp2 = new Date(result[i].arrivdate);
        result[i].deptdate = temp1.toDateString();
        result[i].arrivdate = temp2.toDateString();
        }
        res.render('admin-table', {flights: result});
    })
}
exports.AddForm = function(req,res){
    res.render('flights');
}

exports.Home= function(req,res){
    res.render('admin-home');
}
exports.editForm = function(req,res){
    res.render('editflights');
}