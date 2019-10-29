var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

//Setting View Engine
app.set('view engine', 'pug');

//Setting public folder
app.use(express.static('public'));
app.use(cookieParser());

//Default Route
app.get('/', function(req, res){
   res.render('index')
});

app.get('/cookie', function(req,res) {
   res.cookie('name', 'express').send("COokie set");
});
//Listening to nodeJS Application
app.listen(3000, function(){
   console.log("Listening to port 3000")
});