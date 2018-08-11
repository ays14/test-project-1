/**
 * This service provides operations to manage Messages. 
 */
const { Message, MessageRecipent } = require('../models')
const { to, TE } = require('../../common/helper')
const _ = require('lodash')


async function createMessage(payload) {
    let err, message 
   [ err, message ]= await to(Message.create({ 
        msgBody: payload.msgBody,
        creatorId: payload.creatorId,
        parentMessageId: payload.parentMessageId,
    })
)
    return new Promise((resolve, reject)=>{
        if (err) reject(TE('message not created'))
        else resolve(message)
    })
}

async function createRecipent(payload) {
    console.log( payload)
    let err, recipent 
    [ err, recipent ] = await to(MessageRecipent.create({
        msgId: payload.msgId, // foreign key to message 
        recipentId: payload.recipentId  //payload.recipentId  //foreign key to user table
    }))
    // console.log(recipent)
    return new Promise ((resolve, reject)=>{
        if (err) reject(TE(err.message))
        else resolve(recipent)
    })
}


module.exports = {
    createMessage,
    createRecipent
}