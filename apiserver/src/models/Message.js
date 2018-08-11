/**
 * Schema for Message.
 */
module.exports = (sequelize, DataTypes) =>
  sequelize.define('Message', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 ,       
      primaryKey: true },
    msgBody : { type: DataTypes.STRING(2048), allowNull: false },
    creatorId: { type: DataTypes.UUID, allowNull: false },
}
)
