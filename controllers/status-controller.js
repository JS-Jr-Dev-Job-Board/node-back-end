const router = require('express').Router()

exports.serverStatus = (req, res) => {
  const currentTime = new Date().toDateString()

  res.status(200).json({
    status: 200,
    message: `Server is live ${currentTime}`,
  })
}
