
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// loading routes


// Define the port to run on
app.set('port', 3030);

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// Enable parsing for forms submisstions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//creating server to listen to request

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Fuber running on port ' + port);
});

process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log("Node error handler",err);
});
// Define the port to run on
app.set('port', 3000);

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// Enable parsing for forms submisstions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//creating server to listen to request

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Fuber running on port ' + port);
});

process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log("Node error handler",err);
});