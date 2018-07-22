require('dotenv').config()
config = {}

config.port = process.env.PORT  
config.dbUrl = process.env.DBURL

module.exports = config