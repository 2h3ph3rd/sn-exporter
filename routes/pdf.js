var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  pdf = 'Note not found'
  if (
    req.session != undefined &&
    req.session.notes[req.query.item_uuid] != undefined
  ) {
    // convert pdf
    pdf = req.session.notes[req.query.item_uuid]
  }
  res.send(pdf)
})

module.exports = router
