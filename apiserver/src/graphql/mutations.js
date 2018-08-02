const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt,
        GraphQLString, GraphQLNonNull } = graphql
const { resolver } = require('graphql-sequelize')
const { UserType } = require('./models')
const { User } = require('../models')
const { to,TE } = require('../../common/helper')

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
                age: { type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: async function(root, {firstname, age}, context, info) {
                console.log( root, context, info )
                let err, user
                [err, user] = await to(User.create({firstname, age}))
                if (err) TE('user not created')
                return await (resolver(User)(root, {id: user.id}, context, info))  ///how to use to helper functionality ???
            }
        }
    }
})

module.exports = {
    RootMutation
}