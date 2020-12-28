var express = require('express')
var router = express.Router()

var { StatusCodes } = require('http-status-codes')

var store = require('../store')

router.post('/', function (req, res, next) {
  item_uuid = req.query.item_uuid

  if (!store.notes.present(item_uuid)) {
    res.status(StatusCodes.NOT_FOUND).send('Note not found')
    return
  }

  store.notes.delete(item_uuid)
  console.log('Note deleted')
  res.send(200)
})

module.exports = router
