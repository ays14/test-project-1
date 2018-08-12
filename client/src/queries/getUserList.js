import gql from 'graphql-tag'

export default gql`
    query {
        userlist {
            username
        }
    }
`