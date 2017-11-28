const AuthenticationController = require('./controllers/AuthenticationController')
const AutheticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
	app.post('/register', AutheticationControllerPolicy.register, AuthenticationController.register)
	app.post('/login', AuthenticationController.login)
	app.get('/songs', SongsController.index)
	app.post('/songs', SongsController.post)
	app.get('/songs/:songId', SongsController.show)
}