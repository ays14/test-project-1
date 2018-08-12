/*
    Express configuration
*/

if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development"
}

const express = require('express')
const playground = require('gql-express-playground')
const _ = require('lodash')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const GraphQLHttp  = require('express-graphql')
const schema = require('./graphql')
const app = express()
const cors = require('cors')
const jwt = require('express-jwt')
const config = require('../config')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('tiny'))
app.use(cors())

const authMiddleware = jwt({
    secret: config.secret,
    credentialsRequired: false
})

app.use('/graphql', authMiddleware, GraphQLHttp((req)=>({
    schema,
    context: {
        user: req.user
    },
    graphiql: true
}))
)

app.use('/playground', playground.expressPlayground({endpoint: '/graphql'}))

app.use((req,res,next)=>{
    res.status(404).json({
        code: 404,
        message: 'Page not found'
    })
})

module.exports = app
