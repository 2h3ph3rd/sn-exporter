var express = require('express')
var router = express.Router()

router.post('/', function (req, res, next) {
  title = req.body.items[0].content.title
  text = req.body.items[0].content.text
  req.session.notes[req.query.item_uuid] = '# ' + title + '\n\n' + text

  res.send('Note saved')
})

module.exports = router
