/**
 * Schema for MessageRecipent.
 */
module.exports = (sequelize, DataTypes) =>
  sequelize.define('MessageRecipent', {
    uid: { type: DataTypes.STRING(45), primaryKey: true },
    email: { type: DataTypes.STRING(245), allowNull: true },
    username: { type: DataTypes.STRING(245), allowNull: true, unique: true },
    password: { type: DataTypes.STRING(1024), allowNull: true } 
  }

)
