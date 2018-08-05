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
        email: payload.email
    }))
    return new Promise((resolve, reject) => {
        if (err) reject(TE(err.message))
        else resolve (user)//_.omit(user.dataValues,'password'))
    })
}

async function getAllUsers() {
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
async function getById(payload) {
    const user = await User.findOne({
        where: {id: payload.id},
        attributes: ['id', 'firstname', 'age']
    })
    return new Promise((resolve,reject)=>{
        if (user) resolve (user)
        else reject ('no user exists')
    })
}

async function login(email, password) {
    console.log(email,password)
    if  (!email || !password ) {
        TE('fields not sent')
    }
    let err, user
    [err, user] = await to(User.findOne({where: {email: email}}))
    let pass
    pass = await user.checkPassword(password)
    let token 
    if ( pass ){
        
        token = "Bearer " + user.tokenize()    
    }
    // console.log(token)
    // if (!pass) return 'err'
    return new Promise ( (resolve,reject)=> {
//        if(!pass) reject('password doesnnot match')
        if(token)
        resolve (token)
        else reject('err')
    })
}



module.exports = {
    create,
    getAllUsers,
    getById,
    login
}
