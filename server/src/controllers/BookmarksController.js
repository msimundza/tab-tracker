const {
	Bookmark,
	Song,
	User
} = require('../models')
const _ = require('lodash')

module.exports = {
	async index (req, res) {
		try {
			const userId = req.user.id
			const {
				songId
			} = req.query
			const where = {
				UserId: userId
			}
			if (songId) {
				where.SongId = songId
			}
			const bookmark = await Bookmark.findAll({
				where,
				include: [{
					model: Song
				}]
			})
				.map(bookmark => bookmark.toJSON())
				.map(bookmark => Object.assign({},
					bookmark.Song,
					bookmark
				))
			res.send(bookmark)
		} catch (err) {
			res.status(500).send({
				error: 'an error has occured trying to fetch the bookmark'
			})
		}
	},
	async post (req, res) {
		try {
			const userId = req.user.id
			const {
				songId
			} = req.body
			const bookmark = await Bookmark.findOne({
				where: {
					SongId: songId,
					UserId: userId
				}
			})
			if (bookmark) {
				return res.status(400).send({
					error: 'you already have this set as a bookmark'
				})
			}
			const newBookmark = await Bookmark.create(req.body)
			const song = await Song.findById(songId)
			const user = await User.findById(userId)
			await newBookmark.setUser(user)
			await newBookmark.setSong(song)
			res.send(newBookmark)
		} catch (err) {
			console.log(err)
			res.status(500).send({
				error: 'an error has occured trying to create the bookmark'
			})
		}
	},
	async remove (req, res) {
		try {
			const userId = req.user.id
			const {
				bookmarkId
			} = req.params
			const bookmark = await Bookmark.findOne({
				where: {
					id: bookmarkId,
					UserId: userId
				}
			})
			console.log(bookmark)
			if (!bookmark) {
				return res.status(403).send({
					error: 'you do not have access to this bookmark'
				})
			}
			await bookmark.destroy()
			res.send(bookmark)
		} catch (err) {
			res.status(500).send({
				error: 'an error has occured trying to delete the bookmark'
			})
		}
	}
}