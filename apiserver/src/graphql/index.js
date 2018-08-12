const { GraphQLObjectType,
        GraphQLSchema } = require('graphql');
const { RootQuery } = require('./queries')
const { RootMutation } = require('./mutations')

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})


// const queries = require('./queries')
// const mutations = require('./mutations')
  
// module.exports = new GraphQLSchema({
//     query: new GraphQLObjectType({
//       name: 'RootQuery',
//       fields: () => queries
//     }),
//     mutation: new GraphQLObjectType({
//       name: 'RootMutation',
//       fields: () => mutations
//     })
// });

