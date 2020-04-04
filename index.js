const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 9090;

const flightsModel = require('./models/flights');
const userModel = require('./models/users');

app.engine( 'hbs', exphbs({
    extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
    defaultView: 'main', // this is the default value but you may change it to whatever you'd like
    layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
    partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
  }));

  app.set('view engine', 'hbs');

  app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('public'));

// app.get('/', function(req, res) {
//     // The render function takes the template filename (no extension - that's what the config is for!)
//     // and an object for what's needed in that template
//     res.render('flights', {
//     })
// });
app.get('/admin-home', function(req, res) {
  // The render function takes the template filename (no extension - that's what the config is for!)
  // and an object for what's needed in that template
  res.render('admin-home', {
    title: 'Welcome',
  })
});

app.get('/admin-table', function(req, res) {
  // The render function takes the template filename (no extension - that's what the config is for!)
  // and an object for what's needed in that template
  
  res.render('admin-table', {
    flights:[
      {company:"Yao Airlines", deptdate : "April 1,2019" ,depttime:"11:00PM", depta:"NAIA Terminal 3" , num: "TIO_1123", arrivdate:"April 3, 2020" , timear:"11:00PM", airp:"TOKYO AIRLINES" },
      {company:"Yao Airlines", deptdate : "April 4,2019" ,depttime:":100PM", depta:"NAIA Terminal 3" , num: "TIO_4432", arrivdate:"April 4, 2020" , timear:"4:00PM", airp:"KYOTO AIRLINES"}

    ]
  })
});

app.get('/CreateFlights',function(req,res){
// code to getting data from db here
  res.render('flights', {
   });
 })

app.post('/addFlight', (req,res) => {
  console.log(req.body)
  var flight = new flightsModel ({
    deptdate: req.body.ddate,
    depttime: req.body.dtime,
    deptarea: req.body.deptairport,
    arrivdate: req.body.adate,
    arrivtime: req.body.artime
  
});
flight.save(function(err, flight){
  var result;
  if(err){  
    result = {success: false, message:"Flight was not created"}
    res.send(result)
  }
  else{
    console.log(flight);
    result={success:true, message:"Flight Created!"}
  res.send(result);
  }
});
});


// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});

app.get('/register',function(rq,res){
  res.render('register',{});
});
/* app.post('/register', function (req, res){

  var user = new userModel({
    name: req.name,
    initial: req.initial,
    lname : req.lname,
    addr: req.addr,
    emadd: req.emadd,
    password: req.password,
    gender: req.gender,
    birthday : req.birthday,
    count : req.count
});

user.save(function(err, user){
  var result;
  if(err) {
    console.log(err.errors);
    res.send(user);
  }
})
console.log(user);
//Put db code here para ma regsiter
}); */
/*
This code is for adding flights that does not require the database

app.post('/addAirplane', function (req, res){
  var plane = new airplaneModel {
    comp : req.comp,
    plane : req.plane
  }

  //put db code here
  plane.save(fcuntion(err, plane){
    res.send(plane);
  });
};
console.log(user);
//Put db code here para ma regsiter
});
*/
// app.post('/addFlight', function (req, res){
//   console.log(req);
//   var flight = new Flightsmodel ({
//     deptdate: req.ddate,
//     depttime: req.dtime,
//     deptarea: req.deptairport,
//     arrivdate: req.adate,
//     arrivtime: req.atime
  
// });
// flight.save(function(err, flight){
//   var result;
//   if(err){
//     console.log(err.errors);
//     result = {success: false, message:"Flight was not created"}
//     res.send(result)
//   }
//   else{
//     console.log(flight);
//     result={success:true, message:"Flight Created!"}
//   res.send(result);
//   }
// });
// });

/*
IMPORTANT: PUT CODE THAT WILL READ FILE AND PUT THE CONTENTS OF THE FILE IN THE DATABASE

TODO CHECKLIST:
REGISTER USER
ADD FLIGHTS
ADD AIRPLANES
ADD FUNCTIONALITIES
FINALIZE DATABASE (TO BE DONE TODAY - Apirl 3)

may lalabas dpat na pop up na see available airplanes

*/

