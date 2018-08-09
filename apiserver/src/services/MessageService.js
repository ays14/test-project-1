/**
 * This service provides operations to manage Messages. 
 */
const { Message } = require('../models')
const { to, TE } = require('../../common/helper')
const _ = require('lodash')


async function create(payload) {
    let err, message 
    [ err, message ] = await to(Message.create({
        msgBody: payload.msgBody,
        creatorId: payload.creatorId
    }))
    // console.log(message)
    return new Promise((resolve, reject)=>{
        if (err) reject(TE(err.message))
        else resolve(message)
    })
}

module.exports = {
create
}