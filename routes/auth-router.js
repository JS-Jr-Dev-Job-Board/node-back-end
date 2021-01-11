const router = require('express').Router()
const { signin, signout, signup } = require('../controllers/auth-controller.js')

router.post('/signup', signup)

module.exports = router
