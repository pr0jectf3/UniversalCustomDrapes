var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
  res.render("home")
})

app.get("/gallery", function(req,res){
  res.render("gallery")
})

app.listen(process.env.PORT, process.env.IP)

app.listen(3000, () => {
  console.log('Server Started')
})

module.exports = app;
