import gql from 'graphql-tag'

export default gql`
mutation {
     getCurrentUser(dummyArg :""){
      username
    }
}
`
