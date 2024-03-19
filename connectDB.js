import mongoose from 'mongoose'

const connectDB = (URI) => {
    mongoose.connect(URI).then(() => console.log("Database connected"))
}
export default connectDB
