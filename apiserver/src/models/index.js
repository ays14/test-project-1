/**
 * Initialize and export all model schemas
 */

const config = require('../../config')
const Sequelize = require('sequelize')


const sequelize = new Sequelize(config.dbUrl, {
  logging: false,
  operatorsAliases: false,
  dialectOptions: { encrypt: true }
});

const models = { sequelize };

//Import definitions
models.User = sequelize.import('./User')
models.Message = sequelize.import('./Message')
models.MessageRecipent = sequelize.import('./MessageRecipent')
sequelize.sync({force:true})

//Define associations


module.exports = models;

