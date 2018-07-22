const UserController = require('../controllers/UserController') 

module.exports = (app) => {

    app.post('/login', UserController.create )

}