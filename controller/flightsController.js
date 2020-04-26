const flightModel = require('../models/flights');
const moment = require('moment');
const planeModel = require('../models/airplanes');
exports.getFlight = function(req,res){
    flightModel.find(req.body.fnum,function(result){
            
        const date = new Date(result.deptdate);
        const formatteddate1 = moment(date).format('YYYY-MM-DD');
        res.send({result,formatteddate1})
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

    flightModel.create(planeid,deptdate,depttime,deptarea,arrivdate,arrivtime,arrivport,flightnum,function(err,result){
        var resu;
        if(err){
            resu = {success: false, message:"Flight was not created"}
            res.send(resu)
        }else{
            resu =  result={success:true, message:"Flight Created!"}
            res.send(resu);
        }
        
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
        res.render('admin-table', {flights: result,  username: req.session.name});
    })
}
exports.AddForm = function(req,res){
    res.render('flights', { username: req.session.name});
}

exports.Home= function(req,res){
    res.render('admin-home', { username: req.session.name});
}
exports.editForm = function(req,res){
    res.render('editflights', { username: req.session.name});
}