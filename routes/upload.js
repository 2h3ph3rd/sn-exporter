var express = require('express')
var router = express.Router()
var store = require('../store')

router.post('/', function (req, res, next) {
  store.notes.save(req.body.items[0])
  res.send('Note saved')
})

module.exports = router
