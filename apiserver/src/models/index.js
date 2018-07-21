/**
 * Initialize and export all model schemas
 */

const config = require('../../config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.db, config.db_user, config.db_pass, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false 
  }
)

const models = { sequelize };

//Import definitions
models.User = sequelize.import('./User');

//Define associations


module.exports = models;

