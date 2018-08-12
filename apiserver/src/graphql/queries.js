const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt, GraphQLList,
        GraphQLString } = graphql
const { resolver } = require('graphql-sequelize')
const { UserType }= require('./models')
const { User } = require('../models')
const { UserService } = require('../services/UserService')
const { to, TE } = require('../../common/helper')
// module.exports = () => ({
//     user: {
//         type: UserType,
//         args: { id: { type: GraphQLString } },
//         resolve: resolver(User)
//     }
// })

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        user: {
            type: UserType,
            args: { username: { type: GraphQLString } },
            resolve: resolver(User)
        },

        userlist : {
            type: new GraphQLList(UserType),
            // args: { id: {type: GraphQLString} } ,
            resolve: async (root, context) => {
                let users, err
                console.log( context.user )
                users = await User.all()
                return users 
            }
        },
        getcurrentUser: {
            type: UserType,
            resolve: async (root, args,context) => {
                console.log(context.user)
                let user 
                user = await User.findById(context.user.id)
                console.log(user.id)
                return user
            }
        }

   } 
})

module.exports = { RootQuery }
