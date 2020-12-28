var express = require('express')
var router = express.Router()

var { StatusCodes } = require('http-status-codes')

var store = require('../store')
var utilities = require('../utilities')

router.get('/', function (req, res, next) {
  export_type = req.query.to
  item_uuid = req.query.item_uuid

  note = store.notes.get(item_uuid)

  if (note == null) {
    res.status(StatusCodes.NOT_FOUND).send({ error: 'Note not found' })
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
      res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .send({ error: 'Export type not supported' })
      return
  }

  res.attachment(filename)
  res.type(filetype)
  res.send(data)
})

module.exports = router
