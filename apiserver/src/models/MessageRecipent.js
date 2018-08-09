/**
 * Schema for MessageRecipent.
 */
module.exports = (sequelize, DataTypes) =>
  sequelize.define('MessageRecipent', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 ,       
      primaryKey: true },
    msg_id: { type: DataTypes.UUID, allowNull: false },
    recv_id: { type: DataTypes.UUID, allowNull: false, },
  }

)
