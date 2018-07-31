const UserController = require('../controllers/UserController') 
const AuthenticationController = require('../controllers/AuthenticationController')
const passport = require('passport')

require('../passport')(passport)

module.exports = (app) => {

    app.get('/auth/:id',  AuthenticationController.authToken)

    app.post('/users', UserController.create )
    app.get('/users', UserController.list)
    app.get('/users/:id', UserController.search)

}

//passport.authenticate('jwt', {session: false}),