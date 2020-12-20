var express = require('express')
const { reset } = require('nodemon')
var router = express.Router()

router.get('/', function (req, res, next) {
  url = req.protocol + '://' + req.hostname + ':' + req.app.get('port')
  res.json({
    identifier: 'com.herokuapp.sn-exporter',
    name: 'Exporter',
    content_type: 'Extension',
    url: url + '/action',
    description: 'Export notes to different file format',
    supported_types: ['Note'],
    actions: [
      {
        label: 'Upload note',
        url: url + '/upload',
        verb: 'post',
        context: 'Item',
        content_types: ['Note'],
        access_type: 'decrypted',
      },
      {
        label: 'Export to pdf',
        url: url + '/pdf',
        verb: 'show',
        context: 'Item',
        content_types: ['Note'],
        access_type: 'decrypted',
      },
    ],
  })
})

module.exports = router
