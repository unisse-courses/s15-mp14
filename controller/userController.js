const userModel = require('../models/users');

exports.getUser = function(req,res){
    userModel.getOne(function(result){
       res.send(result);
    })
}

exports.createUser = function(req,res){
    var name= req.body.name,
    initial= req.body.initial,
    lname =req.body.lname,
    addr= req.body.addr,
    emadd= req.body.emadd,
    username= req.body.username,
    password= req.body.password,
    gender= req.body.gender,
    birthday = req.body.birthday,
    count = req.body.count,
    provider= req.body.provider

    userModel.create(name, initial,lname,addr,emadd,username,password,gender,birthday,count,provider, function(result){
        res.send(result);
    })

    }