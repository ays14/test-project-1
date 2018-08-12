/**
 * Schema for MessageRecipent.
 */
module.exports = (sequelize, DataTypes) =>
  sequelize.define('MessageRecipent', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 ,       
      primaryKey: true },
  }

)
