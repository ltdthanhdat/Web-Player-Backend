import mongoose from "mongoose";
const Schema = mongoose.Schema
const playlistSchema = new Schema({
    name: { type: String, required: true },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'song'
    }],
})

const Playlist = mongoose.model('playlist', playlistSchema)

export default Playlist