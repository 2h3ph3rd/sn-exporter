var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(req.body);
  // res.json({
  //   name: 'Exporter',
  //   description: 'Export current note',
  //   supported_types: ['Note'],
  //   actions: actions,
  //   content_type: 'Extension',
  //   identifier: 'sn-exporter'
  // });
});

module.exports = router;
