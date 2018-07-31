const jwt = require('jsonwebtoken')

/**
 * Auth Token Signing 
 * @param {Object} req request object
 * @param {Object} res response object 
 */
function authToken(req,res){
    const token = jwt.sign({id: req.params.id}, 'PrivateToken')
    res.send(token)
}

module.exports = {
    authToken
}