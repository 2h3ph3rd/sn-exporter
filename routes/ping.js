var express = require('express')
var router = express.Router()

var store = require('../store')

router.get('/', function (req, res, next) {
  res.send({ message: 'Pong' })
})

module.exports = router
