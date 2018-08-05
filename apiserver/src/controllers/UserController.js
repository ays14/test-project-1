/**
 * Controller for user endpoints
 */
const { User } = require('../models')
const service = require('../services/UserService')
const { to, TE} = require('../../common/helper')
const _ = require('lodash')
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
async function getAllUsers(req,res) {
    let err, allUsers
    [err, allUsers] = await to(service.getAllUsers()) 
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
async function getById(req,res) {
    const user = await service.getById(req.params)
    if(res.status(200)) {
        let err, token
        res.send(user)
    }
}

/**
 * 
 * @param req the request 
 * @param res the response
 */
async function update(req,res) {
    // let user = req.user
    // let data = req.body
    // user.set(data)
    // [err, user] = await to(user.save())

}

/**
 * 
 * @param req the request 
 * @param res the response
 */
async function login(req,res) { //getToken 
    // add password checking or comparison
    if  (!req.body.email || !req.body.password ) {
        TE('fields not sent')
    }
    let err, user
    [err, user] = await to(User.findOne({where: {email: req.body.email}}))
    let token 
    token = "Bearer " + user.tokenize()
    console.log (user.tokenize())
    res.send(token)
}


/**
 * 
 * @param req the request 
 * @param res the response
 */
async function remove(req,res) {
    let err, user
    [err, user] = await to(User.destroy({ where: {id: req.body.id}})) ///doesnt make much sense to store user it's returning 1

    res.send({'user deleted':user })
}

module.exports = {
    create,
    login,
    getAllUsers,
    getById,
    update,
    remove
}