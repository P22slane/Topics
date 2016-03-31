var express = require("express");
var mongoose = require("mongoose");
var bodyParser			= require('body-parser');
var morgan = require('morgan');
var app = express();
var register = require('./server/controllers/register.js');


// configure app
app.use(morgan('dev'));

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/teemaderegister');


app.get('/',function(reg, res){
	res.sendFile(__dirname + '/public/index.html');
}); 

var Curricula = require('./server/models/curricula');
var ThesisType = require('./server/models/thesis_type');
var Works = require('./server/models/works');
var Supervisor = require('./server/models/account');

// ROUTES FOR OUR API
// =============================================================================
// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



register(router, Curricula, 'curricula', 'curriculas')
register(router, ThesisType, 'thesisType', 'thesisTypes')
register(router, Works, 'work', 'works')
register(router, Supervisor, 'supervisor', 'supervisor')


//directions
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/bower_components', express.static(__dirname + '/public/bower_components'));
app.use('/parts', express.static(__dirname + '/public/parts'));
app.use('/data', express.static(__dirname + '/public/data'));
app.use('/api', router);

//server start
app.listen(3000, function(){
	console.log('i\'m Listening ...');
});

//http://stackoverflow.com/questions/20808062/angularjs-error-sending-form-data-to-server-with-http-put