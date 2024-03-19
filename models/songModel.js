import mongoose from "mongoose";
const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    audioPath: { type: String, required: true }
})

const Song = mongoose.model('song', songSchema)

export default Song