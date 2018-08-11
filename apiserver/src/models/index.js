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
models.MessageRecipent.belongsTo(models.User, {
  foreignKey: {
    name: 'recipentId',
    allowNull: true
  }
}) // adding recipent_id foreign key to a messageRecipent --link with user model

//self referencing messaging model to have parentMessageId
models.Message.belongsTo(models.Message, {
  foreignKey: 'parentMessageId',
  allowNull: true
})
//for a msgId foreign key in MessageREcipent table
models.MessageRecipent.belongsTo(models.Message, {
    foreignKey: 'msgId',
    allowNull: true
})


module.exports = models;

 