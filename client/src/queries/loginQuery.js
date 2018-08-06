import gql from 'graphql-tag'

export default gql`
{
        user(username:"TarunGenwa"){
          firstname, lastname
        }
}
`