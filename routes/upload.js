var express = require('express')
const { reset } = require('nodemon')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Note saved!')
})

module.exports = router
