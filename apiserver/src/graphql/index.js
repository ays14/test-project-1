const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt,
         GraphQLString, GraphQLSchema } = graphql
const { resolver } = require('graphql-sequelize')

const { User } = require('../models')
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstname: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve: resolver(User)
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})