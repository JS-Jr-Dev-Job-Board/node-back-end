const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: 'First name is required',
    trim: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  title: {
    type: String,
  },
  email: {
    type: String,
    required: 'Email is required',
    trim: true,
  },
  hashedPassword: {
    type: String,
    required: 'Password is required',
    trim: true,
  },
  salt: {
    type: String,
  },
  dob: {
    type: String,
  },
  phone: {
    type: String,
  },
  street: {
    type: String,
  },
  street2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
  // jobs: [],
  // jobsFav: [],
  // jobsNope: [],
  // role: [],
})

module.exports = mongoose.model('User', UserSchema)
