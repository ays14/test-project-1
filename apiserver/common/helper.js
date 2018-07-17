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

module.exports = {
    checkPassword,
    hashPassword,
    findOne
}

/**
  to be defined
  ensureExist,
  ensureNotExist,
  findOneAndUpdate,
  findOneAndRemove,
  findAndCountAll
 */