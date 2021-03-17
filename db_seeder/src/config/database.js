const { connect } = require('mongoose')
const config = require('./config')

const connectDB = async () => {
  try {
    const mongoURI = config.mongoose.uri
    const options = config.mongoose.options
    await connect(mongoURI, options)
    console.log('MongoDB Connected...')
    console.log('Press CTRL-C to stop\n')
  } catch (err) {
    // console.error(err.message);
    console.log(
      `MongoDB connection error. Please make sure MongoDB is running. ${err}`
    )
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
