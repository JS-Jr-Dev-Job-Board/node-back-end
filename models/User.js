const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const UserSchema = new mongoose.Schema(
  {
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
    password: {
      type: String,
      required: 'Password is required',
      trim: true,
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
    jobs: [],
    jobsFav: [],
    jobsNope: [],
    role: [],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', UserSchema)
