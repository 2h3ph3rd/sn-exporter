var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  url = req.protocol + '://' + req.hostname + ':' + req.app.get('port')
  item_uuid = req.query.item_uuid
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
        label: 'Export to text file',
        url: url + '/export/txt/' + item_uuid,
        verb: 'show',
        context: 'Item',
        content_types: ['Note'],
        access_type: 'decrypted',
      },
      {
        label: 'Export to pdf',
        url: url + '/export/pdf/' + item_uuid,
        verb: 'show',
        context: 'Item',
        content_types: ['Note'],
        access_type: 'decrypted',
      },
    ],
  })
})

module.exports = router
