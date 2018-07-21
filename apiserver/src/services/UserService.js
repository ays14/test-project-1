/**
 * This service provides operations to manage User. 
 */
const Joi = require('joi')
const _ = require('lodash')
const { Op } = require('sequelize')
const helper = require('../../common/helper')
const { User } = require('../models')

async function create(payload) {
    // validate uid & username to be unique
    // await helper.ensureNotExist(
    //     User,
    //     { where: { uid: payload.uid }, paranoid: false },
    //     `User already exists with uid=${payload.uid}`
    // )
    // await helper.ensureNotExist(
    //     User,
    //     { where: { username: payload.username }, paranoid: false },
    //     `User already exists with uid=${payload.username}`
    // )

    //Hash password
    payload.password = helper.hashPassword(payload.password)
    return await User.create(payload)
}

// create.schema = {
//     payload: Joi.object().keys({
//         uid:  Joi.string().max(45).required(),
//         email: Joi.string().max(100).required(),
//         username: Joi.string().max(100).required(),
//         password: Joi.string().max(45).required()
//     })
// }

module.exports = {
    create
}