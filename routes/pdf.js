var express = require('express')
var router = express.Router()

router.post('/', function (req, res, next) {
  console.log(req.body)
  res.json({
    item: {
      uuid: '',
      content_type: '',
      content: '',
      created_at: '',
      updated_at: '',
    },
  })
})

module.exports = router
