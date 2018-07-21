/**
 * Controller for user endpoints
 */
const service = require('../services/UserService')
/**
 * Create a new user
 * @param req the request
 * @param res the response
 */

async function create(req, res) {
    const result = await service.create(req.body)
    console.log(result)
    res.status(201).send(result)
}

module.exports = {
    create
}