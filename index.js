const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 9090;


app.engine( 'hbs', exphbs({
    extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
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
    res.render('admin-home', {
    })
});
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


app.use(express.static('public'));

// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});


app.post('/register', function (req, res){
  var user = {
    name: req.name,
    initial: req.initial,
    lname : req.lname,
    addr: req.addr,
    emadd: req.emadd,
    password: req.password,
    gender: req.gender,
    birthday : req.birthday,
    count : req.count
};
//Put db code here para ma regsiter
});