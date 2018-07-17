require('dotenv').config()
config = {}

config.port = process.env.PORT  
config.db = process.env.DATABASE
config.db_user = process.env.DB_USER
config.db_pass = process.env.DB_PASS


module.exports = config