const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 9090;

const flightsModel = require('./models/flights');
const planeModel = require('./models/airplanes');
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
app.get('/', function(req, res) {
  res.render('login', {
  })
});

app.get('/admin-home', function(req, res) {
  res.render('admin-home', {
    title: 'Welcome',
  })
});

app.get('/admin-table', function(req, res) {
  flightsModel.find({}).sort({flightnum : 1}).populate('airport').exec(function(err, result){
    var flightObjects =[];
    result.forEach(function(doc){
      flightObjects.push(doc.toObject());
    });
    res.render('admin-table',{flights: flightObjects});
  });
});

app.get('/client-home',function(req,res){
  res.render('client-home',{

  });
  
})

app.get('/client-table', function(req, res){
  res.render('client-table',{
  });
})

app.get('/CreateFlights',function(req,res){
// code to getting data from db here
  res.render('flights', {
   });
 })

app.post('/addFlight', (req,res) => {
  planeModel.findOneAndUpdate(req.body.port, {
    $set: {"Company":req.body.port.comp,"PlaneNum":req.body.port.flightnum}},{new:true, upsert:true, strict:false},function(err, plane){
      const planeid = plane._id
      var flight = new flightsModel ({
        deptdate: req.body.ddate,
        depttime: req.body.dtime,
        deptarea: req.body.deptairport,
        desti: req.body.destination,
        arrivdate: req.body.adate,
        arrivtime: req.body.artime,
        arrivport: req.body.aport,
        flightnum:req.body.flight,
        airport: planeid
      
    });
    flight.save(function(err, flight){
      var result;
      if(err){  
        console.log(err.message);
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
    });
  app.post('/addFlights',(req,res) =>{
      flightsModel.insertMany(req.body,function(err,result){
        if(err)
          res.send('Error');
          else{
            res.send('Success');
          }
      })
  })


// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});


app.get('/register',function(rq,res){
  res.render('register',{});
});
app.post('/addUser', function (req, res){

  var user = new userModel({
    name: req.body.name,
    initial: req.body.initial,
    lname :req.body.lname,
    addr: req.body.addr,
    emadd: req.body.emadd,
    username: req.body.username,
    password: req.body.password,
    gender: req.body.gender,
    birthday : req.body.birthday,
    count : req.body.count,
    prov: req.body.provider
});

user.save(function(err, user){
  var result;
  if(err){  
    console.log(err.message);
    result = {success: false, message:"User was not created"}
    res.send(result)
  }
  else{
    console.log(user);
    result={success:true, message:"User Created!"}
  res.send(result);
  }
});

}); 

app.get('/EditFlights',function(req,res){
  res.render('editflights');
});
app.post('/searchFlight',function(req,res){
  var pattern = "^" + req.body.fnum
  flightsModel.find({flightnum: {$regex: pattern}}, function(err, flight){
    res.send(flight);
  })
})

app.post('/updateFlight', function(req,res){
    var filter = {
      flightnum: req.body.num
    };
    var ddate = req.body.ddate;
    var dtime = req.body.dtime;
    var darea = req.body.dport;
    var adate = req.body.adate;
    var atime = req.body.atime;
    var aport = req.body.aport;
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
      res.send(result);
    });


});


app.post('/deleteFlight',function(req,res){
  var filter = {
    flightnum : req.body.num
  };


  flightsModel.deleteOne(filter,function(err,result){
    if(err) throw err;

    console.log(result);

  })
});
app.post('/deleteAll',function(req,res){

  flightsModel.deleteMany(({}),function(err,result){
    if(err) throw err;

    console.log(result);

  })
});

app.get('/client-home',function(req,res){
  res.render('client-home',{

  });
  
})
app.post('/searchUser',function(req,res){
  var pattern =  req.body.username;
  userModel.find({username: {$regex: pattern}}, function(err,user){
    res.send(user);
  })
})
app.post('/addUserFlights', function(req, res){

  var newUserFlight = {
    deparea: req.body.deparea1,
    depcity: req.body.depcity,
    arvarea1: req.body.arvarea1,
    arvcity: req.body.arvcity,
    depart_date: req.body.depart_date,
    arrival_date: req.body.arrival_date,
    trv_class: req.body.trv_class,
    num_adt_tkcs: req.body.num_adt_tkcs,
    num_chd_tkcs: req.body.num_chd_tkcs,
    num_inf_tkcs: req.body.num_inf_tkcs, 
  }
})



