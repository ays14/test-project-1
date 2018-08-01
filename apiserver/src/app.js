/*
    Express configuration
*/

if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development"
}

const express = require('express')
const _ = require('lodash')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressGrapqhQL = require('express-graphql')
const schema = require('./graphql')
const routeHandlers = require('./routes')
const passport = require('passport')
const app = express()
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('tiny'))
app.use(cors())
app.use(passport.initialize())

app.use('/graphql', expressGrapqhQL({
    schema,
    graphiql: true
}))


routeHandlers(app)

app.use((req,res,next)=>{
    res.status(404).json({
        code: 404,
        message: 'Page not found'
    })
})

module.exports = app