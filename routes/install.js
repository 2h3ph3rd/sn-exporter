var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  actions = [
    {
      label: 'Export to pdf',
      url: 'https://sn-exporter.herokuapp.com/pdf',
      verb: 'post',
      context: 'Item',
      content_types: ['Note'],
      access_type: 'decrypted',
    },
    {
      label: 'Open Google',
      url: 'https://www.google.com',
      verb: 'show',
      context: 'Item',
      content_types: ['Note'],
      access_type: 'decrypted',
    },
  ]

  res.json({
    name: 'Exporter',
    description: 'Export current note',
    supported_types: ['Note'],
    actions: actions,
    content_type: 'Extension',
    identifier: 'sn-exporter',
  })
})

module.exports = router
