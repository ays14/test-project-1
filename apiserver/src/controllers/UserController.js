/**
 * Controller for user endpoints
 */
const { User } = require('../models')
//const service = require('../services/UserService')
/**
 * Create a new user
 * @param req the request
 * @param res the response
 */
async function create(req,res) {

    // send payload to service create as req.body
    const user = await User.create({
        uid: req.body.uid, 
        email: req.body.email
    })
    if(res.status(201)){ 
        res.send(user)}

}

module.exports = {
    create
}