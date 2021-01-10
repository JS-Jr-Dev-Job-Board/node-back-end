const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
    })

    console.log(
      `\n*** MondgoDB is connected: ${connect.connection.host} ***`.bgBlue.black
    )
  } catch (error) {
    console.error(colors.red(error))
    process.exit(1)
  }
}

module.exports = connectDB
