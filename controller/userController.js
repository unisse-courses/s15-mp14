const userModel = require('../models/users');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

exports.getUser = function(req,res){
    userModel.getOne(function(result){
       res.send(result);
    })
}


    exports.registerUser = (req, res) => {
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


    
    exports.loginUser = (req, res) => {
      const errors = validationResult(req);

      if (errors.isEmpty()) {
        const { username, password } = req.body;
  
        userModel.getOne({ username: username }, (err, user) => {
          if (err) {
            // Database error occurred...
            req.flash('error_msg', 'Something happened! Please try again.');
            res.redirect('/login');
          } else {
            // Successful query
            if (user) {
              bcrypt.compare(password, user.password, (err, result) => {
                // passwords match (result == true)
                if (result) {
                  // Update session object once matched!
                  req.session.user = user._id;
                  req.session.name = user.username;
                  req.session.prov = user.prov;
                  console.log(req.session);

                  if(user.prov == true)
                  res.redirect('/admin-home');
                  else if(user.prov == false)
                  res.redirect('/client-home');
                } else {
                  // passwords don't match
                  req.flash('error_msg', 'Incorrect Credentials. Please try again.');
                  res.redirect('/login');
                }
              });
            } else {
              // No user found
              req.flash('error_msg', 'No such user. Please register first!');
              res.redirect('/login');
            }
          }
        });
      } else {
        const messages = errors.array().map((item) => item.msg);
      
        req.flash('error_msg', messages.join(' '));
        res.redirect('/login');
      }
      };
      
      exports.logoutUser = (req, res) => {
        if (req.session) {
          req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.redirect('/login');
          });
        }
      };
