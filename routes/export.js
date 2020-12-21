var express = require('express')
var router = express.Router()
var store = require('../store')
var utilities = require('../utilities')

router.get('/:export_type/:item_uuid', function (req, res, next) {
  export_type = req.params.export_type
  item_uuid = req.params.item_uuid

  note = store.notes.get(item_uuid)

  if (note == null) {
    res.status(404).send('Note not found')
    return
  }

  filename = ''
  filetype = ''
  data = ''
  switch (export_type) {
    case 'pdf':
      filename = 'note.pdf'
      filetype = 'pdf'
      data = utilities.markdown.toPdf(item_uuid, note)
      break
    case 'txt':
      filename = 'note.txt'
      filetype = 'txt'
      data = note
      break
    default:
      res.send('Export type not supported')
      return
  }

  res.attachment(filename)
  res.type(filetype)
  res.send(data)
})

module.exports = router
