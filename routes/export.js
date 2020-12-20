var express = require('express')
var router = express.Router()
var store = require('../store')

router.get('/:file_type/:item_uuid', function (req, res, next) {
  file_type = req.params.file_type
  item_uuid = req.params.item_uuid

  text = store.notes.get(item_uuid)

  if (text == null) {
    res.send('Note not found')
    return
  }

  data = ''
  switch (file_type) {
    case 'pdf':
      res.attachment('Note.pdf')
      res.type('pdf')
      data = text
    case 'txt':
      res.attachment('Note.txt')
      res.type('txt')
      data = text
      break
    default:
      res.send('File type not supported')
      return
  }

  res.send(data)
})

module.exports = router
