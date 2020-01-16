const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
 


/* sequelize sync */
const { sequelize } = require('./models/index.js');
 
const driver = async () => {
    try {
        await sequelize.sync();
    } catch (err) {
        console.error('초기화 실패');
        console.error(err);
        return;
    }
 
    console.log('초기화 완료.');
};
driver();



const http = require('http');
const fs = require('fs');




const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dataRouter = require('./routes/data');
const uploadRouter = require('./routes/upload');
const app = express();

















// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// set port
app.set('port', process.env.PORT || 9000);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', dataRouter );
app.use('/upload', uploadRouter);






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

var server = app.listen(app.get('port'), function(){
console.log('Express server listening on port' + server.address().port);
});
