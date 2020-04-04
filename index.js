const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 9090;

/*Dummy Data for AJAX */
var flight_deets = [
  {
    dep_date: "March 2, 2019",
    dep_time: "11:00 AM",
    dep_port: "Ninoy Aquino International Airport",
    arv_date: "March 2, 2020",
    arv_time: "1:00 PM",
    dep_port: "Hongkong International Airport",
    plane_no: "TIO_1258",
    adl_tcks: 1,
    chl_tcks: 1,
    inf_tcks: 2
  },
  {
    dep_date: "March 3, 2019",
    dep_time: "12:00 AM",
    dep_port: "Ninoy Aquino International Airport",
    arv_date: "March 2, 2020",
    arv_time: "12:00 PM",
    dep_port: "United States of America International Airport",
    plane_no: "TIO_2648",
    adl_tcks: 1,
    chl_tcks: 2,
    inf_tcks: 1
  },
  {
    dep_date: "March 3, 2019",
    dep_time: "11:00 AM",
    dep_port: "Ninoy Aquino International Airport",
    arv_date: "March 2, 2020",
    arv_time: "4:00 PM",
    dep_port: "Singapore Airport",
    plane_no: "TIO_5498",
    adl_tcks: 1,
    chl_tcks: 2,
    inf_tcks: 1 
  }
]


app.engine( 'hbs', exphbs({
    extname: 'hbs', // configures the extensio  n name to be .hbs instead of .handlebars
    defaultView: 'main', // this is the default value but you may change it to whatever you'd like
    layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
    partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
  }));
  

app.set('view engine', 'hbs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('index', {
      title: 'Welcome',
    })
});

app.get('/client-home', function(req,res){
  res.render('client-home',{
    title: 'Welcome'
  })
})

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
    title: 'Welcome',
  })
});


app.use(express.static('public'));

app.post('/addUserFlights', function(req, res){
  var new_flight = {
    dep_date: req.body.dep_date,
    dep_time: req.body.dep_time,
    dep_port: req.body.dep_port,
    arv_date: req.body.arv_date,
    arv_time: req.body.arv_time, 
    dep_port: req.body.dep_port,
    plane_no: req.body.plane_no,
    adl_tcks: req.body.adl_tcks,
    chl_tcks: req.body.chl_tcks,
    inf_tcks: req.body.inf_tcks
  }

  flight_deets.push(new_flight);
  res.status(200).send(new_flight);  
})


// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});