var express = require('express')
var router = express.Router()
var store = require('../store')

router.post('/:item_uuid', function (req, res, next) {
  item_uuid = req.params.item_uuid

  if (!store.notes.present(item_uuid)) {
    res.status(404).send('Note not found')
    return
  }

  store.notes.delete(item_uuid)
  res.send('Note deleted')
})

module.exports = router
