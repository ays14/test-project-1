/**
 * Schema for User.
 */

const bcrypt = require('bcrypt') 
const { to, TE } = require('../../common/helper')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define('User', {
    id: { type: DataTypes.STRING(45), primaryKey: true },
    email: { type: DataTypes.STRING(245), allowNull: true },
    username: { type: DataTypes.STRING(245), allowNull: true },
    firstname: { type: DataTypes.STRING(245), allowNull: true },
    lastname: { type: DataTypes.STRING(245), allowNull: true },
    password: { type: DataTypes.STRING(1024), allowNull: true }, 
    age: { type: DataTypes.INTEGER, allowNull: true }
  })

// Sequelize hooks 
  User.beforeSave( async (user, options) => {
    let err
    let salt, hash
    [err, salt] = await to(bcrypt.genSalt(10))
    if(err) TE(err.message)
    let errr
    [errr, hash] = await to(bcrypt.hash(user.password, salt))
    if(err) TE(err.message)
    user.password = hash
    console.log(user.dataValues)
  }) 

// Sequelize Instance methods (have access to user model via this object)
    User.prototype.checkPassword = async function (pwd) {
      let err, pass 
      [err, pass] = await to(bcrypt.compare(this.password, pwd))
      if (err) TE(err)
      console.log(pass)
      return this 
      }

    User.prototype.tokenize = async function (){
      return jwt.sign({id: this.id})
    }

  return User
}

