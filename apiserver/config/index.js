require('dotenv').config()
config = {}

config.port = process.env.PORT  
config.db = process.env.db
config.username = process.env.user
config.password = process.env.password
console.log(config)
module.exports = config