const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt,
        GraphQLString } = graphql 

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        
    }) 
})

module.exports = {
    UserType
}
