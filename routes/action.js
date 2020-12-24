var express = require('express')
var router = express.Router()

var store = require('../store')

router.get('/', function (req, res, next) {
  if (req.hostname === 'localhost') {
    base_url = 'http://localhost:3000'
  } else {
    base_url = 'https://sn-exporter.herokuapp.com'
  }
  item_uuid = req.query.item_uuid

  actions = []

  if (store.notes.present(item_uuid)) {
    actions = [
      {
        label: 'Export to text file',
        url: base_url + '/export/txt/' + item_uuid,
        verb: 'show',
        context: 'Item',
        content_types: ['Note'],
      },
      {
        label: 'Export to pdf',
        url: base_url + '/export/pdf/' + item_uuid,
        verb: 'show',
        context: 'Item',
        content_types: ['Note'],
      },
      {
        label: 'Update note on server',
        url: base_url + '/upload',
        verb: 'post',
        context: 'Item',
        content_types: ['Note'],
        access_type: 'decrypted',
      },
      {
        label: 'Delete note from server',
        url: base_url + '/delete/' + item_uuid,
        verb: 'post',
        context: 'Item',
        content_types: ['Note'],
      },
    ]
  } else {
    actions = [
      {
        label: 'Upload note',
        url: base_url + '/upload',
        verb: 'post',
        context: 'Item',
        content_types: ['Note'],
        access_type: 'decrypted',
      },
    ]
  }
  res.json({
    identifier: 'com.herokuapp.sn-exporter',
    name: req.hostname === 'localhost' ? 'Exporter (localhost)' : 'Exporter',
    content_type: 'Extension',
    url: base_url + '/action',
    description: 'Export notes into different file types',
    supported_types: ['Note'],
    actions: actions,
  })
})

module.exports = router
