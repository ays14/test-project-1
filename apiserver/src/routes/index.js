const UserController = require('../controllers/UserController') 

module.exports = (app) => {

    app.post('/users', UserController.create )
    app.get('/users', UserController.list)
    app.get('/users/:id', UserController.search)

}