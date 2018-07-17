/*
    Express configuration
*/


if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development"
}

const express = require('express')
// const morgan = require('morgan')
const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//app.use(morgan('dev'))


app.use((req,res,next)=>{
    res.status(404).json({
        code: 404,
        message: 'Page not found'
    })
})

module.exports = app