import Song from '../models/songModel.js'
import express from 'express'
const route = express.Router()

route.get('/', async (req, res) => {
    const songs = await Song.find()
    res.send(songs)
})

route.get('/:id', async (req, res) => {
    const id = req.params.id
    const song = await Song.findById(id)
    res.send(song)
})

export default route