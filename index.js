import express from 'express'
import 'dotenv/config'
import connectDB from './connectDB.js'
import songRoutes from './routes/songRoutes.js'
import playlistRoutes from './routes/playlistRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000


// connect db
const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI)


// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// routing
app.use('/songs', songRoutes)
app.use('/playlists', playlistRoutes)


// port listening
app.listen(PORT)
console.log(`Listening to PORT ${PORT}`)