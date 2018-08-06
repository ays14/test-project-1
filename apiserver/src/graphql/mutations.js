const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt,
        GraphQLString, GraphQLNonNull } = graphql
const { resolver } = require('graphql-sequelize')
const { UserType } = require('./models')
const { User } = require('../models')
const { to,TE } = require('../../common/helper')
const UserService = require('../services/UserService')
const UserController = require('../controllers/UserController')

// module.exports = () => ({
//     addUser: {
//         type: UserType,
//         args: {
//             firstname: {type: new GraphQLNonNull(GraphQLString)},
//             age: { type: new GraphQLNonNull(GraphQLInt)}
//         },
//         resolve: async function(root, {firstname, age}, context, info) {
//             console.log( root, context, info )
//             let err, user
//             [err, user] = await to(User.create({firstname, age}))
//             if (err) TE('user not created')
//             return await (resolver(User)(root, {id: user.id}, context, info))  ///how to use to helper functionality ???
//         }
//     }
// })

const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstname: {type: new GraphQLNonNull(GraphQLString)},
                lastname: { type: new GraphQLNonNull(GraphQLString)},
                username: { type: new GraphQLNonNull(GraphQLString)},
                email: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)},

            },
            resolve: async function(root, {firstname, lastname, username, email, password },req) {
                let err, user
                [err, user] = await to(UserService.create({firstname, lastname, username, email, password}))
                if (err) TE('user not created')
                // console.log(user)
                // return await (resolver(User,{
                //     before: ()=>{

                //     },
                //     after:()=>{

                //     }
                // }))  ///how to use to helper functionality ???
                return user
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async function(root, {email, password}, request, context) {
               
                let err, token 
                [err, token] = await to(UserService.login(email, password))
                console.log ( token )
                console.log('request : ',request.headers)
                return token
            }
        }
    }
})

module.exports = {
    RootMutation
}
