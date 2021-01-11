const router = require('express').Router()
const { getJobs, createJob } = require('../controllers/job-controller.js')

router.get('/', getJobs)
router.post('/', createJob)

module.exports = router
