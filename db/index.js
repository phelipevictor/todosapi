import mongoose from 'mongoose'

const MONGO_URI = 'mongodb://localhost:27017/bookStore'

const connectDb = async () => {
try {
    const x = await mongoose.connect(MONGO_URI)
    console.log(`Connect to Mongo! DataBase: ${x.connections[0].name}`)
 } catch (error) {
    console.error(error)
 }
}

connectDb()