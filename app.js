var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

// jobs
var jobs = require('./jobs')

if (process.env.NODE_ENV == 'production') {
  jobs.start()
}

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// middleware

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// routes

var actionRouter = require('./routes/action')
var uploadRouter = require('./routes/upload')
var exportRouter = require('./routes/export')
var deleteRouter = require('./routes/delete')
var pingRouter = require('./routes/ping')
var cleanRouter = require('./routes/clean')

app.use('/action', actionRouter)
app.use('/upload', uploadRouter)
app.use('/export', exportRouter)
app.use('/delete', deleteRouter)
app.use('/ping', pingRouter)
app.use('/clean', cleanRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
