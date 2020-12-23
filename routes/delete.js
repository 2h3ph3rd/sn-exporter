var express = require('express')
var router = express.Router()
var store = require('../store')

router.get('/:item_uuid', function (req, res, next) {
  item_uuid = req.query.item_uuid

  if (store.notes.present(item_uuid)) {
    store.notes.delete(item_uuid)
    res.send('Note deleted')
  } else {
    res.status(404).send('Note not found')
  }
})

module.exports = router
