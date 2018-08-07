/**
 * Schema for User.
 */

const bcrypt = require('bcrypt') 
const { to, TE } = require('../../common/helper')
const jwt = require('jsonwebtoken')
const config = require('../../config')
module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define('User', {
    id: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4 ,       
       primaryKey: true },
    email: { type: DataTypes.STRING(245), allowNull: false, unique: 'compositeIndex'  },
    username: { type: DataTypes.STRING(245), allowNull: false, unique: 'compositeIndex'  },
    firstname: { type: DataTypes.STRING(245), allowNull: false },
    lastname: { type: DataTypes.STRING(245), allowNull: false },
    password: { type: DataTypes.STRING(1024), allowNull: true }, 
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
//    console.log(user.dataValues)
  }) 

// Sequelize Instance methods (have access to user model via this object)
    User.prototype.checkPassword = async function (pwd) {
      let err, pass 
      [err, pass] = await to(bcrypt.compare(pwd, this.password))
      if (err) TE(err)
      if (pass === false)
      TE('password is wrong')
      console.log( 'passwordmatched:',pass)
      return this 
      }

    User.prototype.tokenize = function (){
      return jwt.sign({id: this.id}, config.secret)
    }

   
  return User
}

