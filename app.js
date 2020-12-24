var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var { StatusCodes } = require('http-status-codes')

var app = express()

// jobs

var jobs = require('./jobs')

if (process.env.NODE_ENV === 'production') {
  jobs.start()
}

// middleware

app.use(process.env.NODE_ENV === 'production' ? logger('dev') : logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// routes

var routes = require('./routes')

app.use('/', routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({ error: err.message })
})

module.exports = app
