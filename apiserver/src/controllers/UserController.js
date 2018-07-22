/**
 * Controller for user endpoints
 */
const { User } = require('../models')
const service = require('../services/UserService')
/**
 * Create a new user
 * @param req the request
 * @param res the response
 */
async function create(req,res) {
    const user = await service.create(req.body)
    if(res.status(201)){ 
        res.send(user)}
}

/**
 * 
 * @param req the request  
 * @param res the response
 */
async function list(req,res) {
    const allUsers = await service.list()
    if(res.status(200)) {
        res.send(allUsers)
    }
}

/**
 * 
 * @param req the request 
 * @param res the response
 */
async function search(req,res) {
    console.log(req.params)
    const user = await service.search(req.params)
    if(res.status(200)) {
        res.send(user)
    }
}
module.exports = {
    create,
    list,
    search
}