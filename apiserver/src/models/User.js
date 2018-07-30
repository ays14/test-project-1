/**
 * Schema for User.
 */
module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    id: { type: DataTypes.STRING(45), primaryKey: true },
    email: { type: DataTypes.STRING(245), allowNull: true },
    username: { type: DataTypes.STRING(245), allowNull: true },
    firstname: { type: DataTypes.STRING(245), allowNull: true },
    lastname: { type: DataTypes.STRING(245), allowNull: true },
    password: { type: DataTypes.STRING(1024), allowNull: true }, 
    age: { type: DataTypes.INTEGER, allowNull: true }
  }

)
