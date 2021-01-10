const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const connectDB = require('./utils/connectDB.js')
connectDB()

const userRouter = require('./routes/user-router.js')
const serverRouter = require('./routes/status-router.js') // last router in order

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/api/v1/users', userRouter)

server.use('/api/v1', serverRouter)

module.exports = server
