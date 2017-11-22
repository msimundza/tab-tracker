const AuthenticationController = require('./controllers/AuthenticationController')
const AutheticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
	app.post('/register', AutheticationControllerPolicy.register, AuthenticationController.register)
	app.post('/login', AuthenticationController.login)
}