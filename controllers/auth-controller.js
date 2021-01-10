const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const User = require('../models/User.js')

exports.signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email })
  if (userExists)
    return res
      .status(403)
      .json({ error: 'Email is already used, please sign in!' })

  const newUser = await new User(req.body)
  await newUser.save()
  res.status(201).json({
    message: `New user ${newUser.firstName} at ${newUser.email} was successful. Please sign in!`,
  })
}

exports.signin = (req, res) => {}

exports.signout = (req, res) => {}
