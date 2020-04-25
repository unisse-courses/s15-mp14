const mongoose = require('./connection');

const UserSchema = new mongoose.Schema({
        name :{ type : String, required : true} ,
        initial: { type : String} ,
        lname :{ type : String, required : true} ,
        addr: { type : String, required : true} ,
        emadd:{ type: String, required : true} ,
        password: { type : String, required : true} ,
        username: { type : String, required : true} ,
        gender: { type : String, required : true} ,
        birthday :{ type : Date, required : true} ,
        count : { type : String, required : true} ,
        prov: { type : Boolean, required:true}
});

const userModel = mongoose.model('user', UserSchema);

exports.create = function(obj, next){
    var user = new userModel(obj);
    user.save(function(err, result){
       if (err) throw err;
       next(err,result);
      });
};

exports.getOne = function(filter, next){
    userModel.findOne(filter, function(err, user){
        next(err,user);
    })
}
