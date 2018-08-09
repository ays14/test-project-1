/**
 * Initialize and export all model schemas
 */

const config = require('../../config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.db, config.username, config.password, {
  dialect: 'postgres'
})

const models = { sequelize };

//Import definitions
models.User = sequelize.import('./User')
models.Message = sequelize.import('./Message')
models.MessageRecipent = sequelize.import('./MessageRecipent')
sequelize.sync()

//Define associations
models.Message.belongsTo(models.MessageRecipent, {
  foreignKey: {
    name: 'recipent_id',
    allowNull: true
  }
}) // adding recipent_id foreign key to a message


module.exports = models;

 