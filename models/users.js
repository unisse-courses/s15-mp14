const mongoose = require('./connection');

const UserSchema = new mongoose.Schema({
        name :{ type : String, required : true} ,
        initial: { type : String, required : true} ,
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

exports.create = function(name, initial,lname,addr,emadd,username,password,gender,birthday,count,provider, next){
    var user = new userModel({
        name: name,
        initial: initial,
        lname :lname,
        addr: addr,
        emadd: emadd,
        username: username,
        password: password,
        gender: gender,
        birthday : birthday,
        count : count,
        prov: provider
    });
    userModel.save(function(err, result){
       if (err) throw err;
       next(result);
      });
};

exports.getOne = function(username, next){
    var pattern = username;
    userModel.findOne({username:{$regex: pattern}}, function(err, user){
       if(err) throw err;
        next(user);
    })
}
