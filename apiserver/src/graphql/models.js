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

const MessageType = new GraphQLObjectType({
    name: 'Message',
    fields: () => ({
        id: { type: GraphQLString }, //msgid
        msgBody : { type: GraphQLString },
        creatorId: { type: GraphQLString },
        
    })
})

module.exports = {
    UserType,
    MessageType
}
