const { model } = require('../models/User')

const router = require('express').Router()
const { serverStatus } = require('../controllers/status-controller.js')

router.get('/', serverStatus)

module.exports = router
