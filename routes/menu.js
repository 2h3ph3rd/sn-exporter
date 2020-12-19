var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // req.query.secret;
  actions = [
    {
      label: 'Export to pdf',
      url: 'https://sn-exporter.herokuapp.com/pdf',
      verb: 'export',
      context: 'post',
      content_types: ['Note'],
      access_type: 'decrypted'
    }
  ];
  res.json({
    name: 'Exporter',
    description: 'Export current note',
    supported_types: ['Note'],
    actions: actions,
    content_type: 'Extension',
    identifier: 'sn-exporter'
  });
});

module.exports = router;
