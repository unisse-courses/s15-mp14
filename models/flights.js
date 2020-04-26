const mongoose = require('./connection');
const FlightSchema = new mongoose.Schema({
 deptdate: {type:Date, default: Date.now },
 depttime: { type : String, required : true} ,
 deptarea: { type : String, required : true} ,
 arrivdate: { type : Date ,default: Date.now} ,
arrivtime: { type : String, required : true},
arrivport: {type:String, required:true},
flightnum: {type:String, required:true},
airplane: {type: mongoose.Schema.Types.ObjectId, ref: 'planes'}

});

const flightsModel = mongoose.model('flight', FlightSchema);

exports.create = function (planeid,ddate,dtime,deptairport,adate,artime,aport,flight, next){

 var flight = new flightsModel ({
          deptdate: ddate,
          depttime: dtime,
          deptarea: deptairport,
          arrivdate: adate,
          arrivtime: artime,
          arrivport: aport,
          flightnum:flight,
          airplane: planeid
});
flight.save(function(err,result){
        next(err,result);
});
};

exports.find = function(fnum, next){
    flightsModel.findOne({flightnum: fnum}, function(err, result){
        if(err) throw err;
        next(result);
    })
}
exports.findtable = function(next){
    flightsModel.find({}).sort({flightnum:1}).populate('airplane').exec(function(err,result){
        var flightObjects = [];
        result.forEach(function(doc){
            flightObjects.push(doc.toObject());
        });
        next(flightObjects);
    })
}
exports.update = function(fnum,ddate,dtime,darea,adate,atime,aport,next){
    var filter =  {flightnum: fnum};
    var update = {
        $set : {
            deptdate: ddate,
            depttime: dtime,
            deptarea: darea,
            arrivdate: adate,
            arrivtime: atime,
            arrivport: aport
          }
    };
    flightsModel.updateOne(filter,update,function(err,result){
        if(err) throw err;
        next(result);
    })
}

exports.delete = function(fnum, next){
    filter = {flightnum: fnum};
    flightsModel.deleteOne(filter,function(err,result){
        if(err) throw err;
    
        next(result);
    
      })
}

exports.deleteAll = function(next){
    flightsModel.deleteMany(({}), function(err,result){
        if (err) throw err;

        next(result);
    })
}