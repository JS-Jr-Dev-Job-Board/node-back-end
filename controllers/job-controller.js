const Job = require('../models/Job.js')

exports.getJobs = async (req, res) => {
  const jobs = await Job.find()

  try {
    res.status(200).json({ jobs })
  } catch (error) {
    console.log(error.message)
  }
}

exports.createJob = async (req, res) => {
  const newJob = await new Job(req.body)
  await newJob.save()
  res.status(201).json({ message: 'New job created', newJob })
}
