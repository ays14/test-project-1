import gql from 'graphql-tag'

export default gql`
mutation {
    addUser(firstname:"tarun", lastname:"genwa",
                      username:"THIKii", email:"tgenwa@iitig.ac.in",password:"tarungenwa"  
    ){
      firstname, id
    }
  }
`