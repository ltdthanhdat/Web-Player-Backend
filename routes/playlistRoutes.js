import Playlist from "../models/playlistModel.js"
import User from "../models/userModel.js"
import express from 'express'
const route = express.Router()

route.get('/', async (req, res) => {
    const playlists = await Playlist.find().populate('createdBy').populate('songs')
    res.send(playlists)
})

route.get('/:id', async (req, res) => {
    const id = req.params.id
    const playlists = await Playlist.findById(id).populate('createdBy').populate('songs')
    res.send(playlists)
})

export default route