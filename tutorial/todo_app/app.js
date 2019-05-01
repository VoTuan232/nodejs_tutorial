var express = require('express');

// import controller
var todoController = require('./controller/todoController');

var app = express();

//set up template
app.set('view engine', 'ejs');

//static file
app.use('/', express.static('./public'));

// fire controller
todoController(app);

//listen to port
app.listen(3000);
console.log('Start server');