var express = require('express')
var router = express.Router()
var store = require('../store')

router.get('/:file_type/:item_uuid', function (req, res, next) {
  file_type = req.params.file_type
  item_uuid = req.params.item_uuid

  data = store.notes.get(item_uuid)

  if (data == null) {
    res.send('Note not found')
    return
  }

  switch (file_type) {
    case 'pdf':
      res.attachment('Note.pdf')
      res.type('txt')
      break
    case 'txt':
      res.attachment('Note.txt')
      res.type('txt')
      break
    default:
      res.send('File type not supported')
      return
  }

  res.send(text)
})

module.exports = router
