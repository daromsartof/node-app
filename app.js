const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors')
var app = express();
const { default: mongoose } = require('mongoose');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const db = require('./src/services/connection');


// const instance = new model({
//   usprTitle : 'ghgdshgq',
//   usprDescription : 'sdfsgdhfg',
//   usprImagePath: 'sdfjhsghjdf'
// })


// instance.save(function (err) {
//   console.log(err);
//})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/frontOffice'));
app.use('/admin' , require('./routes/backOffice'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
