var express = require('express')
var router = express.Router()

var store = require('../store')

router.get('/', function (req, res, next) {
  store.notes.clean()
  res.send('Old notes removed from store!')
})

module.exports = router
