var express = require('express')
var router = express.Router()

var actionRouter = require('./action')
var uploadRouter = require('./upload')
var exportRouter = require('./export')
var deleteRouter = require('./delete')
var pingRouter = require('./ping')
var cleanRouter = require('./clean')

router.use('/action', actionRouter)
router.use('/upload', uploadRouter)
router.use('/export', exportRouter)
router.use('/delete', deleteRouter)
router.use('/ping', pingRouter)
router.use('/clean', cleanRouter)

module.exports = router
