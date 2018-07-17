/**
 * Initialize and export all model schemas
 */

const config = require('../../config')
const Sequelize = require('sequelize')

const Sequelize = new Sequelize(config.db, config.db_user, config.db_pass, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  }
)

const models = { sequelize };

//Import definitions
models.User = sequelize.import('./User');

//Define associations

module.exports = models;


  