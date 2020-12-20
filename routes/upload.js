var express = require('express')
var router = express.Router()
var store = require('../store')

router.post('/', function (req, res, next) {
  // read note data
  title = req.body.items[0].content.title
  text = req.body.items[0].content.text
  item_uuid = req.body.items[0].uuid

  // save note for export
  store.notes[item_uuid] = req.body.items[0]
  store.notes[item_uuid].parsedText = '# ' + title + '\n\n' + text

  res.send('Note saved')
})

module.exports = router
