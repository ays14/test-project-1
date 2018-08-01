const UserController = require('../controllers/UserController') 
const passport = require('passport')

require('../passport')(passport)

module.exports = (app) => {


    app.post('/users', UserController.create)
    app.get('/users', UserController.getAllUsers)
    app.get('/users/:id',passport.authenticate('jwt', {session: false}),  UserController.getById)
    app.delete('/users', UserController.remove)
    app.post('/login', UserController.login)

}

//passport.authenticate('jwt', {session: false}),