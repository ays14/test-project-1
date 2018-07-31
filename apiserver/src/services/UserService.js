/**
 * This service provides operations to manage User. 
 */
 const { User } = require('../models')
 const { to, TE} = require('../../common/helper')
 const _ = require('lodash')
/**
 * 
 * @param {Object} payload its req.body 
 */
async function create(payload) {
    let err, user
    [err, user] = await to(User.create({
        id: payload.id,
        firstname: payload.firstname,
        lastname: payload.lastname,
        username: payload.username,
        password: payload.password,
        age: payload.age, 
        email: payload.email
    }))
    return new Promise((resolve, reject) => {
        if (err) reject(TE(err.message))
        else resolve (user)//_.omit(user.dataValues,'password'))
    })
}

async function list() {
    let err, allUsers
    [err, allUsers] = await to(User.all()) 
    return new Promise((resolve,reject)=>{
        if (err) reject('no user exists')
        else resolve (allUsers)
    })
}

/**
 * 
 * @param {Object} payload its req.params
 */
async function search(payload) {
    const user = await User.findOne({
        where: {id: payload.id},
        attributes: ['id', 'firstname', 'age']
    })
    return new Promise((resolve,reject)=>{
        if (user) resolve (user)
        else reject ('no user exists')
    })
}

module.exports = {
    create,
    list,
    search
}
