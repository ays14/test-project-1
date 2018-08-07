import gql from 'graphql-tag'

export default gql`
mutation SignUp($firstname: String!, $lastname: String!, $username:String!, $email: String!, $password:String!){
    addUser(firstname:$firstname, lastname:$lastname, username:$username, email:$email ,password:$password  
    )
  }
`