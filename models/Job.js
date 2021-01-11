const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    trim: true,
  },
  position: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  salary: {
    type: String,
    trim: true,
  },
  experience: {
    type: String,
    trim: true,
  },
  skills: {
    type: String,
    trim: true,
  },
  applyUrl: {
    type: String,
    trim: true,
  },
  source: {
    type: String,
    trim: true,
  },
  daysOpen: {
    type: Date,
  },
  closeDate: {
    type: Date,
  },
  companySize: {
    type: String,
    trim: true,
  },
  appliedCounter: {
    type: Number,
  },
})

module.exports = mongoose.model('Job', JobSchema)
