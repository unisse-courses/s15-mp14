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

    exports.registerUser = (req, res) => {
        // 1. Validate request

  // 2. If VALID, find if email exists in users
  //      NEW USER (no results retrieved)
  //        a. Hash password
  //        b. Create user
  //        c. Redirect to login page
  //      EXISTING USER (match retrieved)
  //        a. Redirect user to login page with error message.

  // 3. If INVALID, redirect to register page with errors
  res.redirect('/login');
    }
    exports.loginUser = (req, res) => {
        // 1. Validate request
      
        // 2. If VALID, find if email exists in users
        //      EXISTING USER (match retrieved)
        //        a. Check if password matches hashed password in database
        //        b. If MATCH, save info to session and redirect to home
        //        c. If NOT equal, redirect to login page with error
        //      UNREGISTERED USER (no results retrieved)
        //        a. Redirect to login page with error message
      
        // 3. If INVALID, redirect to login page with errors
        res.redirect('/');
      };
      
      exports.logoutUser = (req, res) => {
        // Destroy the session and redirect to login page
        res.redirect('/login');
      };
