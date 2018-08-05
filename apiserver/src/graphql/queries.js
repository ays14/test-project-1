const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt,
        GraphQLString } = graphql
const { resolver } = require('graphql-sequelize')
const { UserType }= require('./models')
const { User } = require('../models')

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
        }
   } 
})

module.exports = { RootQuery }
