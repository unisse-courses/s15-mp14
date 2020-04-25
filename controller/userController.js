const userModel = require('../models/users');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

exports.getUser = function(req,res){
    userModel.getOne(function(result){
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
  const errors = validationResult(req);
      console.log(req.body);
  if (errors.isEmpty()) {
    const { regname, regmid,reglast,regad,regEmail,reguser, regpass,confirmPass,sex, regbday,country,choice  } = req.body;
  //Check user code
    userModel.getOne({ username : reguser }, (err, result) => {
      if (result) {
        console.log(result);
        // found a match, return to login with error
        req.flash('error_msg', 'User already exists. Please login.');
        res.redirect('/login');
      } else {
         //Hashing the password
       const saltRounds = 10;

       // Hash password
       bcrypt.hash(regpass, saltRounds, (err, hashed) => {
         const newUser = {
           name : regname,
           initial : regmid,
           lname : reglast,
           addr : regad,
           emadd : regEmail,
           password: (regpass , hashed),
           username : reguser,
           gender : sex,
           birthday: regbday,
           count : country,
           prov : choice
         };
         console.log(newUser);
         userModel.create(newUser, (err, user) => {
           if (err) {
             req.flash('error_msg', 'Could not create user. Please try again.');
             res.redirect('/register');
             // res.status(500).send({ message: "Could not create user"});
           } else {
             req.flash('success_msg', 'You are now registered! Login below.');
             res.redirect('/login');
           }
         });
       });
       // end hash code 
      }
       //end check user code
    });
  } else {
    const messages = errors.array().map((item) => item.msg);
  
    req.flash('error_msg', messages.join(' '));
    res.redirect('/register');
  }
    }


    
    // exports.loginUser = (req, res) => {
    //     // 1. Validate request
      
    //     // 2. If VALID, find if email exists in users
    //     //      EXISTING USER (match retrieved)
    //     //        a. Check if password matches hashed password in database
    //     //        b. If MATCH, save info to session and redirect to home
    //     //        c. If NOT equal, redirect to login page with error
    //     //      UNREGISTERED USER (no results retrieved)
    //     //        a. Redirect to login page with error message
      
    //     // 3. If INVALID, redirect to login page with errors
    //     res.redirect('/');
    //   };
      
    //   exports.logoutUser = (req, res) => {
    //     // Destroy the session and redirect to login page
    //     res.redirect('/login');
    //   };
