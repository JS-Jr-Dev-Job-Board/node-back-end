const router = require('express').Router()
const User = require('../models/User.js')

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('firstName email')
  try {
    return res.status(200).json({ users })
  } catch (error) {
    console.error(error)
  }
}
