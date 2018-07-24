/**
 * Controller for user endpoints
 */
const { User } = require('../models')
const service = require('../services/UserService')
const { to, TE} = require('../../common/helper')

/**
 * Create a new user
 * @param req the request
 * @param res the response
 */
async function create(req,res) {
    let err, user
    [err, user] = await to(service.create(req.body))
    if(err) TE(err.message)
    if(res.status(201)){ 
        res.send(user)}
}

/**
 * 
 * @param req the request  
 * @param res the response
 */
async function list(req,res) {
    let err, allUsers
    [err, allUsers] = await to(service.list()) 
    if(err) TE(err.message)
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