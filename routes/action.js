var express = require('express')
var router = express.Router()

var store = require('../store')

router.get('/', function (req, res, next) {
  url = req.protocol + '://' + req.hostname + ':' + req.app.get('port')
  item_uuid = req.query.item_uuid

  actions = []

  if (store.notes.present(item_uuid)) {
    actions = [
      {
        label: 'Export to text file',
        url: url + '/export/txt/' + item_uuid,
        verb: 'show',
        context: 'Item',
        content_types: ['Note'],
      },
      {
        label: 'Export to pdf',
        url: url + '/export/pdf/' + item_uuid,
        verb: 'show',
        context: 'Item',
        content_types: ['Note'],
      },
      {
        label: 'Update note on server',
        url: url + '/upload',
        verb: 'post',
        context: 'Item',
        content_types: ['Note'],
        access_type: 'decrypted',
      },
      {
        label: 'Delete note from server',
        url: url + '/delete/' + item_uuid,
        verb: 'post',
        context: 'Item',
        content_types: ['Note'],
      },
    ]
  } else {
    actions = [
      {
        label: 'Upload note',
        url: url + '/upload',
        verb: 'post',
        context: 'Item',
        content_types: ['Note'],
        access_type: 'decrypted',
      },
    ]
  }
  res.json({
    identifier: 'com.herokuapp.sn-exporter',
    name: 'Exporter',
    content_type: 'Extension',
    url: url + '/action',
    description: 'Export notes into different file types',
    supported_types: ['Note'],
    actions: actions,
  })
})

module.exports = router
