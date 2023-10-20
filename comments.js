//create a web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/recipe');
var db = mongoose.connection;

//import the model
var Comment = require('./models/comment');

//use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//define the port
var port = process.env.PORT || 8080;

//create a router
var router = express.Router()

