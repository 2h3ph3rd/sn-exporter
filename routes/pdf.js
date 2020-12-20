var express = require('express')
var router = express.Router()

router.post('/', function (req, res, next) {
  title = req.body.items[0].content.title
  text = req.body.items[0].content.text

  doc = '# ' + title + '\n\n' + text
  res.send()
})

module.exports = router
