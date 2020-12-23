var express = require('express')
var router = express.Router()

var { StatusCodes } = require('http-status-codes')

var store = require('../store')

router.get('/', function (req, res, next) {
  store.notes.clean()
  res.send({ message: 'Old notes removed from store' })
})

module.exports = router
