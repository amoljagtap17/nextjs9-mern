import mongoose from 'mongoose'
const connection = {}

const connectDb = async () => {
  if (connection.isConnected) {
    // Use existing database connection
    console.log('Using existing connection!!')
    return
  }

  // Use new database connection
  // https://mongoosejs.com/docs/deprecations
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  console.log('DB connected!!')

  connection.isConnected = db.connections[0].readyState
}

export { connectDb }
