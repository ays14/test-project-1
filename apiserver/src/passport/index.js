const { ExtractJwt, Strategy } = require('passport-jwt')
const config = require('../../config')
const { User } = require('../models')
const { to } = require('../../common/helper')
const jwt = require('jsonwebtoken')
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}

const strategy = new Strategy(opts, async (payload, done)=>{
    let err, user 
    [ err, user ] = await to(User.findOne( { where: {email: payload.email } } ) )
    if (err) return done(err, false)
    if (user) return done(null, user)
    else return done(null, false)
}
)


module.exports = (passport)=> {
    
    passport.use(strategy)
}