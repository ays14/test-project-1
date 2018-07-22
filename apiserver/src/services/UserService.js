/**
 * This service provides operations to manage User. 
 */

 const { User } = require('../models')

/**
 * 
 * @param {Object} payload its req.body 
 */
async function create(payload) {
    const user = await User.create({
        uid: payload.uid, 
        email: payload.email
    })
    return new Promise((resolve, reject) => {
        if (user) resolve (user)
        else reject ('no user exists')
    })
}

async function list() {
    const allUsers = await User.all()
    return new Promise((resolve,reject)=>{
        if (allUsers) resolve (allUsers)
        else reject ('no user exists')
    })
}

/**
 * 
 * @param {Object} payload its req.params
 */
async function search(payload) {
    const user = await User.findOne({
        where: {uid: payload.uid},
        attributes: ['uid', 'email']
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
