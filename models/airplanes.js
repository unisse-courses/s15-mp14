const mongoose = require('./connection');
const AirplaneSchema = new mongoose.Schema({
 Company: {type:String, required: true },
 PlaneNum: { type : String, required : true} 

});

const planeModel = mongoose.model('planes', AirplaneSchema);

exports.create = function(company, planeNum, next){
    var plane = new planeModel({
        Compnay: company,
        PlaneNum: planeNum
    });
    plane.save(function(err,result){
        if (err) throw err
        next(result);
    })
}

exports.findNUpdate = function(planeObj, next){
    planeModel.findOneAndUpdate(planeObj, {$set: 
        {"Company":planeObj.comp,"PlaneNum":planeObj.flightnum}},{new:true, upsert:true, strict:false},function(err, plane){
            next(plane);
        })
}
