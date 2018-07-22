const UserController = require('../controllers/UserController') 

module.exports = (app) => {

    app.post('/login', UserController.create )
    app.get('/users', UserController.list)
    app.get('/users/:uid', UserController.search)

}