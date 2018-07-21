/**
 * Helper methods
 */

const _ = require('lodash')
const errors = require('./errors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')

/**
 * Check if a password is correct or not against a hashed value.
 * @param {String} plainPassword the plain password to check
 * @param {String} hashedPassword the hashed password
 * @param {String} errorMessage the error message
 */
function checkPassword(plainPassword, hashedPassword, errorMessage) {
    if (!bcrypt.compareSync(plainPassword, hashedPassword)) {
        throw new errors.UnauthorizedError(errorMessage)
    }
}

/**
 * @param {String} password the plain password to be hashed
 * @return {String} the hashed password 
 */
function hashPassword(password) {
    return bcrypt.hashSync(password)
}

/**
 * Find a entity matching the given criteria
 * @param {Object} Model the model to query
 * @param {Object|String|Number} criteria the criteria (if object) or id (if string/number)
 * @return {Object} the entity
 */
function findOne(Model, criteria) {
    let query;
    if(_.isObject(criteria)) {
        query = Model.findOne(criteria)
    } else {
        query = Model.findById(criteria)
    }
    return query        
}

/**
 * Ensure entity exists for given criteria. Return error if no result
 * @param {Object} Model the model to query 
 * @param {Object|String|Number} criteria the criteria (if obj) or id (if string/number)
 * @param {String} errorMessage the error message
 * @param {Boolean} throwBadRequestIfNotFound throw bad request error if not found
 */
async function ensureExist(Model, criteria, errorMessage, throwBadRequestIfNotFound) {
    const result = await findOne(Model, criteria)
    if(!result) {
        const msg = errorMessage || `${Model.username} not found`
        
        if(throwBadRequestIfNotFound) {
            throw new errors.BadRequestError(msg)
        }
    throw new errors.NotFoundError(msg)
    }
    return result
}

/**
 * Ensure entity exists for given criteria. Return error if no result
 * @param {Object} Model the model to query 
 * @param {Object|String|Number} criteria the criteria (if obj) or id (if string/number)
 * @param {String} errorMessage the error message
 */
async function ensureNotExist(Model, criteria, errorMessage) {
    const result = await findOne(Model, criteria)
    if(result) {
        const msg = errorMessage || `${Model.name} already exists`
        throw new errors.ConflictError(msg)
    }
}

module.exports = {
    checkPassword,
    hashPassword,
    findOne,
    ensureExist,
    ensureNotExist
}

/**
  to be defined
  findOneAndUpdate,
  findOneAndRemove,
  findAndCountAll
 */